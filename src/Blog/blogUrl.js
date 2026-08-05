// Canonical URL for a blog post — /blog/{primary category slug}/{post slug}.
// Posts can belong to several categories; the first one is treated as
// primary (same convention BlogDetail.jsx uses for the category badge).
export function blogPostUrl(blog) {
  const categorySlug = blog.categories?.[0]?.slug ?? "uncategorized";
  return `/blog/${categorySlug}/${blog.slug}`;
}
