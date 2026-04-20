import { FormTeacherType } from "@/schemas/teacher";
import { PostResponse } from "@/types/teacher/response";

export async function postTeacher(info: FormTeacherType) {
  const baseUrl =
    `${process.env.NEXT_PUBLIC_INTERNAL_URL}` || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/apis/teacher`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
    credentials: "include",
  });
  const result: PostResponse = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result.data;
}