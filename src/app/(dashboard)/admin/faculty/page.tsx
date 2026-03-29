import { getDepartments } from "@/services/department";
import Faculty from "./_components/Faculty";
import FacultyList from "./_components/FacultyList";
import { getToken } from "@/hooks/getToken";
import { DepartmentTypeDetail } from "@/types/depart";

export default async function FacultyPage() {
  const token: string = await getToken();
  console.log(">>>> TOKEN ", token);
  const data = await getDepartments(token);
  const faculties: DepartmentTypeDetail[] = data.listFaculty;
  console.log("PAGE>> ", data);
  return (
    <div>
      <FacultyList faculties={faculties} />
    </div>
  );
}
