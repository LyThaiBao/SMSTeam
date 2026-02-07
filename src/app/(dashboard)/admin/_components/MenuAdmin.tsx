"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface MenuType {
  onClose: () => void;
}
export default function MenuAdmin({ onClose }: MenuType) {
  return (
    <>
      <section className={`bg-blue-700 flex flex-col h-full gap-5 px-2 `}>
        <figure className="flex justify-between items-center border-b-1 pb-3">
          <Image src={"/imgs/stu.png"} alt="logo" width={70} height={70} />
          <button
            onClick={onClose}
            className="text-2xl cursor-pointer hover:text-red-400 md:hidden"
          >
            <img src="/imgs/sidebar.svg" alt="" width={30} height={30} />
          </button>
        </figure>
        <ul className="flex flex-col gap-5">
          <li>
            <Link
              className="flex gap-2 items-center hover:text-amber-300"
              href={"/admin"}
            >
              <i className="fa-solid fa-house"></i>Tổng Quan
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center hover:text-amber-300"
              href={"/admin/teachers"}
            >
              <i className="fa-solid fa-chalkboard-user"></i>Giảng Viên
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center hover:text-amber-300"
              href={"/admin/students"}
            >
              <i className="fa-solid fa-graduation-cap"></i>
              Sinh Viên
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center hover:text-amber-300"
              href={"/admin/students"}
            >
              <i className="fa-solid fa-user-doctor"></i>
              Lớp Chuyên Ngành
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center hover:text-amber-300"
              href={"/admin/students"}
            >
              <i className="fa-solid fa-users"></i>
              Lớp Học Phần
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center hover:text-amber-300"
              href={"/admin/settings"}
            >
              <i className="fa-solid fa-gear"></i>Settings and profile
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
