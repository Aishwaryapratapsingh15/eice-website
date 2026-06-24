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
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/budget/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/budget/", "en-US": "https://www.eicetechnology.com/products/eicerise/budget/", "x-default": "https://www.eicetechnology.com/products/eicerise/budget/" } },
};


export default function Page() {
  return (
    <>
      <Budget />
      <ProductFooter />
      <Copyright />
    </>
  );
}


