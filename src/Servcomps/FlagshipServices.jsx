"use client";
import React from "react";
import { useNavigate, Link } from "@/nextNavigation";
import ProductFooter from "@/Product/ProductFooter";

const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";

const CDN = "https://d3r43jacxrwsrp.cloudfront.net/flagship-services";
const heroImg          = `${CDN}/flagship_services_img.png`;
const badgeIcon        = `${CDN}/flagship_title.svg`;
const overviewIcon1    = `${CDN}/boxicons_layers-down-left.svg`;
const overviewIcon2    = `${CDN}/end_to_end_ownership.svg`;
const overviewIcon3    = `${CDN}/measurable_impact.svg`;
const digitalTransIcon = `${CDN}/digital_transformation.svg`;
const devopsIcon       = `${CDN}/devOps.svg`;
const genAiIcon        = `${CDN}/generative_AI.svg`;
const stepIcon1        = `${CDN}/business_audit.svg`;
const stepIcon2        = `${CDN}/transformation_roadmap.svg`;
const stepIcon3        = `${CDN}/agile_execution.svg`;
const stepIcon4        = `${CDN}/optimise_and_scale.svg`;
const whyIcon1         = `${CDN}/180_plus_projects_delivered.svg`;
const whyIcon2         = `${CDN}/cmmi_certified_processes.svg`;
const whyIcon3         = `${CDN}/cross_functional_teams.svg`;
const whyIcon4         = `${CDN}/operational_continuity.svg`;

const overviewCards = [
  {
    icon: overviewIcon1,
    title: "Proven at scale",
    desc: "Every flagship service has been battle-tested across enterprise clients in multiple industries and geographies",
  },
  {
    icon: overviewIcon2,
    title: "End-to-end ownership",
    desc: "We don't hand off halfway. From strategy through implementation to post-launch support, we own the outcome",
  },
  {
    icon: overviewIcon3,
    title: "Measurable impact",
    desc: "Every engagement is tied to business KPIs — not just delivery milestones but actual business outcomes",
  },
];

const services = [
  {
    icon: digitalTransIcon,
    title: "Digital Transformation",
    desc: "Revolutionize your business with cutting-edge digital transformation services. We help you leverage modern technologies to streamline operations, enhance customer experiences, and drive sustainable growth.",
    tags: ["Process automation", "Legacy modernisation", "Cloud migration", "Change management"],
    link: "/services/digital-transformation",
  },
  {
    icon: devopsIcon,
    title: "DevOps",
    desc: "Accelerate your software delivery with EICE's DevOps solutions. We integrate development and operations to improve collaboration, increase efficiency, and deliver high-quality software faster.",
    tags: ["CI/CD pipelines", "AWS / Azure / GCP", "Infrastructure as code", "Monitoring & alerting"],
    link: "/services/devops",
  },
  {
    icon: genAiIcon,
    title: "Generative AI",
    desc: "Harness the power of AI with EICE's generative AI solutions. We develop custom AI models that create content, generate ideas, and solve complex problems — giving your business a significant competitive advantage.",
    tags: ["Custom LLMs", "RAG pipelines", "AI agents", "Prompt engineering"],
    link: "/services/ai-ml",
  },
];

const steps = [
  {
    step: "01",
    icon: stepIcon1,
    title: "Business\naudit",
    desc: "Assess your current operations, tech stack, and pain points to identify where flagship services will deliver the highest impact",
  },
  {
    step: "02",
    icon: stepIcon2,
    title: "Transformation\nroadmap",
    desc: "A prioritised, phased plan with clear milestones, resource requirements, and expected ROI at each stage",
  },
  {
    step: "03",
    icon: stepIcon3,
    title: "Agile\nexecution",
    desc: "Iterative delivery with regular reviews, course corrections, and full transparency throughout",
  },
  {
    step: "04",
    icon: stepIcon4,
    title: "Optimise &\nscale",
    desc: "Post-delivery optimisation, performance tuning, and scaling support as your business grows",
  },
];

const techStack = [
  {
    category: "Digital Transformation:",
    techs: ["React", "Node.js", "Microservices", "REST APIs", "Cloud platforms", "Kubernetes"],
  },
  {
    category: "DevOps:",
    techs: ["GitHub Actions", "Jenkins", "Terraform", "Docker", "Prometheus", "Grafana"],
  },
  {
    category: "Generative AI:",
    techs: ["OpenAI GPT-4", "Claude API", "LangChain", "RAG", "Vector DBs", "Fine-tuning"],
  },
];

const whyEice = [
  {
    icon: whyIcon1,
    title: "180+ projects delivered",
    desc: "The flagship services are EICE's most proven offerings with the deepest track record",
  },
  {
    icon: whyIcon2,
    title: "CMMI certified processes",
    desc: "Every project follows internationally recognised engineering and delivery standards",
  },
  {
    icon: whyIcon3,
    title: "Cross-functional teams",
    desc: "Architects, engineers, DevOps specialists, and AI experts working as one unit",
  },
  {
    icon: whyIcon4,
    title: "Operational continuity",
    desc: "Zero-downtime deployments and business continuity planning built into every engagement",
  },
];

