"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/app/actions/inquiry";
import f from "./forms.module.css";
import s from "./CoordinatorForm.module.css";

const COORDINATORS = ["Targeted Service Coordinator (TSC)", "Family / Guardian", "Case Manager", "Other"];

export default function CoordinatorForm() {
  const [state, action, pending] = useActionState<InquiryState, FormData>(submitInquiry, null);
  return (
    <form action={action} className={s.form} aria-labelledby="form-title">
      <h2 id="form-title" className="srOnly">Service coordinator referral form</h2>
      <input type="hidden" name="form" value="coordinator" />

      <p className={`${f.label} ${f.labelBold} ${s.group}`}>Name</p>
      <div className={f.row}>
        <label className={f.field}>
          <span className={f.label}>First Name</span>
          <input className={f.input} name="firstName" autoComplete="given-name" required />
        </label>
        <label className={f.field}>
          <span className={f.label}>Last Name</span>
          <input className={f.input} name="lastName" autoComplete="family-name" required />
        </label>
      </div>

      <p className={`${f.label} ${f.labelBold} ${s.group}`}>Contact</p>
      <div className={f.row}>
        <label className={f.field}>
          <span className={f.label}>Email</span>
          <input className={f.input} name="email" type="email" autoComplete="email" required />
        </label>
        <label className={f.field}>
          <span className={f.label}>Phone Number</span>
          <input className={f.input} name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <div className={f.row}>
        <label className={f.field}>
          <span className={f.label}>Service Coordinator</span>
          <select className={f.select} name="coordinator" defaultValue="">
            <option value="">Select one</option>
            {COORDINATORS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className={f.field}>
          <span className={f.label}>County</span>
          <input className={f.input} name="county" />
        </label>
      </div>
      <label className={f.field}>
        <span className={f.label}>Current Living Situation</span>
        <textarea className={f.textarea} name="livingSituation" />
      </label>
      <label className={f.field}>
        <span className={f.label}>Services Needed</span>
        <textarea className={f.textarea} name="servicesNeeded" />
      </label>
      <label className={f.field}>
        <span className={f.label}>Additional Information</span>
        <textarea className={f.textarea} name="additionalInfo" />
      </label>
      <label className={f.honeypot} aria-hidden="true">
        Website <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <button type="submit" className={`${f.submit} ${s.submit}`} disabled={pending}>
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
