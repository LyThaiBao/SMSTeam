export default function GenderBadge({ gender }: any) {
  return (
    <span
      className={`text-[10px] font-medium px-2 py-0.5 rounded-full
    ${gender === "Nam" ? "bg-[#EAF2FB] text-[#185FA5]" : "bg-[#FBEAF0] text-[#993556]"}`}
    >
      {gender}
    </span>
  );
}
