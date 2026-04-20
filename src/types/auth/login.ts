import { email, z } from "zod";

export const LoginSchemas = z.object({
  email: z.string().min(1, "Tên đăng nhập không thể trống"),
  passWord: z
    .string()
    .min(1, "Mật khẩu không thể trống")
    .min(8, "Mật khẩu phải ít nhất 8 ký tự"),
});

export type LoginType = z.infer<typeof LoginSchemas>;

export type LoginResponse = {
  EC: string;
  access_token: string;
  user: {
    email: string;
    name: string;
    role: string;
  };
};

export type LoginFail = {
  ES:string;
  MessageError:string;
}
