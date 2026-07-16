import "../src/index.css";
import "../src/App.css";
import "../src/fontCss.css";
import "../src/Cstudies/Styles/Cstudies.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SiteShell from "./SiteShell";
import Script from "next/script";

// export const metadata = {
//   metadataBase: new URL("https://www.eicetechnology.com"),
//   title: {
//     default: "EICE Technology | IT Solutions & Software Development",
//     template: "%s | EICE Technology",
//   },
//   description: "EICE Technology delivers cutting-edge IT solutions including AI/ML, cloud computing, software development, and digital transformation services globally.",
//   keywords: ["EICE Technology", "IT solutions", "software development", "AI ML", "cloud computing", "digital transformation"],
//   authors: [{ name: "EICE Technology" }],
//   creator: "EICE Technology",
//   publisher: "EICE Technology",
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     siteName: "EICE Technology",
//     images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology - IT Solutions & Software Development" }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@EICETechnology",
//     images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"],
//   },
// };

// const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   "name": "EICE Technology",
//   "url": "https://www.eicetechnology.com",
//   "logo": "https://www.eicetechnology.com/logo.svg",
//   "description": "EICE Technology delivers cutting-edge IT solutions including AI/ML, cloud computing, software development, and digital transformation services globally.",
//   "foundingDate": "2010",
//   "numberOfEmployees": { "@type": "QuantitativeValue", "value": 200 },
//   "address": [
//     {
//       "@type": "PostalAddress",
//       "streetAddress": "11011 Richmond Ave, Suite 715",
//       "addressLocality": "Houston",
//       "addressRegion": "TX",
//       "postalCode": "77042",
//       "addressCountry": "US"
//     },
//     {
//       "@type": "PostalAddress",
//       "streetAddress": "6th floor, Platina Heights, C-24, Sector 62",
//       "addressLocality": "Noida",
//       "addressRegion": "Uttar Pradesh",
//       "postalCode": "201301",
//       "addressCountry": "IN"
//     }
//   ],
//   "contactPoint": {
//     "@type": "ContactPoint",
//     "telephone": "+91-987-189-5200",
//     "contactType": "customer service",
//     "email": "info@eicetechnology.com"
//   },
//   "sameAs": [
//     "https://www.linkedin.com/company/eice-technology/",
//     "https://twitter.com/EiceTech24",
//     "https://www.facebook.com/Eicetechnology/",
//     "https://www.instagram.com/eicetechnology24/"
//   ],
//   "serviceArea": { "@type": "Place", "name": "Global" },
//   "hasOfferCatalog": {
//     "@type": "OfferCatalog",
//     "name": "IT Services",
//     "itemListElement": [
//       { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI/ML Solutions" } },
//       { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Computing" } },
//       { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DevOps" } },
//       { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IoT Solutions" } },
//       { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Transformation" } }
//     ]
//   }
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        /> */}

        {/* LCP preload — Lighthouse identifies the hero bg-bannerbg overlay div
            (public/assets/Compressed/bannerbg.png) as the actual LCP element,
            not the genai.png product image. Preloading the wrong image was
            delaying LCP discovery for the real one. */}
        <link
          rel="preload"
          as="image"
          href="/assets/Compressed/bannerbg.png"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://d3r43jacxrwsrp.cloudfront.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="Pfk9vE97adn5ZyQ4onqOBfgDhaer6MQzCfRBd9Jt8dE" />
        


      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZQMX8C7EJ0"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-ZQMX8C7EJ0');
        `}
      </Script>


    </html>
  );
}
