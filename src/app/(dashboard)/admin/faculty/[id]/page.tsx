import { getToken } from "@/hooks/getToken";

import Image from "next/image";
import FacultyDetail from "./_components/FacultyDetail";
import CardInfo from "./_components/CardInfo";
import { getDepartment } from "@/services/faculty/getFaculty";

export default async function FacultyDetailPage(params: {
  params: Promise<{ id: string | number }>;
}) {
  const id = (await params.params).id;
  const token = await getToken();
  const data = await getDepartment(id, token);
  if (!data) {
    return <div> Khong Tai Duoc Trang Vui Long Thu Lai</div>;
  }
  return (
    <div>
      <FacultyDetail faculty={data?.DT} />
      <CardInfo/>
    </div>
  );
}
