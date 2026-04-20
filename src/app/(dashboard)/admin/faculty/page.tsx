
import FacultyList from "./_components/FacultyList";
import { getToken } from "@/hooks/getToken";
import { DepartmentTypeDetail } from "@/types/depart";
import FormAddDepartment from "./_components/FromAddDepartment";
import { getDepartments } from "@/services/faculty/getFaculties";
import FacultyClientPage from "./_components/FacultyClient";


export default async function FacultyPage() {
  const token: string = await getToken();
  console.log(">>>> TOKEN ", token);
  const data = await getDepartments(token);
  const faculties: DepartmentTypeDetail[] = data;
  return (
    <div>
     <FacultyClientPage faculties={faculties}/>
    </div>
  );
} 
