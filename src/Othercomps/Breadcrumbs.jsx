"use client";

import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Link } from "@/nextNavigation";

// Every non-EiceRise product's "Request a Demo" button funnels into this one
// shared form route, distinguished only by a ?product= query param — the URL
// path alone would otherwise mislabel all of them as "EiceRise". Values here
// must match the exact ?product= strings used across src/Product/*.jsx and
// src/Easylogy/**. Genuine EiceRise pages (the "EiceRise"/"EiceRise(...)"
// values) aren't listed — the path-derived "EiceRise" crumb is already
// correct for those, so they fall through to the default.
const DEMO_FORM_PATH = "/products/eicerise/form";
const PRODUCT_CRUMB_OVERRIDES = {
  "Eice SmartFit": { label: "Smartfit", href: "/products/smartfit" },
  Verilock: { label: "Verilock", href: "/products/verilock" },
  iSyncDrive: { label: "iSync Drive", href: "/products/isync-drive" },
  iSyncLite: { label: "iSync Lite", href: "/products/isync-lite" },
  Infrasight: { label: "InfraSight", href: "/products/infrasight" },
  "Eice Voice": { label: "EICE Voice", href: "/products/eice-voice" },
  EiceOps: { label: "EICE Ops", href: "/products/eice-ops" },
  "EICE Agent": { label: "EICE Agent", href: "/products/eice-agent" },
  Easylogy: { label: "EasyLogy", href: "/products/easylogy" },
};

// Exact-path label overrides — for routes where the URL segment reads
// awkwardly (e.g. the shared demo form's last segment is literally "form").
const PATH_LABEL_OVERRIDES = {
  [DEMO_FORM_PATH]: "Request a Demo",
};

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

  // Blog post URLs are /blog/{category}/{slug} — the middle segment is a
  // category slug, but its real page lives at /blog/category/{slug}, not
  // /blog/{slug}. "uncategorized" is our fallback for posts with no real
  // category, so it has no listing page at all — render it as plain text.
  // Excludes segments[1] === "category" so this doesn't also match the
  // (unrelated, also 3-segment) /blog/category/{slug} listing route.
  const isBlogPostPath =
    segments[0] === "blog" && segments.length === 3 && segments[1] !== "category";

  const crumbs = [
    { label: "Home", href: "/", linkable: true },
    ...segments
      .map((segment, index) => {
        const isBlogCategorySegment = isBlogPostPath && index === 1;
        const href = isBlogCategorySegment
          ? `/blog/category/${segment}`
          : `/${segments.slice(0, index + 1).join("/")}`;
        return {
          segment,
          label: PATH_LABEL_OVERRIDES[href] ?? labelFor(segment),
          href,
          linkable:
            !NO_INDEX_PAGE.has(segment) &&
            !(isBlogCategorySegment && segment === "uncategorized"),
        };
      })
      .filter((crumb) => !SKIP_SEGMENTS.has(crumb.segment)),
  ];

  // Nearly every page on this site already emits its own hand-built
  // BreadcrumbList JSON-LD (with the real page/post title, not an
  // auto-generated slug label) — this component only adds the visible trail,
  // which never existed before, and deliberately doesn't duplicate schema.
  if (pathname === DEMO_FORM_PATH) {
    return (
      <Suspense fallback={<BreadcrumbTrail crumbs={crumbs} />}>
        <DemoFormBreadcrumb defaultCrumbs={crumbs} />
      </Suspense>
    );
  }

  return <BreadcrumbTrail crumbs={crumbs} />;
}

// The ?product= query param is invisible to usePathname, so this reads it
// separately via useSearchParams (which needs the Suspense boundary above —
// confined to just this one route so the rest of the site keeps its static
// rendering unaffected).
function DemoFormBreadcrumb({ defaultCrumbs }) {
  const searchParams = useSearchParams();
  const override = PRODUCT_CRUMB_OVERRIDES[searchParams.get("product")];

  if (!override) return <BreadcrumbTrail crumbs={defaultCrumbs} />;

  const crumbs = defaultCrumbs.map((crumb) =>
    crumb.segment === "eicerise" ? { ...crumb, ...override } : crumb,
  );
  return <BreadcrumbTrail crumbs={crumbs} />;
}

function BreadcrumbTrail({ crumbs }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto mt-20 w-full max-w-7xl px-4 pt-3 text-[16px] sm:px-6 2xl:mt-0"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-blackk/50">
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
