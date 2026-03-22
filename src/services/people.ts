import {
  FormTeacherType,
  TeacherDetailType,
  TeacherType,
} from "@/types/people";
import { TeacherList } from "@/types/response";
import {
  BEError,
  BEGetResponse,
  BEGetSuccess,
  BEResponse,
  BESuccess,
  DeletResponse,
  GetSigleResponse,
  PostResponse,
  Response,
} from "@/types/teacher/response";

type TeachersResponse = {
  teachers: TeacherType[];
};
export async function getTeachers({
  departmentId,
  token,
}: {
  departmentId?: string;
  token?: string;
}) {
  const baseUrl =
    `${process.env.NEXT_PUBLIC_INTERNAL_URL}` || "http://localhost:3000";
  // const url = new URL(baseUrl);
  const url = new URL(`${baseUrl}/apis/teacher`);
  if (departmentId) {
    url.searchParams.append("departmentId", departmentId);
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`${response.statusText || "Server Error"}`);
  }
  // const { teachers } = (await response.json()) as TeachersResponse;
  const teachers: TeacherList = await response.json();
  return teachers.DATA.listLecturer;
}

export async function getTeacher(id: string | number, token: string) {
  console.log(">> IN");
  const baseUrl =
    `${process.env.NEXT_PUBLIC_INTERNAL_URL}` || "http://localhost:3000";
  const url = new URL(`${baseUrl}/apis/teacher/${id}`);
  console.log(">>URL ", url);
  const response = await fetch(`${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${token}`,
    },
    // credentials: "include",
  });
  const result: GetSigleResponse = await response.json();
  if (!response.ok) {
    throw new Error(`${result.message || "Server Error"}`);
  }
  // const teacher: TeacherType = data.data as ;
  console.log(">>>> TT: ", result.data);
  return result.data;
}

export async function postTeacher(info: FormTeacherType) {
  const baseUrl =
    `${process.env.NEXT_PUBLIC_INTERNAL_URL}` || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/apis/teacher`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
    credentials: "include",
  });
  const result: PostResponse = await response.json();
  if (!response.ok) {
    console.log(">>>>>>>>>>>>>>>>", result);
    throw new Error(result.message);
  }
  return result.data;
}

export async function deleteTeacher(id: string | number) {
  const baseUrl =
    `${process.env.NEXT_PUBLIC_INTERNAL_URL}` || "http://localhost:3000";
  const url = new URL(`${baseUrl}/apis/teacher/${id}`);

  const response = await fetch(url, {
    method: "DELETE",
    credentials: "include",
  });
  const result: DeletResponse = await response.json();
  console.log(">>> RESULT ", result);
  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}
