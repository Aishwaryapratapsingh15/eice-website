import { BASE_URL, escapeXml, xmlResponse } from "../../src/Sitemap/sitemapLib";

// Sitemap index — lists the individual sitemaps only, never page URLs.
const SITEMAPS = [
  "/news-sitemap.xml",
  "/product-sitemap.xml",
  "/services-sitemap.xml",
  "/case-study-sitemap.xml",
  "/blog-sitemap.xml",
  "/pages-sitemap.xml",
];

export async function GET() {
  const items = SITEMAPS.map(
    (path) => `  <sitemap>\n    <loc>${escapeXml(`${BASE_URL}${path}`)}</loc>\n  </sitemap>`,
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`;
  return xmlResponse(xml);
}
