import { LoginResponse, LoginType } from "@/types/auth/login";
import { RouteResponse } from "@/types/response/routeResponse";

export async function login({ email, passWord }: LoginType) {
  const baseUrl = "apis/auth";
  try{
    const response = await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify({ email, passWord }),
    });
  const result:RouteResponse<LoginResponse> = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  
  return result.data;
  }
  catch(err){
    throw err;
  }
}
