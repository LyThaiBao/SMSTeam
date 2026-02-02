import { TeacherType } from "@/types/people";
import Teacher from "./Teacher";

interface TeacherListType {
  teachers: TeacherType[];
}
export default function TeacherList({ teachers }: TeacherListType) {
  return (
    <ul>
      {teachers.map((t) => (
        <Teacher key={t.id} {...t} />
      ))}
    </ul>
  );
}
