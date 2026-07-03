import Android from "../../../src/Servcomps/Android";

// export const metadata = {
//   title: "Android App Development Company in Delhi, Mumbai & Bengaluru | EICE Technology",
//   description: "EICE Technology develops custom Android apps for businesses in Delhi, Noida, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad.",
//   keywords: ["Android app development company India, Android app development Delhi, Android app development Noida, Android app development Mumbai, Android app development Bengaluru, Android app development Hyderabad, Android app development Chennai, Android app development Pune, Android app development Kolkata, Android app development Ahmedabad, custom Android app development, enterprise Android app development, B2B Android app development, EICE Technology", "mobile app development India", "Android development India"],
//   openGraph: {
//     title: "Android App Development Company in Delhi, Mumbai & Bengaluru | EICE Technology",
//     description: "Create powerful Android applications with EICE Technology. Native, hybrid, and cross-platform mobile solutions for business and consumer apps.",
//     url: "https://www.eicetechnology.com/services/android",
//     siteName: "EICE Technology",
//     type: "website",
//   },
//   twitter: { card: "summary_large_image", title: "Android App Development Services | Mobile Solutions | EICE Technology", description: "Create powerful Android applications with EICE Technology. Native, hybrid, and cross-platform mobile solutions for business and consumer apps." },
//   alternates: { canonical: "https://www.eicetechnology.com/services/android/", languages: { "en-IN": "https://www.eicetechnology.com/services/android/", "en-US": "https://www.eicetechnology.com/services/android/", "x-default": "https://www.eicetechnology.com/services/android/" } },
// };

export  async function generateMetadata() {
 const title= "Mobile App(Android & iOS) Development Company in Delhi, Mumbai & Bengaluru | EICE";
  const description= "EICE Technology develops custom Android and iOS mobile apps for businesses in Delhi, Noida, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad.";
  
  return {
    title,
    description,
    keywords: ["Android App Development Company Delhi, Android App Developers Mumbai, Mobile App Development Company Bengaluru, iOS App Development Company Hyderabad, iPhone App Developers Chennai, Custom Mobile App Development India, Android and iOS App Development India, Enterprise App Development Company India, Mobile Application Development Services India, Cross Platform App Development India"],
  openGraph: { title, description, url: "https://www.eicetechnology.com/services/android", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title , description,
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/services/android/", languages: { "en-IN": "https://www.eicetechnology.com/services/android/", "en-US": "https://www.eicetechnology.com/services/android/", "x-default": "https://www.eicetechnology.com/services/android/" } },
};}


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eicetechnology.com/services/android" },
      { "@type": "ListItem", "position": 3, "name": "Mobile App Development" }
    ]
  },
  {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mobile App(Android & iOS) Development Company in Delhi, Mumbai & Bengaluru | EICE",
  "description": "EICE Technology develops custom Android and iOS mobile apps for businesses in Delhi, Noida, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad.",
  "provider": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
  "url": "https://www.eicetechnology.com/services/android",
  "serviceType": "Mobile App Development",
  "areaServed": { "@type": "Place", "name": "Global" }
}];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Android />
    </>
  );
}



