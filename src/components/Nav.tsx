"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, ROUTES } from "@/lib/site";
import s from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false); // mobile panel
  const [submenu, setSubmenu] = useState<string | null>(null); // desktop dropdown opened by click/keyboard
  const menuId = useId();
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSubmenu(null);
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setSubmenu(null);
    };
    const onResize = () => window.innerWidth >= 1200 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const closeAll = () => {
    setOpen(false);
    setSubmenu(null);
  };

  const isActive = (match: readonly string[]) =>
    match.some((m) => pathname === m || pathname.startsWith(m + "/"));

  return (
    <nav ref={navRef} className={s.nav} aria-label="Primary">
      <Link href={ROUTES.home} className={s.logo} aria-label="Hope Services home" onClick={closeAll}>
        <Image src="/icons/nav-logo.svg" alt="" width={268.86} height={48.918} priority />
      </Link>

      <button
        type="button"
        className={s.toggle}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="srOnly">{open ? "Close menu" : "Open menu"}</span>
        <span className={s.bar} aria-hidden="true" />
        <span className={s.bar} aria-hidden="true" />
        <span className={s.bar} aria-hidden="true" />
      </button>

      <div id={menuId} className={s.menu} data-open={open || undefined}>
        <ul className={s.links}>
          {NAV_LINKS.map((l) => {
            const active = isActive(l.match);
            if (!l.children) {
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    prefetch={false}
                    className={`${s.link} ${active ? s.active : ""}`}
                    aria-current={active ? "page" : undefined}
                    onClick={closeAll}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            }
            const expanded = submenu === l.label;
            return (
              <li key={l.href} className={s.hasMenu} data-expanded={expanded || undefined}>
                <button
                  type="button"
                  className={`${s.link} ${s.trigger} ${active ? s.active : ""}`}
                  aria-expanded={expanded}
                  aria-haspopup="true"
                  onClick={() => setSubmenu(expanded ? null : l.label)}
                >
                  {l.label}
                  <svg className={s.caret} viewBox="0 0 12 8" width="12" height="8" aria-hidden="true">
                    <path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <ul className={s.submenu} aria-label={l.label}>
                  {l.children.map((c) => {
                    const current = pathname === c.href;
                    return (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          prefetch={false}
                          className={`${s.sublink} ${current ? s.subActive : ""}`}
                          aria-current={current ? "page" : undefined}
                          onClick={closeAll}
                        >
                          {c.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        <div className={s.actions}>
          <Link href={ROUTES.tour} prefetch={false} className={s.button} onClick={closeAll}>
            Schedule a Tour
          </Link>
          <Link href={ROUTES.careers} prefetch={false} className={s.button} onClick={closeAll}>
            Jobs
          </Link>
        </div>
      </div>
    </nav>
  );
}
