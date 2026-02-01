"use client";
import { useRouter } from "next/navigation";
import { OptionType } from "../_components/Option";
import OptionList, { OptionListType } from "../_components/OptionList";

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
  return (
    <div>
      <OptionList options={dataOption} />
    </div>
  );
}
