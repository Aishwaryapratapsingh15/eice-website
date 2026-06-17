import Careerform from "../../src/Othercomps/Careerform";
import ProductFooter from "../../src/Product/ProductFooter";
import Copyright from "../../src/Othercomps/Copyright";

export const metadata = {
  title: "Careers at EICE Technology | Join Our Global IT Team",
  description: "Explore career opportunities at EICE Technology. Join 200+ IT professionals working on innovative projects across 10+ countries worldwide.",
  keywords: ["EICE Technology careers", "IT jobs", "software developer jobs", "tech careers", "IT company jobs", "EICE hiring"],
  openGraph: { title: "Careers at EICE Technology", description: "Join EICE Technology's team of 200+ global IT professionals.", url: "https://www.eicetechnology.com/careers", siteName: "EICE Technology", type: "website" },
  twitter: { card: "summary_large_image", title: "Careers at EICE Technology" },
  alternates: { canonical: "https://www.eicetechnology.com/careers/", languages: { "en-IN": "https://www.eicetechnology.com/careers/", "en-US": "https://www.eicetechnology.com/careers/", "x-default": "https://www.eicetechnology.com/careers/" } },
};

export default function Page() {
  return (
    <>
      <Careerform />
      <ProductFooter />
      <Copyright />
    </>
  );
}
