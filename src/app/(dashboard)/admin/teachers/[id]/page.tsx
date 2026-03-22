import { id } from "zod/locales";
import DetailTeacher from "./_components/DetailTeacher";
import { getTeacher } from "@/services/people";
import { TeacherType } from "@/types/people";
import { cookies } from "next/headers";

export default async function TeacherDetailPage({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const id = (await params).id;
  // console.log("Detail teachers >>> " + id);
  const cook = await cookies();
  const token = cook.get("accessToken")?.value || "";
  const teacher = await getTeacher(id, token);
  if (!teacher) {
    return <div>Không tìm thấy thông tin giảng viên!</div>;
  }
  return (
    <div className="">
      <DetailTeacher {...teacher.abc} />
    </div>
  );
}
