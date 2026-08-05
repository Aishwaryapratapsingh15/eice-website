import { BlogCard } from "../../../src/Blog/BlogCard";
import { blogApiFetch } from "../../../src/Blog/blogApi";
import ProductFooter from "../../../src/Product/ProductFooter";
import Copyright from "../../../src/Othercomps/Copyright";
import { Link } from "@/nextNavigation";

const BASE_URL = "https://www.eicetechnology.com";

export const metadata = {
  title: "All Articles | EICE Technology Blog",
  description:
    "Browse every article from the EICE Technology blog — insights, guides, and updates across hospitality, logistics, AI, and enterprise software.",
  openGraph: {
    title: "All Articles | EICE Technology Blog",
    description: "Browse every article from the EICE Technology blog.",
    url: `${BASE_URL}/blog/articles`,
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "All Articles | EICE Technology Blog" },
  alternates: { canonical: `${BASE_URL}/blog/articles` },
};

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const pageNum = Number(params?.page) > 0 ? Number(params.page) : 1;

  const result = await blogApiFetch(
    `/blogs/public?page=${pageNum}&limit=9&sortBy=publishedAt&sortOrder=desc`,
  );

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "All Articles" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "All Articles",
      url: `${BASE_URL}/blog/articles`,
      publisher: { "@type": "Organization", name: "EICE Technology", url: BASE_URL },
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-5 pt-8">
        <h1 className="text-[28px] font-semibold tracking-tight text-blackk sm:text-4xl">
          All Articles
        </h1>
      </div>

      <section className="mx-auto max-w-7xl px-5 pt-8 pb-8">
        {result.items.length === 0 ? (
          <p className="mt-16 text-center text-[18px] text-blackk/50">
            No posts published yet — check back soon.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {result.items.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}

        {result.meta.totalPages > 1 && (
          <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 pt-8 pb-8 text-[14px]">
            {result.meta.page > 1 && (
              <Link to={`/blog/articles?page=${result.meta.page - 1}`} className="tap-sm underline">
                Previous
              </Link>
            )}
            <span className="text-blackk/50">
              Page {result.meta.page} of {result.meta.totalPages}
            </span>
            {result.meta.page < result.meta.totalPages && (
              <Link to={`/blog/articles?page=${result.meta.page + 1}`} className="tap-sm underline">
                Next
              </Link>
            )}
          </div>
        )}
      </section>

      <ProductFooter />
      <Copyright />
    </main>
  );
}
