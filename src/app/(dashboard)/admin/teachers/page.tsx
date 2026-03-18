export const dynamic = "force-dynamic";
import { cookies } from "next/headers";
import TeacherClient from "./_components/TeacherClient";
import { getTeachers } from "@/services/people";

export default async function TeacherPage({
  searchParams,
}: {
  searchParams: Promise<{ departmentId?: string; name?: string }>;
}) {
  // --------------get token-----------------
  const cook = await cookies();
  const token = cook.get("accessToken")?.value;
  console.log(">>> token ", token);
  //---------------------------------------
  const department = await searchParams;
  // console.log(">>>", department.departmentId);
  // console.log(">>>", department.name);
  const teachers = await getTeachers({
    departmentId: department.departmentId,
    token: token,
  });
  console.log(">>> Page ", teachers);

  return <TeacherClient teachers={teachers} />;
}
