import type { CSSProperties, ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import s from "./blocks.module.css";

import bgHero from "../../public/images/bg-hero.jpg";
import bgSection from "../../public/images/bg-section.jpg";
import texture from "../../public/images/bg-card-texture.png";

type Vars = CSSProperties & Record<`--${string}`, string | number>;
export const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(" ");

/* ------------------------------------------------------------------ */
/* Top band: forest background + header + the white textured card      */
/* ------------------------------------------------------------------ */
export function PageBand({
  bandHeight,
  cardHeight,
  fadeTo = 100,
  children,
  className,
}: {
  /** Figma height of the band frame (design px at 1440). */
  bandHeight: number;
  /** Figma height of the white card (design px). */
  cardHeight: number;
  /** Percentage of the band height at which the white fade completes. */
  fadeTo?: number;
  children: ReactNode;
  className?: string;
}) {
  const visible = bandHeight - 144; // 30 top pad + 80 nav + 34 gap
  const clip = cardHeight > visible;
  const vars: Vars = { "--card-h": cardHeight, "--visible": visible };
  return (
    <div className={s.band} style={vars}>
      <div className={s.bandBg} aria-hidden="true">
        <Image src={bgHero} alt="" fill priority fetchPriority="high" sizes="100vw" quality={55} className={s.bandImg} />
        <div className={s.bandFade} style={{ background: `linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff ${fadeTo}%)` }} />
      </div>
      <div className={s.bandInner}>
        <SiteHeader />
        <div className="container">
          <div className={s.cardWrap} data-clip={clip || undefined}>
            <div className={cx(s.card, className)}>
              <Image src={texture} alt="" aria-hidden="true" className={s.texture} sizes="1832px" quality={70} />
              <div className={s.cardContent}>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Kenyan Coffee title with the teal/blue spark lines                   */
/* ------------------------------------------------------------------ */
export function SparkTitle({
  as: Tag = "h1",
  children,
  wrap,
  className,
  style,
  id,
}: {
  as?: "h1" | "h2";
  children: ReactNode;
  wrap?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
}) {
  return (
    <div className={cx(s.sparkTitle, className)} style={style}>
      <Image src="/icons/hero-spark-lines.svg" alt="" aria-hidden="true" width={183.094} height={97.712} className={s.spark} />
      <Tag id={id} className={s.sparkText} data-wrap={wrap || undefined}>
        {children}
      </Tag>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                              */
/* ------------------------------------------------------------------ */
export function Btn({
  href,
  children,
  variant = "blue",
  wide,
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "blue" | "outline" | "red";
  wide?: boolean;
  className?: string;
  external?: boolean;
}) {
  const cls = cx(s.btn, variant === "outline" && s.btnOutline, variant === "red" && s.btnRed, wide && s.btnWide, className);
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} prefetch={false} className={cls}>
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Scenic lower section: mountain/lake background + optional stripes    */
/* ------------------------------------------------------------------ */
export function Scenic({
  fade = "linear-gradient(to top, rgba(255,255,255,0) 31.433%, #fff 75.139%)",
  imgBox,
  stripes,
  children,
  className,
}: {
  fade?: string;
  /** Percent box for the image: [left, top, width, height] */
  imgBox?: [string, string, string, string];
  /** Stripes graphic: [designLeft, designTop, variant] */
  stripes?: [number, number] | [number, number, "wide" | "sl"];
  children: ReactNode;
  className?: string;
}) {
  const box: Vars = imgBox
    ? { "--sx": imgBox[0], "--sy": imgBox[1], "--sw": imgBox[2], "--sh": imgBox[3] }
    : {};
  return (
    <div className={cx(s.scenic, className)}>
      <div className={s.scenicBg} aria-hidden="true">
        <div className={s.scenicImgBox} style={box}>
          <Image src={bgSection} alt="" fill sizes="190vw" quality={45} loading="lazy" className={s.scenicImg} />
        </div>
        <div className={s.scenicFade} style={{ background: fade }} />
        {stripes && (
          // eslint-disable-next-line @next/next/no-img-element -- decorative SVG sized purely by CSS container units
          <img
            src={`/icons/stripes-${stripes[2] ?? "wide"}.svg`}
            alt=""
            width={stripes[2] === "sl" ? 1952 : 2085}
            height={472}
            loading="lazy"
            className={s.stripes}
            style={{ "--stx": stripes[0], "--sty": stripes[1], "--stw": stripes[2] === "sl" ? 1952 : 2085 } as Vars}
          />
        )}
      </div>
      <div className={s.scenicContent}>{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Split feature card (photo or colored block on the left, text right)  */
/* ------------------------------------------------------------------ */
export function SplitCard({
  height,
  borderLeft = "#fff",
  borderRight = "#fff",
  left,
  bars = 337,
  children,
  className,
}: {
  height: number;
  borderLeft?: string;
  borderRight?: string;
  left: ReactNode;
  /** Height of the vertical bars graphic in design px, or false for none */
  bars?: 337 | 235 | false;
  children: ReactNode;
  className?: string;
}) {
  const vars: Vars = { "--sh": height, "--bl": borderLeft, "--br": borderRight };
  return (
    <div className={cx(s.splitWrap, className)}>
      <div className={s.split} style={vars}>
        <div className={s.splitLeft}>{left}</div>
        <div className={s.splitRight}>
          <Image src={texture} alt="" aria-hidden="true" className={s.splitTexture} sizes="1560px" quality={70} />
          {bars && (
            <span className={s.splitBars} style={{ "--bh": bars } as Vars} aria-hidden="true">
              <Image src={`/icons/bars-${bars}.svg`} alt="" width={bars} height={44} />
            </span>
          )}
          <div className={cx(s.splitBody, !bars && s.splitBodyNoBars)}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export function SplitPhoto({ src, alt, position }: { src: StaticImageData; alt: string; position?: string }) {
  return <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 532px" quality={72} className={s.splitPhoto} style={{ objectPosition: position }} />;
}

export function SplitBlock({
  color,
  image,
  opacity,
  dark,
  children,
}: {
  color: string;
  image: StaticImageData;
  opacity: number;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={s.splitBlock} style={{ background: color }}>
      <Image src={image} alt="" aria-hidden="true" fill sizes="532px" quality={50} className={s.splitBlockImg} style={{ opacity }} />
      <h2 className={cx("display", s.splitBlockTitle, dark && s.splitBlockTitleDark)}>{children}</h2>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ accordion                                                        */
/* ------------------------------------------------------------------ */
export type FaqItem = { q: string; a: string };
const TONES = ["white", "red", "dark", "blue", "teal"] as const;

export function FaqList({ items, id }: { items: FaqItem[]; id?: string }) {
  return (
    <div className={s.faq} id={id}>
      {items.map((it, i) => {
        const tone = TONES[i % TONES.length];
        const darkChevron = tone === "white" || tone === "teal";
        return (
          <details key={it.q} className={s.faqItem} data-tone={tone} open>
            <summary className={cx("display", s.faqQ)}>
              <span>{it.q}</span>
              <Image src={darkChevron ? "/icons/chevron-dark.svg" : "/icons/chevron-white.svg"} alt="" width={19.945} height={16.318} className={s.faqChevron} />
            </summary>
            <div className={s.faqA}>
              <p>{it.a}</p>
            </div>
          </details>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Icon + label item (teal panels)                                      */
/* ------------------------------------------------------------------ */
export type IconSpec = { icon: string; label: string; inset?: string; width?: number };

export function IconItem({ icon, label, inset = "0", width = 168, box = 58 }: IconSpec & { box?: number }) {
  return (
    <li className={s.iconItem} style={{ "--iw": `${width}px`, "--ib": `${box}px` } as Vars}>
      <span className={s.iconBox}>
        <span className={s.iconIn} style={{ inset }}>
          <Image src={`/icons/${icon}.svg`} alt="" fill sizes="64px" />
        </span>
      </span>
      <span className={s.iconLabel}>{label}</span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Teal "Home & Community Support" panel                                */
/* ------------------------------------------------------------------ */
export function TealPanel({ overlay, children, className, style }: { overlay: StaticImageData; children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={cx(s.tealPanel, className)} style={style}>
      <Image src={overlay} alt="" aria-hidden="true" fill sizes="(max-width: 900px) 100vw, 1208px" quality={45} className={s.tealOverlay} />
      <div className={s.tealInner}>{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading used outside the card ("How to Get Started", etc.)   */
/* ------------------------------------------------------------------ */
export function SectionHeading({ id, children, className }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <h2 id={id} className={cx("display", s.sectionHeading, className)}>
      {children}
    </h2>
  );
}

export { s as blocks };
