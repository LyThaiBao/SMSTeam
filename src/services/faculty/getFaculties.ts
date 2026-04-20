import { DepartmentTypeDetail } from "@/types/depart";
import { DepartList } from "@/types/response";
import { RouteResponse } from "@/types/response/routeResponse";

export async function getDepartments(token?: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_INTERNAL_URL}` || "http://localhost:3000";
  try{
    const response = await fetch(`${baseUrl}/apis/faculty`, {
    method: "GET",
    headers: {
      Cookie: `accessToken=${token}`,
    },
    credentials: "include",
  });
  const result:RouteResponse<DepartmentTypeDetail[]> = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result.data;
  }
  catch(err){
    throw err;
  }

  const data: DepartList = await response.json();
  console.log(">> Data ", data);
  return data.DT;
}