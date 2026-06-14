"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinkList({
  className,
  linkList,
}: {
  className?: string;
  linkList: { title: string; href: string }[];
}) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {linkList.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <li key={link.href} className="mx-1">
            <Link
              href={link.href}
              className={cn(
                "hover:border-b-2 hover:border-primary transition-all pb-1",
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
