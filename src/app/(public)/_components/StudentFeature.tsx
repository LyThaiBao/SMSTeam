"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function StudentFeature() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <section className="text-black w-[100%] ">
      <h2 className="text-xl font-bold py-2 text-blue-500">
        Chức Năng Sinh Viên
      </h2>
      <ul className="grid gap-2 max-w-[90%] my-0 mx-auto md:grid-cols-2  lg:grid-cols-3 md:gap-4 ">
        <li data-aos="fade-right">
          <div className="border-2 border-blue-800 rounded-2xl flex items-center justify-between hover:scale-105 transition-all ">
            <Image
              src={"/imgs/trackStudy.jpg"}
              width={127}
              height={100}
              alt="feature"
              className="rounded-2xl"
            ></Image>
            <p className="text-center">Theo dõi quá trình, kết quả học tập</p>
          </div>
        </li>
        <li data-aos="fade-left">
          <div className="border-2 border-blue-800 rounded-2xl flex items-center justify-between p-2 hover:scale-105 transition-all ">
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
          <div className="border-2 border-blue-800 rounded-2xl flex items-center justify-between p-2 hover:scale-105 transition-all ">
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
