// Shared helpers for the sitemap route handlers (app/*sitemap.xml/route.js).
// Page lists below are the static routes of the site with their last-modified
// dates (the project has no CMS/database for these pages, so the dates are
// maintained here by hand). Blog posts come from the blog API.
import { blogApiFetch } from "../Blog/blogApi";
import { blogPostUrl } from "../Blog/blogUrl";

export const BASE_URL = "https://www.eicetechnology.com";
export const NEWS_WINDOW_MS = 48 * 60 * 60 * 1000;

export function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function xmlResponse(xml, cacheControl = "public, s-maxage=3600, stale-while-revalidate=86400") {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": cacheControl,
    },
  });
}

// entries: [{ loc, lastmod?, changefreq? }] — fields that are undefined are omitted.
export function renderUrlset(entries) {
  const urls = entries
    .map(({ loc, lastmod, changefreq }) => {
      const parts = [`    <loc>${escapeXml(loc)}</loc>`];
      if (lastmod) parts.push(`    <lastmod>${escapeXml(lastmod)}</lastmod>`);
      if (changefreq) parts.push(`    <changefreq>${changefreq}</changefreq>`);
      return `  <url>\n${parts.join("\n")}\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function staticEntries(list, changefreq) {
  return list.map(([path, lastmod]) => ({ loc: `${BASE_URL}${path}`, lastmod, changefreq }));
}

// Public blog posts (published, not deleted). Pages through the API because
// the backend caps `limit` at 100 per request. `failed` is true when the API
// could not be reached, so callers can avoid caching an incomplete sitemap.
export async function fetchAllPublishedBlogs() {
  const posts = [];
  let page = 1;
  try {
    for (;;) {
      const result = await blogApiFetch(
        `/blogs/public?page=${page}&limit=100&sortBy=publishedAt&sortOrder=desc`,
      );
      posts.push(...result.items);
      if (page >= result.meta.totalPages) break;
      page += 1;
    }
    return { posts, failed: false };
  } catch {
    return { posts, failed: true };
  }
}

export async function fetchAllBlogCategories() {
  try {
    return await blogApiFetch("/categories/public");
  } catch {
    return [];
  }
}

// A post is indexable here only if it has a slug, a publish date, is not
// deleted/archived, and its canonical URL (when the CMS sets one) is its own
// URL on this site.
export function isIndexableBlog(blog) {
  if (!blog.slug || !blog.publishedAt || blog.deletedAt || blog.archivedAt) return false;
  if (blog.canonicalUrl && blog.canonicalUrl.replace(/\/$/, "") !== `${BASE_URL}${blogPostUrl(blog)}`) {
    return false;
  }
  return true;
}

export function isRecentBlog(blog, now = Date.now()) {
  return new Date(blog.publishedAt).getTime() >= now - NEWS_WINDOW_MS;
}

export const PRODUCT_PAGES = [
  ["/products/eicerise", "2026-06-01"],
  ["/products/easylogy", "2026-06-01"],
  ["/products/verilock", "2026-06-01"],
  ["/products/infrasight", "2026-06-01"],
  ["/products/eice-agent", "2026-06-01"],
  ["/products/eice-voice", "2026-06-01"],
  ["/products/ask-eice", "2026-06-01"],
  ["/products/eice-aim", "2026-06-01"],
  ["/products/isync-drive", "2026-06-01"],
  ["/products/isync-lite", "2026-06-01"],
  ["/products/smartfit", "2026-06-01"],
  ["/products/eice-ops", "2026-06-01"],
  ["/products/eicerise/about", "2026-06-16"],
  ["/products/eicerise/pricing", "2026-06-16"],
  ["/products/eicerise/account-finance", "2026-06-16"],
  ["/products/eicerise/android", "2026-06-16"],
  ["/products/eicerise/audience-attendance", "2026-06-16"],
  ["/products/eicerise/banquet-billing", "2026-06-16"],
  ["/products/eicerise/banquet-suite", "2026-06-16"],
  ["/products/eicerise/budget", "2026-06-16"],
  ["/products/eicerise/club-suite", "2026-06-16"],
  ["/products/eicerise/compliance-register", "2026-06-16"],
  ["/products/eicerise/durgabari", "2026-06-16"],
  ["/products/eicerise/employee-suite", "2026-06-16"],
  ["/products/eicerise/enterprise-suite", "2026-06-16"],
  ["/products/eicerise/feedback", "2026-06-16"],
  ["/products/eicerise/food-cost", "2026-06-16"],
  ["/products/eicerise/frontdesk-suite", "2026-06-16"],
  ["/products/eicerise/iic", "2026-06-16"],
  ["/products/eicerise/inventory-suite", "2026-06-16"],
  ["/products/eicerise/member-suite", "2026-06-16"],
  ["/products/eicerise/payroll", "2026-06-16"],
  ["/products/eicerise/pos-dining", "2026-06-16"],
  ["/products/eicerise/pos-suite", "2026-06-16"],
  ["/products/eicerise/purchase-vendor", "2026-06-16"],
  ["/products/eicerise/roombooking", "2026-06-16"],
  ["/products/eicerise/single-sign-on", "2026-06-16"],
  ["/products/eicerise/userstore-inventry", "2026-06-16"],
  ["/products/eicerise/vanilla-suite", "2026-06-16"],
  ["/products/eicerise/vendor-management", "2026-06-16"],
  ["/products/eicerise/wifi", "2026-06-16"],
  ["/products", "2026-06-01"],
  ["/products/eice-catalyst", "2026-06-01"],
];

export const SERVICE_PAGES = [
  ["/services", "2026-05-01"],
  ["/services/ai-ml", "2026-05-01"],
  ["/services/cloud", "2026-05-01"],
  ["/services/devops", "2026-05-01"],
  ["/services/digital-transformation", "2026-05-01"],
  ["/services/data-analytics", "2026-05-01"],
  ["/services/enterprise-app-dev", "2026-05-01"],
  ["/services/iot", "2026-05-01"],
  ["/services/blockchain", "2026-05-01"],
  ["/services/web-development", "2026-05-01"],
  ["/services/android", "2026-05-01"],
  ["/services/software-testing", "2026-05-01"],
  ["/services/ui-ux", "2026-05-01"],
  ["/services/saas", "2026-05-01"],
  ["/services/gis", "2026-05-01"],
  ["/services/tech-consultancy", "2026-05-01"],
  ["/services/chatbot", "2026-05-01"],
  ["/services/app-development", "2026-05-01"],
  ["/services/consultancy-services", "2026-05-01"],
  ["/services/emerging-tech", "2026-05-01"],
  ["/services/flagship-services", "2026-05-01"],
];

export const CASE_STUDY_PAGES = [
  ["/case-studies", "2026-06-10"],
  ["/case-studies/voice-call-ai", "2026-06-10"],
  ["/case-studies/sentimental-ai", "2026-06-10"],
  ["/case-studies/logistics-ai", "2026-06-10"],
  ["/case-studies/inventory-ai", "2026-06-10"],
  ["/case-studies/relimonitor", "2026-06-10"],
  ["/case-studies/petro-sim", "2026-06-10"],
  ["/case-studies/espct-quote", "2026-06-10"],
  ["/case-studies/city-gas-adani", "2026-06-10"],
  ["/case-studies/simu-lift", "2026-06-10"],
  ["/case-studies/noralta-scada", "2026-06-10"],
  ["/case-studies/epgis", "2026-06-10"],
  ["/case-studies/noralta-femms", "2026-06-10"],
  ["/case-studies/design-sim-borets", "2026-06-10"],
  ["/case-studies/schlumberger-baa", "2026-06-10"],
  ["/case-studies/esp-design-analysis", "2026-06-10"],
  ["/case-studies/subsurface-workflow-orchestration", "2026-06-10"],
  ["/case-studies/legal-intake-matter-management", "2026-06-10"],
  ["/case-studies/referral-agreement-compliance-digital-signatures", "2026-06-10"],
];

export const OTHER_PAGES = [
  ["/", "2026-06-15"],
  ["/about", "2026-06-15"],
  ["/contact", "2026-06-15"],
  ["/our-team", "2026-06-15"],
  ["/resources", "2026-06-15"],
  ["/privacy-policy", "2026-06-15"],
  ["/terms-and-conditions", "2026-06-15"],
  ["/industries", "2026-05-01"],
  ["/industries/healthcare", "2026-05-01"],
  ["/industries/oil-and-gas", "2026-05-01"],
  ["/industries/financial", "2026-05-01"],
  ["/industries/education", "2026-05-01"],
  ["/industries/logistics", "2026-05-01"],
  ["/industries/enterprise", "2026-05-01"],
  ["/industries/legal", "2026-05-01"],
  ["/industries/digital-media", "2026-05-01"],
  ["/industries/hospitality", "2026-05-01"],
  ["/blog", "2026-06-16"],
  ["/blog/articles", "2026-06-16"],
];
