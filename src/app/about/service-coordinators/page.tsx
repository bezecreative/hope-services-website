import { PageBand, SparkTitle, Scenic, blocks as b, cx } from "@/components/blocks";
import SiteFooter from "@/components/SiteFooter";
import CoordinatorForm from "@/components/CoordinatorForm";
import { pageMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { ROUTES } from "@/lib/site";
import s from "./page.module.css";

export const metadata = pageMetadata({
  title: "Service Coordinators",
  description:
    "Service coordinators: refer an individual to Hope Services' supported living program in Idaho. Tell us about the person you support and we'll determine whether we're a good fit.",
  path: ROUTES.serviceCoordinators,
});

export default function ServiceCoordinatorsPage() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd([{ name: "About Us", path: ROUTES.about }, { name: "Service Coordinators", path: ROUTES.serviceCoordinators }])} />
      <a href="#main" className="skipLink">Skip to content</a>
      <PageBand bandHeight={559} cardHeight={2056}>
        <SparkTitle id="page-title" className={s.title}>
          Service Coordinators - Let&rsquo;s Work Together!
        </SparkTitle>
        <div className={cx(b.lead, b.leadCenter, s.lead)}>
          <p>
            Looking for a supported living option that prioritizes a person&rsquo;s home, independence, goals and
            connection to the community?
          </p>
          <p>
            We&rsquo;d love to learn about the individual you&rsquo;re supporting and determine whether Hope Services may
            be a good fit.
          </p>
        </div>
      </PageBand>

      <main id="main">
        <Scenic
          fade="linear-gradient(-15.83deg, rgba(255,255,255,0) 27.231%, #fff 78.114%)"
          imgBox={["-14.07%", "0", "128.15%", "100%"]}
          className={s.scenic}
        >
          <section className={cx("container", s.formSection)} aria-label="Referral form">
            <CoordinatorForm />
          </section>
          <SiteFooter />
        </Scenic>
      </main>
    </div>
  );
}
