import { FormDepartmentType } from "@/types/depart";
import { RouteResponse } from "@/types/response/routeResponse";
import { BEPostSuccess } from "@/types/teacher/response";

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
  
    if(!response.ok){
      throw new Error(result.message);
    }
    return result.data;
    }
    catch(err){
      throw err;
    }
}