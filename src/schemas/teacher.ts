import z, { literal, number } from "zod";

// export type TeacherType = z.infer<typeof TeacherShemas>;

const GenderSchemas = z.enum(["Nam", "Nữ"]);
type Gender = z.infer<typeof GenderSchemas>;

export const FormTeacherSchemas = z.object({
  userName: z.string("Tên phải là chữ!").nonempty("Tên không thể để trống"),
  passWord: z.string("").min(8, "Mat khau phai lon hon 8 ki tu"),
  faculty_id: z.string("").min(1, "Khoa ko the null"),
  phone: z
    .string()
    .regex(
      /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
      "Số điện thoại không hợp",
    )
    //.optional(),// dung optional thi form no la "" nhung check regex ko valid
    .or(literal("")),
  email: z.string("Email phai la chuoi").nonempty("Email khong duoc bo trong"),
  gender: GenderSchemas,
});

export type FormTeacherType = z.infer<typeof FormTeacherSchemas>;

export const TeacherDetailSchemas = FormTeacherSchemas.extend({
  id: z.union([z.string(), z.number()]),
});

export type TeacherDetailType = z.infer<typeof TeacherDetailSchemas>;
export type TeacherType = {
  faculty: { name: string; code: string };
  name: string;
} & Pick<TeacherDetailType, "email" | "gender" | "phone" | "id">;

