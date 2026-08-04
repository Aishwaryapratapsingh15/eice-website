import { Link } from "@/nextNavigation";
import { BlogCard } from "./BlogCard";

export function LatestArticles({ blogs, hideHeading = false }) {
  return (
    <section id="articles" className="mx-auto max-w-7xl pl-2 pr-6 pt-8 pb-8">
      {!hideHeading && (
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-[18px] font-semibold uppercase text-bloo">
              Latest Insights
            </span>
            <h2 className="mt-3 text-[28px] font-semibold tracking-tight text-blackk sm:text-4xl">
              Insights That Help You Make Better Technology Decisions
            </h2>
            <p className="mt-3 text-[18px] leading-relaxed text-slate-600">
              Explore expert articles, industry trends, implementation guides, and practical
              insights across hospitality, logistics, AI, and enterprise software.
            </p>
          </div>

          <Link
            to="/blog/articles"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full border-2 border-bloo px-6 text-[18px] font-semibold text-bloo transition-all duration-300 hover:-translate-y-0.5 hover:bg-bloo hover:text-white sm:self-auto"
          >
            View All Articles
          </Link>
        </div>
      )}

      {blogs.length === 0 ? (
        <p
          className={`text-center text-[18px] text-blackk/50 ${hideHeading ? "" : "mt-16"}`}
        >
          No posts published yet — check back soon.
        </p>
      ) : (
        <div
          className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ${hideHeading ? "" : "mt-10"}`}
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </section>
  );
}
