import React from "react";

const P = (text) => ({ type: "p", text });
const UL = (items) => ({ type: "ul", items });
const ADDR = (lines) => ({ type: "addr", lines });

const SECTIONS = [
  {
    heading: "1. Who We Are",
    blocks: [
      ADDR([
        "India Office:",
        "6th Floor, Platina Heights, C-24, Sector 62, Noida, Uttar Pradesh 201301, India",
      ]),
      ADDR(["United States Office:", "11011 Richmond Ave, Suite 715, Houston, TX 77042, USA"]),
      ADDR(["Email: info@eicetechnology.com"]),
    ],
  },
  {
    heading: "2. Eligibility",
    blocks: [
      P(
        "By using the Website, you represent that you are at least 18 years old, or the age of majority in your jurisdiction, and have the legal capacity to enter into these Terms. If you are using the Website on behalf of a business or organization, you represent that you have authority to bind that entity to these Terms."
      ),
    ],
  },
  {
    heading: "3. Use of the Website",
    blocks: [
      P("You agree to use the Website only for lawful purposes and in accordance with these Terms. You agree not to:"),
      UL([
        "Use the Website in any way that violates applicable law or regulation",
        "Attempt to gain unauthorized access to our systems, servers, or networks",
        "Introduce viruses, malware, or other harmful code",
        "Scrape, crawl, or harvest data from the Website without our prior written consent",
        "Interfere with or disrupt the operation of the Website",
        "Impersonate any person or entity, or misrepresent your affiliation",
        "Use the Website to transmit unsolicited advertising or spam",
        "Reverse engineer, decompile, or attempt to extract source code from the Website",
      ]),
      P(
        "We reserve the right to restrict or terminate your access to the Website at our discretion, including for suspected violations of these Terms."
      ),
    ],
  },
  {
    heading: "4. Intellectual Property",
    blocks: [
      P(
        'All content on the Website — including text, graphics, logos, images, software, product names, and other materials ("Content") — is owned by or licensed to EICE Technology and is protected by applicable intellectual property laws.'
      ),
      P(
        "You may view and download Content for personal, non-commercial reference only. You may not reproduce, distribute, modify, publicly display, or create derivative works from any Content without our prior written permission."
      ),
      P(
        '"EICE Technology" and associated logos are trademarks of EICE Technology Pvt. Ltd. Nothing in these Terms grants you any right to use our trademarks without prior written consent.'
      ),
    ],
  },
  {
    heading: "5. Services and Enquiries",
    blocks: [
      P(
        "Descriptions of our services, solutions, capabilities, and case studies on the Website are provided for general informational purposes and do not constitute a binding offer."
      ),
      P(
        "Any engagement for services (including software development, AI/ML, digital transformation, cloud, DevOps, or IoT solutions) will be governed by a separate signed agreement, statement of work, or contract between EICE Technology and the client, which will take precedence over these Terms in the event of conflict regarding that engagement."
      ),
      P("Submitting an enquiry, requesting a demo, or contacting us through the Website does not create any contractual obligation on either party."),
    ],
  },
  {
    heading: "6. Third-Party Links",
    blocks: [
      P(
        "The Website may contain links to third-party websites or services that are not owned or controlled by EICE Technology. We are not responsible for the content, privacy practices, or terms of any third-party website. Accessing third-party links is at your own risk."
      ),
    ],
  },
  {
    heading: "7. Disclaimers",
    blocks: [
      P(
        'The Website and its Content are provided on an "as is" and "as available" basis, without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or accuracy.'
      ),
      P("We do not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components."),
      P("Any reliance you place on information from the Website is at your own risk."),
    ],
  },
  {
    heading: "8. Limitation of Liability",
    blocks: [
      P(
        "To the maximum extent permitted by applicable law, EICE Technology, its officers, employees, and affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill, arising from or related to your use of, or inability to use, the Website, even if advised of the possibility of such damages."
      ),
      P("Nothing in these Terms limits liability that cannot be excluded or limited under applicable law."),
    ],
  },
  {
    heading: "9. Indemnification",
    blocks: [
      P(
        "You agree to indemnify and hold harmless EICE Technology and its officers, employees, and affiliates from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the Website or violation of these Terms."
      ),
    ],
  },
  {
    heading: "10. Privacy",
    blocks: [
      {
        type: "custom",
        render: () => (
          <p className="font-medium text-blackk/70 text-base sm:text-lg leading-7 py-1">
            Your use of the Website is also governed by our{" "}
            <a href="/privacy-policy" className="text-bloo hover:underline">
              Privacy Policy
            </a>
            , which describes how we collect, use, and protect personal information. By using the Website, you also
            agree to the terms of our Privacy Policy.
          </p>
        ),
      },
    ],
  },
  {
    heading: "11. Changes to the Website and Terms",
    blocks: [
      P("We reserve the right to modify, suspend, or discontinue the Website, in whole or in part, at any time without notice."),
      P(
        'We may update these Terms periodically. Changes will be effective when posted on this page with an updated "Last Updated" date. Continued use of the Website after changes are posted constitutes acceptance of the revised Terms.'
      ),
    ],
  },
  {
    heading: "12. Governing Law and Jurisdiction",
    blocks: [
      P(
        "These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts located in Noida, Uttar Pradesh, India."
      ),
    ],
  },
  {
    heading: "13. Severability",
    blocks: [
      P("If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect."),
    ],
  },
  {
    heading: "14. Entire Agreement",
    blocks: [
      P(
        "These Terms, together with our Privacy Policy, constitute the entire agreement between you and EICE Technology regarding use of the Website, and supersede any prior agreements or understandings regarding the same subject matter."
      ),
    ],
  },
  {
    heading: "15. Contact Us",
    blocks: [
      P("If you have questions about these Terms, please contact us at:"),
      ADDR(["Email: info@eicetechnology.com"]),
      ADDR([
        "India Office:",
        "6th Floor, Platina Heights, C-24, Sector 62, Noida, Uttar Pradesh 201301, India",
      ]),
      ADDR(["United States Office:", "11011 Richmond Ave, Suite 715, Houston, TX 77042, USA"]),
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
  if (block.type === "custom") return block.render();
  if (block.type === "p") {
    return (
      <p className="font-medium text-blackk/70 text-base sm:text-lg leading-7 py-1">
        {renderText(block.text)}
      </p>
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

function TermsAndConditions() {
  return (
    <div className="font-manrope mx-auto px-5 sm:px-8 max-w-4xl w-full pt-32 pb-20">
      <div className="pb-6 border-b border-black/10">
        <h1 className="text-blackk fontweight_1 text-[32px] py-2">Terms and Conditions</h1>
        <p className="text-blackk/70 font-medium text-base py-1">Effective Date: September 2, 2026</p>
        <p className="text-blackk/70 font-medium text-base">Last Updated: September 2, 2026</p>
      </div>

      <div className="pt-8 space-y-2">
        <p className="font-medium text-blackk/70 text-base sm:text-lg leading-7 py-1">
          These Terms and Conditions ("Terms") govern your access to and use of{" "}
          <a href="http://www.eicetechnology.com" className="text-bloo hover:underline">
            www.eicetechnology.com
          </a>{" "}
          (the "Website") and any related services, content, or information provided by EICE Technology Pvt. Ltd.
          ("EICE Technology", "EICE", "we", "us", or "our").
        </p>
        <p className="font-medium text-blackk/70 text-base sm:text-lg leading-7 py-1">
          By accessing or using the Website, you agree to be bound by these Terms. If you do not agree, please do
          not use the Website.
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

      <p className="font-medium text-blackk/70 text-base sm:text-lg leading-7 text-center pt-8 border-t border-black/10 mt-10">
        See also our{" "}
        <a href="/privacy-policy" className="text-bloo hover:underline">
          Privacy Policy
        </a>
        .
      </p>

      <p className="text-center text-blackk/70 font-medium text-sm pt-6">
        © 2026 EICE Technology Pvt. Ltd. All Rights Reserved.
      </p>
    </div>
  );
}

export default TermsAndConditions;
