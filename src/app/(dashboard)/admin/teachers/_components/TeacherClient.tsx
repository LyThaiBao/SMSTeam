"use client";
import Option, { OptionType } from "@/app/(dashboard)/_components/Option";
import TeacherFilter from "./TeacherFilter";
import TeacherList from "./TeacherList";
import { TeacherType } from "@/types/people";
import FormAddTeacher from "./FormAddTeacher";
import { useState } from "react";

interface TeacherClientType {
  teachers: TeacherType[];
}
export default function TeacherClient({ teachers }: TeacherClientType) {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const goToTeachers = (): void => {
    console.log("ADD");

    // doi lai thanh show modal
    setOpenModal(true);
  };
  const dataOption: OptionType[] = [
    { id: 1, action: goToTeachers, label: "Thêm Giảng Viên" },
  ];

  return (
    <div>
      {/* <OptionList options={dataOption} /> */}

      <Option
        label="Thêm Giảng Viên"
        action={() => goToTeachers()}
        style="bg-blue-500 p-4 rounded-xl"
      />
      {isOpenModal && <FormAddTeacher onModal={setOpenModal} />}

      <TeacherFilter />

      <TeacherList teachers={teachers} />
    </div>
  );
}
