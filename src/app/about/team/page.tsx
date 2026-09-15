import Image, { type StaticImageData } from "next/image";
import { PageBand, SparkTitle, Scenic, SectionHeading, blocks as b, cx } from "@/components/blocks";
import SiteFooter from "@/components/SiteFooter";
import { pageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { ROUTES } from "@/lib/site";
import s from "./page.module.css";
import texture from "../../../../public/images/bg-card-texture.png";
import letterBg from "../../../../public/images/overlay-team.jpg";
import tyler from "../../../../public/images/team-tyler.jpg";
import ashley from "../../../../public/images/team-ashley.jpg";
import tanner from "../../../../public/images/team-tanner.jpg";
import alma from "../../../../public/images/team-alma.jpg";

export const metadata = pageMetadata({
  title: "Our Team",
  description:
    "Meet the Hope Services partners and leadership team, and read a letter from the director about our purpose: empowering the I/DD community in Idaho.",
  path: ROUTES.team,
});

const TEAM: Array<{ name: string; role: string; photo?: StaticImageData }> = [
  { name: "Tyler Oram", role: "Agency Administrator, Director of HR", photo: tyler },
  { name: "Ashley Locke", role: "Director of QA and Marketing", photo: ashley },
  { name: "Tanner Henry", role: "Director of Operations", photo: tanner },
  { name: "Alma Tucakovic", role: "QIDP", photo: alma },
  { name: "Hannah Zimmer", role: "QIDP" },
  { name: "Jackie Sweet", role: "QIDP" },
];

export default function TeamPage() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd([{ name: "About Us", path: ROUTES.about }, { name: "Our Team", path: ROUTES.team }])} />
      <a href="#main" className="skipLink">Skip to content</a>
      <PageBand bandHeight={908} cardHeight={2056}>
        <SparkTitle id="page-title">OUR TEAM</SparkTitle>
        <section className={s.letter} aria-labelledby="letter-title">
          <div className={s.letterRow}>
            <div className={s.letterCard}>
              <Image src={letterBg} alt="" aria-hidden="true" fill sizes="423px" quality={45} className={s.letterBg} />
              <h2 id="letter-title" className={cx("display", s.letterTitle)}>
                LETTER FROM
                <br />
                THE DIRECTOR
              </h2>
            </div>
            <p className={b.lead}>
              At Hope Services, our purpose is simple:{" "}
              <strong>
                to empower individuals in the intellectual and developmental disabilities (I/DD) community with the
                support and tools they need to thrive each day.
              </strong>{" "}
              We&rsquo;re honored to make a meaningful difference in the lives of the people we serve&mdash;and we take
              that responsibility seriously.
            </p>
          </div>
          <div className={s.letterBody}>
            <p className={b.lead}>
              Our clients are the heart of everything we do. Their strengths, dreams, and individuality inspire us and
              guide our work. Putting their well-being first isn&rsquo;t just a promise&mdash;it&rsquo;s our calling.
            </p>
            <p className={b.lead}>
              At Hope Services, we believe everyone deserves to be seen, wanted, and loved. We create inclusive,
              supportive environments where individuals are recognized for who they are, welcomed without hesitation, and
              treated with genuine care and compassion.
            </p>
            <p className={b.lead}>
              We&rsquo;re committed to doing things the right way&mdash;by prioritizing people, leading with kindness, and
              going beyond the ordinary to deliver exceptional care. Thank you for choosing to make a difference with Hope
              Services. <strong>Thank you for choosing Hope.</strong>
            </p>
          </div>
        </section>
      </PageBand>

      <main id="main">
        <Scenic fade="linear-gradient(-19.24deg, rgba(255,255,255,0) 27.231%, #fff 78.114%)" className={s.scenic}>
          <section className={cx("container", s.partners)} aria-labelledby="partners-title">
            <SectionHeading id="partners-title">The Partners</SectionHeading>
            <ul className={s.grid}>
              {TEAM.map((m) => (
                <li key={m.name} className={s.card}>
                  <Image src={texture} alt="" aria-hidden="true" className={s.cardTexture} sizes="830px" quality={70} />
                  <div className={s.cardInner}>
                    <div className={s.cardPhoto}>
                      {m.photo ? (
                        <Image src={m.photo} alt={`Portrait of ${m.name}`} fill sizes="(max-width: 900px) 100vw, 310px" quality={78} style={{ objectFit: "cover", objectPosition: "50% 20%" }} />
                      ) : (
                        <span className="srOnly">Photo coming soon</span>
                      )}
                    </div>
                    <div className={s.cardText}>
                      <h3 className={cx("display", s.cardName)}>{m.name}</h3>
                      <Image src="/icons/bars-231.svg" alt="" width={230.731} height={37.187} className={s.cardBars} />
                      <p className={s.cardRole}>{m.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <SiteFooter />
        </Scenic>
      </main>
    </div>
  );
}
