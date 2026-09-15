"use client";

import Image from "next/image";
import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/app/actions/inquiry";
import f from "./forms.module.css";
import s from "./ContactForm.module.css";
import photo from "../../public/images/contact-cupcakes.webp";

export default function ContactForm() {
  const [state, action, pending] = useActionState<InquiryState, FormData>(submitInquiry, null);
  return (
    <form action={action} className={s.form} aria-labelledby="form-title">
      <h2 id="form-title" className="srOnly">Contact form</h2>
      <input type="hidden" name="form" value="contact" />
      <div className={s.stage}>
        <div className={s.panel}>
          <div className={s.photo} aria-hidden="true">
            <Image src={photo} alt="" fill sizes="(max-width: 900px) 70vw, 436px" quality={78} style={{ objectFit: "cover", objectPosition: "50% 0" }} />
          </div>
          <div className={s.fields}>
            <label className={f.field}>
              <span className={`${f.label} ${s.label}`}>First Name</span>
              <input className={`${f.input} ${s.input}`} name="firstName" autoComplete="given-name" required />
            </label>
            <label className={f.field}>
              <span className={`${f.label} ${s.label}`}>Last Name</span>
              <input className={`${f.input} ${s.input}`} name="lastName" autoComplete="family-name" required />
            </label>
            <label className={f.field}>
              <span className={`${f.label} ${s.label}`}>Email</span>
              <input className={`${f.input} ${s.input}`} name="email" type="email" autoComplete="email" required />
            </label>
            <label className={f.honeypot} aria-hidden="true">
              Website <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
        </div>
      </div>
      <button type="submit" className={f.submit} disabled={pending}>
        {pending ? "Sending…" : "Submit"}
      </button>
      {state && (
        <p className={`${f.status} ${state.ok ? "" : f.statusError}`} role="status" aria-live="polite">
          {state.message}
        </p>
      )}
    </form>
  );
}
