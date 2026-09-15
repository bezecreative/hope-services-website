import Image from "next/image";
import { PageBand, SparkTitle, Btn, Scenic, SplitCard, SplitBlock, FaqList, SectionHeading, blocks as b, cx } from "@/components/blocks";
import SiteFooter from "@/components/SiteFooter";
import { pageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { FAQ_ITEMS, faqJsonLd } from "@/lib/faq";
import { ROUTES } from "@/lib/site";
import s from "./page.module.css";
import groupPhoto from "../../../public/images/elig-group.webp";
import lake from "../../../public/images/block-lake.jpg";
import leaves from "../../../public/images/block-leaves.jpg";
import plants from "../../../public/images/block-plants.jpg";

export const metadata = pageMetadata({
  title: "Eligibility",
  description:
    "Learn how to qualify for Hope Services supported living in Idaho: DD waiver and Medicaid requirements, eligible disabilities including autism, DD/ID, and injury, plus answers to common questions.",
  path: ROUTES.eligibility,
});

const IDHW_URL = "https://healthandwelfare.idaho.gov/services-programs/medicaid-health/developmental-disabilities-services";

const BLOCKS = [
  { title: "AUTISM (ASD)", color: "#404850", image: lake, opacity: 0.21, dark: false, text: "Autism, or autism spectrum disorder (ASD), is a developmental disability that affects how a person communicates, interacts socially, and experiences the world. Individuals with autism may have differences in understanding social cues, expressing themselves verbally, or engaging in repetitive behaviors. Because autism exists on a spectrum, each person has their own unique strengths, abilities, and challenges." },
  { title: "Developmental (DD) and Intellectual Disabilities (ID)", color: "#86c7bb", image: leaves, opacity: 0.15, dark: true, text: "Developmental disabilities and intellectual disabilities are often used interchangeably, but they are not the same. Intellectual disabilities specifically involve limitations in intellectual functioning—such as learning, reasoning, and problem-solving—and in adaptive skills like communication and social interaction. Developmental disabilities is a broader term that includes intellectual disabilities as well as other conditions that affect physical, cognitive, or emotional development." },
  { title: "Injury", color: "#ef4a5f", image: plants, opacity: 0.22, dark: false, text: "Individuals who have experienced a significant injury may qualify for services if the injury has created lasting physical, cognitive, or daily living support needs. Eligibility is reviewed based on the person’s condition, documentation, and the level of assistance needed to live safely and independently." },
];

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

        <section className={cx("container", s.block, s.block2)} aria-labelledby="eligible">
          <SectionHeading id="eligible">Eligible Disabilities</SectionHeading>
          <p className={b.intro}>
            Hope Services may support individuals with qualifying developmental, intellectual, neurological, or
            brain-related disabilities. Each person&rsquo;s needs are unique, so eligibility is reviewed individually based
            on diagnosis, documentation, and support goals.
          </p>
        </section>

        <Scenic stripes={[-210, 239]} className={s.scenic}>
          <section className={cx("container", s.blocks)} aria-label="Eligible disability types">
            {BLOCKS.map((blk) => (
              <SplitCard key={blk.title} height={284} bars={235} left={<SplitBlock color={blk.color} image={blk.image} opacity={blk.opacity} dark={blk.dark}>{blk.title}</SplitBlock>}>
                <p className={b.splitText}>{blk.text}</p>
              </SplitCard>
            ))}
          </section>

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
