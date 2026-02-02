import { TeacherType } from "@/types/people";

export default function Teacher({ name, major, id }: TeacherType) {
  async function onDelete(id: string | number) {
    console.log("Da xoa sinh vien" + id);
  }
  return (
    <li className="bg-green-500">
      <div>{name}</div>
      <div>{major}</div>
      <button className="bg-blue-500">Xem Chi Tiết</button>
      <button className="bg-red-500" onClick={() => onDelete(id)}>
        Xóa
      </button>
    </li>
  );
}
