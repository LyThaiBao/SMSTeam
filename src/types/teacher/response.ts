import { TeacherDetailType } from "@/schemas/teacher";
import { BEError } from "../response/errorResponse";


//-------------BE POST---------------
export interface BEPostSuccess {
  Success: boolean;
  lecturer: Omit<TeacherDetailType, "passWord" | "faculty_id">;
}


export type BEResponse = BEPostSuccess | BEError;



//---------SERVICE POST---------------
export type Response<T> = {
  message: string;
  data?: T;
};


//------------------------RESPONSE-------------------
export type PostResponse = Response<BEPostSuccess>;
export type DeletResponse = Response<BEError>;
