import { getDepartments } from "@/services/department";
import MetricsCard, { MetricsCardType } from "./_components/MetricsCard";
import MetricsCardList from "./_components/MetricsCardList";
import { cookies } from "next/headers";
import { promise, string } from "zod";
import { DepartList } from "@/types/response";
import { get } from "https";
import { getTeachers } from "@/services/people";

export default async function DashBoard() {
  const cook = await cookies();
  const token = cook.get("accessToken")?.value || "";
  // console.log(">> token ", token);
  // // fetch data here
  const departmentPromise = getDepartments(token);
  const teachersPromise = getTeachers({ token: token });
  //-------------Lecturer

  const [department, teachers] = await Promise.all([
    departmentPromise,
    teachersPromise,
  ]);
  const departQuantity = department.quantity;
  const teacherQuantity = teachers.length;
  // console.log(">> Page DashBoard ", depart);
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
      metrics: teacherQuantity,
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
