import IsyncDrive from "../../../src/Product/IsyncDrive";

export const metadata = {
  title: "iSyncDrive | Enterprise Cloud Sync & Storage Client | EICE Technology",
  description: "iSyncDrive provides enterprise-grade cloud file synchronization, enabling secure data access and collaboration across your organization.",
  openGraph: {
    title: "iSyncDrive | Enterprise Cloud Sync & Storage Client | EICE Technology",
    description: "iSyncDrive provides enterprise-grade cloud file synchronization, enabling secure data access and collaboration across your organization.",
    url: "https://www.eicetechnology.com/products/isync-drive",
    siteName: "EICE Technology",
    images: [{ url: "/assets/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "iSyncDrive | Enterprise Cloud Sync & Storage Client | EICE Technology",
    images: ["/assets/Compressed/bannerai.png"], description: "iSyncDrive provides enterprise-grade cloud file synchronization, enabling secure data access and collaboration across your organization." },
  alternates: { canonical: "https://www.eicetechnology.com/products/isync-drive" },
};

export default function Page() {
  return <IsyncDrive />;
}