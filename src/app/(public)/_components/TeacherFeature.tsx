"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

useEffect(() => {
  AOS.init({ duration: 800 });
}, []);

export default function TeacherFeature() {
  return (
    <section className="text-black ">
      <h2 className="text-xl font-bold py-2">Chức Năng Giảng Viên</h2>
      <ul className="grid gap-2 max-w-[90%] my-0 mx-auto ">
        <li className="border-1 rounded-2xl flex items-center justify-between p-2 hover:scale-105 transition-all">
          <Image
            src={"/imgs/stu.png"}
            width={70}
            height={70}
            alt="feature"
          ></Image>
          <p>Theo dõi quá trình, kết quả học tập</p>
        </li>
        <li className="border-1 rounded-2xl flex items-center justify-between p-2 hover:scale-105 transition-all">
          <Image
            src={"/imgs/stu.png"}
            width={70}
            height={70}
            alt="feature"
          ></Image>
          <p>Theo dõi quá trình, kết quả học tập</p>
        </li>
        <li className="border-1 rounded-2xl flex items-center justify-between p-2 hover:scale-105 transition-all ">
          <Image
            src={"/imgs/stu.png"}
            width={70}
            height={70}
            alt="feature"
          ></Image>
          <p>Theo dõi quá trình, kết quả học tập</p>
        </li>
      </ul>
    </section>
  );
}
