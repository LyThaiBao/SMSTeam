import { TeacherDetailType } from "@/types/people";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  // try {
  //   const response = await fetch(`${beUrl}/`, {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   if (!response.ok) {
  //     return NextResponse.json({ message: `Server Error` }, { status: 500 });
  //   }
  //   const successData: TeacherDetailType = await response.json();
  //   return NextResponse.json(successData, { status: 200 });
  // } catch (e) {
  //   return NextResponse.json({ message: `Server Error` }, { status: 500 });
  // }
  const teacher: TeacherDetailType = {
    id: 1,
    name: "Nguyen Van An",
    faculty: "CICT",
    gender: "Nam",
    phone: "0123456789",
  };
  return NextResponse.json(teacher, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string | number }> },
  // Next yeu cau tham so dau tien phai la Request
) {
  const id = (await params).id;
  console.log("Log ID>>", id);
  // const beUrl = process.env.BACKEND_URL || "localhost:8080";
  // try {
  //   const response = await fetch(`${beUrl}/`, {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   if (!response.ok) {
  //     return NextResponse.json({ message: `Server Error` }, { status: 500 });
  //   }
  //   return NextResponse.json({message:`Delete Success Teacher ID ${id}`}, { status: 200 });
  // } catch (e) {
  //   return NextResponse.json({ message: `Server Error` }, { status: 500 });
  // }

  return NextResponse.json({ message: "DELETED" }, { status: 200 });
}
