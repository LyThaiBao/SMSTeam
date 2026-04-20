import { getToken } from "@/hooks/getToken";
import { FormDepartmentType } from "@/types/depart";
import { GetFacultiesResponse } from "@/types/faculty/getFacultysResponse";
import {
  BEPostResponse,
  BEPostSuccess,
} from "@/types/faculty/response";
import { BEError } from "@/types/response/errorResponse";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const cook = await cookies();
  const token = cook.get("accessToken")?.value;
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  try {
    const response = await fetch(`${beUrl}/faculty`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result:GetFacultiesResponse | BEError = await response.json();
    console.log("RESPON: ",result)
    if (!response.ok) {
      const err = result as BEError;
      return NextResponse.json({ message: err.MS, data:null,isSuccess:false }, { status: response.status });
    }
    const success = result as GetFacultiesResponse;
   return NextResponse.json({ message:"Get faculties Success" , data:success.DT.listFaculty,isSuccess:true }, { status: 200 });
  } catch (e) {
      return NextResponse.json({ message: "Server Error", data:null,isSuccess:false }, { status:500});
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
