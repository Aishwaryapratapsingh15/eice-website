import {
  BASE_URL,
  OTHER_PAGES,
  fetchAllBlogCategories,
  renderUrlset,
  staticEntries,
  xmlResponse,
} from "../../src/Sitemap/sitemapLib";

// Core pages, industries, the blog hub and blog category listings — pages that
// are not products, services, case studies or posts.
export async function GET() {
  const categories = await fetchAllBlogCategories();
  const blogLastmod = OTHER_PAGES.find(([path]) => path === "/blog")?.[1];
  const categoryEntries = categories
    .filter((category) => category.slug)
    .map((category) => ({ loc: `${BASE_URL}/blog/category/${category.slug}`, lastmod: blogLastmod }));
  return xmlResponse(renderUrlset([...staticEntries(OTHER_PAGES), ...categoryEntries]));
}
