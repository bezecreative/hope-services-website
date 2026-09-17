import Image from "next/image";
import { PageBand, SparkTitle, Btn, Scenic, FaqList, SectionHeading, blocks as b, cx } from "@/components/blocks";
import SiteFooter from "@/components/SiteFooter";
import { pageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { FAQ_ITEMS, faqJsonLd } from "@/lib/faq";
import { ROUTES } from "@/lib/site";
import s from "./page.module.css";
import groupPhoto from "../../../public/images/elig-group.webp";

export const metadata = pageMetadata({
  title: "Eligibility",
  description:
    "Learn how to qualify for Hope Services supported living in Idaho: DD waiver and Medicaid requirements, how to get started, and answers to the most common eligibility questions.",
  path: ROUTES.eligibility,
});

const IDHW_URL = "https://healthandwelfare.idaho.gov/services-programs/medicaid-health/developmental-disabilities-services";

export default function EligibilityPage() {
  return (
    <div>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Eligibility", path: ROUTES.eligibility }]), faqJsonLd(FAQ_ITEMS)]} />
      <a href="#main" className="skipLink">Skip to content</a>
      <PageBand bandHeight={808} cardHeight={765}>
        <SparkTitle id="page-title" wrap className={s.title}>
          How to Qualify for Services and Which Disabilities May Be Eligible
        </SparkTitle>
        <div className={b.heroRow} style={{ "--row-mt": 35 } as React.CSSProperties}>
          <div className={b.figure} style={{ "--fh": 332 } as React.CSSProperties}>
            <span className={cx(b.figurePill, s.pill)} aria-hidden="true" />
            <div className={cx(b.figurePhoto, s.photo)}>
              <Image src={groupPhoto} alt="A group of five Hope Services clients and staff smiling together" fill sizes="(max-width: 900px) 100vw, 487px" quality={80} priority />
            </div>
          </div>
          <div className={b.heroText}>
            <p className={b.lead}>
              Hope Services{" "}
              <strong>helps individuals and families understand available support options, eligibility requirements, and the next steps for getting connected to care. Our</strong>{" "}
              team is here to answer questions, guide you through the process, and help determine whether our services may be a good fit.
            </p>
          </div>
        </div>
      </PageBand>

      <main id="main">
        <section className={cx("container", s.block)} aria-labelledby="started">
          <SectionHeading id="started">How to Get Started</SectionHeading>
          <p className={b.intro}>
            Eligibility for services is determined through the Idaho Department of Health and Welfare and may depend on
            Medicaid eligibility, diagnosis, functional needs, and required level of support. Hope Services can help
            answer questions, explain what information may be needed, and guide families toward the right next step.
          </p>
          <div className={cx(b.btnRow, s.btns)}>
            <Btn href={ROUTES.contact}>Contact Us</Btn>
            <Btn href={IDHW_URL} wide external>View Idaho Eligibility Guidelines</Btn>
          </div>
        </section>


        <Scenic className={s.scenic}>
          <section className={cx("container", s.faqSection)} aria-labelledby="faq-title">
            <SparkTitle as="h2" id="faq-title" wrap className={s.faqTitle}>
              FREQUENTLY ASKED ELIGIBILITY QUESTIONS
            </SparkTitle>
            <FaqList items={FAQ_ITEMS} />
          </section>
          <SiteFooter />
        </Scenic>
      </main>
    </div>
  );
}
