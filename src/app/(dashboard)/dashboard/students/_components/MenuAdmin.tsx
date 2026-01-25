"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface MenuType {
  isClose: boolean;
}
export default function MenuAdmin() {
  const [isClose, setClose] = useState<boolean>(true);
  return (
    <>
      <section
        className={`bg-blue-700 flex flex-col  fixed left-0 top-0 bottom-0 min-w-[70%] md:min-w-[40%] lg:min-w-[20%] flex-wrap gap-15 p-3 ${isClose ? "translate-x-[-100%]" : ""} md:translate-x-0`}
      >
        <figure className="flex justify-between items-center">
          <Image src={"/imgs/stu.png"} alt="logo" width={70} height={70} />
          <button
            onClick={() => setClose(true)}
            className="text-2xl cursor-pointer hover:text-red-400 md:hidden"
          >
            <img src="/imgs/sidebar.svg" alt="" width={30} height={30} />
          </button>
        </figure>
        <ul className="flex flex-col gap-5">
          <li>
            <Link
              className="flex gap-2 items-center hover:text-amber-300"
              href={"."}
            >
              <i className="fa-regular fa-house"></i>Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center hover:text-amber-300"
              href={"teachers"}
            >
              <i className="fa-solid fa-chalkboard-user"></i>Teachers
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center hover:text-amber-300"
              href={"students"}
            >
              <i className="fa-solid fa-graduation-cap"></i>Students/classes
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center hover:text-amber-300"
              href={"settings"}
            >
              <i className="fa-solid fa-gear"></i>Settings and profile
            </Link>
          </li>
        </ul>
      </section>
      <button
        onClick={() => setClose(false)}
        className="text-black md:hidden text-2xl cursor-pointer text-blue-400 hover:text-blue-600"
      >
        <i className="fa-solid fa-list"></i>
      </button>
    </>
  );
}
