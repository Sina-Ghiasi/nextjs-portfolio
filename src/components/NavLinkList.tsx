import Link from "next/link";

export default function NavLinkList({
  className,
  linkList,
  tabIndex,
}: {
  className?: string;
  linkList: { title: string; href: string }[];
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
