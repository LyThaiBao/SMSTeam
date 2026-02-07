export const dynamic = "force-dynamic";
import TeacherClient from "./_components/TeacherClient";
import { getTeachers } from "@/services/people";

export default async function TeacherPage({
  searchParams,
}: {
  searchParams: Promise<{ departmentId?: string; name?: string }>;
}) {
  const department = await searchParams;
  // console.log(">>>", department.departmentId);
  // console.log(">>>", department.name);
  const teachers = await getTeachers({ departmentId: department.departmentId });

  return <TeacherClient teachers={teachers} />;
}
