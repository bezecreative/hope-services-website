import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, ROUTES, SITE } from "@/lib/site";
import s from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={`container ${s.footerSection}`}>
      <div className={s.footerWrap}>
        <div className={s.footer}>
          <nav className={s.fLinks} aria-label="Footer">
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link prefetch={false} href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link prefetch={false} href={ROUTES.home} className={s.fLogo} aria-label="Hope Services home">
            <Image src="/icons/footer-logo.svg" alt="" width={222} height={131.91} />
          </Link>

          <p className={s.fCopy}>&copy; 2026 Hope Services. All rights reserved.</p>

          <div className={s.fContact}>
            <h2 className={`display ${s.fContactTitle}`}>Contact Information</h2>
            <address className={s.fAddress}>
              <a
                className={s.fRow}
                href="https://maps.google.com/?q=5700+W+Riva+Capri+St,+Meridian,+ID+83646"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/icons/icon-pin.svg" alt="" width={15.27} height={19.851} />
                <span>5700 W Riva Capri St. Meridian ID 83646</span>
              </a>
              <a className={s.fRow} href={`tel:${SITE.phoneIntl}`}>
                <Image src="/icons/icon-phone.svg" alt="" width={16.034} height={16.034} />
                <span>{SITE.phone}</span>
              </a>
              <a className={s.fRow} href={`mailto:${SITE.email}`}>
                <Image src="/icons/icon-mail.svg" alt="" width={17.561} height={13.743} />
                <span>{SITE.email}</span>
              </a>
            </address>
          </div>

          <div className={s.fActions}>
            <Link prefetch={false} href={ROUTES.tour} className={s.fButton}>
              Schedule a Tour
            </Link>
            <Link prefetch={false} href={ROUTES.careers} className={s.fButton}>
              Jobs
            </Link>
          </div>

          <div className={s.fSocial}>
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Hope Services on Instagram">
              <Image src="/icons/instagram.svg" alt="" width={31.515} height={31.515} />
            </a>
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Hope Services on Facebook">
              <Image src="/icons/facebook.svg" alt="" width={31.515} height={31.515} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
