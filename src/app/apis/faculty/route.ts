import { getToken } from "@/hooks/getToken";
import { FormDepartmentType } from "@/types/depart";
import {
  BEDeleteResponse,
  BEPostResponse,
  BEPostSuccess,
} from "@/types/faculty/response";
import { DepartList } from "@/types/response";
import { BEDeletSuccess, BEError } from "@/types/teacher/response";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const cook = await cookies();
  const token = cook.get("accessToken")?.value;
  console.log(">>> TOKEN IN Faculty ", token);
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  try {
    const response = await fetch(`${beUrl}/faculty`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(">> RESPONSE ", response);
    if (!response.ok) {
      return NextResponse.json({ message: `Server Error` }, { status: 500 });
    }
    const successData: DepartList = await response.json();
    console.log(">>> LOG RESPONSE ", successData);
    // console.log(">>> Route Faculty ", successData);
    return NextResponse.json({ ...successData }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: `Server Error` }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const cook = await cookies();
  const token = cook.get("accessToken");
  const info: FormDepartmentType = await request.json();
  const beUrl = process.env.BACKEND_URL || "http://localhost:8080";
  try {
    const response = await fetch(`${beUrl}/faculty`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(info),
    });
    const data: BEPostResponse = await response.json();
    if (!response.ok) {
      const err = data as BEError;
      return NextResponse.json({ message: err.MS }, { status: 500 });
    }
    return NextResponse.json(
      { message: "Success", data: data as BEPostSuccess },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json({ message: `Server Error` }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const token = await getToken();
  const beUrl = process.env.BACKEND_URL || "http://localhost:8080";
  try {
    const response = await fetch(`${beUrl}/faculty`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data: BEDeleteResponse = await response.json();

    if (!response.ok) {
      const err = data as BEError;
      return NextResponse.json(
        { massage: err.MS },
        { status: response.status },
      );
    }

    return NextResponse.json(
      { message: data as BEDeletSuccess },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
