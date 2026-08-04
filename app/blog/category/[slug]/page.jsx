import { notFound } from "next/navigation";
import { BlogMain } from "../../../../src/Blog/BlogMain";
import { blogApiFetch } from "../../../../src/Blog/blogApi";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

const BASE_URL = "https://www.eicetechnology.com";

async function getCategory(slug) {
  const categories = await blogApiFetch("/categories/public");
  return categories.find((c) => c.slug === slug) ?? null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await getCategory(slug);
  if (!category) return {};

  const title = `${category.name} Articles | EICE Technology Blog`;
  const description = `Browse EICE Technology blog posts on ${category.name} — insights, guides, and updates.`;
  const url = `${BASE_URL}/blog/category/${category.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "EICE Technology", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({ params, searchParams }) {
  const { slug } = await params;
  const sp = await searchParams;
  const page = sp?.page ?? "1";

  const category = await getCategory(slug);
  if (!category) notFound();

  const result = await blogApiFetch(
    `/blogs/public?page=${page}&limit=9&sortBy=publishedAt&sortOrder=desc&category=${encodeURIComponent(category.slug)}`,
  );

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: category.name },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${category.name} Articles`,
      url: `${BASE_URL}/blog/category/${category.slug}`,
      publisher: { "@type": "Organization", name: "EICE Technology", url: BASE_URL },
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogMain
        items={result.items}
        meta={result.meta}
        categorySlug={category.slug}
        categoryName={category.name}
        categoryColor={category.color}
        categoryHeading={category.heading}
        categoryDescription={category.description}
      />
      <ProductFooter />
      <Copyright />
    </>
  );
}
