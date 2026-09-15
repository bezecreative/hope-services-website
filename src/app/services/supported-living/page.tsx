import Image from "next/image";
import { PageBand, SparkTitle, Btn, Scenic, IconItem, TealPanel, blocks as b, cx } from "@/components/blocks";
import SiteFooter from "@/components/SiteFooter";
import { pageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { ROUTES } from "@/lib/site";
import s from "./page.module.css";
import selfie from "../../../../public/images/sl-selfie.jpg";
import arena from "../../../../public/images/sl-arena.jpg";
import overlay from "../../../../public/images/overlay-tree.jpg";

export const metadata = pageMetadata({
  title: "Supported Living",
  description:
    "Hope Services' Supported Living program helps adults with developmental disabilities live independently in homes of their choosing with 24/7 personalized support.",
  path: ROUTES.supportedLiving,
});

const ITEMS = [
  { icon: "sl-icon-housing", label: "Flexible Housing Options Available" },
  { icon: "sl-icon-247", label: "24/7 Staff Support and Availability" },
  { icon: "sl-icon-trained", label: "Specially Trained Paraprofessional Staff" },
  { icon: "sl-icon-levels", label: "Multiple Levels of Individualized Support", inset: "22.41% 10.53% 6.46% 10.34%", width: 175 },
  { icon: "sl-icon-intensive", label: "Intensive Daily Support Services", inset: "3.45% 6.08% 0 6.03%", width: 146 },
  { icon: "sl-icon-high", label: "High Daily Support Options", inset: "10.34% 17.04% 10.11% 15.52%", width: 146 },
  { icon: "sl-icon-ratios", label: "Supportive Ratios of 1:1 or 1:3 per Individual", inset: "12.07% 11.19% 12.07% 12.07%" },
];

const CARDS = [
  {
    title: ["Everyday Independence,", "Real Support"],
    text: "We provide personalized, in-home support that helps individuals build confidence, life skills, and independence through everyday routines.",
    img: selfie,
    alt: "Three clients and staff taking a selfie together at an event",
    pos: "50% 30%",
  },
  {
    title: ["Living Life on", "Your Own Terms"],
    text: "We support independent living while encouraging choice, confidence, and meaningful connections in the community.",
    img: arena,
    alt: "Clients waving from the stands at a sporting event",
    pos: "50% 55%",
  },
];

export default function SupportedLivingPage() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", path: ROUTES.services }, { name: "Supported Living", path: ROUTES.supportedLiving }])} />
      <a href="#main" className="skipLink">Skip to content</a>
      <PageBand bandHeight={644} cardHeight={636}>
        <SparkTitle id="page-title">SUPPORTED LIVING</SparkTitle>
        <p className={cx(b.lead, s.lead)}>
          Hope Services&rsquo; Supported Living program helps adults with developmental disabilities live independently in
          homes of their choosing. We provide personalized support that{" "}
          <strong>builds daily living skills, encourages independence, and strengthens community connections.</strong>
        </p>
        <Btn href={ROUTES.contact} className={s.cta}>Get Started</Btn>
      </PageBand>

      <main id="main">
        <Scenic
          imgBox={["-42.77%", "30.15%", "185.53%", "69.85%"]}
          fade="linear-gradient(to top, rgba(255,255,255,0) 58.879%, #fff 68.732%)"
          stripes={[-258, 163, "sl"]}
        >
          <section className={cx("container", s.grid)} aria-label="Supported living overview">
            <div className={s.cards}>
              {CARDS.map((c) => (
                <article key={c.title[0]} className={s.card}>
                  <div className={s.cardPhoto}>
                    <Image src={c.img} alt={c.alt} fill sizes="(max-width: 900px) 100vw, 279px" quality={72} style={{ objectFit: "cover", objectPosition: c.pos }} />
                  </div>
                  <div className={s.cardText}>
                    <h2 className={cx("display", s.cardTitle)}>
                      {c.title[0]}
                      <br />
                      {c.title[1]}
                    </h2>
                    <Image src="/icons/bars-273.svg" alt="" width={273} height={45} className={s.bars} />
                    <p className={s.cardBody}>{c.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <TealPanel overlay={overlay} className={s.panel}>
              <div className={s.panelInner}>
                <h2 className={cx("display", s.panelTitle)}>Home &amp; Community Support</h2>
                <ul className={s.icons}>
                  {ITEMS.map((it) => (
                    <IconItem key={it.icon} {...it} />
                  ))}
                </ul>
              </div>
            </TealPanel>
          </section>
          <SiteFooter />
        </Scenic>
      </main>
    </div>
  );
}
