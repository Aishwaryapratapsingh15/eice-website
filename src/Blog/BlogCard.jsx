import { Link } from "@/nextNavigation";
import { formatDate } from "./formatDate";

export function BlogCard({ blog }) {
  const category = blog.categories?.[0];

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/blog/${blog.slug}`} className="relative block aspect-[16/10] w-full overflow-hidden">
        {blog.featuredMedia ? (
          <img
            src={blog.featuredMedia.url}
            alt={blog.featuredMedia.altText ?? blog.title}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#012060] to-bloo" />
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 text-[12px]">
          {category && (
            <Link
              to={`/blog/category/${category.slug}`}
              className="tap-sm font-semibold uppercase tracking-wide text-bloo hover:underline"
              style={category.color ? { color: category.color } : undefined}
            >
              {category.name}
            </Link>
          )}
          {blog.readingTime && (
            <span className="text-slate-400">{blog.readingTime} min read</span>
          )}
        </div>

        <Link to={`/blog/${blog.slug}`} className="contents">
          <h3 className="mt-3 line-clamp-2 text-[18px] font-bold leading-snug text-blackk transition-colors duration-300 group-hover:text-bloo">
            {blog.title}
          </h3>

          {blog.excerpt && (
            <p className="mt-2 flex-1 line-clamp-3 text-[14px] leading-relaxed text-slate-600">
              {blog.excerpt}
            </p>
          )}
        </Link>

        <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4 text-[14px] text-slate-500">
          <span>By {blog.author?.fullName ?? "EICE Technology"}</span>
          <span>{formatDate(blog.publishedAt)}</span>
        </div>
      </div>
    </div>
  );
}
