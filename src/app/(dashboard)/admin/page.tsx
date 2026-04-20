import MetricsCard, { MetricsCardType } from "./_components/MetricsCard";
import MetricsCardList from "./_components/MetricsCardList";
import { cookies } from "next/headers";
import { promise, string } from "zod";
import { DepartList } from "@/types/response";
import { get } from "https";
import { BookOpen, Building2, GraduationCap, Library, Users } from "lucide-react";
import { getTeachers } from "@/services/teacher/getTeachers";
import { getDepartments } from "@/services/faculty/getFaculties";

export default async function DashBoard() {
  const cook = await cookies();
  const token = cook.get("accessToken")?.value || "";
  // console.log(">> token ", token);
  // // fetch data here
  const departmentPromise = getDepartments(token);
  const teachersPromise = getTeachers({ token: token });
  //-------------Lecturer

  const [ department,teachers] = await Promise.all([
    departmentPromise,
    teachersPromise,
  ]);
  const departQuantity = department.length;
  const teacherQuantity = teachers.length;

  // //--------------------

 const metricsData: MetricsCardType[] = [
    {
      id: 1,
      icon: GraduationCap,
      title: "Số Lượng Học Viên",
      metrics: 4343,
    },
    {
      id: 2,
      icon: Users,
      title: "Số Lượng Giảng Viên",
      metrics: teacherQuantity,
    },
    {
      id: 3,
      icon: BookOpen,
      title: "Số Lượng Ngành",
      metrics: 4343,
    },
    {
      id: 4,
      icon: Library,
      title: "Số Lượng Học Phần",
      metrics: 4343,
    },
    {
      id: 5,
      icon: Building2,
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
