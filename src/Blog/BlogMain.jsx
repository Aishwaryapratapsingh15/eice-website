import { Link } from "@/nextNavigation";
import { BlogHero } from "./BlogHero";
import { LatestArticles } from "./LatestArticles";
import { CtaSection } from "./CtaSection";

function CategoryIcon({ className }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M17.707 9.293l-7-7A1 1 0 0010 2H4a2 2 0 00-2 2v6a1 1 0 00.293.707l7 7a1 1 0 001.414 0l7-7a1 1 0 000-1.414zM6 6a1 1 0 110-2 1 1 0 010 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function BlogMain({ items, meta, category, categorySlug, categoryName, categoryColor }) {
  const isCategoryView = Boolean(categorySlug);
  const isFirstPage = meta.page === 1;
  const featured =
    !isCategoryView && isFirstPage ? (items.find((blog) => blog.isFeatured) ?? items[0]) : undefined;
  const gridItems = featured ? items.filter((blog) => blog.id !== featured.id) : items;

  const basePath = categorySlug ? `/blog/category/${categorySlug}` : "/blog";
  const categorySuffix = !categorySlug && category ? `&category=${category}` : "";

  return (
    <main>
      {categoryName && (
        <div className="mx-auto mt-10 max-w-7xl pl-2 pr-6 pt-10 text-[12px] sm:pt-16">
          <h1
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-semibold uppercase tracking-wide"
            style={{
              backgroundColor: categoryColor ? `${categoryColor}1a` : undefined,
              color: categoryColor ?? undefined,
            }}
          >
            <CategoryIcon className="h-3.5 w-3.5" />
            {categoryName}
          </h1>
        </div>
      )}

      {featured && <BlogHero blog={featured} />}

      <LatestArticles blogs={gridItems} hideHeading={isCategoryView} />

      {meta.totalPages > 1 && (
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-5 pt-8 pb-8 text-[14px] sm:px-6">
          {meta.page > 1 && (
            <Link to={`${basePath}?page=${meta.page - 1}${categorySuffix}`} className="underline">
              Previous
            </Link>
          )}
          <span className="text-blackk/50">
            Page {meta.page} of {meta.totalPages}
          </span>
          {meta.page < meta.totalPages && (
            <Link to={`${basePath}?page=${meta.page + 1}${categorySuffix}`} className="underline">
              Next
            </Link>
          )}
        </div>
      )}

      <CtaSection />
    </main>
  );
}
