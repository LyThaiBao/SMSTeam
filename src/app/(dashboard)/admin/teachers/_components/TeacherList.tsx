import { TeacherType } from "@/schemas/teacher";

import Teacher from "./Teacher";

interface TeacherListType {
  teachers: TeacherType[];
}
export default function TeacherList({ teachers }: TeacherListType) {
  // console.info("Teacher List>> ", teachers);
  if (teachers.length === 0) {
    return <div className="text-red-500">Không Tìm Thấy Giảng Viên</div>;
  }
  const quantity = teachers.length;
  return (
    <ul>
      <div className="bg-[#eef1f2e1] flex relative gap-2 items-center  mb-1 p-2 text-black rounded-tl-2xl rounded-tr-2xl">
        Lecturers
        <span className="absolute right-5 border border-blue-200 text-blue-500 bg-blue-100 rounded-2xl px-2">
          {quantity <= 1 ? `${quantity} member` : `${quantity} members`}
        </span>
      </div>
      {teachers.map((t) => (
        <Teacher key={t.id} {...t} />
      ))}
    </ul>
  );
}
