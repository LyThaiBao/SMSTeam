import Image from "next/image";
import Faculty from "./Faculty";
import { DepartmentTypeDetail } from "@/types/depart";

interface FacultyListType {
  faculties: DepartmentTypeDetail[];
}
export default function FacultyList({ faculties }: FacultyListType) {
  const quantity = faculties.length;
  return (
    <div>
      <div className="bg-[#eef1f2e1] flex relative gap-2 items-center  mb-1 p-2 text-black rounded-tl-2xl rounded-tr-2xl">
        Faculties
        <Image
          src={"/imgs/faculty.png"}
          width={25}
          height={25}
          alt="faculty"
        ></Image>
        <span className="absolute right-5 border border-blue-200 text-blue-500 bg-blue-100 rounded-2xl px-2">
          {quantity <= 1 ? `${quantity} faculty` : `${quantity} faculties`}
        </span>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {faculties.map((f) => (
          <Faculty key={f.id} faculty={f} />
        ))}
      </div>
    </div>
  );
}
