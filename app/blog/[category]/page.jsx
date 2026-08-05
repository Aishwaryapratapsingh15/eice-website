import { notFound, permanentRedirect } from "next/navigation";
import { blogApiFetch, BlogApiError } from "../../../src/Blog/blogApi";
import { blogPostUrl } from "../../../src/Blog/blogUrl";

// Blog posts moved from the flat /blog/{slug} to /blog/{category}/{slug} —
// this keeps the old URLs (already published/indexed/shared) alive via a
// permanent redirect instead of 404ing. Reuses the [category] folder (rather
// than a sibling [slug] one) because Next.js requires the same dynamic
// segment name at a given depth across the whole app.
export default async function Page({ params }) {
  const { category: oldSlug } = await params;

  let blog;
  try {
    blog = await blogApiFetch(`/blogs/slug/${oldSlug}`);
  } catch (err) {
    if (err instanceof BlogApiError && err.status === 404) notFound();
    throw err;
  }

  permanentRedirect(blogPostUrl(blog));
}
