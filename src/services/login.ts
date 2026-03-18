import { LoginResponse, LoginType } from "@/types/auth";

export async function login({ email, passWord }: LoginType) {
  console.log("Vao login");
  const baseUrl = "apis/auth";

  const response = await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify({ email, passWord }),
  });
  if (!response.ok) {
    throw new Error(`${response.statusText || "Server Error"}`);
  }
  const dataSuccess: LoginResponse = await response.json();
  console.log(">>> ", dataSuccess);
  return dataSuccess;
}
