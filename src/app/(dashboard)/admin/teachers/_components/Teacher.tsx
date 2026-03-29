"use client";
import { deleteTeacher } from "@/services/people";
import { TeacherType } from "@/types/people";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Teacher({ name, faculty, id }: TeacherType) {
  console.log(">> Username :", name);
  const router = useRouter();
  const currentPath = usePathname();
  console.info("Current Path>> " + currentPath);
  async function onDelete(id: string | number) {
    const response = deleteTeacher(id);
    toast.promise(response, {
      loading: "Đang Xóa...",
      success: "Xóa Thành Công",
      error: (err) => <b>{err.message}</b>,
    });
    try {
      await response;
      router.refresh();
    } catch (err) {
      console.log("Error");
    }

    console.log("Da xoa sinh vien" + id);
    router.refresh();
  }
  function onDetail(id: string | number) {
    router.push(`${currentPath}/${id}`);
  }
  return (
    <li className="bg-[#eef1f2e1] p-4 mb-3 flex flex-col gap-3 md:flex-row justify-between items-center rounded-2xl shadow-sm border border-slate-100 text-black font-thin transition">
      <div className="text-xl font-medium">{name}</div>
      <div className="text-xl font-medium border border-blue-200 bg-blue-100  px-3 rounded-2xl">
        {faculty.name}
      </div>
      <div className="flex justify-between items-center w-full md:max-w-[45%]">
        <button
          onClick={() => onDetail(id)}
          className="cursor-pointer bg-[#333] text-white border rounded-2xl py-4 px-5 hover:border-blue-500"
        >
          Xem Chi Tiết
        </button>
        <button
          className="cursor-pointer bg-[#333] py-4 px-5 rounded-2xl text-white"
          onClick={() => onDelete(id)}
        >
          Xóa
        </button>
      </div>
    </li>
  );
}
