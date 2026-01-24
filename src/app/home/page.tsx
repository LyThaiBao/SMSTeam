"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex justify-around mt-2">
      <h1 className="text-2xl">Chào, User</h1>
      <button className="px-3 py-2 rounded-sm cursor-pointer bg-blue-500">
        Đăng Kí Học Phần
      </button>
      <button
        onClick={() => {
          router.push("profile");
        }}
        className="px-3 py-2 rounded-sm cursor-pointer bg-green-500"
      >
        Hồ Sơ Của Tui
      </button>
      <button
        onClick={() => router.push("/login")}
        className="bg-red-300 px-1 rounded-sm py-0"
      >
        Đăng Xuất
      </button>
    </div>
  );
}
