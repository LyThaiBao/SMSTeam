import Image from "next/image";

export interface MetricsCardType {
  id: string | number;
  imgSource: string;
  title: string;
  metrics: number;
}
export default function MetricsCard({
  imgSource,
  title,
  metrics,
}: MetricsCardType) {
  return (
    <section className="flex gap-3  bg-blue-200 w-fit p-20  md:p-10 rounded-2xl">
      <Image
        src={`${imgSource}`}
        height={50}
        width={50}
        alt="demo_picture"
      ></Image>
      <div className="text-[#333] font-bold">
        <p>{title}</p>
        <h4 className="text-2xl">{metrics}</h4>
      </div>
    </section>
  );
}
