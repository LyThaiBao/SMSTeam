"use client";

import { getDepartments } from "@/services/department";
import { DepartmentType } from "@/types/depart";
import { useEffect, useState } from "react";

export default function TeacherFilter() {
  // Khởi tạo mảng rỗng để render ban đầu không bị lỗi map
  const [departs, setDeparts] = useState<DepartmentType[]>([]);

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
  console.log(departs);
  return (
    <form className="p-4">
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">Lọc Theo Khoa</label>
        <select
          className="border border-gray-300 p-2 rounded-lg outline-none focus:border-blue-500 transition-all"
          name="departmentId"
        >
          <option value="">------ Tất Cả ------</option>
          {departs?.map((d) => (
            <option key={d.id} value={d.id}>
              {" "}
              {d.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
