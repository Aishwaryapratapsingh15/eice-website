import EiceVoice from "../../../src/Product/EiceVoice";

export const metadata = {
  title: "EICE Voice | Voice-Powered Order Management System | EICE Technology",
  description: "Transform order processing with EICE Voice, a voice-powered management system enabling hands-free order entry and real-time updates.",
  openGraph: {
    title: "EICE Voice | Voice-Powered Order Management System | EICE Technology",
    description: "Transform order processing with EICE Voice, a voice-powered management system enabling hands-free order entry and real-time updates.",
    url: "https://www.eicetechnology.com/products/eice-voice",
    siteName: "EICE Technology",
    images: [{ url: "/assets/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "EICE Voice | Voice-Powered Order Management System | EICE Technology",
    images: ["/assets/Compressed/bannerai.png"], description: "Transform order processing with EICE Voice, a voice-powered management system enabling hands-free order entry and real-time updates." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-voice" },
};

export default function Page() {
  return <EiceVoice />;
}