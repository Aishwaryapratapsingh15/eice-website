import AccountAndFinance from "../../../../src/Rise/Pages/InsidePages/AccountAndFinance";
import ProductFooter from "../../../../src/Product/ProductFooter";
import Copyright from "../../../../src/Othercomps/Copyright";

export const metadata = {
  title: "Accounts & Finance | EICE Rise Hospitality ERP | EICE Technology",
  description: "Automate hotel financial operations with EICE Rise Accounts & Finance module invoicing, ledger management, GST compliance, and real-time financial reporting.",
  keywords: ["Accounts & Finance", "EICE Rise", "hospitality ERP", "hotel management system", "EICE Technology"],
  openGraph: {
    title: "Accounts & Finance | EICE Rise Hospitality ERP",
    description: "Automate hotel financial operations with EICE Rise Accounts & Finance module  invoicing, ledger management, GST compliance, and real-time financial reporting.",
    url: "https://www.eicetechnology.com/products/eice-rise/account-finance",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Accounts & Finance | EICE Rise Hospitality ERP", description: "Automate hotel financial operations with EICE Rise Accounts & Finance module  invoicing, ledger management, GST compliance, and real-time financial reporting." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-rise/account-finance/", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-rise/account-finance/", "en-US": "https://www.eicetechnology.com/products/eice-rise/account-finance/", "x-default": "https://www.eicetechnology.com/products/eice-rise/account-finance/" } },
};


export default function Page() {
  return (
    <>
      <AccountAndFinance />
      <ProductFooter />
      <Copyright />
    </>
  );
}


