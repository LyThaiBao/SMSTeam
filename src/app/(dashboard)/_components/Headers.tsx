"use client";

import { logout } from "@/services/auth/logout";
import { Bell, LogOut } from "lucide-react";
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
      const response = await logout();
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
    <div className="flex items-center gap-6">
      <div className="text-sm font-medium text-slate-600">
        Chào, <span className="font-bold text-slate-900">{name}</span>
      </div>

      <button className="relative p-2 text-slate-400 hover:text-blue-600 transition-colors">
        <Bell size={20} />
        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
      </button>

      <button
        onClick={onLogout}
        className="flex items-center cursor-pointer gap-2 px-4 py-2 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-300"
      >
        <LogOut size={16}  className=""/>
        Logout
      </button>
    </div>
  );
}
