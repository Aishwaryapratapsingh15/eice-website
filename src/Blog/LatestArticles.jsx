import { Link } from "@/nextNavigation";
import { BlogCard } from "./BlogCard";

export function LatestArticles({ blogs }) {
  return (
    <section id="articles" className="mx-auto max-w-7xl pl-2 pr-6 pt-8 pb-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <span className="text-[18px] font-semibold uppercase text-bloo">
            Latest Articles
          </span>
          <h2 className="mt-3 text-[28px] font-extrabold tracking-tight text-blackk sm:text-4xl">
            Fresh from the blog
          </h2>
          <p className="mt-3 text-[18px] leading-relaxed text-slate-600">
            Explore our latest insights, product updates, and industry knowledge.
          </p>
        </div>

        <Link
          to="/blog#articles"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-full border-2 border-bloo px-6 text-[18px] font-semibold text-bloo transition-all duration-300 hover:-translate-y-0.5 hover:bg-bloo hover:text-white sm:self-auto"
        >
          View All Articles
        </Link>
      </div>

      {blogs.length === 0 ? (
        <p className="mt-16 text-center text-[18px] text-blackk/50">
          No posts published yet — check back soon.
        </p>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </section>
  );
}
