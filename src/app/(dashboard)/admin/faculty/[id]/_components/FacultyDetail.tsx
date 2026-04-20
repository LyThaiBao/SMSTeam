"use client";
import { DepartmentTypeDetail } from "@/types/depart";
import CardInfo from "./CardInfo";

interface FacultyProp {
  faculty: DepartmentTypeDetail;
}

export default function FacultyDetail({ faculty }: FacultyProp) {
  return (
    <div className="w-full">
      <div className="w-full h-[350px] relative rounded-3xl overflow-hidden shadow-lg">
        {/* Ảnh nền */}
        <img 
          src={faculty.img || "/placeholder-faculty.jpg"} 
          alt={faculty.name} 
          className="w-full h-full object-cover" 
        />
        
        {/* Lớp phủ Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

        {/* Nội dung thông tin */}
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <h2 className="font-extrabold text-4xl text-white mb-4 tracking-tight">
            {faculty.name}
          </h2>
          
          <ul className="flex gap-4 items-center text-sm font-medium">
            <li className="text-blue-200">{faculty.code}</li>
            <li className="bg-slate-500 w-1.5 h-1.5 rounded-full"></li>
            <li className="text-slate-300 font-mono">ID: {faculty.id}</li>
            <li className="bg-slate-500 w-1.5 h-1.5 rounded-full"></li>
            <li>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  faculty.status >= 1 
                    ? "bg-green-500/20 border-green-500 text-green-300" 
                    : "bg-red-500/20 border-red-500 text-red-300"
                }`}
              >
                {faculty.status >= 1 ? "ACTIVE" : "INACTIVE"}
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Nơi bạn có thể thêm mô tả chi tiết phía dưới */}
      <div className="mt-8 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Thông tin chi tiết</h3>
        <p className="text-slate-600 leading-relaxed">
          {/* Bạn có thể thêm các trường dữ liệu khác ở đây */}
        <CardInfo/>
        </p>
      </div>
    </div>
  );
}