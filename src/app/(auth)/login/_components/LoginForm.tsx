"use client";

import { login } from "@/services/login";
import { LoginSchemas, LoginType } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
    resetField,
  } = useForm({
    resolver: zodResolver(LoginSchemas),
    defaultValues: { email: "", passWord: "" },
  });
  const router = useRouter();
  const [error, setError] = useState<boolean>(false);
  async function onSubmit(data: LoginType) {
    try {
      console.log(">>> onLogin");
      const response = await login(data);
      const email = response.user.email;
      console.log(">>> EMAIL ", email);
      localStorage.setItem("email", email);
      const username = response.user.name;
      localStorage.setItem("username", username);
      const role = response.user.role.toLowerCase();
      console.log("Login Role>>>", role);
      router.push(`${role}`);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <>
      {error && (
        <h3 className="text-red-500 text-xl w-full text-center pt-5  ">
          Sai Thong Tin Dang Nhap
        </h3>
      )}
      <div className="text-white border  w-[90%]  absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] px-4 rounded-2xl max-w-[80%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[35%] bg-gradient-to-r bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700  ">
        <div className="flex flex-col items-center py-2 my-4">
          <Image
            src={"/imgs/stu.png"}
            alt="student"
            width={100}
            height={150}
          ></Image>
          <h1 className="text-xl sm:text-2xl ">Chào mừng bạn quay trở lại</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="py-4 "
          autoComplete="off"
        >
          <div className="flex flex-col justify-center gap-1 mb-8">
            <label htmlFor="">Tên Đăng Nhập</label>
            <input
              type="text"
              placeholder="..."
              className="outline-0 border border-1  items-center px-2 py-1 rounded-xl focus:outline-2 focus:outline-blue-400 focus:border-0"
              {...register("email")}
            />
            {errors.email && (
              <small className="text-red-500">{errors.email.message}</small>
            )}
          </div>
          <div className="flex flex-col justify-center gap-1 my-5 ">
            <label htmlFor="">Mật Khẩu</label>
            <input
              type="passWord"
              placeholder="..."
              autoComplete="new-passWord"
              className="outline-0 border border-1  items-center px-2 py-1 rounded-xl
            focus:outline-2 focus:outline-blue-400 focus:border-0
            "
              {...register("passWord")}
            />
            {errors.passWord && (
              <small className="text-red-500">{errors.passWord.message}</small>
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
              onClick={() => {
                resetField("email");
                resetField("passWord");
              }}
              className="p-2 bg-red-400 rounded-xl cursor-pointer active:scale-95 active:bg-red-600 "
            >
              Xóa Tất Cả
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
