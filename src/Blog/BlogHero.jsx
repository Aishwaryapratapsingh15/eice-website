import { Link } from "@/nextNavigation";
import { formatDate } from "./formatDate";

export function BlogHero({ blog }) {
  return (
    <section className="flex items-stretch overflow-hidden bg-[#012060] pt-10 sm:pt-16 pb-8 mt-10">
      <div className="mx-auto h-full w-full max-w-7xl grid gap-6 pl-2 pr-6 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div className="flex flex-col justify-center">
          <span className="text-[18px] font-semibold uppercase text-bloo">
            Featured Article
          </span>

          <h1 className="mt-4 text-[32px] font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="mt-3 max-w-xl text-[18px] text-base leading-relaxed text-white/75 line-clamp-4 sm:text-lg">
              {blog.excerpt}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-2 text-[14px] text-white/60">
            {blog.author?.avatarMedia && (
              <img
                src={blog.author.avatarMedia.url}
                alt={blog.author.avatarMedia.altText ?? blog.author.fullName ?? ""}
                className="h-8 w-8 rounded-full object-cover"
              />
            )}
            <span>{blog.author?.fullName ?? "EICE Technology"}</span>
            <span aria-hidden>·</span>
            <span>{formatDate(blog.publishedAt)}</span>
            {blog.readingTime && (
              <>
                <span aria-hidden>·</span>
                <span>{blog.readingTime} min read</span>
              </>
            )}
          </div>

          <div className="mt-5 flex text-[18px] flex-wrap items-center gap-4">
            <Link
              to={`/blog/${blog.slug}`}
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-transparent bg-bloo px-7 font-semibold text-white shadow-lg shadow-bloo/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#012060]"
            >
              Read Blog
            </Link>
            <Link
              to="/products/eicerise/form?product=Blog"
              className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full border-2 border-white/40 px-7 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              Request a Demo
            </Link>
          </div>

          {(blog.categories ?? []).length > 0 && (
            <div className="mt-5 flex text-[13px] flex-wrap items-center gap-2">
              {(blog.categories ?? []).map((category) => (
                <Link
                  key={category.id}
                  to={`/blog/category/${category.slug}`}
                  className="inline-flex h-7 items-center justify-center rounded-full border-2 border-bloo px-3 font-semibold text-bloo transition-all duration-300 hover:-translate-y-0.5 hover:bg-bloo hover:text-white"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          to={`/blog/${blog.slug}`}
          className="group relative aspect-[16/9] w-full overflow-hidden rounded-[24px] shadow-2xl shadow-slate-900/15 mr-4"
        >
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
      </div>
    </section>
  );
}
