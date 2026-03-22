"use client";

import { getDepartments } from "@/services/department";
import { postTeacher } from "@/services/people";
import { DepartmentTypeDetail } from "@/types/depart";
import { FormTeacherSchemas, FormTeacherType } from "@/types/people";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

interface FormAddTeacherProps {
  onModal: (value: boolean) => void;
}
export default function FormAddTeacher({ onModal }: FormAddTeacherProps) {
  const router = useRouter();
  const [faculties, setFaculties] = useState<DepartmentTypeDetail[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getDepartments();
      const list: DepartmentTypeDetail[] = data.listFaculty;
      console.info("faculties>>> ", list);
      setFaculties(list);
    })();
  }, []);

  // ----------------RHF----------------
  async function addTeacher(data: FormTeacherType) {
    const myPromise = postTeacher(data); // GỌI 1 LẦN (Máy bắt đầu làm việc)
    toast.promise(myPromise, {
      // Đưa cái "phiếu hẹn" cho Toast theo dõi
      loading: "Đang Lưu Giảng Viên",
      success: "Tạo Thành Công",
      error: (err) => <b>${err.message}</b>,
    });

    try {
      // 3. ĐỢI cho đến khi Promise hoàn thành thực sự
      await myPromise; // Đợi cái "phiếu hẹn" đó hoàn thành

      // 4. CHỈ KHI THÀNH CÔNG MỚI CHẠY TIẾP
      onModal(false); // Đóng modal
      router.refresh(); // Refresh dữ liệu
    } catch (err) {
      // Nếu lỗi, toast.promise đã hiện thông báo lỗi rồi
      // Ở đây ta không đóng modal để user xem lại form
      console.error("Lỗi addTeacher:", err);
    }
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormTeacherType>({
    resolver: zodResolver(FormTeacherSchemas),
  });

  return (
    <form
      onSubmit={handleSubmit(addTeacher)}
      className=" z-10 absolute bg-white min-w-[90%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  min-h-[60%] border-2 rounded-2xl overflow-hidden text-black"
    >
      <header className="flex justify-between items-center py-3 mb-3 bg-gray-200 p-4">
        <h2 className="text-2xl">Thêm Giảng Viên</h2>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => onModal(false)}
        >
          X
        </button>
      </header>
      <div className="p-4 flex gap-5 flex-col ">
        <section className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between ">
          <h3 className="text-xl mb-2 lg:m-0">Thông Tin Cơ Bản</h3>
          <div className="flex gap-8">
            <label htmlFor="" className="text-lg">
              Tên
            </label>
            <div>
              <input
                {...register("userName")}
                type="text"
                placeholder="Nhập tên"
                className="bg-gray-200 outline-0 outline-gray-500  focus:outline-2  w-[80%] p-2 rounded-sm self-end"
              />
              <small className="text-red-500 block ml-5">
                {errors.userName?.message}
              </small>
            </div>
          </div>
          <div className="flex gap-8">
            <label htmlFor="" className="text-lg">
              Mật Khẩu
            </label>
            <div>
              <input
                {...register("passWord")}
                type="text"
                placeholder="Nhập Mật Khẩu"
                className="bg-gray-200 outline-0 outline-gray-500  focus:outline-2  w-[80%] p-2 rounded-sm self-end"
              />
              <small className="text-red-500 block ml-5">
                {errors.passWord?.message}
              </small>
            </div>
          </div>

          <div className="flex gap-3 items-center justify-between min-w-[30%]">
            <label htmlFor="">Giới Tính</label>
            <select
              {...register("gender")}
              className="bg-gray-200  w-[80%] lg:w-[70%] p-3 rounded-sm outline-0"
            >
              <option className="bg-white hover:bg-gray-300 " value="Nam">
                Nam
              </option>
              <option className="bg-white hover:bg-gray-300" value="Nữ">
                Nữ
              </option>
            </select>
            <small>{errors.gender?.message}</small>
          </div>
        </section>
        <section>
          <h3 className="text-xl mt-4 mb-3">Thông Tin Nghiệp Vụ</h3>
          <div className="flex gap-3 lg:gap-10 items-center justify-between lg:justify-start">
            <label htmlFor="">Khoa/Trường</label>
            <select
              {...register("faculty_id")}
              className="bg-gray-200  w-[80%] lg:w-[50%] p-3 rounded-sm outline-0"
            >
              <option className="bg-white hover:bg-gray-300 " value="">
                ----Chọn Khoa----
              </option>
              {faculties.map((f) => (
                <option value={f.id} key={f.id}>
                  {f.name}
                </option>
              ))}
            </select>
            <small className="text-red-500">{errors.faculty_id?.message}</small>
          </div>
        </section>
        <section>
          <h3 className="text-xl mt-4 mb-3">Thông Tin Liên Hệ</h3>
          <div className="flex gap-3 lg:gap-10 items-center justify-between lg:justify-start ">
            <label htmlFor="">Điện Thoại</label>
            <input
              {...register("phone")}
              type="text"
              placeholder="Nhập số điện thoại"
              className="bg-gray-200 outline-0 outline-gray-500 focus:outline-2 w-[75%] lg:w-[50%] p-2 rounded-sm "
            />

            <small className="text-red-500">{errors.phone?.message}</small>

            <label htmlFor="">Email</label>
            <input
              {...register("email")}
              type="text"
              placeholder="Nhập số điện thoại"
              className="bg-gray-200 outline-0 outline-gray-500 focus:outline-2 w-[75%] lg:w-[50%] p-2 rounded-sm "
            />

            <small className="text-red-500">{errors.email?.message}</small>
          </div>
        </section>
        <div className=" flex justify-between items-center mt-4">
          <button
            type="button"
            onClick={() => onModal(false)}
            className="px-7 py-3 bg-red-500 rounded-md cursor-pointer active:bg-red-600"
          >
            Hủy
          </button>
          <button
            type="submit"
            className="px-3 py-3 bg-blue-500 rounded-md cursor-pointer active:bg-blue-600"
          >
            Lưu Giảng Viên{" "}
          </button>
        </div>
      </div>
    </form>
  );
}
