"use client";
import Link from "next/link";
import React from "react";
import { DiTerminalBadge } from "react-icons/di";
import { usePathname } from "next/navigation";
import classnames from "classnames";
const NavBar = () => {
  const currentpath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/" className=" text-4xl">
        <DiTerminalBadge />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-zinc-900": link.href == currentpath,
              "text-zinc-500": link.href !== currentpath,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
