"use client";

import { logout } from "@/services/logout";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HeaderAdmin() {
  const router = useRouter();
  const [errors, setError] = useState<boolean>(false);
  async function onLogout() {
    try {
      const response = await logout();
      router.replace("/");
    } catch (err) {
      console.log(err);
      console.log("VO CATCh");
      setError(true);
    }
  }
  // if (errors) {
  //   return <div>Logout Faild</div>;
  // }
  const username = localStorage.getItem("username");
  return (
    <div className="flex items-center">
      <div className="mr-4 text-blue-500">Chào, {username}</div>
      <span className="mr-4 cursor-pointer text-xl">
        <i className="fa-regular fa-bell text-amber-200"></i>
      </span>
      <button
        onClick={() => onLogout()}
        className="cursor-pointer px-4 py-2 bg-blue-500 rounded-2xl"
      >
        Logout
      </button>
    </div>
  );
}
