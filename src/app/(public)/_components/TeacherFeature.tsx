"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TeacherFeature() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <section className="text-black ">
      <h2 className="text-xl font-bold py-2">Chức Năng Giảng Viên</h2>
      <ul className="grid gap-2 max-w-[90%] my-0 mx-auto md:grid-cols-2 md:gap-4">
        <li data-aos="fade-up">
          <div className="border-1 rounded-2xl flex items-center justify-between p-2 hover:scale-105 transition-transform duration-500 ease-out ">
            <Image
              src={"/imgs/stu.png"}
              width={70}
              height={70}
              alt="feature"
            ></Image>
            <p>Theo dõi quá trình, kết quả học tập</p>
          </div>
        </li>
        <li data-aos="fade-up">
          <div className="border-1 rounded-2xl flex items-center justify-between p-2 hover:scale-105 transition-transform duration-500 ease-out ">
            <Image
              src={"/imgs/stu.png"}
              width={70}
              height={70}
              alt="feature"
            ></Image>
            <p>Theo dõi quá trình, kết quả học tập</p>
          </div>
        </li>
        <li data-aos="fade-up">
          <div className="border-1 rounded-2xl flex items-center justify-between p-2 hover:scale-105 transition-transform duration-500 ease-out ">
            <Image
              src={"/imgs/stu.png"}
              width={70}
              height={70}
              alt="feature"
            ></Image>
            <p>Theo dõi quá trình, kết quả học tập</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
