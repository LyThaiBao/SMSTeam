"use client"
import { DepartmentTypeDetail } from "@/types/depart";
import FacultyList from "./FacultyList";
import Option from "@/app/(dashboard)/_components/Option";
import { useState } from "react";
import FormAddDepartment from "./FromAddDepartment";

interface FacultyClientPageProp {
  faculties: DepartmentTypeDetail[];
  
}
export default function FacultyClientPage( {faculties }: FacultyClientPageProp){
    const [isOpenModal,setModal] = useState<boolean>(false);
    return <>
        <Option action={()=>setModal(true)} label="Thêm khoa" style="bg-blue-500 mb-2  py-4 px-6 rounded-2xl" />
        {isOpenModal && <FormAddDepartment onModal={setModal}/>}
         <FacultyList faculties={faculties} />
    </>
}