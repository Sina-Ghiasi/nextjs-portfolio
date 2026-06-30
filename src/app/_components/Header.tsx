import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import NavLinkList from "@/components/NavLinkList";
import ThemeSwitchButton from "@/components/ThemeSwitchButton";
import { getAllNavLinksFromDb } from "@/lib/db/queries/navLinks";

export default async function Header() {
  const navLinks = await getAllNavLinksFromDb();

  return (
    <header className="navbar border-b border-neutral bg-base-100 lg:px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu className="h-6 w-6" />
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu z-1 mt-3 min-w-32 rounded-box bg-base-100 p-2 shadow-sm"
          >
            {navLinks.map((link) => (
              <li key={link.href} className="mx-1">
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
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

      <div className="navbar-center hidden lg:block">
        <NavLinkList linkList={navLinks} className="flex flex-row gap-4" />
      </div>

      <div className="navbar-end">
        <a
          href={process.env.NEXT_PUBLIC_RESUME_URL}
          className="btn mx-4 btn-primary btn-xs sm:btn-sm"
          target="_blank"
          rel="noopener"
        >
          دریافت رزومه
        </a>

        <ThemeSwitchButton />
      </div>
    </header>
  );
}
