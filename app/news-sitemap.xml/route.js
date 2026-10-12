import {
  BASE_URL,
  escapeXml,
  fetchAllPublishedBlogs,
  isIndexableBlog,
  isRecentBlog,
  xmlResponse,
} from "../../src/Sitemap/sitemapLib";
import { toIstIsoString } from "../../src/Blog/formatDate";
import { blogPostUrl } from "../../src/Blog/blogUrl";

// Google News: only articles published in the last 48 hours, at most 1000 URLs.
// The blog API has no separate "news" type, so recent posts are the news items;
// once a post is older than 48h it moves to /blog-sitemap.xml.
const MAX_NEWS_URLS = 1000;

async function fetchRecentlyPublishedBlogs() {
  const now = Date.now();
  const { posts, failed } = await fetchAllPublishedBlogs();
  const blogs = posts
    .filter((blog) => isIndexableBlog(blog) && isRecentBlog(blog, now))
    .slice(0, MAX_NEWS_URLS);
  return { blogs, failed };
}

export async function GET() {
  const { blogs, failed } = await fetchRecentlyPublishedBlogs();

  const urlEntries = blogs
    .map((blog) => {
      const url = `${BASE_URL}${blogPostUrl(blog)}`;
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
</urlset>
`;

  // Short cache: new posts should show up within minutes. Never cache a
  // response built while the blog API was unreachable.
  return xmlResponse(xml, failed ? "no-store" : "public, s-maxage=300, stale-while-revalidate=600");
}
