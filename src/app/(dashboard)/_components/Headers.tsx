"use client";

import { logout } from "@/services/logout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeaderAdmin() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [errors, setError] = useState<boolean>(false);
  useEffect(() => {
    const username = localStorage.getItem("username") || " ";
    setName(username);
  }, []);
  async function onLogout() {
    try {
      // const response = await logout();
      localStorage.removeItem("email");
      localStorage.removeItem("username");
      localStorage.removeItem("token");

      window.location.replace("/");
      router.refresh();
    } catch (err) {
      console.log(err);
      console.log("VO CATCh");
      setError(true);
    }
  }

  return (
    <div className="flex items-center">
      <div className="mr-4 text-blue-500">Chào, {name}</div>
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
