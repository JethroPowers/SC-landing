"use client";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  enquiryInterests,
  normaliseInterest,
  enquiryStage,
} from "@/lib/partners";
import { fieldLimits, validateEnquiry } from "@/lib/enquiry";
import styles from "./partners/Enquiry.module.css";

export function ContactForm({
  initialInterest,
  initialStage,
  configured = false,
  variant = "enquiry",
}: {
  initialInterest?: string;
  initialStage?: string;
  configured?: boolean;
  variant?: "enquiry" | "adviser";
}) {
  const id = useId();
  const [interest, setInterest] = useState(
    normaliseInterest(
      variant === "adviser" ? "adviser-network" : initialInterest,
    ),
  );
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  const pending = useRef(false);
  const feedback = useRef<HTMLParagraphElement>(null);
  const isAdviser = interest === "adviser-network";
  useEffect(() => {
    if (status === "error" || status === "success") feedback.current?.focus();
  }, [status]);
  const isWorkflow = interest === "operational-workflow";
  const stage =
    initialStage ??
    (initialInterest === "matter-control-diagnostic" ? "diagnostic" : "");
  const stageLabel = enquiryStage(stage);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current || status === "success") return;
    const result = validateEnquiry(
      Object.fromEntries(new FormData(event.currentTarget).entries()),
    );
    if (!result.ok) {
      setError(result.error);
      setStatus("error");
      return;
    }
    pending.current = true;
    setStatus("submitting");
    setError("");
    try {
      const response = await fetch("/api/demo-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.payload),
        signal: AbortSignal.timeout(15000),
      });
      const data = await response.json().catch(() => null);
      if (!response.ok || data?.ok !== true)
        throw new Error(
          response.status === 503
            ? "Enquiry delivery is unavailable in this preview. Your enquiry has not been sent."
            : "Your enquiry could not be confirmed. Your entries are still here; please try again later.",
        );
      setStatus("success");
    } catch (cause) {
      setStatus("error");
      setError(
        cause instanceof Error &&
          cause.name !== "TimeoutError" &&
          cause.name !== "TypeError"
          ? cause.message
          : "Delivery could not be confirmed. Your entries are still here; please try again later.",
      );
    } finally {
      pending.current = false;
    }
  }
  return (
    <form
      className={styles.form}
      aria-label={
        variant === "adviser"
          ? "Juris adviser interest"
          : "Professional enquiry"
      }
      onSubmit={handleSubmit}
      aria-describedby={`${id}-privacy`}
    >
      {!configured && (
        <p className={styles.previewNotice}>
          Preview: enquiry delivery is not configured. You can explore the form;
          it cannot deliver an enquiry yet.
        </p>
      )}
      {variant === "adviser" && (
        <div className={styles.formHeading}>
          <span>EXPRESSION OF INTEREST</span>
          <h3>Tell us about your professional work.</h3>
          <p>
            Start a conversation about mutual fit. Submission is not acceptance
            into the adviser network.
          </p>
        </div>
      )}
      <fieldset
        className={styles.controls}
        aria-label="Professional enquiry details"
        disabled={status === "submitting" || status === "success"}
      >
        <div className={styles.grid}>
          <div>
            <label htmlFor={`${id}-name`}>
              Name <span>Required</span>
            </label>
            <input
              id={`${id}-name`}
              name="name"
              autoComplete="name"
              maxLength={fieldLimits.name}
              pattern=".*\S.*"
              required
            />
          </div>
          <div>
            <label htmlFor={`${id}-firm`}>
              Firm name <span>Required</span>
            </label>
            <input
              id={`${id}-firm`}
              name="firmName"
              autoComplete="organization"
              maxLength={fieldLimits.firmName}
              pattern=".*\S.*"
              required
            />
          </div>
          <div className={styles.full}>
            <label htmlFor={`${id}-email`}>
              Business email <span>Required</span>
            </label>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="email"
              maxLength={fieldLimits.email}
              required
            />
          </div>
          <div className={styles.full}>
            {variant === "adviser" ? (
              <span className={styles.intentLabel}>Main interest</span>
            ) : (
              <label htmlFor={`${id}-interest`}>
                Main interest <span>Required</span>
              </label>
            )}
            {variant === "adviser" ? (
              <>
                <input type="hidden" name="interest" value="adviser-network" />
                <p id={`${id}-interest`} className={styles.intent}>
                  Juris Adviser Network
                </p>
              </>
            ) : (
              <select
                id={`${id}-interest`}
                name="interest"
                required
                value={interest}
                onChange={(event) =>
                  setInterest(normaliseInterest(event.target.value))
                }
              >
                <option value="">Select your main interest</option>
                {enquiryInterests.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
        {isWorkflow && stageLabel && (
          <p className={styles.context}>
            Conversation context: <strong>{stageLabel}</strong>
          </p>
        )}
        <input
          type="hidden"
          name="mainProblem"
          value={isWorkflow && stageLabel ? stage : ""}
        />
        <details
          className={styles.optional}
          open={isAdviser ? true : undefined}
        >
          <summary>
            {isAdviser ? "Professional context" : "Add business context"}{" "}
            <span>Optional</span>
          </summary>
          <div className={styles.grid}>
            <div>
              <label htmlFor={`${id}-website`}>Business website</label>
              <input
                id={`${id}-website`}
                type="url"
                name="website"
                placeholder="https://"
                autoComplete="url"
                maxLength={fieldLimits.website}
              />
            </div>
            <div>
              <label htmlFor={`${id}-role`}>Your role</label>
              <input
                id={`${id}-role`}
                name="role"
                autoComplete="organization-title"
                maxLength={fieldLimits.role}
              />
            </div>
            <div className={styles.full}>
              <label htmlFor={`${id}-routes`}>Jurisdictions served</label>
              <input
                id={`${id}-routes`}
                name="routes"
                maxLength={fieldLimits.routes}
              />
            </div>
            {isAdviser && (
              <>
                <div className={styles.full}>
                  <label htmlFor={`${id}-service`}>Service type</label>
                  <select
                    name="firmType"
                    id={`${id}-service`}
                    aria-describedby={`${id}-service-help`}
                    defaultValue=""
                  >
                    <option value="">Select if relevant</option>
                    <option>Independent adviser</option>
                    <option>Advisory firm</option>
                    <option>Legal or authorised application services</option>
                    <option>Relocation services</option>
                    <option>Introducer or other provider</option>
                  </select>
                  <p className={styles.fieldHelp} id={`${id}-service-help`}>
                    Introducers and other providers can discuss collaboration
                    without an adviser designation.
                  </p>
                </div>
                <div className={styles.full}>
                  <label htmlFor={`${id}-credential`}>
                    Professional-register or credential link
                  </label>
                  <input
                    type="url"
                    id={`${id}-credential`}
                    name="credentialUrl"
                    aria-describedby={`${id}-credential-help`}
                    placeholder="https://"
                    maxLength={fieldLimits.credentialUrl}
                  />
                  <p className={styles.fieldHelp} id={`${id}-credential-help`}>
                    Where applicable. You do not need to claim a licence that
                    your role does not require.
                  </p>
                </div>
              </>
            )}
            {isWorkflow && (
              <div className={styles.full}>
                <label htmlFor={`${id}-workload`}>
                  Approximate active matters
                </label>
                <select
                  name="activeCases"
                  id={`${id}-workload`}
                  defaultValue=""
                >
                  <option value="">Prefer not to say</option>
                  {["1–5", "6–20", "21–50", "51+"].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            )}
            <div className={styles.full}>
              <label htmlFor={`${id}-message`}>
                {isAdviser
                  ? "How would you like to collaborate?"
                  : "Short, non-confidential description"}
              </label>
              <textarea
                name="message"
                id={`${id}-message`}
                rows={3}
                maxLength={isAdviser ? 1500 : fieldLimits.message}
                aria-describedby={`${id}-privacy`}
                placeholder={
                  isAdviser
                    ? "Who you serve, your areas of practice and the contribution or relationship you want to discuss."
                    : "A high-level description of your firm’s need."
                }
              />
            </div>
          </div>
        </details>
      </fieldset>
      <p className={styles.privacy} id={`${id}-privacy`}>
        Do not include applicant names, passport details, financial records,
        criminal-history information or confidential case narratives.{" "}
        <Link href="/privacy">How we use enquiry information</Link>.
      </p>
      <button
        className={styles.submit}
        type="submit"
        disabled={status === "submitting" || status === "success"}
      >
        {status === "submitting"
          ? "Submitting…"
          : status === "success"
            ? isAdviser
              ? "Interest received"
              : "Enquiry received"
            : isAdviser
              ? "Register adviser interest"
              : "Send enquiry"}
        <ArrowRight size={17} aria-hidden="true" />
      </button>
      {status === "error" && (
        <p className={styles.error} role="alert" ref={feedback} tabIndex={-1}>
          {error}
        </p>
      )}
      {status === "success" && (
        <p
          className={styles.success}
          role="status"
          ref={feedback}
          tabIndex={-1}
        >
          {isAdviser ? (
            "Your adviser-network interest has been received for founder review. This is not acceptance or an adviser designation. We’ll discuss mutual fit and the appropriate next step."
          ) : (
            <>
              Thank you. Your enquiry has been received for founder review.
              We’ll discuss fit and the appropriate next step; this is not
              partner approval.
            </>
          )}
        </p>
      )}
    </form>
  );
}
