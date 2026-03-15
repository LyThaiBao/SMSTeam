import { Timestamp } from "next/dist/server/lib/cache-handlers/types";
import z, { literal } from "zod";

// export type TeacherType = z.infer<typeof TeacherShemas>;

const GenderSchemas = z.enum(["Nam", "Nữ"]);
type Gender = z.infer<typeof GenderSchemas>;

export const TeacherDetailSchemas = z.object({
  name: z.string("Tên phải là chữ!").nonempty("Tên không thể để trống"),
  faculty: z.string().min(1, "Vui lòng chọn Khoa/Trường"),
  phone: z
    .string()
    .regex(
      /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
      "Số điện thoại không hợp lệ",
    )
    //.optional(),// dung optional thi form no la "" nhung check regex ko valid
    .or(literal("")),
  gender: GenderSchemas,
});

export type TeacherDetailType = z.infer<typeof TeacherDetailSchemas>;

export type TeacherType = { id: string | number } & Pick<
  TeacherDetailType,
  "name" | "faculty"
>;

export type Faculty = {
  id: string | number;
  name: string;
  description: string;
  status: string;
  createdAt: Timestamp;
};
