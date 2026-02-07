import { TeacherDetailType, TeacherType } from "@/types/people";
type TeachersResponse = {
  teachers: TeacherType[];
};
export async function getTeachers({ departmentId }: { departmentId?: string }) {
  //   console.log(">>>GET", departmentId);
  const baseUrl =
    `${process.env.NEXT_PUBLIC_INTERNAL_URL}` || "http://localhost:3000";
  const url = new URL(`${baseUrl}/apis/teacher`);
  if (departmentId) {
    url.searchParams.append("departmentId", departmentId);
  }
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error(`${response.statusText || "Server Error"}`);
  }
  const { teachers } = (await response.json()) as TeachersResponse;
  return teachers;
}

export async function getTeacher(id: string | number) {
  const baseUrl =
    `${process.env.NEXT_PUBLIC_INTERNAL_URL}` || "http://localhost:3000";
  const url = new URL(`${baseUrl}/apis/teacher/${id}`);
  const response = await fetch(`${url}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error(`${response.statusText || "Server Error"}`);
  }
  const teacher: TeacherDetailType = await response.json();
  return teacher;
}

export async function deleteTeacher(id: string | number) {
  const baseUrl =
    `${process.env.NEXT_PUBLIC_INTERNAL_URL}` || "http://localhost:3000";
  const url = new URL(`${baseUrl}/apis/teacher/${id}`);
  console.log(url);
  const response = await fetch(url, { method: "DELETE" });
  if (!response.ok) {
    throw new Error(`${response.statusText || "Server Error"}`);
  }
  const notifi = await response.json();
  return notifi;
}
