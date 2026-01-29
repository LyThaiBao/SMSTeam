import { LoginType } from "@/types/auth";

export async function login({ username, password }: LoginType) {
  const baseUrl = "apis/auth";

  const response = await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error(`${response.statusText || "Server Error"}`);
  }
  const dataSuccess = await response.json();
  return dataSuccess;
}
