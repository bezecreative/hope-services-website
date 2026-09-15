import { PageBand, SparkTitle, Btn, Scenic, SplitCard, SplitBlock, blocks as b, cx } from "@/components/blocks";
import SiteFooter from "@/components/SiteFooter";
import { pageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { ROUTES, SITE } from "@/lib/site";
import s from "./page.module.css";
import dsp from "../../../public/images/careers-dsp.jpg";
import collage from "../../../public/images/collage-a.jpg";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Join the Hope Services team in Meridian, Idaho. We're hiring Direct Service Professionals (DSPs) and Qualified Intellectual Disability Professionals (QIDPs) who want work that matters.",
  path: ROUTES.careers,
});

const JOBS = [
  {
    title: "Direct Service Professional",
    color: "#404850",
    image: dsp,
    dark: false,
    tag: "Support independence. Build trust. Change lives.",
    text: "Direct Service Professionals (DSPs) work one-on-one with individuals to support daily living skills, community involvement, and personal goals. This role is hands-on, meaningful, and rooted in building genuine relationships.",
    subject: "Direct Service Professional position",
  },
  {
    title: "Qualified Intellectual Disability Professional",
    color: "#86c7bb",
    image: collage,
    dark: true,
    tag: "Lead with compassion and expertise.",
    text: "Qualified Intellectual Disability Professionals (QIDPs) oversee care plans, coordinate services, and support teams to ensure individuals receive consistent, person-centered care that meets their unique needs and goals.",
    subject: "QIDP position",
  },
];

const jobsJsonLd = JOBS.map((j) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: j.title,
  description: j.text,
  hiringOrganization: { "@type": "Organization", name: SITE.name, sameAs: "https://hopeservicesid.com" },
  jobLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", streetAddress: SITE.address.street, addressLocality: SITE.address.city, addressRegion: SITE.address.region, postalCode: SITE.address.postal, addressCountry: "US" },
  },
  employmentType: "FULL_TIME",
  datePosted: "2026-09-01",
}));

export default function CareersPage() {
  return (
    <div>
      <JsonLd data={[breadcrumbJsonLd([{ name: "About Us", path: ROUTES.about }, { name: "Careers", path: ROUTES.careers }]), ...jobsJsonLd]} />
      <a href="#main" className="skipLink">Skip to content</a>
      <PageBand bandHeight={528} cardHeight={2056}>
        <SparkTitle id="page-title">CAREERS</SparkTitle>
        <p className={cx(b.lead, b.leadCenter, s.lead)}>
          At Hope Services, a job is more than a paycheck &mdash; it&rsquo;s an opportunity to change lives, build
          meaningful relationships, and be part of a community that truly cares. We&rsquo;re looking for compassionate,
          dedicated people who believe everyone deserves to be seen, supported, and empowered.{" "}
          <strong>If you want work that matters, you&rsquo;re in the right place.</strong>
        </p>
      </PageBand>

      <main id="main">
        <Scenic
          fade="linear-gradient(-12.99deg, rgba(255,255,255,0) 27.231%, #fff 78.114%)"
          imgBox={["-14.07%", "0", "128.15%", "100%"]}
          stripes={[-210, 222]}
          className={s.scenic}
        >
          <section className={cx("container", s.jobs)} aria-label="Open positions">
            {JOBS.map((j) => (
              <SplitCard key={j.title} height={284} bars={false} left={<SplitBlock color={j.color} image={j.image} opacity={0.12} dark={j.dark}>{j.title}</SplitBlock>}>
                <p className={b.splitTag}>{j.tag}</p>
                <p className={b.splitText}>{j.text}</p>
                <Btn href={`mailto:${SITE.email}?subject=${encodeURIComponent(j.subject)}`} external>
                  Learn More
                </Btn>
              </SplitCard>
            ))}
          </section>
          <SiteFooter />
        </Scenic>
      </main>
    </div>
  );
}
