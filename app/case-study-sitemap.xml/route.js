import { CASE_STUDY_PAGES, renderUrlset, staticEntries, xmlResponse } from "../../src/Sitemap/sitemapLib";

// Case studies are static pages whose last edit is tracked in sitemapLib.js
// (all were last touched in June 2026), so "monthly" matches how often they
// change — the same value the old combined sitemap used for them.
export async function GET() {
  return xmlResponse(renderUrlset(staticEntries(CASE_STUDY_PAGES, "monthly")));
}
