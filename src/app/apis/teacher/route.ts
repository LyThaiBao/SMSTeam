export const dynamic = "force-dynamic";
import { TeacherList } from "@/types/response";
import { BEError, BEResponse, BESuccess } from "@/types/teacher/response";
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
    if (!response.ok) {
      return NextResponse.json({ message: "Server Error" }, { status: 500 });
    }
    const data: TeacherList = await response.json();
    return NextResponse.json({ ...data }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const cook = await cookies();
  const token = cook.get("accessToken")?.value;
  console.log(">>Token ", token);
  const info = await request.json();
  // console.log(">>> INFO ", info);
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
    console.log("RESPONSE >> ", response);
    const data: BEResponse = await response.json();
    if (!response.ok) {
      const error = data as BEError;
      return NextResponse.json(
        { message: error.MS },
        { status: response.status },
      );
    }
    return NextResponse.json(
      { message: "Success", data: (data as BESuccess).lecturer },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
