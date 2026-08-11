import dynamic from "next/dynamic";
import Big from "../src/Homecomps/Big";
import Offers from "../src/Homecomps/Offers";
import Solutions from "../src/Homecomps/Solutions";
import Techs from "../src/Homecomps/Techs";
import Copyright from "../src/Othercomps/Copyright";

// Below-the-fold sections: still server-rendered (content stays in the
// initial HTML for SEO/no-JS), but their hydration JS is split into
// separate chunks instead of the main bundle, since it's not needed
// for the first paint. next/dynamic can't use ssr:false in a Server
// Component like this page, so SSR stays on — only the JS chunk splits.
const Clientele = dynamic(() => import("../src/Homecomps/Clientele"));
const Clients = dynamic(() => import("../src/Homecomps/Clients"));
const Casestudies = dynamic(() => import("../src/Homecomps/Casestudies"));
const Certificate = dynamic(() => import("../src/Homecomps/Certificate"));
const LatestVideos = dynamic(() => import("../src/Homecomps/LatestVideos"));
const ProductFooter = dynamic(() => import("../src/Product/ProductFooter"));

// export const metadata = {
//   title: "EICE Technology | IT Solutions, Software Development & Digital Transformation",
//   description: "EICE Technology delivers cutting-edge IT solutions including AI/ML, cloud computing, software development, and digital transformation to 60+ clients across 10+ countries since 2010.",
//   keywords: ["IT solutions", "software development", "AI ML", "cloud computing", "digital transformation", "EICE Technology"],
//   openGraph: {
//     title: "EICE Technology | IT Solutions & Software Development",
//     description: "Leading IT services company — AI/ML, cloud, software development, digital transformation. 180+ projects, 60+ clients, 10+ countries.",
//     url: "https://www.eicetechnology.com",
//     siteName: "EICE Technology",
//     images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "EICE Technology | IT Solutions & Software Development",
//     images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"],
//     description: "Leading IT services — AI/ML, cloud, software development, digital transformation.",
//   },
//   alternates: { canonical: "https://www.eicetechnology.com", languages: { "en-IN": "https://www.eicetechnology.com", "en-US": "https://www.eicetechnology.com", "x-default": "https://www.eicetechnology.com" } },
// };

export  async function generateMetadata() {
 const title= "EICE Technology — IT Solutions, AI Agents & ERP Software India";
  const description= "EICE Technology delivers AI Agent platforms, Hospitality ERP (EiceRise), Logistics Software (EasyLogy) and Cargo Management (Smartfit) for Indian businesses.";
  
  return {
    title,
    description,
    keywords: ["EICE Technology IT solutions India"],
  openGraph: { title, description, url: "https://www.eicetechnology.com", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com", languages: { "en-IN": "https://www.eicetechnology.com", "en-US": "https://www.eicetechnology.com", "x-default": "https://www.eicetechnology.com" } },
};}

// const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "WebSite",
//   "name": "EICE Technology",
//   "url": "https://www.eicetechnology.com",
//   "description": "EICE Technology delivers IT solutions including AI/ML, cloud computing, software development, and digital transformation globally.",
//   "publisher": { "@type": "Organization", "name": "EICE Technology" },
//   "potentialAction": {
//     "@type": "SearchAction",
//     "target": { "@type": "EntryPoint", "urlTemplate": "https://www.eicetechnology.com/resources?q={search_term_string}" },
//     "query-input": "required name=search_term_string"
//   }
// };

const jsonLd = {"@context":"https://schema.org","@type":"Organization","name":"EICE Technology","url":"https://www.eicetechnology.com","logo":"https://d3r43jacxrwsrp.cloudfront.net/logo.svg","sameAs":["https://linkedin.com/company/eice-technology"],"contactPoint":{"@type":"ContactPoint","contactType":"sales","areaServed":"IN"}}


export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="inner_components">
        <Big />
      </div>

      <div>
        <div className="flex flex-col gap-0.5 items-start sm:items-center justify-start sm:justify-center xl:pt-8 pt-2 sm:pt-4 w-screen px-4 mb-2 sm:mb-8 md:mb-12">
          <h2 className="text-bloo text-[18px] sm:text-[25px] fontweight_1 py-2">Core Services</h2>
          <h2 className="text-blackk fontweight_1 text-left sm:text-center text-[26px] sm:text-3xl md:text-3xl lg:text-[32px] max-w-4xl py-1">
            Unlocking Innovation: <br className="sm:hidden" />
            Explore Our Suite of Solutions for Your Digital Evolution
          </h2>
        </div>
        <div className="mx-auto px-0 sm:px-2">
          <Offers />
        </div>
      </div>

      <div>
        <Techs />
        <Solutions />
        <Casestudies />
        <Clients />
        <LatestVideos />
        <Clientele />
        <Certificate />
        <div style={{ marginBottom: "100px" }}></div>
      </div>

      <ProductFooter />
      <Copyright />
    </>
  );
}
