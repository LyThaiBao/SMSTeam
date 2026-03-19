import { DepartList } from "@/types/response";

export async function getDepartments(token?: string) {
  const baseUrl =
    `${process.env.NEXT_PUBLIC_INTERNAL_URL}` || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/apis/faculty`, {
    method: "GET",
    headers: {
      Cookie: `accessToken=${token}`,
    },
    credentials: "include",
  });
  console.log(">>> DEPart ", response);
  if (!response.ok) {
    throw new Error(`${response.statusText || "Server Error"}`);
  }

  const data: DepartList = await response.json();
  console.log(">> Data ", data);
  return data.DT;
}
