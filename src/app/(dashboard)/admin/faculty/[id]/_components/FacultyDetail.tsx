import { DepartmentTypeDetail } from "@/types/depart";

interface FacultyProp {
  faculty: DepartmentTypeDetail;
}
export default function FacultyDetail({ faculty }: FacultyProp) {
  return (
    <div>
      <div className="w-full h-[300px] relative rounded-2xl overflow-hidden ">
        {/* fill yeu cau parent phai co relative */}
        <img src={`${faculty.img}`} alt="" className="size-full object-cover" />
        {/* hoc them ve cai nay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1932]/80 via-[#0a1932]/20 to-transparent" />

        <div className=" p-2 absolute bottom-5 ">
          <h2 className="font-extrabold  text-3xl mb-2 ">{faculty.name}</h2>
          <ul className="flex gap-4 items-center ">
            <li className="text-[#dadada]">{faculty.code}</li>
            <li className="bg-[#ddd] size-1 rounded-[50%]"></li>
            <li className="text-[#dadada]">ID#{faculty.id}</li>
            <li className="bg-[#ddd] size-1 rounded-[50%]"></li>
            <li
              className={`px-2  bg-[rgba(56,180,100,0.2)] border border-green-500 rounded-2xl ${faculty.status >= 1 ? "text-green-500" : "bg-red-500"}`}
            >
              {faculty.status >= 1 ? `Active` : `Unactive`}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
