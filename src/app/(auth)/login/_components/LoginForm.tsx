"use client";

import { login } from "@/services/auth/login";
import { LoginSchemas, LoginType } from "@/types/auth/login";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AlertCircle } from "lucide-react";

export default function LoginForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    resetField,
  } = useForm({
    resolver: zodResolver(LoginSchemas),
    defaultValues: { email: "", passWord: "" },
  });

  const router = useRouter();
  const [error, setError] = useState<boolean>(false);

  async function onSubmit(data: LoginType) {
    try {
      const response = await login(data);
      localStorage.setItem("email", response.user.email);
      localStorage.setItem("username", response.user.name);
      const role = response.user.role.toLowerCase();
      router.push(`/${role}`);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <Image src="/imgs/stu.png" alt="Logo" width={80} height={80} className="mb-4" />
          <h1 className="text-2xl font-bold text-slate-800">Chào mừng trở lại</h1>
          <p className="text-slate-500 text-sm">Vui lòng đăng nhập để tiếp tục</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-3 bg-red-50 text-red-600 rounded-xl flex items-center gap-2 text-sm">
            <AlertCircle size={16} />
            Sai thông tin đăng nhập, vui lòng thử lại!
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" autoComplete="off">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-600 ml-1">Email</label>
            <input
              type="text"
              placeholder="nhap@gmail.com"
              className="w-full px-4 py-3 text-black rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              {...register("email")}
            />
            {errors.email && <small className="text-red-500 ml-1">{errors.email.message}</small>}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-600 ml-1">Mật khẩu</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3  text-black rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              {...register("passWord")}
            />
            {errors.passWord && <small className="text-red-500 ml-1">{errors.passWord.message}</small>}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-200"
            >
              {isSubmitting ? "Đang xử lý..." : "Đăng nhập"}
            </button>
            <button
              type="button"
              onClick={() => { resetField("email"); resetField("passWord"); }}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-2xl transition-all"
            >
              Xóa
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}