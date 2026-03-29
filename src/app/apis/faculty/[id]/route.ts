import { getToken } from "@/hooks/getToken";
import {
  BEDeleteResponse,
  BEGetSingleResponse,
  BEGetSingleSuccess,
} from "@/types/faculty/response";
import { BEDeletSuccess, BEError } from "@/types/teacher/response";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  params: { params: Promise<{ id: string | number }> },
) {
  console.log(">>> HERE");
  // const token = await getToken();
  const cook = await cookies();
  const token = cook.get("accessToken")?.value;
  console.log(">>> TOKEN ", token);
  const beUrl = process.env.BACKEND_URL || "http://localhost:8080";
  const id = (await params.params).id;
  console.log(">> ID: ", id);
  try {
    const response = await fetch(`${beUrl}/faculty/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: BEGetSingleResponse = await response.json();
    if (!response.ok) {
      const err = data as BEError;
      return NextResponse.json(
        { message: err.MS },
        { status: response.status },
      );
    }
    return NextResponse.json(
      { data: data as BEGetSingleSuccess },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
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
