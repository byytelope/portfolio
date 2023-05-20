"use client";

import { usePathname } from "next/navigation";
import NavButton from "./NavButton";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { name: "Me", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex gap-4 justify-center font-medium">
      {links.map((link) => {
        return (
          <NavButton
            href={link.href}
            active={pathname === link.href}
            key={link.href + "link"}
          >
            {link.name}
          </NavButton>
        );
      })}
    </nav>
  );
}
