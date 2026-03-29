"use client";
export default function StudentPageHeader({
  search,
  onSearch,
  gender,
  onGender,
  status,
  onStatus,
}: any) {
  return (
    <div className="mb-5">
      {/* title row */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-[#0C2340] font-serif">
            Students
          </h1>
          <p className="text-xs text-[#9BAEC2] mt-0.5">
            Manage all students in the system
          </p>
        </div>
      </div>

      {/* desktop: search + selects inline */}
      <div className="hidden md:flex items-center gap-2">
        <div className="relative flex-1 max-w-xs">
          <svg
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9BAEC2]"
            viewBox="0 0 14 14"
            fill="none"
          >
            <circle
              cx="6"
              cy="6"
              r="4"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M10 10l2.5 2.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search name, MSSV, email..."
            className="w-full pl-8 pr-3 py-1.5 text-xs border border-[#D1DAEA] rounded-lg bg-[#F8FAFD] outline-none focus:border-[#378ADD]"
          />
        </div>
        <select
          value={gender}
          onChange={(e) => onGender(e.target.value)}
          className="text-xs border border-[#D1DAEA] rounded-lg px-3 py-1.5 bg-white text-[#4A6278] outline-none"
        >
          <option value="">All gender</option>
          <option>Nam</option>
          <option>Nữ</option>
        </select>
        <select
          value={status}
          onChange={(e) => onStatus(e.target.value)}
          className="text-xs border border-[#D1DAEA] rounded-lg px-3 py-1.5 bg-white text-[#4A6278] outline-none"
        >
          <option value="">All status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* mobile: search full width + chips */}
      <div className="md:hidden space-y-2">
        <div className="relative">
          <svg
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9BAEC2]"
            viewBox="0 0 14 14"
            fill="none"
          >
            <circle
              cx="6"
              cy="6"
              r="4"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M10 10l2.5 2.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search name, MSSV…"
            className="w-full pl-8 pr-3 py-2 text-sm border border-[#D1DAEA] rounded-xl bg-[#F8FAFD] outline-none focus:border-[#378ADD]"
          />
        </div>
        {/* filter chips */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {["All", "Nam", "Nữ", "Active", "Inactive"].map((chip) => (
            <button
              key={chip}
              onClick={() => {
                if (chip === "Nam" || chip === "Nữ")
                  onGender(chip === gender ? "" : chip);
                else if (chip === "Active")
                  onStatus(status === "active" ? "" : "active");
                else if (chip === "Inactive")
                  onStatus(status === "inactive" ? "" : "inactive");
                else {
                  onGender("");
                  onStatus("");
                }
              }}
              className={`text-xs font-medium px-3 py-1 rounded-full border whitespace-nowrap transition-colors
              ${
                (chip === "All" && !gender && !status) ||
                chip === gender ||
                (chip === "Active" && status === "active") ||
                (chip === "Inactive" && status === "inactive")
                  ? "bg-[#185FA5] text-white border-[#185FA5]"
                  : "bg-white text-[#6B8099] border-[#D1DAEA]"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
