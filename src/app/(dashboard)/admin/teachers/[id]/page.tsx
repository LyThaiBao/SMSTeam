import { id } from "zod/locales";
import DetailTeacher from "./_components/DetailTeacher";

export default async function TeacherDetailPage({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const id = (await params).id;
  console.log("Detail teachers >>> " + id);
  return (
    <div className="">
      <DetailTeacher />
    </div>
  );
}
