export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/products/form"],
      },
    ],
    sitemap: "https://www.eicetechnology.com/sitemap.xml",
    host: "https://www.eicetechnology.com",
  };
}
