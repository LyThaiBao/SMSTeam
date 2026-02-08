import { Faculty } from "@/types/people";

export async function getFaculties() {
  console.log("getFaculties");
  const baseUrl =
    `${process.env.NEXT_PUBLIC_INTERNAL_URL}` || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/apis/faculty`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Server Error");
  }
  const successData: Faculty[] = await response.json();
  return successData;
}
