import Contactform from "../../src/Othercomps/Contactform";
import Certificate from "../../src/Homecomps/Certificate";
import ProductFooter from "../../src/Product/ProductFooter";
import Copyright from "../../src/Othercomps/Copyright";

export const metadata = {
  title: "Contact EICE Technology | Get In Touch With Our IT Experts",
  description: "Contact EICE Technology for IT consulting, software development, and digital transformation. Reach our team of 200+ professionals ready to help.",
  openGraph: { title: "Contact EICE Technology", description: "Get in touch with EICE Technology's IT experts.", url: "https://www.eicetechnology.com/contact", siteName: "EICE Technology",
    images: [{ url: "/assets/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }], type: "website" },
  twitter: { card: "summary_large_image", title: "Contact EICE Technology" ,
    images: ["/assets/Compressed/bannerai.png"]},
  alternates: { canonical: "https://www.eicetechnology.com/contact" },
};

export default function Page() {
  return (
    <>
      <Contactform />
      <Certificate />
      <ProductFooter />
      <Copyright />
    </>
  );
}