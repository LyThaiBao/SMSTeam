import { FormDepartmentType } from "@/types/depart";
import { DepartList } from "@/types/response";
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
  // const faculties: Faculty[] = [
  //   {
  //     id: 1,
  //     name: "CICT",
  //     description: "information technology",
  //     createdAt: 9 - 1 - 2025,
  //     status: "active",
  //   },
  //   {
  //     id: 2,
  //     name: "NN",
  //     description: "Nong Nghiep",
  //     createdAt: 9 - 1 - 2025,
  //     status: "active",
  //   },
  // ];
  // return NextResponse.json(faculties, { status: 200 });
}

export async function POST(request: NextRequest) {
  const info: FormDepartmentType = await request.json();
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  try {
    const response = await fetch(`${beUrl}/faculty`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    if (!response.ok) {
      return NextResponse.json({ message: `Server Error` }, { status: 500 });
    }
    const data = await response.json();
    return NextResponse.json({ message: "Success", ...data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: `Server Error` }, { status: 500 });
  }
}
