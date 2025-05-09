import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import NavLinkList from "@/components/NavLinkList";
import ThemeSwitchButton from "@/components/ThemeSwitchButton";
import linkList from "@/data/linkList.json";

export default function Header() {
  return (
    <header className="navbar bg-base-100 border-b border-neutral lg:px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu className="w-6 h-6" />
          </div>
          <NavLinkList
            linkList={linkList}
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          />
        </div>

        <Link href="/">
          <Image
            src="/logos/sina-ghiasi.svg"
            className="mx-2"
            width={48}
            height={48}
            alt="logo"
            priority
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <NavLinkList linkList={linkList} className="flex flex-row gap-4" />
      </div>

      <div className="navbar-end">
        <a className="btn btn-xs sm:btn-sm btn-primary mx-4">دریافت رزومه</a>
        <ThemeSwitchButton />
      </div>
    </header>
  );
}
