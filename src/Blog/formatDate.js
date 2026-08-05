export function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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
