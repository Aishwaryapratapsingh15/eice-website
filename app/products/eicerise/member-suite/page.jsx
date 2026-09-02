import MemberSuite from "../../../../src/Rise/Pages/InsidePages/MemberSuite";
import ProductFooter from "../../../../src/Product/ProductFooter";

export const metadata = {
  title: "Member Suite | EICE Rise Hospitality ERP | EICE Technology",
  description: "Manage hotel memberships, loyalty programs, and member benefits with EICE Rise Member Suite  centralized member portal for hotels, clubs, and resorts.",
  keywords: ["Member Suite", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Member Suite | EICE Rise Hospitality ERP",
    description: "Manage hotel memberships, loyalty programs, and member benefits with EICE Rise Member Suite  centralized member portal for hotels, clubs, and resorts.",
    url: "https://www.eicetechnology.com/products/eicerise/member-suite",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Member Suite | EICE Rise Hospitality ERP", description: "Manage hotel memberships, loyalty programs, and member benefits with EICE Rise Member Suite  centralized member portal for hotels, clubs, and resorts." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/member-suite", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/member-suite", "en-US": "https://www.eicetechnology.com/products/eicerise/member-suite", "x-default": "https://www.eicetechnology.com/products/eicerise/member-suite" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Member Suite" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MemberSuite />
      <ProductFooter />
    </>
  );
}


