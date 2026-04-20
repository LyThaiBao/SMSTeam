export const dynamic = "force-dynamic";
import { cookies } from "next/headers";
import TeacherClient from "./_components/TeacherClient";
import { getTeachers } from "@/services/teacher/getTeachers";

export default async function TeacherPage({
  searchParams,
}: {
  searchParams: Promise<{ departmentId?: string; name?: string }>;
}) {
  // --------------get token-----------------
  const cook = await cookies();
  const token = cook.get("accessToken")?.value;
  //---------------------------------------
  const department = await searchParams;
  const teachers = await getTeachers({
    departmentId: department.departmentId,
    token: token,
  });
  return <TeacherClient teachers={teachers} />;
}
