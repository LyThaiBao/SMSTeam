import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <Link href={"/login"} className="p-3 bg-blue-400 rounded-2xl">
          Đăng Nhập
        </Link>
      </nav>
    </>
  );
}
