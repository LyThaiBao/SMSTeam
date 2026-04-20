export default function Banner() {
  return (
    <section className="bg-white py-12 px-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden mb-8">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50" />
      
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Quản lý toàn diện dữ liệu <br />
          <span className="text-blue-600">trong một hệ thống.</span>
        </h1>
        
        <p className="mt-4 text-lg text-slate-500 max-w-2xl font-medium">
          Nền tảng kết nối thông minh giữa nhà trường, giảng viên và sinh viên. 
          Quản trị mọi hoạt động học tập chỉ với một lần truy cập.
        </p>
      </div>
    </section>
  );
}