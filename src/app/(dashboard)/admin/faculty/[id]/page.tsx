import { getToken } from "@/hooks/getToken";
import { getDepartment } from "@/services/department";
import Image from "next/image";
import FacultyDetail from "./_components/FacultyDetail";
import CardInfo from "./_components/CardInfo";

export default async function FacultyDetailPage(params: {
  params: Promise<{ id: string | number }>;
}) {
  const id = (await params.params).id;
  console.log(">>>> ID ", id);
  const token = await getToken();
  const data = await getDepartment(id, token);
  console.log(">>>> DT ", data);
  console.log(">>>", data?.DT.img);

  if (!data) {
    return <div> Khong Tai Duoc Trang Vui Long Thu Lai</div>;
  }
  return (
    <div>
      <FacultyDetail faculty={data?.DT} />
      <CardInfo />
    </div>
  );
}
