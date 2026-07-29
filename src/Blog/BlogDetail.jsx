import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "@/nextNavigation";
import { formatDate } from "./formatDate";
import { BlogCard } from "./BlogCard";
import { BlogSidebar } from "./BlogSidebar";

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

function CalendarIcon() {
  return (
    <svg aria-hidden viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
      <path
        fillRule="evenodd"
        d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-.54 1.409l-1.048.81a12.023 12.023 0 006.086 6.086l.81-1.048a1.5 1.5 0 011.408-.54l3.223.716A1.5 1.5 0 0117 15.352V16.5a1.5 1.5 0 01-1.5 1.5h-1C8.82 18 2 11.18 2 3.5v-1z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function BlogDetail({ blog, relatedPosts, latestPosts, categories }) {
  const primaryCategory = blog.categories[0];

  return (
    <main className="mx-auto max-w-7xl pl-2 pr-6 py-16">
      <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
        <article className="lg:col-span-2 mt-10">
          <div className="flex flex-wrap items-center gap-3 text-[12px]">
            {primaryCategory && (
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-semibold uppercase tracking-wide"
                style={{
                  backgroundColor: primaryCategory.color ? `${primaryCategory.color}1a` : undefined,
                  color: primaryCategory.color ?? undefined,
                }}
              >
                <CategoryIcon className="h-3.5 w-3.5" />
                {primaryCategory.name}
              </span>
            )}
            <span className="text-blackk/40">·</span>
            <span className="inline-flex items-center gap-1.5 text-blackk/50">
              <CalendarIcon />
              {formatDate(blog.publishedAt)}
            </span>
            {blog.readingTime && (
              <>
                <span className="text-blackk/40">·</span>
                <span className="inline-flex items-center gap-1.5 text-blackk/50">
                  <ClockIcon />
                  {blog.readingTime} min read
                </span>
              </>
            )}
          </div>

          <h1 className="mt-4 text-[32px] font-bold leading-tight tracking-tight text-blackk sm:text-4xl">
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="mt-5 border-l-4 border-bloo pl-4 text-[18px] italic leading-relaxed text-blackk/70">
              {blog.excerpt}
            </p>
          )}

          {blog.featuredMedia && (
            <img
              src={blog.featuredMedia.url}
              alt={blog.featuredMedia.altText ?? blog.title}
              className="mt-6 aspect-video w-full rounded-xl object-cover"
            />
          )}

          <div className="mt-6 flex items-center border-b border-black/10 pb-6 text-[14px]">
            <span className="font-semibold text-blackk">By {blog.author.fullName}</span>
          </div>

          <div className="prose prose-neutral mt-8 max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
          </div>

          {blog.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2 border-t border-black/10 pt-6">
              {blog.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="inline-flex items-center gap-1 rounded-full bg-black/5 px-2.5 py-0.5 text-[12px] text-blackk/60"
                >
                  <CategoryIcon className="h-3 w-3" />
                  {tag.name}
                </span>
              ))}
            </div>
          )}

          <div className="relative mt-16 overflow-hidden rounded-2xl bg-gradient-to-br from-[#012060] via-[#0b3a63] to-[#012060] p-8">
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-bloo">
              Explore This In Your Environment
            </span>
            <h3 className="mt-3 text-[22px] font-extrabold leading-snug text-white sm:text-[26px]">
              See how EICE Technology implements this for enterprise clients.
            </h3>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-white/70">
              Our engineers have deployed this architecture across dozens of
              organizations. Schedule a working session to walk through your specific
              constraints.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/products/eicerise/form?product=Blog"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-bloo px-6 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#012060]"
              >
                <PlayIcon />
                Request a Demo
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                <PhoneIcon />
                Talk to Sales
              </Link>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-[22px] font-extrabold text-blackk">
                Related {primaryCategory ? `in ${primaryCategory.name}` : "Articles"}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((post) => (
                  <BlogCard key={post.id} blog={post} />
                ))}
              </div>
            </div>
          )}
        </article>

        <BlogSidebar latestPosts={latestPosts} categories={categories} />
      </div>
    </main>
  );
}
