import { PageBand, SparkTitle, Scenic, blocks as b, cx } from "@/components/blocks";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import { pageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { ROUTES, SITE, SITE_URL } from "@/lib/site";
import s from "./page.module.css";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Keep in touch with Hope Services in Meridian, Idaho. Ask about supported living, schedule a tour, or send us your questions and feedback.",
  path: ROUTES.contact,
});

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}${ROUTES.contact}#contactpage`,
  url: `${SITE_URL}${ROUTES.contact}`,
  name: "Contact Hope Services",
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

export default function ContactPage() {
  return (
    <div>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Contact", path: ROUTES.contact }]), contactJsonLd]} />
      <a href="#main" className="skipLink">Skip to content</a>
      <PageBand bandHeight={504} cardHeight={765}>
        <SparkTitle id="page-title">KEEP IN TOUCH</SparkTitle>
        <p className={cx(b.lead, b.leadCenter, s.lead)}>
          Thank you for your interest in Hope Services, where we are dedicated to providing compassionate and supportive
          homes for individuals who are in need of guidance.{" "}
          <strong>If you have any inquiries, feedback, or would like to learn more about our services, we&rsquo;re here to assist you.</strong>
        </p>
      </PageBand>

      <main id="main">
        <Scenic imgBox={["0.03%", "24.39%", "108.42%", "113.9%"]} className={s.scenic}>
          <section id="tour" className={cx("container", s.formSection)} aria-label="Contact form">
            <ContactForm />
            <p className={s.alt}>
              Prefer to call or email? <a href={`tel:${SITE.phoneIntl}`}>{SITE.phone}</a> &middot;{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </section>
          <SiteFooter />
        </Scenic>
      </main>
    </div>
  );
}
