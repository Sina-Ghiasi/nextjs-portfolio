import Link from "next/link";

const linkList = [
  {
    href: "/",
    title: "خانه",
  },
  {
    href: "/about",
    title: "درباره من",
  },
  {
    href: "/portfolios",
    title: "نمونه کارها",
  },
  {
    href: "/contact",
    title: "ارتباط با من",
  },
];
export default function NavLinkList({
  className,
  tabIndex,
}: {
  className?: string;
  tabIndex?: number;
}) {
  return (
    <ul tabIndex={tabIndex} className={className}>
      {linkList.map((link) => (
        <li key={link.href} className="mx-1">
          <Link
            href={link.href}
            className="hover:border-b-2 hover:border-primary"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
