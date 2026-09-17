import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import VideoBlock from "@/components/VideoBlock";
import { ROUTES, SITE, SITE_URL } from "@/lib/site";
import s from "./page.module.css";

import bgHero from "../../public/images/bg-hero.jpg";
import bgSection from "../../public/images/bg-section.jpg";
import heroPhoto from "../../public/images/hero-photo.webp";
import whyPhoto from "../../public/images/why-photo.webp";
import ctaTeam from "../../public/images/bg-cta-team.jpg";
import ctaLive from "../../public/images/bg-cta-live.jpg";
import texture from "../../public/images/bg-card-texture.png";

const WHY_ITEMS = [
  { icon: "why-icon-1", w: 58.146, h: 57.277, col: 160, text: "Personalized support tailored to each person" },
  { icon: "why-icon-2", w: 58.019, h: 51.111, col: 168, text: "Experienced, compassionate team members" },
  { icon: "why-icon-3", w: 49.795, h: 49.848, col: 168, text: "Safe, community-based living environments" },
  { icon: "why-icon-4", w: 49.915, h: 58.06, col: 151, text: "Clear communication and dependable care" },
  { icon: "why-icon-5", w: 44.203, h: 52.138, col: 168, text: "A genuine commitment to dignity and independence" },
  { icon: "why-icon-6", w: 52.14, h: 52.14, col: 168, text: "We believe our clients deserve homes not houses" },
];

