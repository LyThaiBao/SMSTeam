"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  LayoutDashboard, 
  GraduationCap, 
  Building2, 
  Users, 
  BookOpenText, 
  LibraryBig 
} from "lucide-react";
import { usePathname } from "next/navigation";

interface MenuType {
  onClose: () => void;
}

export default function MenuAdmin({ onClose }: MenuType) {
  const currentPath = usePathname();

  const options = [
    { title: "Tổng Quan", href: "/admin", icon: LayoutDashboard },
    { title: "Giảng Viên", href: "/admin/teachers", icon: GraduationCap },
    { title: "Khoa/Trường", href: "/admin/faculty", icon: Building2 },
    { title: "Sinh Viên", href: "/admin/students", icon: Users },
    { title: "Lớp Chuyên Ngành", href: "/admin/mainClass", icon: BookOpenText },
    { title: "Lớp Học Phần", href: "/admin/subClass", icon: LibraryBig },
  ];

  return (
    <section className="bg-gray-200 text-white flex flex-col h-full gap-5 px-4 py-6">
      <figure className="flex justify-between items-center border-b border-slate-700 pb-3">
        <Image src={"/imgs/stu.png"} alt="logo" width={50} height={50} className="rounded-full" />
        <button onClick={onClose} className="text-white hover:text-red-400 md:hidden">
          ✕
        </button>
      </figure>

      <ul className="flex flex-col gap-2">
        {options.map((op) => {
          const Icon = op.icon;
          const isActive = currentPath === op.href;
          
          return (
            <li key={op.href}>
              <Link 
                href={op.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                  isActive ? "bg-blue-600 text-white font-bold" : "text-slate-400 hover:bg-slate-800"
                }`}
              >
                <Icon size={20} />
                {op.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}