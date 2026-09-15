"use client";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { JurisBrand } from "./JurisBrand";
import { navItems } from "@/lib/site-data";
import { juris } from "@/lib/partners";
export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const subToggles = useRef<Record<string, HTMLButtonElement | null>>({});
  function close() {
    setOpen(false);
    setExpanded(null);
  }
  useEffect(() => {
    function key(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (expanded) {
        subToggles.current[expanded]?.focus();
        setExpanded(null);
      } else if (open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function outside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) close();
    }
    document.addEventListener("keydown", key);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open, expanded]);
  return (
    <header className="juris-header" ref={header}>
      <div className="container juris-nav">
        <JurisBrand />
        <nav
          aria-label="Main navigation"
          id="main-navigation"
          className={`juris-links ${open ? "is-open" : ""}`}
        >
          {navItems.map((item, index) => (
            <div
              className="juris-nav-item"
              key={item.href}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node))
                  setExpanded((current) =>
                    current === item.href ? null : current,
                  );
              }}
            >
              <div className="juris-nav-label">
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={
                    pathname === item.href
                      ? "page"
                      : item.href === "/how-matter-control-works" &&
                          ["/diagnostic", "/demo-case"].includes(pathname)
                        ? "location"
                        : item.href === "/what-we-do" &&
                            ["/use-cases", "/offers"].includes(pathname)
                          ? "location"
                          : undefined
                  }
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    type="button"
                    className="juris-sub-toggle"
                    aria-label={`Explore ${item.label.toLowerCase()} pages`}
                    aria-expanded={expanded === item.href}
                    aria-controls={`juris-sub-${index}`}
                    ref={(el) => {
                      subToggles.current[item.href] = el;
                    }}
                    onClick={() =>
                      setExpanded(expanded === item.href ? null : item.href)
                    }
                  >
                    <ChevronDown size={13} aria-hidden="true" />
                  </button>
                )}
              </div>
              {item.children && (
                <div
                  className="juris-subnav"
                  id={`juris-sub-${index}`}
                  hidden={expanded !== item.href}
                >
                  {item.children.map((child) => (
                    <Link href={child.href} key={child.href} onClick={close}>
                      <strong>
                        {child.label}
                        {child.external && (
                          <ArrowUpRight size={13} aria-hidden="true" />
                        )}
                      </strong>
                      <span>{child.description}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="juris-nav-actions">
            <a href={juris.publicUrl} className="juris-explore">
              Explore Juris
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <Link
              href="/advisers#apply"
              className="juris-adviser-cta"
              onClick={close}
            >
              Become an Adviser
            </Link>
          </div>
        </nav>
        <button
          type="button"
          ref={toggle}
          className="juris-menu"
          onClick={() => {
            setOpen((value) => !value);
            setExpanded(null);
          }}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          {open ? (
            <X size={21} aria-hidden="true" />
          ) : (
            <Menu size={21} aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}
