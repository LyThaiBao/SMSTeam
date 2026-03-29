export default function StudentStatsStrip({
  total = 40,
  active = 20,
  inactive = 12,
  latestEnroll = 2024,
}: any) {
  // desktop: 4 cols | mobile: 3 cols (drop latestEnroll)
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 border-b border-[#EDF1F7]">
      {[
        { num: total.toLocaleString(), lbl: "Total", color: "#0C2340" },
        { num: active.toLocaleString(), lbl: "Active", color: "#185FA5" },
        { num: inactive.toLocaleString(), lbl: "Inactive", color: "#A32D2D" },
        {
          num: latestEnroll,
          lbl: "Latest enroll",
          color: "#3B6D11",
          hideOnMobile: true,
        },
      ].map(({ num, lbl, color, hideOnMobile }) => (
        <div
          key={lbl}
          className={`py-3 px-4 text-center border-r border-[#EDF1F7] last:border-r-0
          ${hideOnMobile ? "hidden md:block" : ""}`}
        >
          <p
            className="font-serif text-xl md:text-[22px] font-semibold leading-none mb-1"
            style={{ color }}
          >
            {num}
          </p>
          <p className="text-[9px] text-[#7A95B0] uppercase tracking-wider">
            {lbl}
          </p>
        </div>
      ))}
    </div>
  );
}
