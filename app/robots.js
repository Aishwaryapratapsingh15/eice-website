// Bots that match one of their own named rules below ignore the "*" rule
// entirely (robots.txt has no inheritance), so this list is repeated on each
// rule that needs it rather than relying on the wildcard to cover them.
const DISALLOW = ["/api/", "/_next/", "/products/form", "/admin/", "/login/", "/wp-admin/"];

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOW,
      },
      // Google crawlers
      { userAgent: "Googlebot", allow: "/", disallow: DISALLOW },
      { userAgent: "Googlebot-Image", allow: "/" },
      // Allow Google to use content for AI Overviews / Gemini (GEO)
      { userAgent: "Google-Extended", allow: "/" },
      // Bing
      { userAgent: "Bingbot", allow: "/", disallow: DISALLOW },
      // AEO — AI Answer Engine crawlers
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      // GEO — Generative AI training
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],
    sitemap: [
      "https://www.eicetechnology.com/sitemap.xml",
      "https://www.eicetechnology.com/news-sitemap.xml",
    ],
    host: "https://www.eicetechnology.com",
  };
}
