// Resolved from the @EICETechnology channel's canonical URL — stable unless the channel is
// recreated. No API key needed: the public Atom feed at /feeds/videos.xml is unauthenticated.
const DEFAULT_CHANNEL_ID = "UCOJ8BLWy6QsgUjsowdamAqA";
const MAX_RESULTS = 3;

function decodeEntities(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function parseFeed(xml) {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];

  return entries.slice(0, MAX_RESULTS).map((entry) => {
    const videoId = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] ?? "";
    const title = decodeEntities(entry.match(/<title>(.*?)<\/title>/)?.[1] ?? "");

    return {
      videoId,
      title,
      thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    };
  });
}

export async function getLatestVideos() {
  const channelId = process.env.YOUTUBE_CHANNEL_ID || DEFAULT_CHANNEL_ID;

  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];

    const xml = await res.text();
    return parseFeed(xml).filter((video) => video.videoId);
  } catch {
    return [];
  }
}
