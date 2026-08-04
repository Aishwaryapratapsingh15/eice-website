import { Link } from "@/nextNavigation";

export const defaultCtaContent = {
  eyebrow: "Ready to Get Started",
  heading: "Transform Your Business with\nEnterprise Technology Solutions",
  description:
    "EICE Technology helps organizations accelerate digital transformation through intelligent software solutions, enterprise applications, AI-powered platforms, cloud infrastructure, cybersecurity, and business automation.",
  primaryCta: { text: "Request a Demo", href: "/products/eicerise/form?product=Blog" },
  secondaryCta: { text: "Contact Our Team", href: "/contact" },
  trustIndicators: [
    "Enterprise-ready solutions",
    "AI-powered innovation",
    "Cloud-first architecture",
    "Dedicated implementation support",
  ],
};

export function CtaSection({ content = defaultCtaContent }) {
  const { eyebrow, heading, description, primaryCta, secondaryCta, trustIndicators } = content;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#012060] via-[#0b3a63] to-[#012060]">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-bloo/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-bloo/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center px-5 pt-8 pb-8 text-center sm:px-6 sm:pb-10 lg:pb-12">
        <span className="text-[18px] font-semibold uppercase text-bloo">
          {eyebrow}
        </span>

        <h2 className="mt-3 max-w-3xl text-[28px] font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          {heading.split("\n").map((line, index, lines) => (
            <span key={index}>
              {line}
              {index < lines.length - 1 && <br />}
            </span>
          ))}
        </h2>

        <p className="mt-4 max-w-2xl text-[18px] leading-relaxed text-white/75 sm:text-lg">
          {description}
        </p>

        <div className="mt-5 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:justify-center">
          <Link
            to={primaryCta.href}
            className="group inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-bloo px-7 text-[18px] font-semibold text-white shadow-lg shadow-bloo/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#012060] sm:w-auto sm:min-w-56"
          >
            {primaryCta.text}
          </Link>
          <Link
            to={secondaryCta.href}
            className="inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-full border-2 border-white/40 px-7 text-[18px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 sm:w-auto sm:min-w-56"
          >
            {secondaryCta.text}
          </Link>
        </div>

        {trustIndicators.length > 0 && (
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[14px] text-white/70">
            {trustIndicators.map((indicator) => (
              <li key={indicator} className="inline-flex items-center gap-2">
                <svg
                  aria-hidden
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0 text-bloo"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 5.29a1 1 0 010 1.415l-7.004 7.004a1 1 0 01-1.414 0L3.296 8.72a1 1 0 111.414-1.414l4.293 4.293 6.293-6.293a1 1 0 011.408-.017z"
                    clipRule="evenodd"
                  />
                </svg>
                {indicator}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
