"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import { BookOpen, CalendarDays, Award } from "lucide-react"; // Dùng icon thay vì ảnh nếu cần

export default function StudentFeature() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const features = [
    { title: "Theo dõi kết quả học tập", img: "/imgs/trackStudy.jpg" },
    { title: "Quản lý lịch học cá nhân", img: "/imgs/stu.png" },
    { title: "Tra cứu thông tin học phí", img: "/imgs/stu.png" },
  ];

  return (
    <section className="w-full py-10">
      <h2 className="text-2xl font-bold text-slate-800 mb-8 px-4">
        Chức năng dành cho giảng viên
      </h2>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {features.map((f, index) => (
          <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="group bg-white border border-slate-100 rounded-3xl p-5 flex items-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              {/* Hình ảnh/Icon */}
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                <Image
                  src={f.img}
                  fill
                  alt="feature"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Nội dung */}
              <p className="font-semibold text-slate-700 leading-snug">
                {f.title}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}