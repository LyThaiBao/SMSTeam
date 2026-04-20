"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDepartSchemas, FormDepartmentType } from "@/types/depart";
import { toast } from "sonner";
import { X, UploadCloud } from "lucide-react";
import { postDepartment } from "@/services/faculty/postFaculty";

interface FormProps {
  onModal: (value: boolean) => void;
}

export default function FormAddDepartment({onModal}:FormProps) {


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormDepartmentType>({
    resolver: zodResolver(FormDepartSchemas),
  });

  async function onSubmit(data: FormDepartmentType) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("code", data.code);
    formData.append("img", data.img);

    try {
   
      console.log("Submitting:", data);
      toast.success("Thêm khoa thành công!");
      onModal(false);
    } catch (err) {
      toast.error("Có lỗi xảy ra");
    }
  }

  const inputStyle = "w-full p-3 text-black rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-slate-50";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <header className="flex justify-between items-center p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-800">Thêm Khoa Mới</h2>
          <button onClick={()=>onModal(false)} type="button" className="p-1 hover:bg-slate-100 rounded-full">
            <X className="text-red-500" size={20} />
          </button>
        </header>

        <div className="p-6 space-y-5">
          {/* Tên Khoa */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-600">Tên khoa</label>
            <input {...register("name")} className={inputStyle} placeholder="Ví dụ: Công nghệ thông tin" />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>

          {/* Mã Khoa */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-600">Mã khoa</label>
            <input {...register("code")} className={inputStyle} placeholder="Ví dụ: CIT" />
            {errors.code && <p className="text-xs text-red-500">{errors.code.message}</p>}
          </div>

          {/* Upload File */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-600">Ảnh đại diện</label>
            <div className="relative group cursor-pointer">
              <input
                type="file"
                onChange={(e)=>{
                  const file = e.target.files?.[0];
                  if(file){
                    setValue("img",file);
                  }
                }}
                className=" absolute inset-0 opacity-0 cursor-pointer bg-black  text-black"
              />
              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center gap-2 hover:border-blue-500 hover:bg-blue-50 transition-all">
                <UploadCloud className="text-slate-400" size={32} />
                <span className="text-sm text-slate-500">Nhấn để chọn file (.png, .webp)</span>
              </div>
            </div>
            {errors.img && <p className="text-xs text-red-500">{errors.img.message}</p>}
          </div>
        </div>

        <footer className="p-6 border-t border-slate-100 flex justify-end gap-3">
          <button  onClick={()=>onModal(false)} type="button"  className="px-6 py-2.5 rounded-xl text-slate-600 font-semibold hover:bg-slate-100 transition-all">
            Hủy
          </button>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all active:scale-95"
          >
            {isSubmitting ? "Đang lưu..." : "Lưu thông tin"}
          </button>
        </footer>
      </div>
    </form>
  );
}