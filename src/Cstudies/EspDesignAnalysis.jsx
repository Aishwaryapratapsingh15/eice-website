import React from "react";
import ProductFooter from "@/Product/ProductFooter";
import Copyright from "../Othercomps/Copyright";
const espHero = "https://d3r43jacxrwsrp.cloudfront.net/Petroleum/ESPDesignAnalysis.jpeg";

const challengeBullets = [
  "Transform proprietary engineering knowledge into a scalable software platform.",
  "Standardize ESP design methodologies across geographically distributed engineering teams.",
  "Support advanced engineering analysis for customer installations.",
  "Lay the foundation for continuous 24×7 monitoring and diagnostics to extend pump run life—one of the industry's most critical performance metrics.",
  "Strengthen the company's position as a technology leader while supporting expansion into higher-margin international markets.",
];

const roleBullets = [
  "Assess existing ESP technologies both within the organization and across the broader market.",
  "Review in-house engineering tools, commercial software solutions, and proprietary competitor offerings.",
  "Identify strengths, technology gaps, and opportunities for innovation.",
  "Design a scalable architecture for next-generation ESP design, engineering analysis, and monitoring software.",
];

const approachSteps = [
  { title: "Engineering Review", description: "A comprehensive review of existing engineering spreadsheets, legacy workflows, and internal engineering methodologies." },
  { title: "Technology Assessment", description: "Benchmarking commercial engineering software solutions, proprietary competitor offerings, and current market capabilities." },
  { title: "Stakeholder Collaboration", description: "Conducting extensive discussions with field engineers and customers to understand operational challenges, customer expectations, and future business requirements." },
  { title: "Platform Architecture", description: "Using these insights, EICE designed a scalable ESP Engineering Software Platform that forms the foundation for the next generation of engineering tools." },
];

const deliveredBullets = [
  "Centralized ESP engineering workspace",
  "Advanced engineering analysis software",
  "Cloud-based architecture for flexibility and scalability",
  "Standardized engineering workflows across global teams",
  "Extensible framework supporting future real-time monitoring and diagnostics",
  "Long-term architecture for continuous asset surveillance",
];

const benefitBullets = [
  "Standardized engineering workflows across global operations.",
  "Improved consistency in ESP design and engineering analysis.",
  "Strong foundation for continuous 24×7 monitoring and diagnostics.",
  "Better scalability to support international business expansion.",
  "Enhanced market perception as a technology leader in the artificial lift industry.",
  "Future-ready cloud engineering platform designed for continuous innovation.",
];

const projectHighlights = [
  "Oil & Gas Software Development",
  "ESP Design & Analysis Software",
  "Electrical Submersible Pump (ESP)",
  "Engineering Software Development",
  "Petroleum Engineering Software",
  "Cloud Engineering Platform",
  "Microsoft Azure Cloud",
  "Multiphase Flow Analysis",
  "Digital Oilfield Solutions",
  "Enterprise Software Development",
];

const Bullets = ({ items }) => (
  <ul className="max-w-3xl mx-auto flex flex-col gap-3 pt-2">
    {items.map((item) => (
      <li key={item} className="flex gap-3 items-start">
        <span className="mt-2 h-2 w-2 rounded-full bg-bloo shrink-0" />
        <span className="fontweight_1 text-blackk/70 fontsize_3">{item}</span>
      </li>
    ))}
  </ul>
);

