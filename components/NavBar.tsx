"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site-data";

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/" aria-label="Sovereignty Control home">
          <span className="brand-mark">SC</span>
          <span className="brand-text">
            <span>Sovereignty Control</span>
            <span className="brand-sub">Programme data. Client matters.</span>
          </span>
        </Link>

        <nav
          id="main-navigation"
          className={`nav-links ${open ? "open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                aria-current={active ? "page" : undefined}
                key={item.href}
                className={active ? "active" : undefined}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <Link className="button button-primary" href="/contact">
            Request demo
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
