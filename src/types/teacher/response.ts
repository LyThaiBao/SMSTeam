import { TeacherDetailType } from "../people";

//-------------BE POST---------------
export interface BESuccess {
  Success: boolean;
  lecturer: Omit<TeacherDetailType, "passWord" | "faculty_id">;
}

export interface BEError {
  Success: boolean;
  MS: string;
}

export type BEResponse = BESuccess | BEError;

//---------SERVICE POST---------------
export interface PostResponse {
  message: string;
  data?: Pick<BESuccess, "lecturer">;
}
