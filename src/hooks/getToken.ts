import { cookies } from "next/headers";

export async function getToken() {
  const cook = await cookies();
  const token: string = cook.get("accessToken")?.value || "";
  return token;
}
