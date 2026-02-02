import { DepartmentType } from "@/types/depart";
import { NextResponse } from "next/server";

export async function GET() {
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  //   try {
  //     const response = await fetch(`${beUrl/departs}`, { method: "GET" });
  //     if (!response.ok) {
  //       return NextResponse.json({ message: "Server Error" }, { status: 500 });
  //     }
  //     const departments = await response.json();
  //     return NextResponse.json({ departments: departments }, { status: 200 });
  //   } catch (err) {
  //     return NextResponse.json({ massage: "Server Error" }, { status: 500 });
  //   }
  const departments: DepartmentType[] = [
    { id: 1, name: "CICT" },
    { id: 3, name: "CSE" },
  ];
  return NextResponse.json({ departments: departments }, { status: 200 });
}
