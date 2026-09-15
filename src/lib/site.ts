export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://hopeservicesid.com";

export const SITE = {
  name: "Hope Services",
  legalName: "Hope Services, Inc.",
  tagline: "Supported Living for Idaho's Adults",
  description:
    "Hope Services provides supported living for adults with developmental disabilities in Meridian, Idaho. Personalized support, safe community-based homes, and a compassionate team.",
  phone: "208-695-4328",
  phoneIntl: "+12086954328",
  email: "admin@hopeservicesid.com",
  tourContact: {
    name: "Tyler Oram",
    title: "Agency Administrator",
    phone: "208-921-4458",
    phoneIntl: "+12089214458",
    email: "Tyler@hopeservicesid.com",
  },
  address: {
    street: "5700 W Riva Capri St.",
    city: "Meridian",
    region: "ID",
    postal: "83646",
    country: "US",
  },
  social: {
    facebook: "https://www.facebook.com/hopeservicesid",
    instagram: "https://www.instagram.com/hopeservicesid",
  },
} as const;

/** Primary navigation. `match` lists path prefixes that mark the item active. */
export const NAV_LINKS = [
  { label: "Services", href: "/services", match: ["/services"] },
  { label: "Eligibility", href: "/eligibility", match: ["/eligibility"] },
  { label: "Housing", href: "/housing", match: ["/housing"] },
  { label: "About Us", href: "/about", match: ["/about", "/careers"] },
  { label: "Contact", href: "/contact", match: ["/contact"] },
] as const;

export const ROUTES = {
  home: "/",
  services: "/services",
  supportedLiving: "/services/supported-living",
  eligibility: "/eligibility",
  housing: "/housing",
  about: "/about",
  team: "/about/team",
  serviceCoordinators: "/about/service-coordinators",
  careers: "/careers",
  contact: "/contact",
  tour: "/contact#tour",
} as const;
