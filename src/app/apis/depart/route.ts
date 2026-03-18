import { DepartList } from "@/types/response";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cook = await cookies();
  const token = cook.get("accessToken")?.value;
  // console.log(">>> IN ROUTE ", token);
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  try {
    const response = await fetch(`${beUrl}/faculty`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(">>> RESPONSE ", response);
    if (!response.ok) {
      return NextResponse.json({ message: "Server Error" }, { status: 500 });
    }
    const departments: DepartList = await response.json();

    return NextResponse.json({ ...departments }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ massage: "Server Error" }, { status: 500 });
  }
}
