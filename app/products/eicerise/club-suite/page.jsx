import Club from "../../../../src/Rise/Pages/PricePages/Club";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Club Suite Pricing | EICE Rise Hospitality ERP | EICE Technology",
  description: "Explore EICE Rise Club Suite pricing  modular hospitality ERP solution for clubs, with room booking, POS, member management, and finance modules.",
  keywords: ["Club Suite Pricing", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Club Suite Pricing | EICE Rise Hospitality ERP",
    description: "Explore EICE Rise Club Suite pricing  modular hospitality ERP solution for clubs, with room booking, POS, member management, and finance modules.",
    url: "https://www.eicetechnology.com/products/eicerise/club-suite",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Club Suite Pricing | EICE Rise Hospitality ERP", description: "Explore EICE Rise Club Suite pricing  modular hospitality ERP solution for clubs, with room booking, POS, member management, and finance modules." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/club-suite/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/club-suite/", "en-US": "https://www.eicetechnology.com/products/eicerise/club-suite/", "x-default": "https://www.eicetechnology.com/products/eicerise/club-suite/" } },
};


export default function Page() {
  return (
    <>
      <Club />
      <ProductFooter />
      <Copyright />
    </>
  );
}


