const BASE_URL = "https://www.eicetechnology.com";

export default function sitemap() {
  const routes = [
    // Core pages
    { url: "/",               priority: 1.0, changeFrequency: "weekly"  },
    { url: "/about",          priority: 0.8, changeFrequency: "monthly" },
    { url: "/contact",        priority: 0.8, changeFrequency: "monthly" },
    { url: "/our-team",       priority: 0.6, changeFrequency: "monthly" },
    { url: "/careers",        priority: 0.6, changeFrequency: "weekly"  },
    { url: "/resources",      priority: 0.7, changeFrequency: "weekly"  },

    // Services
    { url: "/services",                        priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/ai-ml",                  priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/cloud",                  priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/devops",                 priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/digital-transformation", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/data-analytics",         priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/enterprise-app-dev",     priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/iot",                    priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/blockchain",             priority: 0.7, changeFrequency: "monthly" },
    { url: "/services/web-development",        priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/android",                priority: 0.7, changeFrequency: "monthly" },
    { url: "/services/software-testing",       priority: 0.7, changeFrequency: "monthly" },
    { url: "/services/ui-ux",                  priority: 0.7, changeFrequency: "monthly" },
    { url: "/services/saas",                   priority: 0.7, changeFrequency: "monthly" },
    { url: "/services/gis",                    priority: 0.7, changeFrequency: "monthly" },
    { url: "/services/tech-consultancy",       priority: 0.7, changeFrequency: "monthly" },
    { url: "/services/chatbot",                priority: 0.7, changeFrequency: "monthly" },

    // Industries
    { url: "/industries",               priority: 0.8, changeFrequency: "monthly" },
    { url: "/industries/healthcare",    priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/oil-and-gas",   priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/financial",     priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/education",     priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/logistics",     priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/enterprise",    priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/legal",         priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/digital-media", priority: 0.7, changeFrequency: "monthly" },

    // Products
    { url: "/products/eice-rise",   priority: 0.8, changeFrequency: "monthly" },
    { url: "/products/easy-logy",   priority: 0.8, changeFrequency: "monthly" },
    { url: "/products/verilock",    priority: 0.8, changeFrequency: "monthly" },
    { url: "/products/infrasight",  priority: 0.8, changeFrequency: "monthly" },
    { url: "/products/eice-agent",  priority: 0.8, changeFrequency: "monthly" },
    { url: "/products/eice-voice",  priority: 0.8, changeFrequency: "monthly" },
    { url: "/products/isync-drive", priority: 0.8, changeFrequency: "monthly" },
    { url: "/products/isync-lite",  priority: 0.8, changeFrequency: "monthly" },
    { url: "/products/smartfit",    priority: 0.8, changeFrequency: "monthly" },
    { url: "/products/eice-ops",    priority: 0.8, changeFrequency: "monthly" },

    // Case Studies
    { url: "/case-studies",                    priority: 0.7, changeFrequency: "monthly" },
    { url: "/case-studies/voice-call-ai",      priority: 0.6, changeFrequency: "monthly" },
    { url: "/case-studies/sentimental-ai",     priority: 0.6, changeFrequency: "monthly" },
    { url: "/case-studies/logistics-ai",       priority: 0.6, changeFrequency: "monthly" },
    { url: "/case-studies/inventory-ai",       priority: 0.6, changeFrequency: "monthly" },
    { url: "/case-studies/relimonitor",        priority: 0.6, changeFrequency: "monthly" },
    { url: "/case-studies/petro-sim",          priority: 0.6, changeFrequency: "monthly" },
    { url: "/case-studies/espct-quote",        priority: 0.6, changeFrequency: "monthly" },
    { url: "/case-studies/city-gas-adani",     priority: 0.6, changeFrequency: "monthly" },
    { url: "/case-studies/simu-lift",          priority: 0.6, changeFrequency: "monthly" },
    { url: "/case-studies/noralta-scada",      priority: 0.6, changeFrequency: "monthly" },
    { url: "/case-studies/epgis",              priority: 0.6, changeFrequency: "monthly" },
    { url: "/case-studies/noralta-femms",      priority: 0.6, changeFrequency: "monthly" },
    { url: "/case-studies/design-sim-borets",  priority: 0.6, changeFrequency: "monthly" },
    { url: "/case-studies/schlumberger-baa",   priority: 0.6, changeFrequency: "monthly" },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
