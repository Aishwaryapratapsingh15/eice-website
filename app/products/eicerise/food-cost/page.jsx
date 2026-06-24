import FoodCost from "../../../../src/Rise/Pages/InsidePages/FoodCost";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Food & Beverage Cost Analysis | EICE Rise Hospitality ERP | EICE Technology",
  description: "Control F&B costs with EICE Rise Food Cost Analysis module  recipe costing, wastage tracking, consumption analysis, and profitability reporting for hotels.",
  keywords: ["Food & Beverage Cost Analysis", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Food & Beverage Cost Analysis | EICE Rise Hospitality ERP",
    description: "Control F&B costs with EICE Rise Food Cost Analysis module  recipe costing, wastage tracking, consumption analysis, and profitability reporting for hotels.",
    url: "https://www.eicetechnology.com/products/eicerise/food-cost",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Food & Beverage Cost Analysis | EICE Rise Hospitality ERP", description: "Control F&B costs with EICE Rise Food Cost Analysis module  recipe costing, wastage tracking, consumption analysis, and profitability reporting for hotels." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eicerise/food-cost/", languages: { "en-IN": "https://www.eicetechnology.com/products/eicerise/food-cost/", "en-US": "https://www.eicetechnology.com/products/eicerise/food-cost/", "x-default": "https://www.eicetechnology.com/products/eicerise/food-cost/" } },
};


export default function Page() {
  return (
    <>
      <FoodCost />
      <ProductFooter />
      <Copyright />
    </>
  );
}