const TESTIMONIALS = [
  {
    title: "120+ Supported Individuals Thriving",
    titleWidth: 272,
    quote:
      "“Hope Services has been life-changing for our family. The supported living staff is dependable, kind, and truly invested in helping our son live more independently. Their communication, care, and consistency give us peace of mind every day.”",
    name: "Sarah M.",
    flip: false,
  },
  {
    title: "Trusted by Families Across Idaho",
    titleWidth: 320,
    quote:
      "“The team at Hope Services treats our daughter with genuine respect. Her home is safe, welcoming, and tailored to her needs. We’ve never experienced this level of compassion and reliability anywhere else. They truly go above and beyond.”",
    name: "Daniel & Priya R.",
    flip: true,
  },
  {
    title: "Building Confidence, One Person at a Time",
    titleWidth: 320,
    quote:
      "“Our son has grown so much since joining Hope Services. He’s more confident, more independent, and finally feels understood. The staff is patient, skilled, and committed to helping him succeed in everyday life.”",
    name: "Jessica L.",
    flip: false,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE.name,
      legalName: SITE.legalName,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/icons/footer-logo.svg`,
      image: `${SITE_URL}/images/og.jpg`,
      description: SITE.description,
      slogan: SITE.tagline,
      telephone: SITE.phoneIntl,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postal,
        addressCountry: SITE.address.country,
      },
      areaServed: { "@type": "State", name: "Idaho" },
      sameAs: [SITE.social.facebook, SITE.social.instagram],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SITE.phoneIntl,
        email: SITE.email,
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE.name,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: `${SITE.name} | ${SITE.tagline}`,
      description: SITE.description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      primaryImageOfPage: `${SITE_URL}/images/og.jpg`,
      inLanguage: "en-US",
    },
  ],
};

export default function HomePage() {
  return (
    <div className={s.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a href="#main" className="skipLink">
        Skip to content
      </a>

      {/* Top band background (behind header + hero) */}
      <div className={s.topBg} aria-hidden="true">
        <Image
          src={bgHero}
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={55}
          className={s.topBgImg}
        />
        <div className={s.topBgFade} />
      </div>

      <SiteHeader />

      <main id="main">
        {/* ─────────── HERO ─────────── */}
        <section className={`container ${s.hero}`} aria-labelledby="hero-title">
          <div className={s.heroWrap}>
            <div className={s.heroCard}>
              <Image src={texture} alt="" aria-hidden="true" className={s.heroTexture} sizes="1832px" quality={70} />
              <Image
                src="/icons/spark-arrow.svg"
                alt=""
                aria-hidden="true"
                width={147.605}
                height={175}
                className={s.heroSparkArrow}
              />

              <div className={s.heroComp} aria-hidden="true">
                <span className={`${s.pill} ${s.pill1}`} />
                <span className={`${s.pill} ${s.pill2}`} />
                <span className={`${s.pill} ${s.pill3}`} />
                <div className={s.heroPhotoBox}>
                  <div className={s.heroPhotoInner}>
                    <Image
                      src={heroPhoto}
                      alt=""
                      fill
                      priority
                      fetchPriority="high"
                      sizes="(max-width: 900px) 100vw, 640px"
                      quality={80}
                    />
                  </div>
                </div>
              </div>

              <Image
                src="/icons/hero-spark-lines.svg"
                alt=""
                aria-hidden="true"
                width={183.094}
                height={97.712}
                className={s.heroSparkLines}
              />

              <div className={s.heroText}>
                <div className={s.heroHeadings}>
                  <h1 id="hero-title" className={`display ${s.heroTitle}`}>
                    Supported Living for Idaho&apos;s Adults
                  </h1>
                  <p className={s.heroSub}>Where everyone can feel at home.</p>
                </div>
                <p className={s.heroPill}>Helping Others Pursue Empowerment</p>
              </div>

              <aside className={s.quoteCard} aria-label="Our promise">
                <p className={`display ${s.quoteBig}`}>Home should feel like home. Life should be lived!</p>
                <span className={s.quoteDivider} aria-hidden="true" />
                <p className={s.quoteSmall}>
                  Choose Hope and you are choosing to have support in living the life you&apos;ve dreamed of!
                </p>
              </aside>
            </div>
          </div>
        </section>

        <div className={s.lower}>
          {/* ─────────── VIDEO ─────────── */}
          <section className={`container ${s.videoSection}`} aria-label="Video">
            <VideoBlock />
          </section>

          <div className={s.scenic}>
            <div className={s.scenicBg} aria-hidden="true">
              <div className={s.scenicImgBox}>
                <Image src={bgSection} alt="" fill sizes="190vw" quality={45} loading="lazy" />
              </div>
              <div className={s.scenicFade} />
            </div>

            {/* ─────────── CTA CARDS ─────────── */}
            <section className={`container ${s.ctaSection}`} aria-label="Get involved">
              <Link prefetch={false} href={ROUTES.careers} className={`${s.ctaCard} ${s.ctaTeam}`}>
                <Image src={ctaTeam} alt="" fill sizes="384px" quality={60} className={s.ctaBg} />
                <span className={s.ctaInner}>
                  <Image src="/icons/icon-team.svg" alt="" width={39} height={25} />
                  <span className={`display ${s.ctaLabel}`}>Come Join Our Team</span>
                </span>
              </Link>
              <Link prefetch={false} href={ROUTES.housing} className={`${s.ctaCard} ${s.ctaLive}`}>
                <Image src={ctaLive} alt="" fill sizes="384px" quality={60} className={s.ctaBg} />
                <span className={s.ctaInner}>
                  <Image src="/icons/icon-live.svg" alt="" width={27} height={27} />
                  <span className={`display ${s.ctaLabel}`}>Come Live with Us</span>
                </span>
              </Link>
            </section>

            {/* ─────────── MISSION ─────────── */}
            <section className={`container ${s.mission}`} aria-labelledby="mission-title">
              <div className={s.missionHead}>
                <Image src="/icons/hs-spark.svg" alt="" width={55} height={109} className={s.missionSpark} />
                <h2 id="mission-title" className={`display ${s.missionTitle}`}>
                  Our Mission
                </h2>
              </div>
              <p className={s.missionText}>
                We believe every person deserves the chance to grow, achieve, and live a meaningful life. Hope
                Services exists to empower individuals with developmental disabilities through respectful
                support, skill-building, and community inclusion.
              </p>
            </section>

            {/* ─────────── WHY FAMILIES TRUST ─────────── */}
            <section className={`container ${s.whySection}`} aria-labelledby="why-title">
              <div className={s.whyWrap}>
                <div className={s.whyPanel}>
                  <div className={s.whyPhotoBox} aria-hidden="true">
                    <div className={s.whyPhotoInner}>
                      <Image src={whyPhoto} alt="" fill sizes="(max-width: 900px) 80vw, 1031px" quality={75} />
                    </div>
                  </div>
                  <div className={s.whyContent}>
                    <h2 id="why-title" className={`display ${s.whyTitle}`}>
                      Why Families Trust Hope Services
                    </h2>
                    <ul className={s.whyGrid}>
                      {WHY_ITEMS.map((item) => (
                        <li key={item.icon} className={s.whyItem}>
                          <span className={s.whyIconBox}>
                            <Image
                              src={`/icons/${item.icon}.svg`}
                              alt=""
                              width={item.w}
                              height={item.h}
                              className={s.whyIcon}
                              style={{ ["--iw" as string]: item.w, ["--ih" as string]: item.h }}
                            />
                          </span>
                          <span className={s.whyText}>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* ─────────── TESTIMONIALS ─────────── */}
            <section className={`container ${s.testimonials}`} aria-label="Testimonials">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className={s.tCard}>
                  <Image
                    src={texture}
                    alt=""
                    aria-hidden="true"
                    className={`${s.tTexture} ${t.flip ? s.tTextureFlip : ""}`}
                    sizes="864px"
                    quality={70}
                  />
                  <div className={s.tInner}>
                    <h3 className={`display ${s.tTitle}`} style={{ maxWidth: `calc(${t.titleWidth} * var(--t))` }}>
                      {t.title}
                    </h3>
                    <Image
                      src="/icons/stars.svg"
                      alt="Five out of five stars"
                      width={261.638}
                      height={42.751}
                      className={s.tStars}
                    />
                    <blockquote className={s.tQuote}>
                      <p>{t.quote}</p>
                    </blockquote>
                    <figcaption className={s.tName}>{t.name}</figcaption>
                  </div>
                </figure>
              ))}
            </section>

            <SiteFooter />
          </div>
        </div>
      </main>
    </div>
  );
}
