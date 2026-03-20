import { cookies } from "next/headers";
import { LoginResponse, LoginType } from "@/types/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  const data: LoginType = (await request.json()) || "";
  // console.log("Da vao Route>>> ", data);
  // console.log(">>> BE_URL ", beUrl);

  const response = await fetch(`${beUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  // console.log(">>> Route Response ", response);
  if (!response.ok) {
    return NextResponse.json({ message: `Server Error` }, { status: 500 });
  }
  const dataResponse: LoginResponse = await response.json();

  const toClient = NextResponse.json(
    { message: "Login Success", ...dataResponse },
    { status: 200 },
  );
  toClient.cookies.set("accessToken", dataResponse.access_token, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
  });
  return toClient;
  // return NextResponse.json(
  //   { message: "Login Success", role: "admin", username: "Ly Thai Bao" },
  //   { status: 200 },
  // );
}

export async function DELETE(request: Request) {
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  const cook = await cookies();
  cook.delete("accessToken");
  return NextResponse.json({ message: "Logout Success" }, { status: 200 });
}
