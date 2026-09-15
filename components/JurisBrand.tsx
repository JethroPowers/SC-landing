import Link from "next/link";

// Reused from the public Juris interface, inspected 15 September 2026.
export function JurisBrand() {
  return (
    <Link href="/" className="juris-brand" aria-label="Juris Partners home">
      <svg
        viewBox="0 0 64 64"
        className="juris-symbol"
        aria-hidden="true"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="32" cy="32" rx="13" ry="29" />
          <ellipse
            cx="32"
            cy="32"
            rx="13"
            ry="29"
            transform="rotate(60 32 32)"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="13"
            ry="29"
            transform="rotate(120 32 32)"
          />
        </g>
        <circle cx="32" cy="32" r="6.5" fill="currentColor" />
        <circle cx="30" cy="30" r="2" fill="#fff9e8" />
      </svg>
      <span className="juris-wordmark">
        <svg viewBox="0 0 570 64" aria-hidden="true" fill="currentColor">
          <path d="M74 2H85V43Q85 61 66 61H0L12 50H64Q74 50 74 41Z" />
          <path d="M130 2H141V42Q141 50 151 50H202Q211 50 211 42V2H222V43Q222 61 203 61H149Q130 61 130 43Z" />
          <path d="M270 2H338Q357 2 357 21Q357 39 339 39H329L359 61H340L301 30H336Q346 30 346 21Q346 12 336 12H281Z" />
          <path d="M410 2H421V61H410Z" />
          <path d="M483 2H560L549 12H484Q474 12 474 20Q474 27 484 27H541Q561 27 561 44Q561 61 541 61H472L483 50H540Q550 50 550 43Q550 36 540 36H483Q463 36 463 20Q463 2 483 2Z" />
        </svg>
        <span>PARTNERS</span>
      </span>
    </Link>
  );
}
