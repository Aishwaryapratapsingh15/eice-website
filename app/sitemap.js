const BASE = "https://www.eicetechnology.com";

export default function sitemap() {
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE}/about`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/contact`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/services`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE}/industries`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/case-studies`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE}/resources`, priority: 0.7, changeFrequency: "weekly" },
    { url: `${BASE}/careers`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/our-team`, priority: 0.6, changeFrequency: "monthly" },
  ];

  const productRoutes = [
    "eice-rise", "eice-ops", "isync-lite", "isync-drive",
    "eice-agent", "verilock", "infrasight", "easy-logy",
    "eice-voice", "smartfit",
  ].map((slug) => ({ url: `${BASE}/products/${slug}`, priority: 0.8, changeFrequency: "monthly" }));

  // EICE Rise module sub-pages
  const eiceRiseRoutes = [
    "room-booking", "pos-dining", "account-finance", "banquet-billing",
    "employee-suite", "member-suite", "payroll", "purchase-vendor",
    "userstore-inventry", "food-cost", "single-sign-on", "wifi",
    "budget", "feedback", "compliance-register", "audience-attendance",
    "vendor-management", "android", "durgabari", "iic",
    "club-suite", "enterprise-suite", "inventory-suite", "pos-suite",
    "frontdesk-suite", "banquet-suite", "vanilla-suite",
    "about", "pricing",
  ].map((slug) => ({ url: `${BASE}/products/eice-rise/${slug}`, priority: 0.7, changeFrequency: "monthly" }));

  const serviceRoutes = [
    "ai-ml", "cloud", "data-analytics", "devops", "digital-transformation",
    "enterprise-app-dev", "gis", "iot", "tech-consultancy", "saas",
    "android", "blockchain", "web-development", "software-testing", "ui-ux", "chatbot",
  ].map((slug) => ({ url: `${BASE}/services/${slug}`, priority: 0.8, changeFrequency: "monthly" }));

  const industryRoutes = [
    "healthcare", "financial", "education", "digital-media",
    "logistics", "enterprise", "legal", "oil-and-gas",
  ].map((slug) => ({ url: `${BASE}/industries/${slug}`, priority: 0.7, changeFrequency: "monthly" }));

  const caseStudyRoutes = [
    "voice-call-ai", "sentimental-ai", "logistics-ai", "inventory-ai",
    "relimonitor", "petro-sim", "espct-quote", "city-gas-adani",
    "simu-lift", "noralta-scada", "epgis", "noralta-femms",
    "design-sim-borets", "schlumberger-baa",
  ].map((slug) => ({ url: `${BASE}/case-studies/${slug}`, priority: 0.6, changeFrequency: "yearly" }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...eiceRiseRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...caseStudyRoutes,
  ].map((route) => ({ ...route, lastModified: now }));
}