function EspDesignAnalysis() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div className="w-full">
          <h1 className="text-bloo fontweight_1 text-left sm:text-center fontsize_2 py-2">
            How EICE Technology -An Indian IT company, Helped a Global ESP Manufacturer Modernize<br className="hidden sm:block" /> Engineering with Cloud-Based Software
          </h1>
          <h2 className="text-blackk fontweight_1 text-left sm:text-center text-lg sm:text-xl md:text-xl lg:text-2xl mx-auto max-w-3xl py-1">
            Transforming Electrical Submersible Pump Engineering with<br className="hidden sm:block" /> Cloud-Based Innovation
          </h2>
          <div className="w-full max-w-5xl mx-auto items-center justify-center pt-8 pb-4">
            <img
              src={espHero}
              alt="ESP Design and Analysis Software Platform"
              className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-lg"
              width="1431"
              height="806"
            />
          </div>
        </div>

        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12 text-left sm:text-center">
            Overview
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-2">
            <p className="fontweight_1 text-blackk/70 fontsize_3">In today's highly competitive oil and gas industry, engineering teams need intelligent software to design equipment faster, improve operational efficiency, and maximize asset performance over the long term.</p>
            <p className="fontweight_1 text-blackk/70 fontsize_3">That's why a leading global manufacturer of Electrical Submersible Pumps (ESP) partnered with EICE Technology, an Indian IT company specializing in Engineering Software Development, Oil & Gas Software Development, and Petroleum Engineering solutions. Together, we designed the foundation for a next-generation ESP Design & Analysis Software platform that modernizes engineering workflows, supports advanced analysis, and paves the way for continuous 24×7 monitoring and diagnostics.</p>
            <p className="fontweight_1 text-blackk/70 fontsize_3">By combining deep petroleum engineering expertise with enterprise software development and cloud technologies, EICE designed a scalable engineering platform capable of supporting customers worldwide while enabling future digital transformation initiatives.</p>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] text-left sm:text-center">
            Who Is Our Client?
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-4">
            <p className="fontweight_1 text-blackk/70 fontsize_3">Our client is one of the world's largest manufacturers of Electrical Submersible Pumps (ESP), with a dominant presence in Russia and China.</p>
            <p className="fontweight_1 text-blackk/70 fontsize_3">Following a series of acquisitions and business consolidations, the organization set out to strengthen its position in higher-margin international markets, including North America, Latin America, and the Middle East.</p>
            <p className="fontweight_1 text-blackk/70 fontsize_3">To support this strategic expansion, the client required a modern engineering software platform capable of transforming decades of engineering expertise into intelligent software for ESP design, engineering analysis, and continuous equipment monitoring.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12 text-left sm:text-center">
            The Challenge
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-2">
            <p className="fontweight_1 text-blackk/70 fontsize_3">Although the client possessed extensive petroleum engineering expertise, much of its engineering knowledge was spread across disconnected tools, legacy spreadsheets, and traditional engineering workflows.</p>
            <p className="fontweight_1 text-blackk/70 fontsize_3">The organization needed an experienced Oil & Gas Software Development partner capable of delivering a scalable engineering platform that would:</p>
          </div>
          <Bullets items={challengeBullets} />
          <p className="fontweight_1 text-blackk/70 fontsize_3 max-w-3xl mx-auto pt-4">The objective was not simply to build another engineering application, but to create a future-ready platform capable of evolving alongside the client's long-term digital transformation strategy.</p>
        </div>

        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12 text-left sm:text-center">
            EICE's Role
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-2">
            <p className="fontweight_1 text-blackk/70 fontsize_3">As an Indian IT company with deep expertise in Engineering Software Development and Petroleum Engineering, EICE worked closely with the client's experienced ESP engineering team throughout the planning and architecture phase.</p>
            <p className="fontweight_1 text-blackk/70 fontsize_3">Our petroleum engineering advisors and software architects collaborated to:</p>
          </div>
          <Bullets items={roleBullets} />
          <p className="fontweight_1 text-blackk/70 fontsize_3 max-w-3xl mx-auto pt-4">This collaborative approach ensured that domain expertise, engineering best practices, and enterprise software architecture all contributed to the proposed solution.</p>
        </div>
      </div>

      <div className="bg-zinc-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] text-left sm:text-center">
            Our Approach
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-4">
            <p className="fontweight_1 text-blackk/70 fontsize_3">Rather than moving directly into development, our Engineering Software Development team first focused on understanding the client's engineering domain, operational workflows, and long-term business objectives.</p>
            <p className="fontweight_1 text-blackk/70 fontsize_3">Our approach included:</p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4 pt-4">
            {approachSteps.map((step) => (
              <div key={step.title} className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-blackk fontweight_1 fontsize_3 pb-2">{step.title}</h3>
                <p className="fontweight_1 text-blackk/70 fontsize_3">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="fontweight_1 text-blackk/70 fontsize_3 max-w-3xl mx-auto pt-4">A key architectural objective was long-term extensibility, enabling today's engineering algorithms to evolve into future real-time surveillance and diagnostics applications without redesigning the platform.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12 text-left sm:text-center">
            What We Delivered
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-2">
            <p className="fontweight_1 text-blackk/70 fontsize_3">The proposed solution provides a centralized cloud-based engineering software platform that streamlines ESP design and engineering analysis while preparing the organization for future Digital Oilfield initiatives.</p>
            <p className="fontweight_1 text-blackk/70 fontsize_3">Key capabilities include:</p>
          </div>
          <Bullets items={deliveredBullets} />
          <p className="fontweight_1 text-blackk/70 fontsize_3 max-w-3xl mx-auto pt-4">By combining petroleum engineering expertise with modern enterprise software development, the platform supports both current engineering requirements and future innovation.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-4 text-left sm:text-center">
          Technology Stack
        </h2>
        <div className="max-w-3xl mx-auto overflow-x-auto pt-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-blue-900/60">
                <th className="fontweight_1 text-blackk fontsize_3 py-3 pr-4">Category</th>
                <th className="fontweight_1 text-blackk fontsize_3 py-3">Technology</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="fontweight_1 text-blackk/70 fontsize_3 py-3 pr-4">Cloud Platform</td>
                <td className="fontweight_1 text-blackk/70 fontsize_3 py-3">Microsoft Azure</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="fontweight_1 text-blackk/70 fontsize_3 py-3 pr-4">Engineering Engine</td>
                <td className="fontweight_1 text-blackk/70 fontsize_3 py-3">EICE Proprietary XWORK Engine for Multiphase Flow Analysis</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="fontweight_1 text-blackk/70 fontsize_3 py-3 pr-4">Frontend</td>
                <td className="fontweight_1 text-blackk/70 fontsize_3 py-3">HTML5</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="fontweight_1 text-blackk/70 fontsize_3 py-3 pr-4">Frameworks</td>
                <td className="fontweight_1 text-blackk/70 fontsize_3 py-3">jQuery</td>
              </tr>
              <tr>
                <td className="fontweight_1 text-blackk/70 fontsize_3 py-3 pr-4">Services</td>
                <td className="fontweight_1 text-blackk/70 fontsize_3 py-3">WCF RESTful APIs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-zinc-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] text-left sm:text-center">
            Business Benefits
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-4">
            <p className="fontweight_1 text-blackk/70 fontsize_3">This engagement enables the transition from fragmented, geographically distributed engineering practices to a centralized Engineering Software Platform built on modern technologies and standardized methodologies.</p>
            <p className="fontweight_1 text-blackk/70 fontsize_3">Expected business benefits include:</p>
          </div>
          <Bullets items={benefitBullets} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12 text-left sm:text-center">
            Why Choose EICE Technology?
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-2">
            <p className="fontweight_1 text-blackk/70 fontsize_3">As an Indian IT company specializing in Engineering Software Development and Oil & Gas Software Development, EICE combines deep petroleum engineering knowledge with enterprise software expertise to solve complex industrial challenges.</p>
            <p className="fontweight_1 text-blackk/70 fontsize_3">By working alongside client engineering teams, we design scalable engineering software solutions that not only address today's operational requirements but also establish a long-term foundation for digital transformation across the energy sector.</p>
          </div>
        </div>

        <div className="w-full pb-20">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12 text-left sm:text-center">
            Project Highlights
          </h2>
          <div className="max-w-3xl mx-auto flex flex-wrap gap-3 pt-4">
            {projectHighlights.map((tag) => (
              <span key={tag} className="fontweight_1 text-blackk/70 fontsize_3 bg-zinc-100 rounded-full px-4 py-2">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-blackk max-w-3xl pb-2 fontweight_1 text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] text-left sm:text-center">
            Let's Build the Future of Industrial Engineering
          </h2>
          <p className="fontweight_1 text-blackk/70 fontsize_3 max-w-3xl mx-auto text-left sm:text-center pt-4">Whether you're modernizing legacy engineering software, developing intelligent industrial platforms, or accelerating Oil & Gas digital transformation initiatives, EICE Technology delivers scalable enterprise software solutions backed by deep petroleum engineering expertise and a commitment to innovation.</p>
        </div>
      </div>

      <ProductFooter />
      <Copyright />
    </div>
  );
}

export default EspDesignAnalysis;
