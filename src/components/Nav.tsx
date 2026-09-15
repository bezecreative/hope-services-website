"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, ROUTES } from "@/lib/site";
import s from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1200 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const isActive = (match: readonly string[]) =>
    match.some((m) => pathname === m || pathname.startsWith(m + "/"));

  return (
    <nav className={s.nav} aria-label="Primary">
      <Link href={ROUTES.home} className={s.logo} aria-label="Hope Services home">
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
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`${s.link} ${active ? s.active : ""}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={s.actions}>
          <Link href={ROUTES.tour} className={s.button} onClick={() => setOpen(false)}>
            Schedule a Tour
          </Link>
          <Link href={ROUTES.careers} className={s.button} onClick={() => setOpen(false)}>
            Jobs
          </Link>
        </div>
      </div>
    </nav>
  );
}
