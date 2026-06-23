const BASE_URL = "https://www.eicetechnology.com";

const DATES = {
  core:         "2026-06-15",
  services:     "2026-05-01",
  industries:   "2026-05-01",
  products:     "2026-06-01",
  rise:         "2026-06-16",
  caseStudies:  "2026-06-10",
  blog:         "2026-06-16",
};

export default function sitemap() {
  const routes = [
    // Core pages
    { url: "/",           priority: 1.0, changeFrequency: "weekly",  lastModified: DATES.core      },
    { url: "/about/",      priority: 0.8, changeFrequency: "monthly", lastModified: DATES.core      },
    { url: "/contact/",    priority: 0.8, changeFrequency: "monthly", lastModified: DATES.core      },
    { url: "/our-team/",   priority: 0.6, changeFrequency: "monthly", lastModified: DATES.core      },
    { url: "/careers/",    priority: 0.6, changeFrequency: "weekly",  lastModified: DATES.core      },
    { url: "/resources/",  priority: 0.7, changeFrequency: "weekly",  lastModified: DATES.core      },

    // Services
    { url: "/services/",                        priority: 0.9, changeFrequency: "monthly", lastModified: DATES.services },
    { url: "/services/ai-ml/",                  priority: 0.8, changeFrequency: "monthly", lastModified: DATES.services },
    { url: "/services/cloud/",                  priority: 0.8, changeFrequency: "monthly", lastModified: DATES.services },
    { url: "/services/devops/",                 priority: 0.8, changeFrequency: "monthly", lastModified: DATES.services },
    { url: "/services/digital-transformation/", priority: 0.8, changeFrequency: "monthly", lastModified: DATES.services },
    { url: "/services/data-analytics/",         priority: 0.8, changeFrequency: "monthly", lastModified: DATES.services },
    { url: "/services/enterprise-app-dev/",     priority: 0.8, changeFrequency: "monthly", lastModified: DATES.services },
    { url: "/services/iot/",                    priority: 0.8, changeFrequency: "monthly", lastModified: DATES.services },
    { url: "/services/blockchain/",             priority: 0.7, changeFrequency: "monthly", lastModified: DATES.services },
    { url: "/services/web-development/",        priority: 0.8, changeFrequency: "monthly", lastModified: DATES.services },
    { url: "/services/android/",                priority: 0.7, changeFrequency: "monthly", lastModified: DATES.services },
    { url: "/services/software-testing/",       priority: 0.7, changeFrequency: "monthly", lastModified: DATES.services },
    { url: "/services/ui-ux/",                  priority: 0.7, changeFrequency: "monthly", lastModified: DATES.services },
    { url: "/services/saas/",                   priority: 0.7, changeFrequency: "monthly", lastModified: DATES.services },
    { url: "/services/gis/",                    priority: 0.7, changeFrequency: "monthly", lastModified: DATES.services },
    { url: "/services/tech-consultancy/",       priority: 0.7, changeFrequency: "monthly", lastModified: DATES.services },
    { url: "/services/chatbot/",                priority: 0.7, changeFrequency: "monthly", lastModified: DATES.services },

    // Industries
    { url: "/industries/",               priority: 0.8, changeFrequency: "monthly", lastModified: DATES.industries },
    { url: "/industries/healthcare/",    priority: 0.7, changeFrequency: "monthly", lastModified: DATES.industries },
    { url: "/industries/oil-and-gas/",   priority: 0.7, changeFrequency: "monthly", lastModified: DATES.industries },
    { url: "/industries/financial/",     priority: 0.7, changeFrequency: "monthly", lastModified: DATES.industries },
    { url: "/industries/education/",     priority: 0.7, changeFrequency: "monthly", lastModified: DATES.industries },
    { url: "/industries/logistics/",     priority: 0.7, changeFrequency: "monthly", lastModified: DATES.industries },
    { url: "/industries/enterprise/",    priority: 0.7, changeFrequency: "monthly", lastModified: DATES.industries },
    { url: "/industries/legal/",         priority: 0.7, changeFrequency: "monthly", lastModified: DATES.industries },
    { url: "/industries/digital-media/",  priority: 0.7, changeFrequency: "monthly", lastModified: DATES.industries },
    { url: "/industries/hospitality/",    priority: 0.8, changeFrequency: "monthly", lastModified: DATES.industries },

    // Products
    { url: "/products/eice-rise/",   priority: 0.8, changeFrequency: "monthly", lastModified: DATES.products },
    { url: "/products/easy-logy/",   priority: 0.8, changeFrequency: "monthly", lastModified: DATES.products },
    { url: "/products/verilock/",    priority: 0.8, changeFrequency: "monthly", lastModified: DATES.products },
    { url: "/products/infrasight/",  priority: 0.8, changeFrequency: "monthly", lastModified: DATES.products },
    { url: "/products/eice-agent/",  priority: 0.8, changeFrequency: "monthly", lastModified: DATES.products },
    { url: "/products/eice-voice/",  priority: 0.8, changeFrequency: "monthly", lastModified: DATES.products },
    { url: "/products/isync-drive/", priority: 0.8, changeFrequency: "monthly", lastModified: DATES.products },
    { url: "/products/isync-lite/",  priority: 0.8, changeFrequency: "monthly", lastModified: DATES.products },
    { url: "/products/smartfit/",    priority: 0.8, changeFrequency: "monthly", lastModified: DATES.products },
    { url: "/products/eice-ops/",    priority: 0.8, changeFrequency: "monthly", lastModified: DATES.products },

    // EICE Rise — Module & Feature Pages
    { url: "/products/eice-rise/about/",               priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/pricing/",             priority: 0.7, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/account-finance/",     priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/android/",             priority: 0.5, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/audience-attendance/", priority: 0.5, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/banquet-billing/",     priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/banquet-suite/",       priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/budget/",              priority: 0.5, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/club-suite/",          priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/compliance-register/", priority: 0.5, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/durgabari/",           priority: 0.5, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/employee-suite/",      priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/enterprise-suite/",    priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/feedback/",            priority: 0.5, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/food-cost/",           priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/frontdesk-suite/",     priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/iic/",                 priority: 0.5, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/inventory-suite/",     priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/member-suite/",        priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/payroll/",             priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/pos-dining/",          priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/pos-suite/",           priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/purchase-vendor/",     priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/room-booking/",        priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/single-sign-on/",      priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/userstore-inventry/",  priority: 0.5, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/vanilla-suite/",       priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/vendor-management/",   priority: 0.6, changeFrequency: "monthly", lastModified: DATES.rise },
    { url: "/products/eice-rise/wifi/",                priority: 0.5, changeFrequency: "monthly", lastModified: DATES.rise },

    // Case Studies
    { url: "/case-studies/",                    priority: 0.7, changeFrequency: "monthly", lastModified: DATES.caseStudies },
    { url: "/case-studies/voice-call-ai/",      priority: 0.6, changeFrequency: "monthly", lastModified: DATES.caseStudies },
    { url: "/case-studies/sentimental-ai/",     priority: 0.6, changeFrequency: "monthly", lastModified: DATES.caseStudies },
    { url: "/case-studies/logistics-ai/",       priority: 0.6, changeFrequency: "monthly", lastModified: DATES.caseStudies },
    { url: "/case-studies/inventory-ai/",       priority: 0.6, changeFrequency: "monthly", lastModified: DATES.caseStudies },
    { url: "/case-studies/relimonitor/",        priority: 0.6, changeFrequency: "monthly", lastModified: DATES.caseStudies },
    { url: "/case-studies/petro-sim/",          priority: 0.6, changeFrequency: "monthly", lastModified: DATES.caseStudies },
    { url: "/case-studies/espct-quote/",        priority: 0.6, changeFrequency: "monthly", lastModified: DATES.caseStudies },
    { url: "/case-studies/city-gas-adani/",     priority: 0.6, changeFrequency: "monthly", lastModified: DATES.caseStudies },
    { url: "/case-studies/simu-lift/",          priority: 0.6, changeFrequency: "monthly", lastModified: DATES.caseStudies },
    { url: "/case-studies/noralta-scada/",      priority: 0.6, changeFrequency: "monthly", lastModified: DATES.caseStudies },
    { url: "/case-studies/epgis/",              priority: 0.6, changeFrequency: "monthly", lastModified: DATES.caseStudies },
    { url: "/case-studies/noralta-femms/",      priority: 0.6, changeFrequency: "monthly", lastModified: DATES.caseStudies },
    { url: "/case-studies/design-sim-borets/",  priority: 0.6, changeFrequency: "monthly", lastModified: DATES.caseStudies },
    { url: "/case-studies/schlumberger-baa/",   priority: 0.6, changeFrequency: "monthly", lastModified: DATES.caseStudies },

    // Blog / Content Hub (placeholder  add individual posts as published)
    { url: "/blog/",  priority: 0.8, changeFrequency: "weekly",  lastModified: DATES.blog },
  ];

  return routes.map(({ url, priority, changeFrequency, lastModified }) => ({
    url: `${BASE_URL}${url}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

