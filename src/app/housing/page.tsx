import Image from "next/image";
import { PageBand, SparkTitle, Scenic, IconItem, TealPanel, FaqList, blocks as b, cx } from "@/components/blocks";
import SiteFooter from "@/components/SiteFooter";
import { pageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { FAQ_ITEMS, faqJsonLd } from "@/lib/faq";
import { ROUTES, SITE } from "@/lib/site";
import s from "./page.module.css";
import groupPhoto from "../../../public/images/housing-group.webp";
import overlay from "../../../public/images/overlay-tree.jpg";

export const metadata = pageMetadata({
  title: "Housing",
  description:
    "Where will I live? Hope Services provides supported living in community-based homes across the Treasure Valley, helps clients find roommates, and schedules tours of current vacancies.",
  path: ROUTES.housing,
});

const COLS = [
  [
    { icon: "housing-icon-housing", label: "Housing Options Available" },
    { icon: "housing-icon-levels", label: "Multiple Levels of Individualized Support", inset: "3.45% 6.94% 0 5.16%" },
  ],
  [
    { icon: "housing-icon-247", label: "24/7 Staff Availability", width: 140 },
    { icon: "housing-icon-care", label: "Personalized 1:1 Care Options", inset: "22.41% 10.53% 6.46% 10.34%", width: 177 },
  ],
  [
    { icon: "housing-icon-trained", label: "Specially Trained Paraprofessionals", width: 146 },
    { icon: "housing-icon-ratios", label: "Supportive Ratios of 1:2 or 1:3", inset: "25.86% 12.92% 0 12.08%" },
  ],
];

export default function HousingPage() {
  const t = SITE.tourContact;
  return (
    <div>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Housing", path: ROUTES.housing }]), faqJsonLd(FAQ_ITEMS)]} />
      <a href="#main" className="skipLink">Skip to content</a>
      <PageBand bandHeight={786} cardHeight={765}>
        <SparkTitle id="page-title">WHERE WILL I LIVE?</SparkTitle>
        <div className={b.heroRow} style={{ "--row-mt": 65 } as React.CSSProperties}>
          <div className={b.figure} style={{ "--fh": 353 } as React.CSSProperties}>
            <span className={cx(b.figurePill, s.pill)} aria-hidden="true" />
            <div className={cx(b.figurePhoto, s.photo)}>
              <Image src={groupPhoto} alt="Three Hope Services clients standing together with arms around each other" fill sizes="(max-width: 900px) 100vw, 508px" quality={80} priority style={{ objectPosition: "50% 0" }} />
            </div>
          </div>
          <div className={cx(b.heroText, s.text)}>
            <p className={b.lead}>
              Supported Living Services provides services in the clients&rsquo; community-based homes. We work with local
              landlords and rental agencies to help provide the best housing options for our clientele. We help each
              client in finding roommates and making sure all their needs are met.
            </p>
            <p className={cx(b.lead, s.leadBold)}>
              <strong>To schedule a tour of current vacancies call {t.name}, our {t.title}</strong>
            </p>
            <ul className={s.contact}>
              <li>
                <a href={`tel:${t.phoneIntl}`}>
                  <Image src="/icons/housing-icon-phone.svg" alt="" width={22.607} height={22.607} className={s.contactIcon} />
                  <span>{t.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${t.email}`}>
                  <Image src="/icons/housing-icon-mail.svg" alt="" width={22} height={17} className={s.contactIconMail} />
                  <span>{t.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </PageBand>

      <main id="main">
        <Scenic className={s.scenic}>
          <section className={cx("container", s.panelWrap)} aria-labelledby="hcs-title">
            <TealPanel overlay={overlay} className={s.panel}>
              <div className={s.panelInner}>
                <h2 id="hcs-title" className={cx("display", s.panelTitle)}>Home &amp; Community Support Services</h2>
                <div className={s.cols}>
                  {COLS.map((col, i) => (
                    <ul key={i} className={s.col}>
                      {col.map((it) => (
                        <IconItem key={it.icon} {...it} />
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </TealPanel>
          </section>

          <section className={cx("container", s.faqSection)} aria-labelledby="faq-title">
            <SparkTitle as="h2" id="faq-title" wrap className={s.faqTitle}>
              FREQUENTLY ASKED HOUSING QUESTIONS
            </SparkTitle>
            <FaqList items={FAQ_ITEMS} />
          </section>
          <SiteFooter />
        </Scenic>
      </main>
    </div>
  );
}
