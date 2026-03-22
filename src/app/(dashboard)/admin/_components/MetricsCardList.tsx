import MetricsCard, { MetricsCardType } from "./MetricsCard";

export interface MetricsCardListType {
  cards: MetricsCardType[];
}

export default function MetricsCardList({ cards }: MetricsCardListType) {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5 ">
      {cards.map((c) => (
        <MetricsCard key={c.id} {...c} />
      ))}
    </div>
  );
}
