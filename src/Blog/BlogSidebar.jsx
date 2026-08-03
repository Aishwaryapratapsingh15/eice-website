import { Link } from "@/nextNavigation";
import { formatDate } from "./formatDate";
import { NewsletterForm } from "./NewsletterForm";

function CategoryIcon() {
  return (
    <svg aria-hidden viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path
        fillRule="evenodd"
        d="M17.707 9.293l-7-7A1 1 0 0010 2H4a2 2 0 00-2 2v6a1 1 0 00.293.707l7 7a1 1 0 001.414 0l7-7a1 1 0 000-1.414zM6 6a1 1 0 110-2 1 1 0 010 2z"
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

function RssIcon() {
  return (
    <svg aria-hidden viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-bloo">
      <path d="M3 3a1 1 0 000 2c6.627 0 12 5.373 12 12a1 1 0 102 0C17 9.268 10.732 3 3 3z" />
      <path d="M3 9a1 1 0 000 2 6 6 0 016 6 1 1 0 102 0 8 8 0 00-8-8z" />
      <circle cx="4" cy="16" r="2" />
    </svg>
  );
}

export function BlogSidebar({ latestPosts, categories }) {
  return (
    <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-2xl bg-[#012060] p-6">
        <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-bloo">
          Ready to Modernize?
        </span>
        <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-white">
          Talk to an engineer, not a sales script.
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-white/70">
          Our solutions engineers map your current architecture and surface quick wins
          before any contract conversation.
        </p>
        <div className="mt-5 flex flex-col gap-3">
          <Link
            to="/products/eicerise/form?product=Blog"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-bloo text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#012060]"
          >
            Request a Demo
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
          >
            <PhoneIcon />
            Talk to Sales
          </Link>
        </div>
      </div>

      {latestPosts.length > 0 && (
        <div className="overflow-hidden rounded-2xl border border-black/10">
          <div className="bg-black/[0.03] px-6 py-4">
            <h3 className="text-[18px] font-bold text-blackk">Latest Posts</h3>
          </div>
          <ul className="divide-y divide-black/5">
            {latestPosts.map((post) => {
              const category = post.categories?.[0];
              return (
                <li key={post.id}>
                  <Link to={`/blog/${post.slug}`} className="group flex gap-3 px-6 py-4">
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-[#012060] to-bloo">
                      {post.featuredMedia && (
                        <img
                          src={post.featuredMedia.url}
                          alt={post.featuredMedia.altText ?? post.title}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      {category && (
                        <span
                          className="w-fit rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase"
                          style={{
                            backgroundColor: category.color ? `${category.color}1a` : undefined,
                            color: category.color ?? undefined,
                          }}
                        >
                          {category.name}
                        </span>
                      )}
                      <span className="text-[14px] font-semibold leading-snug text-blackk transition-colors duration-200 group-hover:text-bloo">
                        {post.title}
                      </span>
                      <span className="text-[12px] text-blackk/50">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="rounded-2xl border border-black/10 p-6">
        <RssIcon />
        <h3 className="mt-2 text-[18px] font-bold text-blackk">Weekly Tech Digest</h3>
        <p className="mt-2 text-[14px] text-blackk/60">
          Practitioner-written analysis on cloud, security, and AI — every Thursday
          morning.
        </p>
        <NewsletterForm />
      </div>

      {categories.length > 0 && (
        <div className="overflow-hidden rounded-2xl border border-black/10">
          <div className="bg-black/[0.03] px-6 py-4">
            <h3 className="text-[18px] font-bold text-blackk">Browse by Category</h3>
          </div>
          <ul className="divide-y divide-black/5">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/blog/category/${category.slug}`}
                  className="flex items-center justify-between px-6 py-3 text-[14px] text-blackk/70 transition-colors duration-200 hover:text-bloo"
                >
                  <span className="inline-flex items-center gap-2">
                    <CategoryIcon />
                    {category.name}
                  </span>
                  <span className="text-blackk/40">{category.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
