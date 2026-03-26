import { DepartmentTypeDetail } from "../depart";
import type { Response, BEError } from "../teacher/response";

//-------------GENERIC-------------
type BEResponse<T> = T | BEError;
//--------------GETS---------------
export interface BEGetSuccess {
  success: boolean;
  DT: {
    quantity: number;
    listFaculty: DepartmentTypeDetail[];
  };
}

export type BEGetResponse = BEResponse<BEGetSuccess>;

//----------GET------------------
export interface BEGetSingleSuccess {
  success: boolean;
  DT: DepartmentTypeDetail;
}

export type BEGetSingleResponse = BEResponse<BEGetSingleSuccess>;
//----------POST-----------------
export interface BEPostSuccess {
  Success: boolean;
  Data: DepartmentTypeDetail;
}
export type BEPostResponse = BEResponse<BEPostSuccess>;

//---------PATCH--------------R
export interface BEPatchSuccess {
  success: boolean;
  data: DepartmentTypeDetail;
}
export type BEPatchResponse = BEResponse<BEPatchSuccess>;

//----------DELETE--------------
export type BEDeleteResponse = BEError;
//---------SERVICE------------

export type GetResponse = Response<BEGetSuccess>;
export type GetSingleResponse = Response<BEGetSingleSuccess>;
export type PostResponse = Response<BEPostSuccess>;
export type PatchResponse = Response<BEPatchSuccess>;
export type DeleteResponse = Response<BEError>;
