import EiceOps from "../../../src/Product/EiceOps";

export const metadata = {
  title: "EICEOps | IT Help Desk & Operations Management | EICE Technology",
  description: "EICEOps is a powerful help desk and IT operations management platform that streamlines support tickets, asset management, and team workflows.",
  openGraph: {
    title: "EICEOps | IT Help Desk & Operations Management | EICE Technology",
    description: "EICEOps is a powerful help desk and IT operations management platform that streamlines support tickets, asset management, and team workflows.",
    url: "https://www.eicetechnology.com/products/eice-ops",
    siteName: "EICE Technology",
    images: [{ url: "/assets/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "EICEOps | IT Help Desk & Operations Management | EICE Technology",
    images: ["/assets/Compressed/bannerai.png"], description: "EICEOps is a powerful help desk and IT operations management platform that streamlines support tickets, asset management, and team workflows." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-ops" },
};

export default function Page() {
  return <EiceOps />;
}