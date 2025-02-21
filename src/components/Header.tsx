import Link from "next/link";
import Logo from "./Logo";
import { Menu } from "lucide-react";
import NavLinkList from "./NavLinkList";
import ThemeSwitchButton from "./ThemeSwitchButton";

export default function Header() {
  return (
    <div className="navbar bg-base-100 lg:px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu className="w-6 h-6" />
          </div>
          <NavLinkList
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          />
        </div>

        <Link href="/">
          <Logo className="w-12 h-12 mx-2" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <NavLinkList className="menu menu-horizontal px-1" />
      </div>

      <div className="navbar-end">
        <a className="btn btn-xs sm:btn-sm btn-primary mx-4">دریافت رزومه</a>
        <ThemeSwitchButton />
      </div>
    </div>
  );
}
