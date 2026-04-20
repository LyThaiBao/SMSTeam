import { DepartmentTypeDetail } from "../depart";

export interface GetFacultiesResponse{
     success: boolean;
      DT: {
        quantity: number;
        listFaculty: DepartmentTypeDetail[];
      };
}