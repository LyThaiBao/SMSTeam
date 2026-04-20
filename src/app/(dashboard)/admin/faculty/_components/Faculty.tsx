"use client";
import { DepartmentTypeDetail } from "@/types/depart";
import { usePathname, useRouter } from "next/navigation";

interface FacultyProp {
  faculty: DepartmentTypeDetail;
}

export default function Faculty({ faculty }: FacultyProp) {
  const router = useRouter();
  const currentPath = usePathname();

  async function onDetail(id: string | number) {
    router.push(`${currentPath}/${id}`);
  }

  return (
    <section className="flex flex-col h-full bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
      {/* Header Area - Icon/Code */}
      <div className="relative flex justify-center items-center h-32 bg-slate-50 rounded-2xl mb-6">
        <span className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white font-bold text-xl rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
          {faculty.code.substring(0, 9)}
        </span>
      </div>

      {/* Content Area */}
      <div className="flex-1 mb-6">
        <h3 className="text-lg font-bold text-slate-800 line-clamp-2 leading-snug">
          {faculty.name}
        </h3>
        
        <div className="flex items-center gap-2 mt-3">
          <span className="text-sm text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded">
            {faculty.code}
          </span>
          <span
            className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
              faculty.status > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {faculty.status > 0 ? "Active" : "Inactive"}
          </span>
        </div>
      </div>

      {/* Footer Area */}
      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
        <span className="text-xs text-slate-400 font-mono">ID: {faculty.id}</span>
        <button
          type="button"
          onClick={() => onDetail(faculty.id)}
          className="bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold py-2.5 px-5 rounded-xl transition-colors duration-200"
        >
          Xem chi tiết
        </button>
      </div>
    </section>
  );
}