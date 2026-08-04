const BLOG_API_URL = process.env.BLOG_API_URL || "https://eiceapi.eicetechnology.com/api/v1";

export class BlogApiError extends Error {
  constructor(status, message) {
    super(message);
    this.name = "BlogApiError";
    this.status = status;
  }
}

export async function blogApiFetch(path) {
  const res = await fetch(`${BLOG_API_URL}${path}`, {
    next: { revalidate: 60 },
  });

  const body = await res.json().catch(() => null);

  if (!res.ok || !body || body.success === false) {
    throw new BlogApiError(res.status, body?.message ?? res.statusText);
  }

  return body.data;
}
