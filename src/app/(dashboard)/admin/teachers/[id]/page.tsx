import { id } from "zod/locales";
import DetailTeacher from "./_components/DetailTeacher";

import { cookies } from "next/headers";
import { TeacherType } from "@/schemas/teacher";
import { getTeacher } from "@/services/teacher/getTeacher";

export default async function TeacherDetailPage({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const id = (await params).id;
  const cook = await cookies();
  const token = cook.get("accessToken")?.value || "";
  const teacher: TeacherType = await getTeacher(id, token);
  console.log(">>> teacher: ", teacher);
  if (!teacher) {
    return <div>Không tìm thấy thông tin giảng viên!</div>;
  }
  console.log(">> Data Page : ", teacher);
  return (
    <div className="">
      <DetailTeacher {...teacher} />
    </div>
  );
}
