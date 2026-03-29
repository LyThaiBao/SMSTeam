import { TeacherType } from "@/types/people";
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
        {/* <svg className="section-icon size-5" viewBox="0 0 18 18" fill="none">
          <circle
            cx="6.5"
            cy="6"
            r="2.5"
            stroke="#185FA5"
            strokeWidth="1.4"
          ></circle>
          <path
            d="M1.5 15c0-2.485 2.239-4 5-4s5 1.515 5 4"
            stroke="#185FA5"
            stroke-width="1.4"
            stroke-linecap="round"
          ></path>
          <circle
            cx="13"
            cy="6"
            r="2"
            stroke="#185FA5"
            stroke-width="1.4"
          ></circle>
          <path
            d="M16.5 15c0-2-1.343-3.5-3.5-3.5"
            stroke="#185FA5"
            stroke-width="1.4"
            stroke-linecap="round"
          ></path>
        </svg> */}
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
