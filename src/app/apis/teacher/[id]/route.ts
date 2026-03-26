import { TeacherDetailType } from "@/types/people";
import { BEError, BEGetResponse, BEGetSuccess } from "@/types/teacher/response";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string | number }> },
) {
  const cook = await cookies();
  const token = cook.get("accessToken")?.value;
  const id = (await params).id;
  // console.log(">> TOKEN : ", token);
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  // console.log(">>> A");
  try {
    const response = await fetch(`${beUrl}/lecturer/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("?????? RE: ", response);
    const data: BEGetResponse = await response.json();
    if (!response.ok) {
      const err: BEError = data as BEError;
      return NextResponse.json(
        { message: err.MS },
        { status: response.status },
      );
    }
    return NextResponse.json({ data: data as BEGetSuccess }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: `Server Error` }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string | number }> },
  // Next yeu cau tham so dau tien phai la Request
) {
  const cook = await cookies();
  const token = cook.get("accessToken")?.value;
  const id = (await params).id;
  console.log("Log ID>>", id);
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  try {
    const response = await fetch(`${beUrl}/lecturer/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data: BEError = await response.json();
    console.log(">>> DELE ", data);
    if (!response.ok) {
      return NextResponse.json(
        { message: data.MS },
        { status: response.status },
      );
    }
    return NextResponse.json(
      { message: `Delete Success Teacher ID ${id}` },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json({ message: `Server Error` }, { status: 500 });
  }

  // return NextResponse.json({ message: "DELETED" }, { status: 200 });
}
