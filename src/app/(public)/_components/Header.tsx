import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="w-full bg-white border-b border-slate-100 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      {/* Logo/Brand */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/imgs/stu.png" alt="Logo" width={40} height={40} />
        <span className="text-xl font-bold text-slate-800">EduSystem</span>
      </Link>

      {/* Nav Actions */}
      <div className="flex items-center gap-4">
        <Link 
          href="/login" 
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-blue-200 active:scale-95"
        >
          Đăng Nhập
        </Link>
      </div>
    </nav>
  );
}