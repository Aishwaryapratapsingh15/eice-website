import { blogApiFetch } from "../../src/Blog/blogApi";
import { toIstIsoString } from "../../src/Blog/formatDate";
import { blogPostUrl } from "../../src/Blog/blogUrl";

const BASE_URL = "https://www.eicetechnology.com";
const FORTY_EIGHT_HOURS_MS = 48 * 60 * 60 * 1000;

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function fetchRecentlyPublishedBlogs() {
  try {
    // Google News only processes articles ≤48h old, so a single recent page
    // (sorted newest-first) is always enough — no need to paginate further.
    const result = await blogApiFetch(
      "/blogs/public?page=1&limit=50&sortBy=publishedAt&sortOrder=desc",
    );
    const cutoff = Date.now() - FORTY_EIGHT_HOURS_MS;
    return result.items.filter(
      (blog) => blog.publishedAt && new Date(blog.publishedAt).getTime() >= cutoff,
    );
  } catch {
    return [];
  }
}

export async function GET() {
  const blogs = await fetchRecentlyPublishedBlogs();

  const urlEntries = blogs
    .map((blog) => {
      const url = `${BASE_URL}${blogPostUrl(blog)}/`;
      return `  <url>
    <loc>${escapeXml(url)}</loc>
    <news:news>
      <news:publication>
        <news:name>EICE Technology</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${toIstIsoString(blog.publishedAt)}</news:publication_date>
      <news:title>${escapeXml(blog.title)}</news:title>
    </news:news>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
