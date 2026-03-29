"use client";
import { DepartmentTypeDetail } from "@/types/depart";
import { usePathname, useRouter } from "next/navigation";

interface FacultyProp {
  faculty: DepartmentTypeDetail;
}
export default function Faculty({ faculty }: FacultyProp) {
  const router = useRouter();
  const currentPath = usePathname();
  console.log(currentPath);
  async function onDetail(id: string | number) {
    router.push(`${currentPath}/${id}`);
  }
  return (
    <section className=" px-2 py-7 rounded-2xl group overflow-hidden flex flex-col h-74 gap-6 text-black bg-[#EAF2FB]  ">
      <div className="bg-[#EAF2FB] h-[80%] relative -mx-2 -my-5 py-5">
        <span className="bg-[#3c85cf] py-6 my-4 text-white font-bold px-5 rounded-[50%] absolute left-[50%]  top-[50%] -translate-x-[50%] -translate-y-[50%] ">
          {faculty.code}
        </span>
      </div>
      <div className="py-5 border-b border-[#ddd]">
        <div className="flex justify-between ">
          <h3 className="text-xl font-bold text-wrap">{faculty.name}</h3>
        </div>
        <span className="mt-2 text-[#6B8099]">{faculty.code}</span>
        <span className="px-2 py-1/2 border ml-5 border-blue-300 bg-blue-200 text-blue-500 rounded-2xl">
          {faculty.status > 0 ? `Active` : `Unactive`}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span>ID#{faculty.id}</span>
        <button
          type="button"
          onClick={() => onDetail(faculty.id)}
          className="transition-all bg-black cursor-pointer p-4 font-bold text-white rounded-2xl"
        >
          Xem Chi Tiet
        </button>
      </div>
    </section>
  );
}
