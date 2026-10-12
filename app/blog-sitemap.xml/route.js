import {
  BASE_URL,
  fetchAllPublishedBlogs,
  isIndexableBlog,
  isRecentBlog,
  renderUrlset,
  xmlResponse,
} from "../../src/Sitemap/sitemapLib";
import { blogPostUrl } from "../../src/Blog/blogUrl";

// Blog posts older than the news window. Posts published in the last 48h are
// listed in /news-sitemap.xml instead, so no URL appears in both.
export async function GET() {
  const now = Date.now();
  const { posts, failed } = await fetchAllPublishedBlogs();
  const blogs = posts.filter(
    (blog) => isIndexableBlog(blog) && !isRecentBlog(blog, now),
  );
  const entries = blogs.map((blog) => ({
    loc: `${BASE_URL}${blogPostUrl(blog)}`,
    lastmod: blog.updatedAt ?? blog.publishedAt,
    changefreq: "weekly",
  }));
  return xmlResponse(renderUrlset(entries), failed ? "no-store" : undefined);
}
