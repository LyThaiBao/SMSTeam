import MetricsCard, { MetricsCardType } from "./_components/MetricsCard";
import MetricsCardList from "./_components/MetricsCardList";

export default function DashBoard() {
  // fetch data here
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
      title: "Số Lượng Học Viên",
      metrics: 4343,
    },
  ];
  return (
    <div className=" justify-center">
      <MetricsCardList cards={metricsData} />
    </div>
  );
}
