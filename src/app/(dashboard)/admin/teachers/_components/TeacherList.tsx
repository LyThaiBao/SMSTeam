import { TeacherType } from "@/types/people";
import Teacher from "./Teacher";

interface TeacherListType {
  teachers: TeacherType[];
}
export default function TeacherList({ teachers }: TeacherListType) {
  console.info("Teacher >> ", teachers);
  if (teachers.length === 0) {
    return <div className="text-red-500">Không Tìm Thấy Giảng Viên</div>;
  }
  return (
    <ul>
      {teachers.map((t) => (
        <Teacher key={t.id} {...t} />
      ))}
    </ul>
  );
}
