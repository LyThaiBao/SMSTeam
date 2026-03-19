import { DepartmentTypeDetail, FormDepartmentType } from "./depart";
import { TeacherDetailType } from "./people";

export type TeacherList = {
  message: string;
  Success: boolean;
  DATA: {
    quantity: number;
    listLecturer: TeacherDetailType[];
  };
};

export type DepartList = {
  message: string;
  Success: boolean;
  DT: {
    quantity: number;
    listFaculty: DepartmentTypeDetail[];
  };
};
