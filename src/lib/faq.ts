import type { FaqItem } from "@/components/blocks";

/** Shared supported-living FAQ used on the Eligibility and Housing pages. */
export const FAQ_ITEMS: FaqItem[] = [
  { q: "Who is eligible for supported living services?", a: "Adults age 18 and over with a documented qualifying diagnosis before age 22" },
  { q: "Can I choose where I live or who I live with?", a: "The clients lead the process! You will get to view homes and roommate potentials based on our current openings. We also discuss starting a new house if we don’t have a current opening that meets your needs." },
  { q: "What types of support are provided in the home?", a: "24 hour a day staffing is provided. Staff is there to assist with ensuring you receive the assistance level you need to live a full life! This includes assisting with laundry, cleaning, meal planning and cooking, transportation to and from appointments, transportation to and from community events, grocery shopping, etc.! It is your life to live, staff just help ensure your needs are met!" },
  { q: "Is staff available at all times?", a: "Staff is available and present 24/7. We also have an on-call number in case of emergencies. We provide staff 365 days a year." },
  { q: "What are your staff to client ratios?", a: "For intense services it is 1:1, for high services it is 3:1." },
  { q: "How are staff trained?", a: "Our staff are trained before ever entering houses. They are also background checked and med certified. Staff complete in person training as well as attending continued training throughout their employment with Hope. They also are required to attend monthly staff meetings and complete online trainings continuously. Staff are also trained on each individual client that they work with prior to starting a shift with them." },
  { q: "Where do we provide SL services?", a: "We provide services in a house that you live in. This is most often with 2 other roommates. You will have your own room. The house will be fully furnished except for your bedroom! If you need help getting items to furnish your bedroom please let us or your TSC know." },
  { q: "How can I start receiving services?", a: "You must be on Medicaid, applied for or receiving SSI, and approved for the DD waiver in order to receive services. If you are not that far yet, we can help with getting the process started. Once you have both of those things we will have a team meeting with your TSC and get a plan written for your services." },
  { q: "How do I qualify for the DD waiver in the state of Idaho?", a: "Be 18 years of age or older, have Medicaid, and have a qualifying diagnosis from before the age of 22. Fill out the DD waiver application and complete the intake and SIB-R." },
  { q: "What does it cost to receive supported living?", a: "It doesn’t cost you anything. It is paid for by the DD waiver through Health and Welfare. You will be responsible for rent, clothing, food, and personal expenses. (You will want to apply for food stamps as well!)" },
  { q: "What ages do you support?", a: "Anyone age 18 and over!" },
  { q: "What do I need to provide for my new home?", a: "Items for your bedroom (bed, dresser, TV, etc.)., and personal care items – clothing, shower supplies, toothbrush, etc. We will fully furnish all main living areas of the house including all kitchen supplies, living room, etc." },
];

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}
