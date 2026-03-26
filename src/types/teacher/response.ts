import { keyof } from "zod";
import { TeacherDetailType, TeacherType } from "../people";

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

//-----------BE GET--------------------
export interface BEGetSuccess {
  Success: boolean;
  DATA: TeacherType;
}

export type BEGetResponse = BEGetSuccess | BEError;
// --------------BE DELETE----------------

//---------SERVICE POST---------------
export type Response<T> = {
  message: string;
  data?: T;
};
// -------------DELETE---------------
export interface BEDeletSuccess{

}

//------------------------RESPONSE-------------------
export type PostResponse = Response<BESuccess>;
export type GetSigleResponse = Response<BEGetSuccess>;
export type DeletResponse = Response<BEError>
