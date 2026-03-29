"use client";
import { getInitials } from "@/hooks/getInitals";
import EnableBadge from "./EnableBadge";
import GenderBadge from "./GenderBadge";
import StatusBadge from "./StatusBadge";

export default function StudentRow({
  student = { userName: "Nguyen Van Nam" },
  index,
  onView,
}: any) {
  const {
    userName,
    email,
    mssv,
    class_id,
    gender,
    enroll_year,
    status,
    enable,
  } = student;
  const AVATAR_COLORS = [
    { bg: "#EAF2FB", text: "#185FA5" },
    { bg: "#FBEAF0", text: "#993556" },
    { bg: "#EEEDFE", text: "#533AB7" },
    { bg: "#E1F5EE", text: "#0F6E56" },
    { bg: "#FAEEDA", text: "#854F0B" },
  ];
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length];
  return (
    <tr className="hover:bg-[#F8FAFD] transition-colors border-b border-[#EDF1F7] last:border-b-0">
      <td className="px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-semibold flex-shrink-0"
            style={{ background: "#EAF2FB", color: "#185FA5" }}
          >
            {getInitials(userName)}
          </div>
          <div>
            <p className="text-[13px] font-medium text-[#0C2340]">{userName}</p>
            <p className="text-[10px] text-[#9BAEC2]">{email}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-xs text-[#6B8099]">{mssv}</td>
      <td className="px-4 py-3 text-xs text-[#6B8099]">{class_id}</td>
      <td className="px-4 py-3">
        <GenderBadge gender={gender} />
      </td>
      <td className="px-4 py-3 text-xs text-[#6B8099]">{enroll_year}</td>
      <td className="px-4 py-3">
        <StatusBadge status={status} />
      </td>
      <td className="px-4 py-3">
        <EnableBadge enable={enable} />
      </td>
      <td className="px-4 py-3">
        <button
          onClick={() => onView(student)}
          className="text-[11px] font-medium text-[#185FA5] bg-[#EAF2FB] border border-[#B5D4F4] px-3 py-1 rounded-md hover:bg-[#D4E8F8] transition-colors"
        >
          View
        </button>
      </td>
    </tr>
  );
}
