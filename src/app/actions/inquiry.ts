"use server";

export type InquiryState = { ok: boolean; message: string } | null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(fd: FormData, key: string, max = 2000) {
  const v = fd.get(key);
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

/**
 * Handles both the Contact form and the Service Coordinator form.
 * Delivery: if RESEND_API_KEY and INQUIRY_TO are configured the message is emailed
 * through Resend; otherwise it is logged on the server so nothing is silently lost.
 */
export async function submitInquiry(_prev: InquiryState, fd: FormData): Promise<InquiryState> {
  // Honeypot: real users never fill this hidden field.
  if (text(fd, "website")) return { ok: true, message: "Thanks! We’ll be in touch soon." };

  const form = text(fd, "form", 40) || "contact";
  const firstName = text(fd, "firstName", 120);
  const lastName = text(fd, "lastName", 120);
  const email = text(fd, "email", 200);

  if (!firstName || !lastName) return { ok: false, message: "Please enter your first and last name." };
  if (!EMAIL_RE.test(email)) return { ok: false, message: "Please enter a valid email address." };

  const fields: Record<string, string> = { firstName, lastName, email };
  for (const k of ["phone", "coordinator", "county", "livingSituation", "servicesNeeded", "additionalInfo", "role"]) {
    const v = text(fd, k);
    if (v) fields[k] = v;
  }

  const subject = form === "coordinator" ? `Service coordinator referral from ${firstName} ${lastName}` : `Website inquiry from ${firstName} ${lastName}`;
  const body = Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO;
  if (apiKey && to) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.INQUIRY_FROM || "Hope Services Website <onboarding@resend.dev>",
          to: to.split(",").map((s) => s.trim()),
          reply_to: email,
          subject,
          text: body,
        }),
      });
      if (!res.ok) throw new Error(`Resend responded ${res.status}`);
    } catch (err) {
      console.error("[inquiry] delivery failed", err);
      return { ok: false, message: "Sorry, something went wrong sending your message. Please call us at 208-695-4328." };
    }
  } else {
    console.info(`[inquiry] ${subject}\n${body}`);
  }

  return { ok: true, message: "Thanks! We’ll be in touch soon." };
}
