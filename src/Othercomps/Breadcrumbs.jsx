"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/nextNavigation";

// Slugs that don't read well from naive title-casing (brand names,
// ampersands, acronym pairs).
const LABEL_OVERRIDES = {
  eicerise: "EiceRise",
  easylogy: "EasyLogy",
  "eice-agent": "EICE Agent",
  "eice-voice": "EICE Voice",
  "eice-ops": "EICE Ops",
  "isync-drive": "iSync Drive",
  "isync-lite": "iSync Lite",
  "ai-ml": "AI & ML",
  "ui-ux": "UI/UX",
  "oil-and-gas": "Oil & Gas",
  "digital-media": "Digital Media",
  "account-finance": "Account & Finance",
  "purchase-vendor": "Purchase & Vendor",
  iic: "IIC",
  iot: "IoT",
  saas: "SaaS",
  wifi: "Wi-Fi",
};

// Whole words that should render upper-cased wherever they appear, applied
// after title-casing (covers slugs not explicitly listed above).
const ACRONYM_WORDS = new Set([
  "ai",
  "ui",
  "ux",
  "seo",
  "gis",
  "sso",
  "pos",
  "iic",
  "crm",
  "erp",
  "api",
  "cms",
  "tms",
  "scada",
]);

// Top-level sections with no index page of their own (linking to them 404s)
// — render as plain, non-clickable text instead of a broken link.
const NO_INDEX_PAGE = new Set([]);

// Purely structural URL segments with no real page of their own and no
// meaningful label — omitted from the trail entirely (not just unlinked).
// "products" only ever shows up as a dropdown menu, never a real page.
const SKIP_SEGMENTS = new Set(["category", "products"]);

// Exact pages that never show a breadcrumb, regardless of depth.
const HIDDEN_PATHS = new Set(["/products/eicerise", "/products/easylogy"]);

function toTitleCase(segment) {
  return segment
    .split("-")
    .map((word) =>
      ACRONYM_WORDS.has(word.toLowerCase())
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(" ");
}

function labelFor(segment) {
  return LABEL_OVERRIDES[segment] ?? toTitleCase(segment);
}

export function Breadcrumbs() {
  const pathname = usePathname() || "/";
  if (HIDDEN_PATHS.has(pathname)) return null;

  const segments = pathname.split("/").filter(Boolean);

  // Only surface the trail once the visitor is more than two pages deep
  // (home + one top-level section doesn't need it; a specific item within
  // a section does).
  if (segments.length < 2) return null;

  const crumbs = [
    { label: "Home", href: "/", linkable: true },
    ...segments
      .map((segment, index) => ({
        segment,
        label: labelFor(segment),
        href: `/${segments.slice(0, index + 1).join("/")}`,
        linkable: !NO_INDEX_PAGE.has(segment),
      }))
      .filter((crumb) => !SKIP_SEGMENTS.has(crumb.segment)),
  ];

  // Nearly every page on this site already emits its own hand-built
  // BreadcrumbList JSON-LD (with the real page/post title, not an
  // auto-generated slug label) — this component only adds the visible trail,
  // which never existed before, and deliberately doesn't duplicate schema.
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto mt-20 w-full max-w-7xl px-4 pt-3 text-[16px] sm:px-6 2xl:mt-0"
    >
      <ol className="flex flex-nowrap items-center gap-1.5 text-blackk/50">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li
              key={crumb.href}
              className={`flex shrink-0 items-center gap-1.5 ${isLast ? "min-w-0" : ""}`}
            >
              {index > 0 && (
                <span
                  aria-hidden
                  className="inline-flex h-3.5 w-2.5 shrink-0 items-center justify-center"
                >
                  /
                </span>
              )}
              {!crumb.linkable ? (
                <span>{crumb.label}</span>
              ) : (
                <Link
                  to={crumb.href}
                  aria-current={isLast ? "page" : undefined}
                  className={
                    isLast
                      ? "tap-sm truncate font-medium text-blackk transition-colors hover:text-bloo"
                      : "tap-sm shrink-0 transition-colors hover:text-bloo"
                  }
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
