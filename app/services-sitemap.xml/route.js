import { SERVICE_PAGES, renderUrlset, staticEntries, xmlResponse } from "../../src/Sitemap/sitemapLib";

// Service pages — no <changefreq> / <priority>.
export async function GET() {
  return xmlResponse(renderUrlset(staticEntries(SERVICE_PAGES)));
}
