"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

const firmTypes = [
  "CBI/RBI advisory",
  "Tax relocation",
  "Immigration law",
  "UAE/company formation",
  "Caribbean authorised agent",
  "Private-client practice",
  "Other"
];

const mainProblems = [
  "Matter status reconstruction",
  "Programme pricing/data control",
  "Blocker or dependency control",
  "Document readiness",
  "Advisor-review preparation",
  "Other"
];

type FormState = "idle" | "submitting" | "success" | "error";

const interests = [
  {
    value: "matter-control-diagnostic",
    label: "Complimentary Matter Control Diagnostic"
  },
  { value: "readiness-pilot", label: "30-Day Co-Managed Readiness Pilot" },
  { value: "other", label: "Another matter-readiness question" }
];

export function ContactForm({ initialInterest }: { initialInterest?: string }) {
  const [status, setStatus] = useState<FormState>("idle");
  const selectedInterest = interests.some((item) => item.value === initialInterest)
    ? initialInterest
    : "";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/demo-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form-shell" onSubmit={handleSubmit}>
      <div className="form-intro">
        <p className="micro">Diagnostic discussion</p>
        <p className="small">
          Required fields are marked. Please do not submit client-identifiable
          information through this form.
        </p>
      </div>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Name <span>Required</span></label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="firmName">Firm name <span>Required</span></label>
          <input id="firmName" name="firmName" autoComplete="organization" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email <span>Required</span></label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="form-field">
          <label htmlFor="firmType">Firm type <span>Required</span></label>
          <select id="firmType" name="firmType" required defaultValue="">
            <option value="" disabled>
              Select firm type
            </option>
            {firmTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="form-field full">
          <label htmlFor="mainProblem">Main problem <span>Required</span></label>
          <select id="mainProblem" name="mainProblem" required defaultValue="">
            <option value="" disabled>
              Select main problem
            </option>
            {mainProblems.map((problem) => (
              <option key={problem}>{problem}</option>
            ))}
          </select>
        </div>
      </div>
      <details className="optional-fields">
        <summary>Optional qualification details</summary>
        <div className="form-grid">
          <div className="form-field full">
            <label htmlFor="interest">Starting point <span>Optional</span></label>
            <select id="interest" name="interest" defaultValue={selectedInterest}>
              <option value="">Not sure yet</option>
              {interests.map((item) => (
                <option value={item.value} key={item.value}>{item.label}</option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="website">Website <span>Optional</span></label>
            <input id="website" name="website" type="url" autoComplete="url" />
          </div>
          <div className="form-field">
            <label htmlFor="role">Role <span>Optional</span></label>
            <input id="role" name="role" autoComplete="organization-title" />
          </div>
          <div className="form-field">
            <label htmlFor="activeCases">Active cases per month <span>Optional</span></label>
            <input id="activeCases" name="activeCases" inputMode="numeric" />
          </div>
          <div className="form-field">
            <label htmlFor="routes">Relevant routes <span>Optional</span></label>
            <input
              id="routes"
              name="routes"
              placeholder="Caribbean CBI, UAE residency, Malta"
            />
          </div>
          <div className="form-field full">
            <label htmlFor="message">Message <span>Optional</span></label>
            <textarea
              id="message"
              name="message"
              placeholder="Describe the case or programme-data problem without naming a client."
            />
          </div>
        </div>
      </details>
      <div className="hero-actions">
        <button className="button button-primary" type="submit" disabled={status === "submitting"}>
          <Send size={18} aria-hidden="true" />
          {status === "submitting" ? "Submitting..." : "Discuss complimentary diagnostic"}
        </button>
      </div>
      {status === "success" ? (
        <div className="form-status success" role="status">
          Thank you. We will review the request and reply about diagnostic suitability.
          For sensitive matters, please do not submit client-identifiable
          information through this form.
        </div>
      ) : null}
      {status === "error" ? (
        <div className="form-status error" role="alert">
          The request could not be submitted. Please try again later and do not
          include client-identifiable information.
        </div>
      ) : null}
    </form>
  );
}
