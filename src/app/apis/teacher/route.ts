export const dynamic = "force-dynamic";

import { BEError } from "@/types/response/errorResponse";
import {  BEResponse, BEPostSuccess } from "@/types/teacher/response";
import { TeacherList } from "@/types/teacher/teacherList";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cook = await cookies();
  const token = cook.get("accessToken")?.value;

  const searchParam = request.nextUrl.searchParams;
  const departmentId = searchParam.get("departmentId");
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  try {
    const response = await fetch(`${beUrl}/lecturer`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result:TeacherList | BEError = await response.json();
    if (!response.ok) {
      const error = result as BEError;
      return NextResponse.json({ message: error.MS,data:null,isSuccess:false }, { status: response.status });
    }
    const success = result as TeacherList;
    return NextResponse.json({ message: "Get all success",data:success.DATA.listLecturer,isSuccess:true }, { status: 200 });
  } catch (e) {
     return NextResponse.json({ message: "Server Error",data:null,isSuccess:false }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const cook = await cookies();
  const token = cook.get("accessToken")?.value;
  console.log(">>Token ", token);
  const info = await request.json();
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  try {
    const response = await fetch(`${beUrl}/lecturer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(info),
    });

    const data: BEResponse = await response.json();
    if (!response.ok) {
      const error = data as BEError;
      return NextResponse.json(
        { message: error.MS ,data:null,isSuccess:false},
        { status: response.status },
      );
    }
    return NextResponse.json(
      { message: "Success", data: (data as BEPostSuccess).lecturer },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
