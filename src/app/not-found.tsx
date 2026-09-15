import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import s from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div>
      <SiteHeader />
      <main id="main" className={`container ${s.wrap}`}>
        <p className={`display ${s.code}`}>404</p>
        <h1 className={`display ${s.title}`}>We couldn&apos;t find that page.</h1>
        <p className={s.text}>The link may be out of date, or the page may have moved.</p>
        <Link href="/" className={s.button}>
          Back to the homepage
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
