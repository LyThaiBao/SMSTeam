export default function StatusBadge({ status }: any) {
  return (
    <span
      className={`text-[10px] font-medium px-2 py-0.5 rounded-full border
    ${
      status === "active"
        ? "bg-[#E3F0FF] text-[#185FA5] border-[#B5D4F4]"
        : "bg-[#FCEBEB] text-[#A32D2D] border-[#F7C1C1]"
    }`}
    >
      {status === "active" ? "Active" : "Inactive"}
    </span>
  );
}
