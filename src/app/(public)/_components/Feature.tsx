import StudentFeature from "./StudentFeature";
import TeacherFeature from "./TeacherFeature";

export default function Feature() {
  return (
    <div className="flex flex-col gap-10 text-black overflow-hidden">
      <h2 className="text-2xl font-bold mt-10 text-blue-500">
        Những Chức Năng Nổi Bậc
      </h2>
      <StudentFeature />
      <TeacherFeature />
    </div>
  );
}
