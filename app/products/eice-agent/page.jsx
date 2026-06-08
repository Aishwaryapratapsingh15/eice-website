import EiceAgent from "../../../src/Product/EiceAgent";

export const metadata = {
  title: "EICE AI Agent | AI-Powered Business Automation Suite | EICE Technology",
  description: "Automate business processes with EICE AI Agent. An intelligent automation suite leveraging cutting-edge AI to enhance productivity and reduce costs.",
  openGraph: {
    title: "EICE AI Agent | AI-Powered Business Automation Suite | EICE Technology",
    description: "Automate business processes with EICE AI Agent. An intelligent automation suite leveraging cutting-edge AI to enhance productivity and reduce costs.",
    url: "https://www.eicetechnology.com/products/eice-agent",
    siteName: "EICE Technology",
    images: [{ url: "/assets/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "EICE AI Agent | AI-Powered Business Automation Suite | EICE Technology",
    images: ["/assets/Compressed/bannerai.png"], description: "Automate business processes with EICE AI Agent. An intelligent automation suite leveraging cutting-edge AI to enhance productivity and reduce costs." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-agent" },
};

export default function Page() {
  return <EiceAgent />;
}