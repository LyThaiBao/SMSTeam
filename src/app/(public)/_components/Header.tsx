import Image from "next/image";
import NavBar from "./Navbar";
import List from "@/components/ui/List";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-blue-200 p-2">
      {/* <List /> */}
      <Image src={"/imgs/stu.png"} alt="logo" width={70} height={70} />
      <NavBar />
    </header>
  );
}
