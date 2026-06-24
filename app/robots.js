export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/products/form"],
      },
      // Google crawlers
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
      // Allow Google to use content for AI Overviews / Gemini (GEO)
      { userAgent: "Google-Extended", allow: "/" },
      // Bing
      { userAgent: "Bingbot", allow: "/" },
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
    sitemap: "https://www.eicetechnology.com/sitemap.xml",
    host: "https://www.eicetechnology.com",
  };
}
