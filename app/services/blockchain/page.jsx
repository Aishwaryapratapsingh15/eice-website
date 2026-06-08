import Blockchain from "../../../src/Servcomps/Blockchain";

export const metadata = {
  title: "Blockchain Development Services | Smart Contracts | EICE Technology",
  description: "Build secure, transparent blockchain solutions with EICE Technology. Smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain.",
  openGraph: {
    title: "Blockchain Development Services | Smart Contracts | EICE Technology",
    description: "Build secure, transparent blockchain solutions with EICE Technology. Smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain.",
    url: "https://www.eicetechnology.com/services/blockchain",
    siteName: "EICE Technology",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Blockchain Development Services | Smart Contracts | EICE Technology", description: "Build secure, transparent blockchain solutions with EICE Technology. Smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain." },
  alternates: { canonical: "https://www.eicetechnology.com/services/blockchain" },
};

export default function Page() {
  return <Blockchain />;
}