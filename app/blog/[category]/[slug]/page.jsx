import { notFound, permanentRedirect } from "next/navigation";
import { BlogDetail } from "../../../../src/Blog/BlogDetail";
import { blogApiFetch, BlogApiError } from "../../../../src/Blog/blogApi";
import { toIstIsoString } from "../../../../src/Blog/formatDate";
import { blogPostUrl } from "../../../../src/Blog/blogUrl";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

async function getBlog(slug) {
  try {
    return await blogApiFetch(`/blogs/slug/${slug}`);
  } catch (err) {
    if (err instanceof BlogApiError && err.status === 404) return null;
    throw err;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return {};

  const title = blog.seoTitle ?? blog.title;
  const description = blog.seoDescription ?? blog.excerpt ?? undefined;
  const url = blog.canonicalUrl ?? `https://www.eicetechnology.com${blogPostUrl(blog)}`;

  return {
    title: `${title} | EICE Technology`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "EICE Technology",
      type: "article",
      publishedTime: toIstIsoString(blog.publishedAt),
      modifiedTime: toIstIsoString(blog.updatedAt),
      images: blog.featuredMedia
        ? [{ url: blog.featuredMedia.url, width: blog.featuredMedia.width ?? undefined, height: blog.featuredMedia.height ?? undefined }]
        : undefined,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({ params }) {
  const { category, slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) notFound();

  // Enforce the canonical category prefix — a post's primary category can
  // change over time, or someone can type a stale/wrong one in by hand.
  const canonicalUrl = blogPostUrl(blog);
  if (canonicalUrl !== `/blog/${category}/${slug}`) {
    permanentRedirect(canonicalUrl);
  }

  const [categories, recentBatch] = await Promise.all([
    blogApiFetch("/categories/public"),
    blogApiFetch("/blogs/public?limit=20&sortBy=publishedAt&sortOrder=desc"),
  ]);

  const otherPosts = recentBatch.items.filter((post) => post.id !== blog.id);
  const latestPosts = otherPosts.slice(0, 4);
  const blogCategoryIds = new Set((blog.categories ?? []).map((c) => c.id));
  const relatedPosts = otherPosts
    .filter((post) => (post.categories ?? []).some((c) => blogCategoryIds.has(c.id)))
    .slice(0, 2);
  const faqs = blog.faqs ?? [];
  // A post tagged with the "news" category is treated as a news-angle
  // article for schema purposes (Article otherwise) — see EICE_P1_Blog_SEO_Checklist item #11.
  const isNewsArticle = (blog.categories ?? []).some((c) => c.slug === "news");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eicetechnology.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.eicetechnology.com/blog" },
        { "@type": "ListItem", position: 3, name: blog.title },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": isNewsArticle ? "NewsArticle" : "Article",
      headline: blog.title,
      description: blog.excerpt ?? undefined,
      datePublished: toIstIsoString(blog.publishedAt),
      dateModified: toIstIsoString(blog.updatedAt ?? blog.publishedAt),
      author: { "@type": "Person", name: blog.author?.fullName ?? "EICE Technology" },
      image: blog.featuredMedia
        ? {
            "@type": "ImageObject",
            url: blog.featuredMedia.url,
            width: blog.featuredMedia.width ?? undefined,
            height: blog.featuredMedia.height ?? undefined,
          }
        : undefined,
      publisher: {
        "@type": "Organization",
        name: "EICE Technology",
        url: "https://www.eicetechnology.com",
        logo: {
          "@type": "ImageObject",
          url: "https://d3r43jacxrwsrp.cloudfront.net/logo.svg",
        },
      },
    },
    ...(faqs.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]
      : []),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogDetail
        blog={blog}
        relatedPosts={relatedPosts}
        latestPosts={latestPosts}
        categories={categories}
      />
      <ProductFooter />
      <Copyright />
    </>
  );
}
