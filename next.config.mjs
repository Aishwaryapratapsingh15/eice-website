import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const rules = [
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|woff|woff2|ttf|otf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/products/eicerise",
        headers: [
          { key: "Cache-Control", value: "public, max-age=300, stale-while-revalidate=3600" },
        ],
      },
    ];
    // Next.js owns /_next/static caching internally during dev; only set in production
    if (process.env.NODE_ENV === "production") {
      rules.unshift({
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      });
    }
    return rules;
  },
  async redirects() {
    return [
      // NOTE: enable this only after confirming www.eicetechnology.com does NOT redirect back to eicetechnology.com
      // {
      //   source: "/:path*",
      //   has: [{ type: "host", value: "eicetechnology.com" }],
      //   destination: "https://www.eicetechnology.com/:path*",
      //   permanent: true,
      // },
      // Old contact URLs
      { source: "/contact-us",  destination: "/contact", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },

      // Old flat service URLs -> new /services/slug structure
      { source: "/services-devops",                destination: "/services/devops",                permanent: true },
      { source: "/services-dataanalytics",          destination: "/services/data-analytics",        permanent: true },
      { source: "/services-ai-ml",                  destination: "/services/ai-ml",                 permanent: true },
      { source: "/services-cloud",                  destination: "/services/cloud",                 permanent: true },
      { source: "/services-iot",                    destination: "/services/iot",                   permanent: true },
      { source: "/services-blockchain",             destination: "/services/blockchain",            permanent: true },
      { source: "/services-webdevelopment",         destination: "/services/web-development",       permanent: true },
      { source: "/services-android",                destination: "/services/android",               permanent: true },
      { source: "/services-softwaretesting",        destination: "/services/software-testing",      permanent: true },
      { source: "/services-uiux",                   destination: "/services/ui-ux",                 permanent: true },
      { source: "/services-saas",                   destination: "/services/saas",                  permanent: true },
      { source: "/services-gis",                    destination: "/services/gis",                   permanent: true },
      { source: "/services-techconsultancy",        destination: "/services/tech-consultancy",      permanent: true },
      { source: "/services-chatbot",                destination: "/services/chatbot",               permanent: true },
      { source: "/services-digitaltransformation",  destination: "/services/digital-transformation", permanent: true },
      { source: "/services-enterpriseappdev",       destination: "/services/enterprise-app-dev",   permanent: true },

      // Old flat industry URLs -> new /industries/slug structure
      { source: "/industries-education",    destination: "/industries/education",   permanent: true },
      { source: "/industries-healthcare",   destination: "/industries/healthcare",  permanent: true },
      { source: "/industries-financial",    destination: "/industries/financial",   permanent: true },
      { source: "/industries-oilandgas",    destination: "/industries/oil-and-gas", permanent: true },
      { source: "/industries-logistics",    destination: "/industries/logistics",   permanent: true },
      { source: "/industries-enterprise",   destination: "/industries/enterprise",  permanent: true },
      { source: "/industries-legal",        destination: "/industries/legal",       permanent: true },
      { source: "/industries-digitalmedia", destination: "/industries/digital-media", permanent: true },

      // Old About URLs
      { source: "/about-us/our-company",    destination: "/about", permanent: true },
      { source: "/about-us/our-company/",   destination: "/about", permanent: true },
      { source: "/about-us",                destination: "/about", permanent: true },
      { source: "/about-us/",               destination: "/about", permanent: true },

      // Old product form -> EICE Rise request form
      { source: "/products/form",  destination: "/products/eicerise/form", permanent: true },
      { source: "/products/form/", destination: "/products/eicerise/form", permanent: true },

      // Old hyphenated product URLs -> new clean URLs
      { source: "/products/eice-rise",           destination: "/products/eicerise",  permanent: true },
      { source: "/products/eice-rise/:path*",    destination: "/products/eicerise/:path*", permanent: true },
      { source: "/products/easy-logy",           destination: "/products/easylogy",  permanent: true },
      { source: "/products/easy-logy/:path*",    destination: "/products/easylogy/:path*", permanent: true },


    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3r43jacxrwsrp.cloudfront.net",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve("./src");
    return config;
  },
};

export default nextConfig;

