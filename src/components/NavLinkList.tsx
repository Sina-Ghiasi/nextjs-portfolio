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
    href: "/projects",
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
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
}