export default function FlagshipServices() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="pt-14 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
          {heroImg ? (
            <img src={heroImg} alt="Flagship Services" className="mx-auto w-full max-w-[480px] object-contain"  width="427" height="240" />
          ) : (
            <div className="w-full max-w-[480px] h-48 sm:h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
              Hero Image
            </div>
          )}

          <div className="font-general font-semibold flex w-fit items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide sm:mx-auto">
            {badgeIcon && <img src={badgeIcon} alt="" className="w-5 h-5 rounded-full object-contain" width="20" height="20" />}
            <span>Flagship Services</span>
          </div>

          <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] max-w-4xl">
            Core services that drive{" "}
            <span className="text-bloo">transformation at scale</span>
          </h1>

          <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] max-w-3xl">
            EICE&apos;s flagship offerings are built on 15+ years of delivery experience — proven technical services that give your business a competitive edge in the digital landscape
          </p>

          <button
            onClick={() => navigate("/demo-form?product=Flagship%20Services")}
            className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-[#1E40AF] transition text-[18px]"
          >
            Get in Touch
            <img src={arrowIcon} alt="arrow"  width="24" height="24" />
          </button>
        </div>
      </section>

      {/* OVERVIEW — WHAT WE DO */}
      <section className="pt-10 pb-10 bg-[#F4F9FF]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Overview — What We Do</p>
          <div className="grid md:grid-cols-2 gap-4 items-start pt-8">

            {/* Left */}
            <div className="flex flex-col gap-4">
              <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2]">
                Operational excellence, delivered across 180+ projects
              </h2>
              <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                These aren&apos;t experimental offerings. Digital Transformation, DevOps, and Generative AI are the services EICE has refined across 60+ clients in 10+ countries — with measurable outcomes every time
              </p>
            </div>

            {/* Right: feature cards */}
            <div className="flex flex-col gap-4">
              {overviewCards.map((card, i) => (
                <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
                  {card.icon ? (
                    <img src={card.icon} alt="" className="w-11 h-11 object-contain flex-shrink-0"  width="44" height="44" />
                  ) : (
                    <div className="w-11 h-11 bg-blue-100 rounded-lg flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{card.title}</h3>
                    <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pt-10 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Our Flagship Services</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">Three services that define our delivery edge</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            {services.map((service, i) => (
              <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start">
                {service.icon ? (
                  <img src={service.icon} alt="" className="w-11 h-11 object-contain mb-[19px]"  width="44" height="44" />
                ) : (
                  <div className="w-11 h-11 bg-blue-100 rounded-lg mb-[19px]" />
                )}
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{service.title}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] flex-grow pb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2 pb-4">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="font-general font-semibold flex w-fit items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={service.link} className="inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] hover:text-blue-900 transition">
                  Explore More
                  <img src="https://d3r43jacxrwsrp.cloudfront.net/arrow.svg" alt="" aria-hidden="true" className="w-[16px] h-[16px] object-contain" width="16" height="16" style={{ filter: "brightness(0) saturate(100%) invert(54%) sepia(98%) saturate(1655%) hue-rotate(166deg) brightness(97%) contrast(101%)" }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK — PROCESS */}
      <section className="pt-10 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">How We Work</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">Our flagship delivery process</h2>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center">
              A structured, transparent approach that de-risks transformation and ensures every stage delivers measurable value
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-stretch">
                <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] w-full">
                  {/* Small icon top-left + large faded step number top-right */}
                  <div className="flex items-start justify-between pb-4">
                    {step.icon ? (
                      <div className="w-11 h-11 bg-[#012060] rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                        <img src={step.icon} alt="" className="w-full h-full object-contain"  width="44" height="44" />
                      </div>
                    ) : (
                      <div className="w-11 h-11 bg-[#012060] rounded-lg flex-shrink-0" />
                    )}
                    <span className="font-general font-semibold text-[32px] sm:text-[44px] leading-[1.1] text-gray-100 select-none">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px] whitespace-pre-line">
                    {step.title}
                  </h3>
                  <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-[#E2E8F0] rounded-full items-center justify-center shadow-sm text-bloo font-bold text-base">
                    ›
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="pt-10 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Technology</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">Our Flagship Tech Stack</h2>
            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center">
              A structured, transparent approach that de-risks transformation and ensures every stage delivers measurable value
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            {techStack.map((stack, i) => (
              <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)]">
                <div className="flex items-center gap-3 pb-4">
                  <div className="w-1 h-6 bg-bloo rounded-full flex-shrink-0" />
                  <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3]">{stack.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech, j) => (
                    <span key={j} className="font-general font-semibold flex w-fit items-center gap-2 bg-bloo/10 text-[#012060] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EICE */}
      <section className="pt-10 pb-10 bg-[#F4F9FF]">
        <div className="max-w-7xl mx-auto px-3 xl:px-4">
          <div className="flex flex-col gap-4">
            <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Why EICE</p>
            <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">What makes us different</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {whyEice.map((item, i) => (
              <div key={i} className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start">
                {item.icon ? (
                  <img src={item.icon} alt="" className="w-11 h-11 object-contain mb-[19px]"  width="44" height="44" />
                ) : (
                  <div className="w-11 h-11 bg-blue-100 rounded-lg mb-[19px]" />
                )}
                <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">{item.title}</h3>
                <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — GET STARTED */}
      <section className="pt-10 pb-10 bg-[#012060]">
        <div className="max-w-4xl mx-auto px-3 xl:px-4 flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
          <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Get Started</p>
          <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center !text-white">
            Ready to transform how your business operates?
          </h2>
          <p className="font-inter font-normal text-blue-200 text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl">
            Our flagship services have delivered measurable results for 60+ clients. Let&apos;s talk about what they can do for yours
          </p>
          <button
            onClick={() => navigate("/demo-form?product=Flagship%20Services")}
            className="bg-[#01B0F1] text-white px-10 py-3 rounded-md flex items-center gap-2 font-semibold text-[18px] hover:bg-white hover:text-[#012060] transition"
          >
            Get in Touch
            <img src={arrowIcon} alt="arrow"  width="24" height="24" />
          </button>
        </div>
      </section>

      <ProductFooter />
    </div>
  );
}
