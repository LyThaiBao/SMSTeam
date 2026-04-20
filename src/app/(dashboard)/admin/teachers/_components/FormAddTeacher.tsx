"use client";
import { DepartmentTypeDetail } from "@/types/depart";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { X } from "lucide-react"; // Icon đóng modal
import { FormTeacherSchemas, FormTeacherType } from "@/schemas/teacher";
import { postTeacher } from "@/services/teacher/postTeacher";
import { getDepartments } from "@/services/faculty/getFaculties";

interface FormAddTeacherProps {
  onModal: (value: boolean) => void;
}

export default function FormAddTeacher({ onModal }: FormAddTeacherProps) {
  const router = useRouter();
  const [faculties, setFaculties] = useState<DepartmentTypeDetail[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getDepartments();
      setFaculties(data || []);
    })();
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormTeacherType>({
    resolver: zodResolver(FormTeacherSchemas),
  });

  async function addTeacher(data: FormTeacherType) {
    const myPromise = postTeacher(data);
    toast.promise(myPromise, {
      loading: "Đang lưu giảng viên...",
      success: "Thêm thành công!",
      error: (err)=> {
        return err.message
      },
    });

    try {
      await myPromise;
      onModal(false);
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  }

  // Helper để style input cho sạch
  const inputStyle = "w-full p-3 rounded-xl text-black border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-slate-50";

  return (
    <form
      onSubmit={handleSubmit(addTeacher)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <header className="flex justify-between items-center p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-800">Thêm Giảng Viên</h2>
          <button type="button" onClick={() => onModal(false)} className="p-1 hover:bg-slate-100 rounded-full transition-all">
            <X size={20} className="text-red-500 cursor-pointer" />
          </button>
        </header>

        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Thông tin cơ bản */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-600">Tên giảng viên</label>
              <input {...register("userName")} className={inputStyle} placeholder="Nhập tên" />
              {errors.userName && <p className="text-xs text-red-500">{errors.userName.message}</p>}
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-600">Mật khẩu</label>
              <input {...register("passWord")} className={inputStyle} type="password" placeholder="••••••••" />
              {errors.passWord && <p className="text-xs text-red-500">{errors.passWord.message}</p>}
            </div>
            <div className="space-y-1 md:col-span-2">
              <label className="text-sm font-semibold text-slate-600">Giới tính</label>
              <select {...register("gender")} className={inputStyle}>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
            </div>
          </div>

          <div className="border-t pt-6 space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-600">Khoa / Trường</label>
              <select {...register("faculty_id")} className={inputStyle}>
                <option value="">---- Chọn khoa ----</option>
                {faculties.map((f) => <option value={f.id} key={f.id}>{f.name}</option>)}
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-600">Điện thoại</label>
                <input {...register("phone")} className={inputStyle} placeholder="090xxxxxxx" />
              <small className="text-red-500">{errors.phone?.message}</small>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-600">Email</label>
                <input {...register("email")} className={inputStyle} placeholder="email@example.com" />
              <small className="text-red-500">{errors.email?.message}</small>

              </div>
            </div>
          </div>
        </div>

        <footer className="p-6 border-t border-slate-100 flex justify-end gap-3">
          <button type="button" onClick={() => onModal(false)} className="px-6 py-2.5 rounded-xl text-slate-600 font-semibold hover:bg-slate-100 transition-all">
            Hủy
          </button>
          <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95">
            Lưu giảng viên
          </button>
        </footer>
      </div>
    </form>
  );
}