import { Link } from "@/nextNavigation";
import { BlogHero } from "./BlogHero";
import { LatestArticles } from "./LatestArticles";
import { CtaSection } from "./CtaSection";

export function BlogMain({ items, meta, category }) {
  const isFirstPage = meta.page === 1;
  const featured = isFirstPage ? (items.find((blog) => blog.isFeatured) ?? items[0]) : undefined;
  const gridItems = featured ? items.filter((blog) => blog.id !== featured.id) : items;
  const categorySuffix = category ? `&category=${category}` : "";

  return (
    <main>
      {featured && <BlogHero blog={featured} />}

      <LatestArticles blogs={gridItems} />

      {meta.totalPages > 1 && (
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-5 pt-8 pb-8 text-[14px] sm:px-6">
          {meta.page > 1 && (
            <Link to={`/blog?page=${meta.page - 1}${categorySuffix}`} className="underline">
              Previous
            </Link>
          )}
          <span className="text-blackk/50">
            Page {meta.page} of {meta.totalPages}
          </span>
          {meta.page < meta.totalPages && (
            <Link to={`/blog?page=${meta.page + 1}${categorySuffix}`} className="underline">
              Next
            </Link>
          )}
        </div>
      )}

      <CtaSection />
    </main>
  );
}
