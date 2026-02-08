"use client";

import { getFaculties } from "@/services/faculty";
import { Faculty } from "@/types/people";
import { useEffect, useState } from "react";

interface FormAddTeacherProps {
  onModal: (value: boolean) => void;
}
export default function FormAddTeacher({ onModal }: FormAddTeacherProps) {
  const [faculties, setFaculties] = useState<Faculty[] | []>([]);
  useEffect(() => {
    (async () => {
      const faculties: Faculty[] = await getFaculties();
      console.info("faculties>>> ", faculties);
      setFaculties(faculties);
    })();
  }, []);

  return (
    <form className=" z-10 absolute bg-white min-w-[90%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  min-h-[60%]  text-black">
      <header className="flex justify-between items-center py-3 mb-3 bg-gray-200 p-4">
        <h2 className="text-2xl">Thêm Giảng Viên</h2>
        <button type="button" onClick={() => onModal(false)}>
          X
        </button>
      </header>
      <div className="p-4 flex gap-5 flex-col ">
        <section className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between ">
          <h3 className="text-xl mb-2 lg:m-0">Thông Tin Cơ Bản</h3>
          <div className="flex gap-3 items-center justify-between ">
            <label htmlFor="" className="text-lg">
              Tên
            </label>
            <input
              type="text"
              placeholder="Nhập tên"
              className="bg-gray-200 outline-0 outline-gray-500  focus:outline-2  w-[80%] p-2 rounded-sm self-end"
            />
          </div>
          <div className="flex gap-3 items-center justify-between min-w-[30%]">
            <label htmlFor="">Giới Tính</label>
            <select
              defaultValue={"nam"}
              className="bg-gray-200  w-[80%] lg:w-[70%] p-3 rounded-sm outline-0"
            >
              <option className="bg-white hover:bg-gray-300 " value="nam">
                Nam
              </option>
              <option className="bg-white hover:bg-gray-300" value="nu">
                Nữ
              </option>
            </select>
          </div>
        </section>
        <section>
          <h3 className="text-xl mt-4 mb-3">Thông Tin Nghiệp Vụ</h3>
          <div className="flex gap-3 lg:gap-10 items-center justify-between lg:justify-start">
            <label htmlFor="">Khoa/Trường</label>
            <select className="bg-gray-200  w-[80%] lg:w-[50%] p-3 rounded-sm outline-0">
              {faculties.map((f) => (
                <option key={f.id}>{f.name}</option>
              ))}
            </select>
          </div>
        </section>
        <section>
          <h3 className="text-xl mt-4 mb-3">Thông Tin Liên Hệ</h3>
          <div className="flex gap-3 lg:gap-10 items-center justify-between lg:justify-start ">
            <label htmlFor="">Điện Thoại</label>
            <input
              type="text"
              placeholder="Nhập số điện thoại"
              className="bg-gray-200 outline-0 outline-gray-500 focus:outline-2 w-[75%] lg:w-[50%] p-2 rounded-sm "
            />
          </div>
        </section>
        <div className=" flex justify-between items-center mt-4">
          <button className="px-7 py-3 bg-red-500 rounded-md cursor-pointer active:bg-red-600">
            Hủy
          </button>
          <button className="px-3 py-3 bg-blue-500 rounded-md cursor-pointer active:bg-blue-600">
            Lưu Giảng Viên{" "}
          </button>
        </div>
      </div>
    </form>
  );
}
