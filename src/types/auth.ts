import { z } from "zod";

export const LoginSchemas = z.object({
  username: z.string().min(1, "Tên đăng nhập không thể trống"),
  password: z
    .string()
    .min(1, "Mật khẩu không thể trống")
    .min(8, "Mật khẩu phải ít nhất 8 ký tự"),
});

export type LoginType = z.infer<typeof LoginSchemas>;
