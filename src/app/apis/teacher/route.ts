export const dynamic = "force-dynamic";
import { TeacherType } from "@/types/people";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParam = request.nextUrl.searchParams;
  const departmentId = searchParam.get("departmentId");
  console.log("DepartmentID>> ", departmentId);
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  //   try {
  //     const response = await fetch(`${beUrl}`);
  //     if (!response.ok) {
  //       return NextResponse.json({ message: "Server Error" }, { status: 500 });
  //     }
  //   } catch (e) {
  //     return NextResponse.json({ message: "Server Error" }, { status: 500 });
  //   }
  const teachers: TeacherType[] = [
    { id: 1, name: "Ly Thai Bao", major: "IT" },
    { id: 2, name: "Nguyen Van An", major: "CS" },
  ];

  if (departmentId === undefined || !departmentId) {
    return NextResponse.json({ teachers: teachers }, { status: 200 });
  }
  const re = teachers.filter((t) => t.id == departmentId);
  return NextResponse.json({ teachers: re }, { status: 200 });

  //   return NextResponse.json({ message: "Server Error" }, { status: 500 });
}
