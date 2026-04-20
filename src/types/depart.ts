import z from "zod";

export const FormDepartSchemas = z.object({
  name: z.string("Ten khoa phai la text").nonempty("Ten khoa khong the trong"),
  code: z.string("Ma khoa phai la text").nonempty("Ma khoa khong the trong"),
  img: z
    .instanceof(File, { message: "Vui long chon file" })
    .refine((file) => file.size < 5 * 1024 * 1024, "File khong duoc qua 5MB")
    .refine(
      (file) => ["image/png", "image/jpeg", "image/webp"].includes(file.type),
      "Chỉ chấp nhận định dạng .jpg, .png hoặc .webp",
    ),
});

export type FormDepartmentType = z.infer<typeof FormDepartSchemas>;

export type DepartmentTypeDetail = FormDepartmentType & {
  id: string | number;
  status: number;
};
