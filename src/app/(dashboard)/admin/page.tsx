import { getDepartments } from "@/services/department";
import MetricsCard, { MetricsCardType } from "./_components/MetricsCard";
import MetricsCardList from "./_components/MetricsCardList";
import { cookies } from "next/headers";
import { string } from "zod";
import { DepartList } from "@/types/response";

export default async function DashBoard() {
  const cook = await cookies();
  const token = cook.get("accessToken")?.value || "";
  console.log(">> token ", token);
  // // fetch data here
  const depart = await getDepartments(token);
  console.log(">> Page DashBoard ", depart);
  const departQuantity = depart.quantity;
  // //--------------------

  const metricsData: MetricsCardType[] = [
    {
      id: 1,
      imgSource: "/imgs/student.svg",
      title: "Số Lượng Học Viên",
      metrics: 4343,
    },
    {
      id: 2,
      imgSource: "/imgs/student.svg",
      title: "Số Lượng Giảng Viên",
      metrics: 4343,
    },
    {
      id: 3,
      imgSource: "/imgs/student.svg",
      title: "Số Lượng Ngành",
      metrics: 4343,
    },
    {
      id: 4,
      imgSource: "/imgs/student.svg",
      title: "Số Lượng Học ",
      metrics: 4343,
    },
    {
      id: 5,
      imgSource: "/imgs/student.svg",
      title: "Số Lượng Khoa",
      metrics: departQuantity,
    },
  ];
  return (
    <div className=" justify-center">
      <MetricsCardList cards={metricsData} />
    </div>
  );
}
