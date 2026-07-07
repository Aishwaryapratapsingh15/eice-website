import Budget from "../../../../src/Rise/Pages/InsidePages/Budget";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Budget Management | EICE Rise Hospitality ERP | EICE Technology",
  description: "Plan and control hotel budgets with EICE Rise Budget module  departmental budget allocation, variance analysis, and real-time spend tracking for financial discipline.",
  keywords: ["Budget Management", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Budget Management | EICE Rise Hospitality ERP",
    description: "Plan and control hotel budgets with EICE Rise Budget module  departmental budget allocation, variance analysis, and real-time spend tracking for financial discipline.",
    url: "https://www.eicetechnology.com/products/eicerise/budget",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Budget Management | EICE Rise Hospitality ERP", description: "Plan and control hotel budgets with EICE Rise Budget module  departmental budget allocation, variance analysis, and real-time spend tracking for financial discipline." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/budget", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/budget/", "en-US": "https://www.eicetechnology.com/products/eicerise/budget/", "x-default": "https://www.eicetechnology.com/products/eicerise/budget/" } },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
    { "@type": "ListItem", "position": 3, "name": "EiceRise", "item": "https://www.eicetechnology.com/products/eicerise" },
    { "@type": "ListItem", "position": 4, "name": "Budget Management" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Budget />
      <ProductFooter />
      <Copyright />
    </>
  );
}


