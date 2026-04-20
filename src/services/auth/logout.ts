export async function logout() {
  const baseUrl = "/apis/auth";
  const response = await fetch(baseUrl, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Vo Logout Faild");
  }
  const dataSuccess = await response.json();
  return dataSuccess;
}
