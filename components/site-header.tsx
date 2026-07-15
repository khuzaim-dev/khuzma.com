"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/data";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-8" id="about">
      <span className="text-[12px] cursor-pointer uppercase tracking-widest text-neutral-600 font-medium">
        {siteConfig.estYear}
      </span>
      <nav className="flex items-center gap-5">
        {siteConfig.navLinks.map((link) => {
          const isHome = pathname === "/";
          const href = isHome ? link.href : `/${link.href}`;

          return (
            <a
              key={link.href}
              href={href}
              className="text-[11px] uppercase tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors duration-150"
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
