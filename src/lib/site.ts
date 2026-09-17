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
export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; match: readonly string[]; children?: readonly NavChild[] };

export const NAV_LINKS: readonly NavItem[] = [
  {
    label: "Services",
    href: "/services",
    match: ["/services"],
    children: [
      { label: "Our Services", href: "/services" },
      { label: "Supported Living", href: "/services/supported-living" },
    ],
  },
  { label: "Eligibility", href: "/eligibility", match: ["/eligibility"] },
  { label: "Housing", href: "/housing", match: ["/housing"] },
  {
    label: "About Us",
    href: "/about",
    match: ["/about", "/careers"],
    children: [
      { label: "Who We Are", href: "/about" },
      { label: "Our Team", href: "/about/team" },
      { label: "Service Coordinators", href: "/about/service-coordinators" },
    ],
  },
  { label: "Contact", href: "/contact", match: ["/contact"] },
];

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

/**
 * Homepage video.
 * - `src`: a publicly reachable MP4/WebM (e.g. "/video/hope-services.mp4") plays inline.
 * - `embed`: a public iframe URL (YouTube/Vimeo, or a SharePoint embed shared with "Anyone") plays inline.
 * - Otherwise the play button opens `link` in a new tab. The current SharePoint link requires a
 *   Hope Services Microsoft sign-in, so it cannot play inline for public visitors yet.
 */
export const VIDEO = {
  title: "Hope Services video",
  src: process.env.NEXT_PUBLIC_VIDEO_SRC || "",
  embed: process.env.NEXT_PUBLIC_VIDEO_EMBED || "",
  poster: "",
  link:
    "https://hopeservicesid-my.sharepoint.com/personal/ashley_hopeservicesid_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fashley%5Fhopeservicesid%5Fcom%2FDocuments%2FAttachments%2FHope%20Video%2Emov&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eeb8a6ffc%2D0b17%2D4ffe%2Db6c5%2De774e648628c",
} as const;
