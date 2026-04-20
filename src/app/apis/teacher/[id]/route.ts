
import { BEError } from "@/types/response/errorResponse";
import { TeacherResponse } from "@/types/teacher/teacherResponse";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,{ params }: { params: Promise<{ id: string | number }> },
) {
  const cook = await cookies();
  const token = cook.get("accessToken")?.value;
  const id = (await params).id;
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
    const result:TeacherResponse | BEError = await response.json();
    if (!response.ok) {
      const err = result as BEError;
      return NextResponse.json({ message: err.MS,data:null,isSuccess:false},{ status: response.status });
    }
    const success = result as TeacherResponse;
      return NextResponse.json({ message: "Get teacher success",data:success.DATA,isSuccess:true},{ status: 200 });
  } catch (err) {
     return NextResponse.json({ message: "Server Error",data:null,isSuccess:false},{ status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string | number }> },
  // Next yeu cau tham so dau tien phai la Request nen here no la placeholder
) {
  const cook = await cookies();
  const token = cook.get("accessToken")?.value;
  const id = (await params).id;
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

}
