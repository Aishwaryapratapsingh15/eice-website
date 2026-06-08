import Servmain from "../../src/Servcomps/Servmain";
import ProductFooter from "../../src/Product/ProductFooter";
import Copyright from "../../src/Othercomps/Copyright";

export const metadata = {
  title: "IT Services | AI/ML, Cloud, DevOps & More | EICE Technology",
  description: "Comprehensive IT services from EICE Technology: AI/ML, cloud computing, IoT, DevOps, web development, mobile apps, blockchain, and digital transformation.",
  openGraph: { title: "IT Services | EICE Technology", description: "Full-spectrum IT services: AI, cloud, IoT, DevOps, web, mobile and more.", url: "https://www.eicetechnology.com/services", siteName: "EICE Technology",
    images: [{ url: "/assets/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }], type: "website" },
  twitter: { card: "summary_large_image", title: "IT Services | EICE Technology" ,
    images: ["/assets/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/services" },
};

export default function Page() {
  return (
    <>
      <Servmain />
      <ProductFooter />
      <Copyright />
    </>
  );
}