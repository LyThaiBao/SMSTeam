import { TeacherType } from "@/schemas/teacher";
import { RouteResponse } from "@/types/response/routeResponse";

export async function getTeachers({
  departmentId,
  token,
}: {
  departmentId?: string;
  token?: string;
}) {
  const baseUrl =
    `${process.env.NEXT_PUBLIC_INTERNAL_URL}` || "http://localhost:3000";
  const url = new URL(`${baseUrl}/apis/teacher`);
  if (departmentId) {
    url.searchParams.append("departmentId", departmentId);
  }

 try{
   const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${token}`,
    },
  });
  const result:RouteResponse<TeacherType[]> = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
 }
 catch(err){
    throw err;
 }
}