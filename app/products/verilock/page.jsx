import Verilock from "../../../src/Product/verilock";

export const metadata = {
  title: "Verilock | Multi-Factor Authentication & Access Control | EICE Technology",
  description: "Protect your enterprise with Verilock's advanced multi-factor authentication and access control system. Secure, compliant access across all systems.",
  keywords: ["MFA", "multi-factor authentication", "access control", "cybersecurity", "identity management", "Verilock", "EICE Technology", "MFA software India", "multi-factor authentication India", "access control software India", "cybersecurity India"],
  openGraph: {
    title: "Verilock | Multi-Factor Authentication & Access Control | EICE Technology",
    description: "Protect your enterprise with Verilock's advanced multi-factor authentication and access control system. Secure, compliant access across all systems.",
    url: "https://www.eicetechnology.com/products/verilock",
    siteName: "EICE Technology",
    images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Verilock | Multi-Factor Authentication & Access Control | EICE Technology",
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"], description: "Protect your enterprise with Verilock's advanced multi-factor authentication and access control system. Secure, compliant access across all systems." },
  alternates: { canonical: "https://www.eicetechnology.com/products/verilock", languages: { "en-IN": "https://www.eicetechnology.com/products/verilock/", "en-US": "https://www.eicetechnology.com/products/verilock/", "x-default": "https://www.eicetechnology.com/products/verilock/" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
      { "@type": "ListItem", "position": 3, "name": "Verilock" }
    ]
  },

  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Verilock",
    "description": "Advanced MFA and access control system providing secure, compliant identity management across enterprise systems.",
    "applicationCategory": "SecurityApplication",
    "applicationSubCategory": "Multi-Factor Authentication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "publisher": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
    "url": "https://www.eicetechnology.com/products/verilock"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
    { "@type": "Question", "name": "What is Verilock?", "acceptedAnswer": { "@type": "Answer", "text": "Verilock is an enterprise multi-factor authentication and access control solution that secures digital assets, user identities, and system access across organisations." } },
    { "@type": "Question", "name": "What authentication methods does Verilock support?", "acceptedAnswer": { "@type": "Answer", "text": "Verilock supports TOTP, SMS OTP, email OTP, biometric verification, and hardware token-based authentication methods." } }
    ]
  }
];
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Verilock />
    </>
  );
}



