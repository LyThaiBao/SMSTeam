import { Faculty } from "@/types/people";
import { NextResponse } from "next/server";

export async function GET() {
  const beUrl = process.env.BACKEND_URL || "localhost:8080";
  //   try {
  //     const response = await fetch(`${beUrl}/`, {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     if (!response.ok) {
  //       return NextResponse.json({ message: `Server Error` }, { status: 500 });
  //     }
  //     const successData: Faculty[] = await response.json();
  //     return NextResponse.json(successData, { status: 200 });
  //   } catch (e) {
  //     return NextResponse.json({ message: `Server Error` }, { status: 500 });
  //   }
  const faculties: Faculty[] = [
    {
      id: 1,
      name: "CICT",
      description: "information technology",
      createdAt: 9 - 1 - 2025,
      status: "active",
    },
    {
      id: 2,
      name: "NN",
      description: "Nong Nghiep",
      createdAt: 9 - 1 - 2025,
      status: "active",
    },
  ];
  return NextResponse.json(faculties, { status: 200 });
}
