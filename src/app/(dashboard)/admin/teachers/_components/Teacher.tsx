"use client";
import { deleteTeacher } from "@/services/people";
import { TeacherType } from "@/types/people";
import { usePathname, useRouter } from "next/navigation";

export default function Teacher({ name, faculty, id }: TeacherType) {
  console.log(">> Username :", name);
  const router = useRouter();
  const currentPath = usePathname();
  console.info("Current Path>> " + currentPath);
  async function onDelete(id: string | number) {
    const response = await deleteTeacher(id);
    console.log("Da xoa sinh vien" + id);
  }
  function onDetail(id: string | number) {
    router.push(`${currentPath}/${id}`);
  }
  return (
    <li className="bg-[#5fd1ed] p-4 mb-3 flex flex-col gap-3 md:flex-row justify-between items-center rounded-2xl">
      <div className="text-xl font-bold">{name}</div>
      <div className="text-xl font-bold">{faculty.name}</div>
      <div className="flex justify-between items-center w-full md:max-w-[45%]">
        <button
          onClick={() => onDetail(id)}
          className="cursor-pointer bg-blue-500 rounded-2xl py-4 px-5"
        >
          Xem Chi Tiết
        </button>
        <button
          className="cursor-pointer bg-red-500 py-4 px-5 rounded-2xl"
          onClick={() => onDelete(id)}
        >
          Xóa
        </button>
      </div>
    </li>
  );
}
