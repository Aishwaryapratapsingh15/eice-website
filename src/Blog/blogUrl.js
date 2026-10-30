// Canonical URL for a blog post — /blog/{primary category slug}/{post slug}.
// Posts can belong to several categories; the first one is treated as
// primary (same convention BlogDetail.jsx uses for the category badge).
export function blogPostUrl(blog) {
  const categorySlug = blog.categories?.[0]?.slug ?? "uncategorized";
  return `/blog/${categorySlug}/${blog.slug}`;
}

// Request-a-demo link for a blog post. The form forwards ?product= to the
// backend as the lead's source, so a post-specific CTA sends "Blog- <short
// title>": the part of the title before the first colon (titles are
// "Topic: Subtitle"), or the whole title when it has no colon. Capped at 60
// characters to keep the value and the URL short.
const DEMO_FORM_BLOG_URL = "/demo-form?product=Blog";
export function blogDemoUrl(title) {
  const full = typeof title === "string" ? title.trim() : "";
  const colon = full.indexOf(":");
  const short = (colon > 0 ? full.slice(0, colon) : full).trim().slice(0, 60).trim();
  if (!short) return DEMO_FORM_BLOG_URL;
  return `/demo-form?product=${encodeURIComponent(`Blog- ${short}`)}`;
}
