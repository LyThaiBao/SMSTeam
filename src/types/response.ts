import { DepartmentTypeDetail, FormDepartmentType } from "./depart";
// import { TeacherDetailType, TeacherType } from "./people";



//----------------GET--------------------


export type DepartList = {
  message: string;
  Success: boolean;
  DT: {
    quantity: number;
    listFaculty: DepartmentTypeDetail[];
  };
};

//-----------POST-------------------------
