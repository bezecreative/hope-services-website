import Image from "next/image";
import { PageBand, SparkTitle, Scenic, SplitCard, SplitPhoto, blocks as b, cx } from "@/components/blocks";
import SiteFooter from "@/components/SiteFooter";
import { pageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { ROUTES } from "@/lib/site";
import s from "./page.module.css";
import groupPhoto from "../../../public/images/about-group.webp";
import carousel from "../../../public/images/about-carousel.jpg";
import couple from "../../../public/images/about-couple.jpg";
import collage from "../../../public/images/collage-b.jpg";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Who we are: Hope Services' mission is to ensure every individual in our care feels seen, valued, and loved. Learn why families choose Hope and the values that guide our team.",
  path: ROUTES.about,
});

const VALUES = [
  { title: "Human Connection", icon: "about-icon-connection", iw: 65.633, ih: 49.816, color: "#404850", light: true, text: "We believe that everyone belongs and deserves to feel connected. At Hope Services, we foster a sense of community and belonging among our residents, staff, and partners." },
  { title: "Empowerment", icon: "about-icon-empowerment", iw: 41.287, ih: 60.013, color: "#86c7bb", light: false, text: "Our goal is to empower individuals to move from dependence to independence. Through personalized support and encouragement, we help our residents gain the skills and confidence they need to thrive on their own terms." },
  { title: "Dignity", icon: "about-icon-dignity", iw: 59.018, ih: 58.915, color: "#ef4a5f", light: true, text: "We uphold the dignity of every person we serve. Regardless of background or circumstance, everyone deserves to be treated with respect and honor at all times." },
  { title: "Intentional", icon: "about-icon-intentional", iw: 56.205, ih: 54.902, color: "#00bff3", light: false, titleLight: true, text: "Our decision-making is always resident-focused. We carefully consider the unique needs and preferences of each individual in order to provide the highest quality of care and support." },
];

export default function AboutPage() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd([{ name: "About Us", path: ROUTES.about }])} />
      <a href="#main" className="skipLink">Skip to content</a>
      <PageBand bandHeight={2042} cardHeight={1856} fadeTo={43.719}>
        <SparkTitle id="page-title">WHO WE ARE</SparkTitle>
        <div className={b.heroRow} style={{ "--row-mt": 21 } as React.CSSProperties}>
          <div className={b.figure} style={{ "--fh": 353 } as React.CSSProperties}>
            <span className={cx(b.figurePill, s.pill)} aria-hidden="true" />
            <div className={cx(b.figurePhoto, s.photo)}>
              <Image src={groupPhoto} alt="The Hope Services team wearing leis at a summer celebration" fill sizes="(max-width: 900px) 100vw, 487px" quality={80} priority style={{ objectPosition: "50% 0" }} />
            </div>
          </div>
          <div className={b.heroText}>
            <p className={b.lead}>
              At Hope Services, our mission is clear: to ensure that every individual in our care feels seen, valued,
              and loved. We achieve this by fostering strong partnerships within our community, where{" "}
              <strong>communication, teamwork, and a dedication to the well-being of our residents</strong> guide every
              decision we make. With a heartfelt commitment to providing the best possible care, we strive to create an
              environment where everyone feels a sense of <strong>belonging and love.</strong>
            </p>
          </div>
        </div>

        <div className={s.why}>
          <div className={s.whyHead}>
            <h2 className={cx("display", s.whyTitle)}>Why Choose Hope?</h2>
            <Image src="/icons/hs-spark.svg" alt="" width={39} height={79} className={s.whySpark} />
          </div>
          <p className={s.whyTag}>Homes Not Houses</p>
        </div>
        <p className={cx(b.lead, b.leadCenter, s.whyText)}>
          We believe that everyone deserves a clean, safe, and cozy living space. We pride ourselves in having clean
          homes that meet high standards! We inspect our houses weekly to ensure all maintenance and cleanliness is up to
          par!
        </p>

        <div className={s.features}>
          <SplitCard height={410} borderLeft="#00bff3" borderRight="#00bff3" className={s.feature} left={<SplitPhoto src={carousel} alt="A client riding a carousel at an amusement park" position="50% 50%" />}>
            <h3 className={cx("display", b.splitTitle, b.splitTitleLg)}>
              Life Outside
              <br />
              The Living Room
            </h3>
            <p className={b.splitText}>
              We offer built in activities weekly at no cost to our clients to ensure that they are able to experience
              things outside of their home despite their financial constraints. These include backyard game days,
              BBQ&rsquo;s, board game days, craft events, bowling, arcade visits, movies, and more!
            </p>
          </SplitCard>
          <SplitCard height={410} borderLeft="#00bff3" borderRight="#00bff3" className={s.feature} left={<SplitPhoto src={couple} alt="A client and staff member in matching HOPE hats" position="50% 35%" />}>
            <h3 className={cx("display", b.splitTitle, b.splitTitleLg)}>Transportation and Appointment Tracking</h3>
            <p className={b.splitText}>
              Each of our homes are equipped with a Skylight electronic calendar on a main wall. Each client has their
              own color-coded schedule that staff, clients, families, and admin team can easily see and follow to ensure
              that appointments are kept up to date and that clients get where they need to be! Staff transport clients
              to all necessary day to day things including: doctor&rsquo;s appointments, grocery shopping, accessing the
              community, family visits, work, volunteering, and more!
            </p>
          </SplitCard>
        </div>
      </PageBand>

      <main id="main">
        <Scenic stripes={[-210, 66]} className={s.scenic}>
          <section className={cx("container", s.values)} aria-label="Our values">
            {VALUES.map((v) => (
              <article key={v.title} className={s.value} style={{ background: v.color }}>
                <Image src={collage} alt="" aria-hidden="true" fill sizes="587px" quality={45} className={s.valueBg} />
                <div className={s.valueInner}>
                  <div className={s.valueHead}>
                    <span className={s.valueIcon}>
                      <Image src={`/icons/${v.icon}.svg`} alt="" width={v.iw} height={v.ih} />
                    </span>
                    <h2 className={cx("display", s.valueTitle, (v.light || v.titleLight) && s.light)}>{v.title}</h2>
                  </div>
                  <p className={cx(s.valueText, v.light && s.light)}>{v.text}</p>
                </div>
              </article>
            ))}
          </section>
          <SiteFooter />
        </Scenic>
      </main>
    </div>
  );
}
