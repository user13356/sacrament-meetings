"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/meetings",
      label: "Meetings",
    },
    {
      href: "/meetings/current",
      label: "Current Meeting",
    },
  ];

  return (
    <nav className="flex gap-4">
      {links.map((link) => {
        const active =
          pathname === link.href ||
          pathname.startsWith(link.href + "/");

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded px-3 py-2 transition ${
              active
                ? "bg-blue-700 text-white"
                : "text-blue-700 hover:bg-blue-100"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}