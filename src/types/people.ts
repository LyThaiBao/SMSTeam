import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export type TeacherType = {
  id: string | number;
  name: string;
  faculty: string;
};

type Gender = "Nam" | "Nữ;";
export type TeacherDetailType = TeacherType & { phone: string; gender: Gender };

export type Faculty = {
  id: string | number;
  name: string;
  description: string;
  status: string;
  createdAt: Timestamp;
};
