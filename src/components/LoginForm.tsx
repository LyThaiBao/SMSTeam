"use client";

import { LoginSchemas, LoginType } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(LoginSchemas),
    defaultValues: { username: "", password: "" },
  });
  function onSubmit(data: LoginType) {}
  return (
    <div className="border border-1 w-[90%] my-5 mx-auto px-4 rounded-2xl max-w-[80%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[35%]">
      <div className="flex flex-col items-center py-2 my-4">
        <Image
          src={"/imgs/stu.png"}
          alt="student"
          width={150}
          height={200}
        ></Image>
        <h1 className="text-2xl">Chào mừng bạn quay trở lại</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="py-10"
        autoComplete="off"
      >
        <div className="flex flex-col justify-center gap-1 mb-8">
          <label htmlFor="">Tên Đăng Nhập</label>
          <input
            type="text"
            placeholder="..."
            className="outline-0 border border-1  items-center px-2 py-1 rounded-xl focus:outline-2 focus:outline-blue-400 focus:border-0"
            {...register("username")}
          />
          {errors.username && (
            <small className="text-red-500">{errors.username.message}</small>
          )}
        </div>
        <div className="flex flex-col justify-center gap-1 my-5 ">
          <label htmlFor="">Mật Khẩu</label>
          <input
            type="password"
            placeholder="..."
            autoComplete="new-password"
            className="outline-0 border border-1  items-center px-2 py-1 rounded-xl
            focus:outline-2 focus:outline-blue-400 focus:border-0
            "
            {...register("password")}
          />
          {errors.password && (
            <small className="text-red-500">{errors.password.message}</small>
          )}
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="p-2 bg-blue-400 rounded-xl cursor-pointer active:scale-95 active:bg-blue-600"
            disabled={isSubmitting ? true : false}
          >
            {isSubmitting ? "Đang Đăng Nhập..." : "Đăng Nhập"}
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="p-2 bg-red-400 rounded-xl cursor-pointer active:scale-95 active:bg-red-600 "
          >
            Xóa Tất Cả
          </button>
        </div>
      </form>
    </div>
  );
}
