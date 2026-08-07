import SingleSignOn from "../../../../src/Rise/Pages/InsidePages/SingleSignOn";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Single Sign-On | EICE Rise Hospitality ERP | EICE Technology",
  description: "Secure hotel operations with EICE Rise Single Sign-On  centralized authentication, role-based access control, and seamless integration across all EICE Rise modules.",
  keywords: ["Single Sign-On", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Single Sign-On | EICE Rise Hospitality ERP",
    description: "Secure hotel operations with EICE Rise Single Sign-On  centralized authentication, role-based access control, and seamless integration across all EICE Rise modules.",
    url: "https://www.eicetechnology.com/products/eicerise/single-sign-on",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Single Sign-On | EICE Rise Hospitality ERP", description: "Secure hotel operations with EICE Rise Single Sign-On  centralized authentication, role-based access control, and seamless integration across all EICE Rise modules." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/single-sign-on", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/single-sign-on", "en-US": "https://www.eicetechnology.com/products/eicerise/single-sign-on", "x-default": "https://www.eicetechnology.com/products/eicerise/single-sign-on" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Single Sign-On" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SingleSignOn />
      <ProductFooter />
      <Copyright />
    </>
  );
}


