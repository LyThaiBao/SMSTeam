import MetricsCard, { MetricsCardType } from "./MetricsCard";

export interface MetricsCardListType {
  cards: MetricsCardType[];
}
export default function MetricsCardList({ cards }: MetricsCardListType) {
  return (
    <div className="p-5 flex gap-5 flex-col flex-wrap items-center lg:flex-row">
      {cards.map((c) => (
        <MetricsCard key={c.id} {...c} />
      ))}
    </div>
  );
}
