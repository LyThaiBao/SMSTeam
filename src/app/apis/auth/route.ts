import { cookies } from "next/headers";
import { LoginType } from "@/types/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  const data: LoginType = (await request.json()) || "";
  console.log("Da vao Route>>> ", data);
  //   try {
  //     const response = await fetch(`${beUrl}/auth/login`, {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //     });
  //     if (!response.ok) {
  //       return NextResponse.json({ message: `Server Error` }, { status: 500 });
  //     }
  //     return NextResponse.json({ message: "Login Success" }, { status: 200 });
  //   } catch (err) {
  //     return NextResponse.json({ message: `Server Error` }, { status: 500 });
  //   }

  return NextResponse.json({ message: "Login Success" }, { status: 200 });
}

export async function DELETE(request: Request) {
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  const cook = await cookies();
  const token = cook.get("accessToken") || "ko co token";
  console.log("Logout>>>", token);
  //   try {
  //     const response = await fetch(`${beUrl}/auth/logout`);
  //     if (response.ok) {
  //       return NextResponse.json({ message: `Server Error` }, { status: 500 });
  //     }
  //     return NextResponse.json({ message: "Login Success" }, { status: 200 });
  //   } catch (err) {
  //     return NextResponse.json({ message: `Server Error` }, { status: 500 });
  //   }
  return NextResponse.json({ message: "Logout Success" }, { status: 200 });
}
