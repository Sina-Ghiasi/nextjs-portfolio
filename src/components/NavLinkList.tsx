"use client";

import { NavLinkType } from "@/types/navLink";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkListProps {
  className?: string;
  linkList: NavLinkType[];
}

export default function NavLinkList({ className, linkList }: NavLinkListProps) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {linkList.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <li key={link.id} className="mx-1">
            <Link
              href={link.href}
              className={cn(
                "pb-1 transition-all hover:border-b-2 hover:border-primary",
                isActive
                  ? "border-b-2 border-primary"
                  : "border-b-2 border-transparent",
              )}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
