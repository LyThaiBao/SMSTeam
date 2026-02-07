export type TeacherType = {
  id: string | number;
  name: string;
  faculty: string;
};

type Gender = "Nam" | "Nữ;";
export type TeacherDetailType = TeacherType & { phone: string; gender: Gender };
