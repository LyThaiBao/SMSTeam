import { LucideIcon } from "lucide-react";
import Image from "next/image";

export interface MetricsCardType {
  id: string | number;
  icon:LucideIcon;
  title: string;
  metrics: number;
}

export default function MetricsCard({
  icon:Icon,
  title,
  metrics,
}: MetricsCardType) {
  return (
    <section className="flex items-center gap-5 border border-slate-200 bg-white hover:border-blue-500 hover:shadow-lg transition-all duration-300 p-6 rounded-3xl">
      {/* Icon Wrapper */}
      <div className="flex-shrink-0 p-3 bg-slate-50 rounded-2xl">
       <Icon className="" strokeWidth={2.5} size={32}/>
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <p className="text-sm text-slate-500 font-medium">{title}</p>
        <h4 className="text-2xl font-bold text-slate-800">{metrics}</h4>
      </div>
    </section>
  );
}