import { TeacherType } from "@/schemas/teacher";

export type TeacherList = {
  Success: boolean;
  DATA: {
    quantity: number;
    listLecturer: TeacherType[];
  };
};