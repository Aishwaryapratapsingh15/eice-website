import Verilock from "../../../src/Product/verilock";

export const metadata = {
  title: "Verilock | Multi-Factor Authentication & Access Control | EICE Technology",
  description: "Protect your enterprise with Verilock's advanced multi-factor authentication and access control system. Secure, compliant access across all systems.",
  openGraph: {
    title: "Verilock | Multi-Factor Authentication & Access Control | EICE Technology",
    description: "Protect your enterprise with Verilock's advanced multi-factor authentication and access control system. Secure, compliant access across all systems.",
    url: "https://www.eicetechnology.com/products/verilock",
    siteName: "EICE Technology",
    images: [{ url: "/assets/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Verilock | Multi-Factor Authentication & Access Control | EICE Technology",
    images: ["/assets/Compressed/bannerai.png"], description: "Protect your enterprise with Verilock's advanced multi-factor authentication and access control system. Secure, compliant access across all systems." },
  alternates: { canonical: "https://www.eicetechnology.com/products/verilock" },
};

export default function Page() {
  return <Verilock />;
}