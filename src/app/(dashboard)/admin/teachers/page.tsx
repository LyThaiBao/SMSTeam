"use client";
import { useRouter } from "next/navigation";
import Option, { OptionType } from "../../_components/Option";
// import OptionList, { OptionListType } from "../_components/OptionList";
import TeacherList from "./_components/TeacherList";
import { TeacherType } from "@/types/people";
import TeacherFilter from "./_components/TeacherFilter";

export default function TeacherPage() {
  const router = useRouter();
  const goToTeachers = (): void => {
    console.log("ADD");
    router.push("teachers");
    // doi lai thanh show modal
  };
  const dataOption: OptionType[] = [
    { id: 1, action: goToTeachers, label: "Thêm Giảng Viên" },
  ];
  const teachers: TeacherType[] = [
    { id: 1, name: "Nguyen Van An", major: "IT" },
    { id: 2, name: "Nguyen Van An", major: "IT" },
  ];
  return (
    <div>
      {/* <OptionList options={dataOption} /> */}
      <Option
        label="Thêm Giảng Viên"
        action={() => {
          console.log("Thêm GV đi");
        }}
      />
      <TeacherFilter />
      <TeacherList teachers={teachers} />
    </div>
  );
}
