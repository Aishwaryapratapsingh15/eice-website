import React from "react";

const P = (text) => ({ type: "p", text });
const UL = (items) => ({ type: "ul", items });
const H3 = (text) => ({ type: "h3", text });
const ADDR = (lines) => ({ type: "addr", lines });

const SECTIONS = [
  {
    heading: "1. Who We Are",
    blocks: [
      P(
        "EICE Technology Pvt. Ltd. is responsible for the processing of personal information described in this Privacy Policy, except where we act as a service provider, processor, or otherwise process information on behalf of our business customers."
      ),
      H3("India Office"),
      ADDR([
        "EICE Technology Pvt. Ltd.",
        "6th Floor, Platina Heights, C-24,",
        "Sector 62, Noida, Uttar Pradesh 201301, India",
      ]),
      H3("United States Office"),
      ADDR(["11011 Richmond Ave, Suite 715,", "Houston, TX 77042, USA"]),
      H3("Contact"),
      ADDR(["Email: info@eicetechnology.com"]),
    ],
  },
  {
    heading: "2. Information We Collect",
    blocks: [
      P("We may collect different categories of information depending on how you interact with us."),
      H3("2.1 Information You Provide Directly"),
      P(
        "When you contact us, request a consultation or demonstration, submit an enquiry, communicate with us, or otherwise interact with our Website, we may collect:"
      ),
      UL([
        "Full name",
        "Business/company name",
        "Job title or designation",
        "Email address",
        "Telephone/mobile number",
        "Country or location",
        "Business requirements",
        "Information contained in your message or enquiry",
        "Information you voluntarily provide through forms or communications",
      ]),
      P(
        "Our Website's contact form currently requests information such as your name, email address, phone number and message."
      ),
      H3("2.2 Information Collected Automatically"),
      P("When you access our Website, certain information may be collected automatically, including:"),
      UL([
        "IP address",
        "Browser type and version",
        "Operating system",
        "Device type",
        "Approximate geographic location",
        "Referring website or source",
        "Pages visited",
        "Time spent on pages",
        "Date and time of access",
        "Website interaction information",
        "Cookies and similar technologies",
        "Diagnostic, security and technical information",
      ]),
      P(
        "This information may be used for website operation, analytics, security, troubleshooting and improving our services."
      ),
      H3("2.3 Information from Business Customers"),
      P(
        "If you are an employee, representative, contractor, customer or user of one of our business customers, we may receive personal information from that customer in connection with providing our services."
      ),
      P(
        "In such circumstances, the relevant customer may be the data controller/business responsible for your information, while EICE Technology may act as a processor/service provider."
      ),
    ],
  },
  {
    heading: "3. How We Use Personal Information",
    blocks: [
      P("We may use personal information for legitimate business purposes, including to:"),
      UL([
        "Respond to enquiries and requests",
        "Provide information about our services and products",
        "Schedule demonstrations or consultations",
        "Communicate with prospective and existing customers",
        "Prepare proposals and commercial agreements",
        "Provide, maintain and improve our Website",
        "Deliver and support our products and services",
        "Authenticate users and manage accounts",
        "Monitor system performance and security",
        "Detect, investigate and prevent fraud, abuse and security incidents",
        "Conduct analytics and understand Website usage",
        "Improve user experience",
        "Develop and improve our technology, products and services",
        "Send service-related communications",
        "Send marketing communications where legally permitted",
        "Maintain business and customer records",
        "Comply with applicable laws and regulatory obligations",
        "Establish, exercise or defend legal claims",
        "Protect our rights, property and users",
      ]),
      P(
        "We will not use personal information for purposes that are materially incompatible with the purposes described in this Privacy Policy unless permitted or required by applicable law."
      ),
    ],
  },
  {
    heading: "4. Legal Bases for Processing",
    blocks: [
      P("Where applicable law requires a legal basis for processing personal information, we may rely on one or more of the following:"),
      UL([
        "Your consent",
        "Performance of a contract or steps taken before entering into a contract",
        "Compliance with legal obligations",
        "Our legitimate business interests",
        "Protection of vital interests",
        "Other legal grounds permitted by applicable law",
      ]),
      P(
        "Where processing is based on consent, you may withdraw your consent at any time, subject to applicable legal requirements and limitations."
      ),
    ],
  },
  {
    heading: "5. Cookies and Similar Technologies",
    blocks: [
      P("Our Website may use cookies, pixels, tags, web beacons and similar technologies."),
      P("Cookies may be used to:"),
      UL([
        "Enable essential Website functionality",
        "Remember preferences",
        "Understand Website traffic and usage",
        "Improve Website performance",
        "Measure marketing effectiveness",
        "Provide relevant communications or advertising where applicable",
        "Detect security issues and fraudulent activity",
      ]),
      P("You may be able to control or disable cookies through your browser settings."),
      P(
        "Where legally required, we will request consent before placing non-essential cookies or similar technologies on your device."
      ),
      P("Disabling certain cookies may affect Website functionality."),
    ],
  },
  {
    heading: "6. Analytics",
    blocks: [
      P("We may use analytics and similar technologies to understand how visitors use our Website."),
      P(
        "Analytics information may include pages visited, traffic sources, device information, approximate location and interaction information."
      ),
      P(
        "Where third-party analytics providers are used, those providers may process information according to their own privacy policies and contractual arrangements with us."
      ),
    ],
  },
  {
    heading: "7. Marketing Communications",
    blocks: [
      P("Where permitted by applicable law, we may use your contact information to send:"),
      UL([
        "Company news",
        "Product announcements",
        "Service information",
        "Events and webinars",
        "Industry insights",
        "Whitepapers and resources",
        "Promotional communications",
      ]),
      P(
        "You may opt out of marketing communications at any time by using the unsubscribe mechanism included in the communication or by contacting us at info@eicetechnology.com."
      ),
      P("We will continue to send important transactional or service-related communications where necessary."),
    ],
  },
  {
    heading: "8. How We Share Personal Information",
    blocks: [
      P("We do not sell or rent your personal information for money."),
      P("We may share personal information with:"),
      H3("Service Providers"),
      P("Third-party providers that help us operate our business, including providers of:"),
      UL([
        "Hosting and cloud infrastructure",
        "Website services",
        "Analytics",
        "Customer relationship management",
        "Email and communications",
        "Security",
        "IT support",
        "Professional services",
      ]),
      P(
        "These providers are expected to process personal information only as necessary to provide services to us and in accordance with applicable contractual and legal requirements."
      ),
      H3("Business Partners"),
      P(
        "We may share information with business partners where necessary to provide requested services, process an enquiry, deliver a joint solution, or otherwise support a business relationship."
      ),
      H3("Legal and Regulatory Authorities"),
      P("We may disclose information when required by law, regulation, court order, legal process, or governmental request."),
      H3("Corporate Transactions"),
      P(
        "If EICE Technology is involved in a merger, acquisition, restructuring, financing, sale of assets, or similar transaction, personal information may be transferred as part of that transaction, subject to applicable law."
      ),
      H3("Protection of Rights"),
      P(
        "We may disclose information when reasonably necessary to protect our rights, property, systems, users, customers or the safety of individuals."
      ),
    ],
  },
  {
    heading: "9. International Data Transfers",
    blocks: [
      P(
        "EICE Technology operates internationally, including from India and the United States, and may provide services to customers located in different countries."
      ),
      P("As a result, personal information may be processed or stored in countries other than the country where you reside."),
      P("Where applicable law requires safeguards for international transfers, we will implement appropriate safeguards, which may include:"),
      UL([
        "Standard contractual clauses",
        "Data processing agreements",
        "Adequacy mechanisms",
        "Contractual protections",
        "Other legally recognized transfer mechanisms",
      ]),
    ],
  },
  {
    heading: "10. Data Security",
    blocks: [
      P("We use reasonable technical, organizational and administrative measures designed to protect personal information against:"),
      UL(["Unauthorized access", "Accidental loss", "Destruction", "Alteration", "Unauthorized disclosure", "Misuse"]),
      P(
        "Depending on the nature of the information and services involved, security measures may include access controls, authentication, encryption, monitoring, logging, secure infrastructure and other security controls."
      ),
      P("However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security."),
    ],
  },
  {
    heading: "11. Data Retention",
    blocks: [
      P("We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including to:"),
      UL([
        "Provide requested services",
        "Maintain business records",
        "Meet contractual obligations",
        "Comply with legal and regulatory requirements",
        "Resolve disputes",
        "Enforce agreements",
        "Prevent fraud and security incidents",
      ]),
      P("Retention periods may vary depending on the type of information and the purpose for which it was collected."),
      P(
        "When information is no longer required, we may securely delete, anonymize or otherwise dispose of it in accordance with applicable law."
      ),
    ],
  },
  {
    heading: "12. Your Privacy Rights",
    blocks: [
      P("Depending on your location and applicable law, you may have rights relating to your personal information."),
      P("These may include the right to:"),
      UL([
        "Know whether we process your personal information",
        "Request access to personal information",
        "Request correction of inaccurate information",
        "Request deletion of personal information",
        "Request restriction of processing",
        "Object to certain processing",
        "Withdraw consent",
        "Request data portability",
        "Opt out of certain marketing activities",
        "Lodge a complaint with a relevant data protection authority",
      ]),
      P("These rights are subject to applicable legal conditions and exceptions."),
      P("To exercise your rights, contact us using the details provided in Section 19."),
      P("We may need to verify your identity before completing certain requests."),
    ],
  },
  {
    heading: "13. Rights of Individuals in the European Economic Area and United Kingdom",
    blocks: [
      P(
        "If you are located in the European Economic Area or United Kingdom, you may have additional rights under applicable data protection legislation, including the GDPR or UK GDPR."
      ),
      P("Depending on the circumstances, you may have the right to:"),
      UL([
        "Access your personal data",
        "Correct inaccurate personal data",
        "Request erasure",
        "Restrict processing",
        "Object to processing",
        "Receive your data in a portable format",
        "Withdraw consent",
        "Object to certain direct marketing",
        "Lodge a complaint with your local supervisory authority",
      ]),
      P("Where applicable, you may contact your relevant data protection authority if you believe your rights have been violated."),
    ],
  },
  {
    heading: "14. Rights of California Residents",
    blocks: [
      P(
        "If applicable to our processing and to the extent required by California law, California residents may have rights regarding their personal information, including rights to:"
      ),
      UL([
        "Know or access personal information collected about them",
        "Request deletion of personal information",
        "Request correction of inaccurate personal information",
        "Opt out of certain sales or sharing of personal information",
        "Limit certain uses of sensitive personal information where applicable",
        "Non-discrimination for exercising applicable privacy rights",
      ]),
      P("EICE Technology does not sell personal information for monetary consideration."),
      P("California residents may submit privacy requests using the contact information in Section 19."),
    ],
  },
  {
    heading: "15. India Privacy Rights",
    blocks: [
      P(
        "For individuals located in India, EICE Technology intends to process personal information in accordance with applicable Indian privacy and data protection laws, including the Digital Personal Data Protection Act, 2023 and applicable rules, regulations and amendments when and to the extent they become applicable."
      ),
      P(
        "Depending on applicable law and the nature of the processing, individuals may have rights relating to access, correction, erasure, consent withdrawal and grievance redressal."
      ),
      P("Requests may be submitted using the contact information provided below."),
    ],
  },
  {
    heading: "16. Children's Privacy",
    blocks: [
      P("Our Website and services are primarily intended for businesses and adults."),
      P("We do not knowingly collect personal information from children where prohibited by applicable law."),
      P(
        "If you believe that a child has provided personal information to us without appropriate authorization, please contact us at info@eicetechnology.com."
      ),
      P("If we become aware that we have collected such information contrary to applicable law, we will take reasonable steps to delete it."),
    ],
  },
  {
    heading: "17. Third-Party Websites and Services",
    blocks: [
      P("Our Website may contain links to third-party websites, platforms, applications or services."),
      P("These third parties operate independently and may have their own privacy policies."),
      P("EICE Technology is not responsible for the privacy, security or content practices of third-party websites or services."),
      P("We encourage you to review the privacy policy of any third-party website before providing personal information."),
    ],
  },
  {
    heading: "18. Business and Enterprise Services",
    blocks: [
      P(
        "EICE Technology provides enterprise software and technology solutions, including solutions involving cloud infrastructure, AI/ML, data, authentication, file management, monitoring and other business technologies."
      ),
      P(
        "Where EICE Technology processes personal information on behalf of an enterprise customer, the customer may determine the purposes and means of processing. In those circumstances, the customer's privacy policy, contractual terms and applicable data processing agreement may govern the processing."
      ),
      P("For enterprise customers, EICE Technology may process information under contractual instructions and applicable data protection requirements."),
    ],
  },
  {
    heading: "19. Contact Us",
    blocks: [
      P(
        "If you have questions about this Privacy Policy, wish to exercise an applicable privacy right, or have a privacy-related complaint, please contact us."
      ),
      ADDR([
        "EICE Technology Pvt. Ltd.",
        "Email: info@eicetechnology.com",
        "India Office:",
        "6th Floor, Platina Heights, C-24,",
        "Sector 62, Noida, Uttar Pradesh 201301, India",
        "United States Office:",
        "11011 Richmond Ave, Suite 715,",
        "Houston, TX 77042, USA",
      ]),
      P(
        "For privacy requests, please include sufficient information to help us understand your request. We may request additional information to verify your identity where required."
      ),
    ],
  },
  {
    heading: "20. Changes to This Privacy Policy",
    blocks: [
      P("We may update this Privacy Policy periodically to reflect changes in our business, technology, services, legal requirements or privacy practices."),
      P('When we make changes, we will update the "Last Updated" date at the beginning of this Privacy Policy.'),
      P("Where required by applicable law, we will provide additional notice or obtain consent before implementing material changes."),
      P("We encourage you to periodically review this Privacy Policy."),
    ],
  },
  {
    heading: "21. Governing Law",
    blocks: [
      P("This Privacy Policy will be interpreted in accordance with applicable privacy and data protection laws."),
      P(
        "Nothing in this Privacy Policy limits any mandatory rights or protections that you may have under the laws applicable to your jurisdiction."
      ),
    ],
  },
];

