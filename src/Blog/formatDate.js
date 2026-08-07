export function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Explicit timeZone so this renders the same IST time regardless of the
// server's host timezone (SSR runs on the server, not the visitor's browser).
export function formatDateTime(iso) {
  if (!iso) return "";
  const formatted = new Date(iso).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  });
  return `${formatted} IST`;
}

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

// Treat the post as "updated" only once updatedAt drifts a full day past
// publishedAt — filters out the sub-second gap between save and publish.
export function getDisplayDate(blog, formatter = formatDateTime) {
  const updatedAt = blog.updatedAt;
  const publishedAt = blog.publishedAt;
  if (updatedAt && publishedAt && new Date(updatedAt).getTime() - new Date(publishedAt).getTime() > ONE_DAY_MS) {
    return { label: "Updated", date: formatter(updatedAt) };
  }
  return { label: "Published", date: formatter(publishedAt) };
}

const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;

// Backend timestamps are UTC — Google News/Search schema wants dates
// expressed with the +05:30 (IST) offset, so shift the instant forward and
// format its UTC getters (avoids depending on the server's local timezone).
export function toIstIsoString(iso) {
  if (!iso) return undefined;
  const shifted = new Date(new Date(iso).getTime() + IST_OFFSET_MS);
  const pad = (n) => String(n).padStart(2, "0");
  const date = `${shifted.getUTCFullYear()}-${pad(shifted.getUTCMonth() + 1)}-${pad(shifted.getUTCDate())}`;
  const time = `${pad(shifted.getUTCHours())}:${pad(shifted.getUTCMinutes())}:${pad(shifted.getUTCSeconds())}`;
  return `${date}T${time}+05:30`;
}
