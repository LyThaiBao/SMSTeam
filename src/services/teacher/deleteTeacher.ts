import { DeletResponse } from "@/types/teacher/response";

export async function deleteTeacher(id: string | number) {
  const baseUrl =
    `${process.env.NEXT_PUBLIC_INTERNAL_URL}` || "http://localhost:3000";
  const url = new URL(`${baseUrl}/apis/teacher/${id}`);

  const response = await fetch(url, {
    method: "DELETE",
    credentials: "include",
  });
  const result: DeletResponse = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}
