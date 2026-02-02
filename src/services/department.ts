import { DepartmentType } from "@/types/depart";

export async function getDepartments() {
  const baseUrl = "/apis/depart";
  const response = await fetch(baseUrl, { method: "GET" });
  if (!response.ok) {
    throw new Error(`${response.statusText || "Server Error"}`);
  }
  const { departments } = await response.json();
  console.log(departments);
  return departments;
}
