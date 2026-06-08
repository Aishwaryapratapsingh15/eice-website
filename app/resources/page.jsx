import Resourcesmain from "../../src/Othercomps/Resourcesmain";
import ProductFooter from "../../src/Product/ProductFooter";
import Copyright from "../../src/Othercomps/Copyright";

export const metadata = {
  title: "Resources | IT Insights, Case Studies & Whitepapers | EICE Technology",
  description: "Explore EICE Technology's resources including case studies, whitepapers, and insights on AI/ML, cloud computing, IoT, and digital transformation.",
  openGraph: { title: "Resources | EICE Technology", description: "IT insights, case studies and whitepapers from EICE Technology.", url: "https://www.eicetechnology.com/resources", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title: "Resources | EICE Technology" },
  alternates: { canonical: "https://www.eicetechnology.com/resources" },
};

export default function Page() {
  return (
    <>
      <Resourcesmain />
      <ProductFooter />
      <Copyright />
    </>
  );
}