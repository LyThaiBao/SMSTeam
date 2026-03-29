import StudentPageHeader from "./_components/StudentPageHeader";
import StudentRow from "./_components/StudentRow";
import StudentStatsStrip from "./_components/StudentStatsStrip";

export default function StudentList() {
  return (
    <div>
      <StudentPageHeader />
      <StudentStatsStrip />
      <StudentRow />
    </div>
  );
}
