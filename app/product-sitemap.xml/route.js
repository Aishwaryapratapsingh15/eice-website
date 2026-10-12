import { PRODUCT_PAGES, renderUrlset, staticEntries, xmlResponse } from "../../src/Sitemap/sitemapLib";

// Product pages — no <changefreq> / <priority>.
export async function GET() {
  return xmlResponse(renderUrlset(staticEntries(PRODUCT_PAGES)));
}
