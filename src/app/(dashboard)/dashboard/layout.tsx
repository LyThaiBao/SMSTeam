"use client";
import { ReactNode, useState } from "react";
import MenuAdmin from "./_components/MenuAdmin";
import HeaderAdmin from "./_components/Headers";

export default function DashBoardLayout({ children }: { children: ReactNode }) {
  const [isClose, setClose] = useState<boolean>(true);

  return (
    <div className="flex  flex-col  items-start md:flex-row">
      <aside
        className={`fixed inset-y-0 w-[70%] ${isClose ? "translate-x-[-100%]" : ""} md:translate-0 md:w-[40%] lg:w-[20%] z-10 transition-all`}
      >
        <MenuAdmin onClose={() => setClose(true)} />
      </aside>

      <div className="w-full md:ml-[40%] lg:ml-[20%]  flex-1">
        <header className="flex bg-gray-300 px-4 py-4  items-center justify-between md:justify-end gap-10">
          <button
            onClick={() => setClose(false)}
            className="text-black md:hidden text-2xl cursor-pointer text-blue-400 hover:text-blue-600"
          >
            <i className="fa-solid fa-list"></i>
          </button>
          <HeaderAdmin />
        </header>
        <main className="">{children}</main>
      </div>
    </div>
  );
}
