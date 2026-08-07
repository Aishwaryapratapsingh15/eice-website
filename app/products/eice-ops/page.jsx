import EiceOps from "../../../src/Product/EiceOps";

export const metadata = {
  title: "EICEOps | IT Help Desk & Operations Management | EICE Technology",
  description: "EICEOps is a powerful help desk and IT operations management platform that streamlines support tickets, asset management, and team workflows.",
  keywords: ["help desk software", "IT service management", "ITSM", "support ticket system", "asset management", "EICEOps", "EICE Technology", "IT help desk software India", "ITSM software India", "IT service management India"],
  openGraph: {
    title: "EICEOps | IT Help Desk & Operations Management | EICE Technology",
    description: "EICEOps is a powerful help desk and IT operations management platform that streamlines support tickets, asset management, and team workflows.",
    url: "https://www.eicetechnology.com/products/eice-ops",
    siteName: "EICE Technology",
    images: [{ url: "https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png", width: 1200, height: 630, alt: "EICE Technology" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "EICEOps | IT Help Desk & Operations Management | EICE Technology",
    images: ["https://d3r43jacxrwsrp.cloudfront.net/Compressed/bannerai.png"], description: "EICEOps is a powerful help desk and IT operations management platform that streamlines support tickets, asset management, and team workflows." },
  alternates: { canonical: "https://www.eicetechnology.com/products/eice-ops", languages: { "en-IN": "https://www.eicetechnology.com/products/eice-ops", "en-US": "https://www.eicetechnology.com/products/eice-ops", "x-default": "https://www.eicetechnology.com/products/eice-ops" } },
};


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eicetechnology.com" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.eicetechnology.com/products" },
      { "@type": "ListItem", "position": 3, "name": "EICEOps" }
    ]
  },

  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EICEOps",
    "description": "Help desk and IT operations management platform for support tickets, asset management, and team workflows.",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "IT Service Management",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "publisher": { "@type": "Organization", "name": "EICE Technology", "url": "https://www.eicetechnology.com" },
    "url": "https://www.eicetechnology.com/products/eice-ops"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
    { "@type": "Question", "name": "What is EICEOps?", "acceptedAnswer": { "@type": "Answer", "text": "EICEOps is an IT help desk and operations management platform that streamlines support ticket handling, IT asset management, and team collaboration workflows." } },
    { "@type": "Question", "name": "What features does EICEOps include?", "acceptedAnswer": { "@type": "Answer", "text": "EICEOps includes ticket management, asset tracking, SLA monitoring, reporting dashboards, and team workflow automation." } }
    ]
  }
];
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EiceOps />
    </>
  );
}



