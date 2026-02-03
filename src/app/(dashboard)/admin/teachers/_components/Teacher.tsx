import { TeacherType } from "@/types/people";

export default function Teacher({ name, major, id }: TeacherType) {
  async function onDelete(id: string | number) {
    console.log("Da xoa sinh vien" + id);
  }
  return (
    <li className="bg-[#5fd1ed] p-2 mb-3 flex flex-col gap-3 md:flex-row justify-between">
      <div>{name}</div>
      <div>{major}</div>
      <div className="flex justify-between items-center md:min-w-[40%]">
        <button className="cursor-pointer bg-blue-500 rounded-2xl py-2 px-5">
          Xem Chi Tiết
        </button>
        <button
          className="cursor-pointer bg-red-500 py-2 px-5 rounded-2xl"
          onClick={() => onDelete(id)}
        >
          Xóa
        </button>
      </div>
    </li>
  );
}
