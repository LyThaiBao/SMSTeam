import { Users, UserCog, GraduationCap } from "lucide-react";

export default function CardInfo() {
  return (
    <section className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Tổng quan */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Tổng thành viên</p>
            <h3 className="text-3xl font-bold text-slate-800">30</h3>
          </div>
        </div>

        {/* Chi tiết */}
        <div className="flex gap-4 w-full md:w-auto">
          <div className="flex-1 md:flex-none flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-2xl border border-slate-100">
            <UserCog size={20} className="text-slate-400" />
            <div>
              <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Giảng viên</p>
              <p className="font-bold text-slate-700">14</p>
            </div>
          </div>
          
          <div className="flex-1 md:flex-none flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-2xl border border-slate-100">
            <GraduationCap size={20} className="text-slate-400" />
            <div>
              <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Học viên</p>
              <p className="font-bold text-slate-700">16</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}