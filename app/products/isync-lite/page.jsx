import Isy from "../../../src/Product/Isy";

export const metadata = {
  title: "iSyncLite | Lightweight File Synchronization Software | EICE Technology",
  description: "iSyncLite delivers fast, secure file synchronization for teams. Sync files across devices and platforms with our lightweight enterprise solution.",
  openGraph: {
    title: "iSyncLite | Lightweight File Synchronization Software | EICE Technology",
    description: "iSyncLite delivers fast, secure file synchronization for teams. Sync files across devices and platforms with our lightweight enterprise solution.",
    url: "https://www.eicetechnology.com/products/isync-lite",
    siteName: "EICE Technology",
    images: [{ url: "/assets/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "iSyncLite | Lightweight File Synchronization Software | EICE Technology",
    images: ["/assets/Compressed/bannerai.png"], description: "iSyncLite delivers fast, secure file synchronization for teams. Sync files across devices and platforms with our lightweight enterprise solution." },
  alternates: { canonical: "https://www.eicetechnology.com/products/isync-lite" },
};

export default function Page() {
  return <Isy />;
}