import { cookies } from "next/headers";
import { LoginFail, LoginResponse, LoginType } from "@/types/auth/login";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  const data: LoginType = (await request.json()) || "";
  try{
     const response = await fetch(`${beUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result:LoginResponse | LoginFail = await response.json();
  if (!response.ok) {
    const err =  result as LoginFail;
    return NextResponse.json({ message: err.MessageError,data:null,isSuccess:false }, { status: response.status });
  }

  const success = result as LoginResponse;
  const toClient = NextResponse.json(
    { message: "Login Success", data:{...success,isSuccess:true} },
    { status: 200 },
  );
  toClient.cookies.set("accessToken", success.access_token, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
  });
  return toClient;
  }
  catch(err){
    return NextResponse.json({ message: `Server Error`,data:null,isSuccess:false }, { status: 500 });

  }
    
}

export async function DELETE(request: Request) {
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  const cook = await cookies();
  cook.delete("accessToken");
  return NextResponse.json({ message: "Logout Success" }, { status: 200 });
}