const EMAIL = "info@eicetechnology.com";

function renderText(text) {
  const parts = text.split(EMAIL);
  if (parts.length === 1) return text;
  const nodes = [];
  parts.forEach((part, i) => {
    nodes.push(part);
    if (i < parts.length - 1) {
      nodes.push(
        <a key={i} href={`mailto:${EMAIL}`} className="text-bloo hover:underline">
          {EMAIL}
        </a>
      );
    }
  });
  return nodes;
}

function Block({ block }) {
  if (block.type === "p") {
    return (
      <p className="font-medium text-blackk/70 text-base sm:text-lg leading-7 py-1">
        {renderText(block.text)}
      </p>
    );
  }
  if (block.type === "h3") {
    return (
      <h3 className="text-blackk fontweight_1 text-lg sm:text-xl pt-4 pb-1">
        {block.text}
      </h3>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="list-disc pl-5 space-y-2 py-1">
        {block.items.map((item) => (
          <li key={item} className="font-medium text-blackk/70 text-base sm:text-lg leading-7">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "addr") {
    return (
      <div className="font-medium text-blackk/70 text-base sm:text-lg leading-7 py-1">
        {block.lines.map((line, i) => (
          <p key={i}>{renderText(line)}</p>
        ))}
      </div>
    );
  }
  return null;
}

function PrivacyPolicy() {
  return (
    <div className="font-manrope mx-auto px-5 sm:px-8 max-w-4xl w-full pt-32 pb-20">
      <div className="pb-6 border-b border-black/10">
        <h1 className="text-blackk fontweight_1 text-[32px] py-2">Privacy Policy</h1>
        <p className="text-blackk/70 font-medium text-base py-1">Effective Date: September 2, 2026</p>
        <p className="text-blackk/70 font-medium text-base">Last Updated: September 2, 2026</p>
      </div>

      <div className="pt-8 space-y-2">
        <p className="font-medium text-blackk/70 text-base sm:text-lg leading-7 py-1">
          EICE Technology Pvt. Ltd. ("EICE Technology", "EICE", "we", "us", or "our") respects your privacy and is
          committed to protecting the personal information that you provide to us or that we collect when you visit
          or interact with our website,{" "}
          <a href="http://www.eicetechnology.com" className="text-bloo hover:underline">
            www.eicetechnology.com
          </a>{" "}
          (the "Website"), our digital platforms, products, services, and related communications.
        </p>
        <p className="font-medium text-blackk/70 text-base sm:text-lg leading-7 py-1">
          EICE Technology is a global software and technology services organization providing software development,
          artificial intelligence and machine learning, digital transformation, cloud, DevOps, IoT and other
          technology solutions to businesses globally.
        </p>
        <p className="font-medium text-blackk/70 text-base sm:text-lg leading-7 py-1">
          This Privacy Policy explains how we collect, use, disclose, store, protect, and otherwise process personal
          information.
        </p>
        <p className="font-medium text-blackk/70 text-base sm:text-lg leading-7 py-1">
          By accessing or using our Website, you acknowledge that you have read and understood this Privacy Policy.
        </p>
      </div>

      <div className="pt-10 space-y-10">
        {SECTIONS.map((section) => (
          <section key={section.heading} className="border-t border-black/10 pt-8">
            <h2 className="text-blackk fontweight_1 text-xl sm:text-2xl py-2">{section.heading}</h2>
            {section.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </section>
        ))}
      </div>

      <p className="text-center text-blackk/70 font-medium text-sm pt-12 border-t border-black/10 mt-10">
        © 2026 EICE Technology Pvt. Ltd. All Rights Reserved.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
