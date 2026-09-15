import Image from "next/image";
import Link from "next/link";
import { PageBand, SparkTitle, Btn, Scenic, SplitCard, SplitPhoto, blocks as b, cx } from "@/components/blocks";
import SiteFooter from "@/components/SiteFooter";
import { pageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { ROUTES } from "@/lib/site";
import s from "./page.module.css";
import groupPhoto from "../../../public/images/services-group.webp";
import kitchenPhoto from "../../../public/images/sl-kitchen.jpg";

export const metadata = pageMetadata({
  title: "Our Services",
  description:
    "Hope Services supports adults with intellectual and developmental disabilities in Idaho with supported living, stable housing, and strong community connections.",
  path: ROUTES.services,
});

export default function ServicesPage() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", path: ROUTES.services }])} />
      <a href="#main" className="skipLink">Skip to content</a>
      <PageBand bandHeight={708} cardHeight={765}>
        <SparkTitle id="page-title">Our Services</SparkTitle>
        <div className={b.heroRow} style={{ "--row-mt": 55 } as React.CSSProperties}>
          <div className={b.figure} style={{ "--fh": 208 } as React.CSSProperties}>
            <span className={cx(b.figurePill, s.pill)} aria-hidden="true" />
            <div className={cx(b.figurePhoto, s.photo)}>
              <Image src={groupPhoto} alt="Four Hope Services clients smiling together with drinks" fill sizes="(max-width: 900px) 100vw, 481px" quality={78} priority />
            </div>
          </div>
          <div className={b.heroText}>
            <p className={b.lead}>
              People with intellectual and developmental disabilities thrive with{" "}
              <strong>stable housing, meaningful work, and strong community connections.</strong> Hope Services
              supports inclusive living and self-directed relationships in everyday community settings.
            </p>
            <div className={cx(b.btnRow, s.btns)}>
              <Btn href={ROUTES.contact}>Contact Us</Btn>
              <Btn href={ROUTES.eligibility} variant="outline">Check Eligibility</Btn>
            </div>
          </div>
        </div>
      </PageBand>

      <main id="main">
        <Scenic fade="linear-gradient(to top, rgba(255,255,255,0) 58.879%, #fff 100%)" className={s.scenic}>
          <p className={cx("container", b.intro)}>
            We believe every person deserves the chance to grow, achieve, and live a meaningful life. Hope Services
            exists to empower individuals with developmental disabilities through respectful support, skill-building,
            and community inclusion.
          </p>
          <section className={cx("container", s.feature)} aria-labelledby="sl-title">
            <SplitCard height={410} borderLeft="#00bff3" borderRight="#00bff3" left={<SplitPhoto src={kitchenPhoto} alt="A client giving a thumbs-up while washing dishes in his kitchen" position="50% 40%" />}>
              <h2 id="sl-title" className={cx("display", b.splitTitle)}>
                <Link href={ROUTES.supportedLiving} prefetch={false} className={s.featureLink}>Supported Living</Link>
              </h2>
              <p className={b.splitText}>
                We help individuals live as independently as possible in homes of their choosing. Our team provides
                personalized support with daily living, building life skills, and staying connected to the
                community&mdash;while honoring each person&rsquo;s goals and preferences.
              </p>
            </SplitCard>
          </section>
          <SiteFooter />
        </Scenic>
      </main>
    </div>
  );
}
