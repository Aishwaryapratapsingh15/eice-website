import Form from "../../../src/Product/form";

export const metadata = {
  title: "Product Inquiry | Request a Demo | EICE Technology",
  description: "Get in touch with EICE Technology to request a product demo or learn more about our enterprise software solutions.",
  openGraph: {
    title: "Product Inquiry | Request a Demo | EICE Technology",
    description: "Get in touch with EICE Technology to request a product demo or learn more about our enterprise software solutions.",
    url: "https://www.eicetechnology.com/products/form",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Product Inquiry | Request a Demo | EICE Technology", description: "Get in touch with EICE Technology to request a product demo or learn more about our enterprise software solutions." },
  alternates: { canonical: "https://www.eicetechnology.com/products/form" },
};

export default function Page() {
  return <Form />;
}