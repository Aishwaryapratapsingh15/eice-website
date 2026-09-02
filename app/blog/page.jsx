import { BlogMain } from "../../src/Blog/BlogMain";
import { blogApiFetch } from "../../src/Blog/blogApi";
import ProductFooter from "../../src/Product/ProductFooter";

export const metadata = {
  title: "Blog | Insights, Updates & Industry Knowledge — EICE Technology",
  description:
    "Explore EICE Technology's blog for the latest insights, product updates, and industry knowledge on AI, cloud, cybersecurity, and enterprise software.",
  keywords: ["EICE Technology blog", "IT insights", "enterprise technology blog"],
  openGraph: {
    title: "Blog | EICE Technology",
    description: "Latest insights, product updates, and industry knowledge from EICE Technology.",
    url: "https://www.eicetechnology.com/blog",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Blog | EICE Technology" },
  alternates: {
    canonical: "https://www.eicetechnology.com/blog",
    languages: {
      "en-IN": "https://www.eicetechnology.com/blog",
      "en-US": "https://www.eicetechnology.com/blog",
      "x-default": "https://www.eicetechnology.com/blog",
    },
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eicetechnology.com" },
      { "@type": "ListItem", position: 2, name: "Blog" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog",
    description: "Latest insights, product updates, and industry knowledge from EICE Technology.",
    url: "https://www.eicetechnology.com/blog",
    publisher: { "@type": "Organization", name: "EICE Technology", url: "https://www.eicetechnology.com" },
  },
];

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const categoryParam = params?.category
    ? `&category=${encodeURIComponent(params.category)}`
    : "";

  // No pagination on this listing — 1 featured + a fixed 6-card grid, always
  // the latest posts, so only 7 ever need fetching.
  const result = await blogApiFetch(
    `/blogs/public?page=1&limit=7&sortBy=publishedAt&sortOrder=desc${categoryParam}`,
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogMain items={result.items} meta={result.meta} category={params?.category} />
      <ProductFooter />
    </>
  );
}
