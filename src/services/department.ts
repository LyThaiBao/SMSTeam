import { FormDepartmentType } from "@/types/depart";
import { BEPostResponse, BEPostSuccess, GetSingleResponse } from "@/types/faculty/response";



export async function getDepartment(id: string | number, token?: string) {
  const baseUrl =
    `${process.env.NEXT_PUBLIC_INTERNAL_URL}` || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/apis/faculty/${id}`, {
    method: "GET",
    headers: {
      Cookie: `accessToken=${token}`,
    },
    credentials: "include",
  });
  console.log(">>> DEPart ", response);
  if (!response.ok) {
    throw new Error(`${response.statusText || "Server Error"}`);
  }

  const data: GetSingleResponse = await response.json();
  console.log(">> Data ", data);
  return data.data;
}


export async function postDepartment({token,data}:{token:string,data:FormDepartmentType}){
   const baseUrl =
    `${process.env.NEXT_PUBLIC_INTERNAL_URL}` || "http://localhost:3000";
    try{
       const response = await fetch(`${baseUrl}/apis/faculty`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Cookie:`accessToken=${token}`
      },
      body:JSON.stringify(data)
    })
    const result:RouteResponse<BEPostSuccess> = await response.json();
    console.log(">>>RESULT: ",result);
    if(!response.ok){
      throw new Error(result.message);
    }
    return result.data.Data;
    }
    catch(err){
      throw err;
    }
}