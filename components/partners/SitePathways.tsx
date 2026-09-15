"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { websitePages } from "@/lib/site-data";

const parents: Record<string, { href: string; label: string }> = {
  "/diagnostic": { href: "/how-matter-control-works", label: "Operations" },
  "/demo-case": { href: "/how-matter-control-works", label: "Operations" },
  "/use-cases": { href: "/what-we-do", label: "What we do" },
  "/offers": { href: "/what-we-do", label: "What we do" },
};

export function SitePathways() {
  const pathname = usePathname();
  const current = websitePages.find((page) => page.href === pathname);
  const parent = parents[pathname];
  if (pathname === "/") return null;
  return (
    <div className="juris-pathways">
      <div className="container juris-pathways-inner">
        <nav aria-label="Breadcrumb" className="juris-breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          {parent && (
            <>
              <Link href={parent.href}>{parent.label}</Link>
              <span aria-hidden="true">/</span>
            </>
          )}
          <span aria-current="page">{current?.label ?? "Juris Partners"}</span>
        </nav>
      </div>
    </div>
  );
}
