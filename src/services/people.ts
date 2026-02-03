import { TeacherType } from "@/types/people";
type TeachersResponse = {
  teachers: TeacherType[];
};
export async function getTeachers({ departmentId }: { departmentId?: string }) {
  //   console.log(">>>GET", departmentId);
  const baseUrl = "http://localhost:3000";
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
