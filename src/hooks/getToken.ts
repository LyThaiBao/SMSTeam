import { cookies } from "next/headers";

export async function getToken() {
  const cook = await cookies();
  const token = cook.get("accessToken");
  return token;
}
