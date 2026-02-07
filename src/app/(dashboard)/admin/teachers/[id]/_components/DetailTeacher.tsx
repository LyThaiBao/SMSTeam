"use client";

import { getTeacher } from "@/services/people";
import { TeacherDetailType } from "@/types/people";
import { error } from "console";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function DetailTeacher() {
  const params = useParams();
  const id = params?.id;
  console.info("params >> ", params?.id);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const [teacher, setTeacher] = useState<TeacherDetailType | null>();
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const teacher = await getTeacher(id as string);
        setTeacher(teacher);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>ERROR</div>;
  }
  return (
    <section className="bg-white border-2 border-grey-300 p-2 overflow-hidden rounded-2xl">
      <Image
        src={"/imgs/stu.png"}
        alt="teacher"
        width={150}
        height={150}
        className="peer mt-10 rounded-[100%] bg-blue-500 mb-5 mx-auto hover:scale-[1.5]   border-2 border-amber-400 transition-all"
      />
      <div className="text-xl font-medium text-center text-[#333] peer-hover:text-red-500 lg:peer-hover:translate-x-[30%] transition-all peer-hover:translate-y-[50%]">
        {teacher?.faculty}
      </div>
      <div className="text-center text-[#333] lg:peer-hover:translate-x-[-30%] lg:peer-hover:-translate-y-full transition-all peer-hover:mt-4">
        <h3 className="text-2xl font-bold">{teacher?.name}</h3>
      </div>

      <p className="text-center text-green-500">
        Đạt nhiều thành tích nghiên cứu nổi bậc trong thời gian giảng dạy, tận
        tình, nhiệt huyết,năng động
      </p>
      <div className="text-center py-3 px-5 bg-blue-400 w-fit mx-auto mt-5 rounded-xl font-bold">
        Liên Hệ: {teacher?.phone}
      </div>
      <ul className="flex gap-4 justify-center mt-5">
        <li className="text-2xl">
          <i className="fa-brands fa-facebook text-blue-500 cursor-pointer"></i>
        </li>
        <li className="text-2xl">
          <i className="fa-regular fa-envelope text-red-500 cursor-pointer"></i>
        </li>
      </ul>
    </section>
  );
}
