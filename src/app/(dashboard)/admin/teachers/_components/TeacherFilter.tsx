"use client";

import { getDepartments } from "@/services/department";
import { DepartmentType } from "@/types/depart";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

export default function TeacherFilter() {
  // Khởi tạo mảng rỗng để render ban đầu không bị lỗi map
  const [departs, setDeparts] = useState<DepartmentType[]>([]);
  const searchParam = useSearchParams();
  const currentDapt = searchParam.get("departmentId") || "";
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        const data = await getDepartments();
        console.log(data);
        setDeparts(data); // Đổi tên biến tránh trùng với state
      } catch (error) {
        console.error("Lỗi khi lấy danh sách khoa:", error);
      }
    })();
  }, []);

  function onFilter(name: string, value: string) {
    const params = new URLSearchParams(searchParam);
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    router.push(`?${params.toString()}`);
  }
  return (
    <form className="p-4 pl-0 md:max-w-[60%]">
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">Lọc Theo Khoa</label>
        <select
          className="border text-black border-gray-300  p-2 rounded-lg outline-none focus:border-blue-500 transition-all"
          name="departmentId"
          value={searchParam.get("departmentId")?.toString() || ""}
          onChange={(e) => onFilter("departmentId", e.target.value)}
        >
          <option value="">------ Tất Cả ------</option>
          {departs?.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
