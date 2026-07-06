"use client";
import React from "react";
import { useNavigate, Link } from "@/nextNavigation";
import ProductFooter from "@/Product/ProductFooter";
import Copyright from "@/Othercomps/Copyright";

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
const whyIcon1         = `${CDN}/180+_projects_delivered.svg`;
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
    <div className="bg-white text-gray-800 font-poppins">

      {/* HERO */}
      <section className="mt-10 text-left sm:text-center py-4 sm:py-16 px-5 bg-white">
        <div className="mt-5 flex justify-center mb-6">
          {heroImg ? (
            <img src={heroImg} alt="Flagship Services" className="mx-auto w-full max-w-[480px] object-contain" />
          ) : (
            <div className="w-full max-w-[480px] h-48 sm:h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
              Hero Image
            </div>
          )}
        </div>

        <span className="flex w-fit mx-auto items-center gap-2 bg-blue-50 text-[#012060] px-3 py-2 rounded-full text-sm font-medium border border-blue-200 mb-4">
          {badgeIcon && <img src={badgeIcon} alt="" className="w-5 h-5 object-contain" />}
          Flagship Services
        </span>

        <h1 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#334155] max-w-4xl mx-auto leading-tight mt-4">
          Core services that drive{" "}
          <span className="text-[#01B0F1]">transformation at scale</span>
        </h1>

        <p className="mt-6 text-[#64748B] max-w-2xl mx-auto text-[16px] sm:text-[20px] leading-relaxed">
          EICE&apos;s flagship offerings are built on 15+ years of delivery experience — proven technical services that give your business a competitive edge in the digital landscape
        </p>

        <div className="mt-8 flex flex-wrap justify-start sm:justify-center gap-4">
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#012060] text-white px-10 py-3 rounded-md flex items-center gap-2 hover:bg-blue-800 transition text-[18px]"
          >
            Get in Touch
            <img src={arrowIcon} alt="arrow" />
          </button>
        </div>
      </section>

      {/* OVERVIEW — WHAT WE DO */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-[#F4F9FF]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-4 sm:mb-8">
            OVERVIEW — WHAT WE DO
          </p>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-12 items-start">

            {/* Left */}
            <div>
              <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] mb-4 leading-tight">
                Operational excellence, delivered across 180+ projects
              </h2>
              <p className="text-[#64748B] text-[16px] sm:text-lg leading-relaxed">
                These aren&apos;t experimental offerings. Digital Transformation, DevOps, and Generative AI are the services EICE has refined across 60+ clients in 10+ countries — with measurable outcomes every time
              </p>
            </div>

            {/* Right: 3 stacked feature cards */}
            <div className="flex flex-col gap-4">
              {overviewCards.map((card, i) => (
                <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex items-start gap-4 shadow-sm">
                  {card.icon ? (
                    <img src={card.icon} alt="" className="w-10 h-10 object-contain flex-shrink-0" />
                  ) : (
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="text-[24px] font-bold text-[#334155] mb-1">{card.title}</h3>
                    <p className="text-[#64748B] text-[16px]">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* OUR FLAGSHIP SERVICES */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2 text-center">
            OUR FLAGSHIP SERVICES
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] text-center mb-4 sm:mb-12 leading-tight">
            Three services that define our delivery edge
          </h2>

          {/* 3 cards — same grid as Emerging Tech services */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-6 flex flex-col">
                {service.icon ? (
                  <img src={service.icon} alt="" className="w-12 h-12 object-contain mb-4" />
                ) : (
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4" />
                )}
                <h3 className="text-[24px] font-bold text-[#334155] mb-3">{service.title}</h3>
                <p className="text-[#64748B] text-[16px] leading-relaxed mb-4 flex-grow">{service.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 text-[14px] text-[#334155] bg-[#F1F5F9] rounded-full border border-[#E2E8F0]">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={service.link} className="text-[#01B0F1] text-[16px] font-semibold flex items-center gap-1 hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK — PROCESS */}
      {/* Light gray bg + white bordered cards — same as Consultancy process section */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2 text-center">
            HOW WE WORK
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] text-center mb-2 leading-tight">
            Our flagship delivery process
          </h2>
          <p className="text-[#64748B] text-[16px] sm:text-lg text-center max-w-2xl mx-auto mb-4 sm:mb-12">
            A structured, transparent approach that de-risks transformation and ensures every stage delivers measurable value
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-stretch">
                <div className="bg-white border border-[#E2E8F0] rounded-2xl p-4 sm:p-6 w-full shadow-sm">

                  {/* Small dark icon top-left + large faded step number top-right */}
                  <div className="flex items-start justify-between mb-4">
                    {step.icon ? (
                      <img src={step.icon} alt="" className="w-10 h-10 object-contain" />
                    ) : (
                      <div className="w-10 h-10 bg-[#012060] rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 bg-white/30 rounded-sm" />
                      </div>
                    )}
                    <span className="text-5xl font-bold text-gray-100 leading-none select-none">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-[24px] font-bold text-[#334155] leading-snug mb-2 whitespace-pre-line">
                    {step.title}
                  </h3>
                  <p className="text-[#64748B] text-[16px] leading-relaxed">{step.desc}</p>
                </div>

                {/* Circular arrow badge between cards */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-[#E2E8F0] rounded-full items-center justify-center shadow-sm text-[#01B0F1] font-bold text-base">
                    ›
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2 text-center">
            TECHNOLOGY
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] text-center mb-2 leading-tight">
            Our Flagship Tech Stack
          </h2>
          <p className="text-[#64748B] text-[16px] sm:text-lg text-center max-w-2xl mx-auto mb-4 sm:mb-12">
            A structured, transparent approach that de-risks transformation and ensures every stage delivers measurable value
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {techStack.map((stack, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 bg-[#01B0F1] rounded-full flex-shrink-0" />
                  <h3 className="text-[24px] font-bold text-[#334155]">{stack.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech, j) => (
                    <span key={j} className="px-3 py-1 text-[14px] text-[#334155] bg-[#F1F5F9] rounded-full border border-[#E2E8F0]">
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
      <section className="py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 bg-[#F4F9FF]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2 text-center">
            WHY EICE
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-[#334155] text-center mb-4 sm:mb-12 leading-tight">
            What makes us different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {whyEice.map((item, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-6 flex flex-col items-start">
                {item.icon ? (
                  <img src={item.icon} alt="" className="w-12 h-12 object-contain mb-4" />
                ) : (
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4" />
                )}
                <h3 className="text-[24px] font-bold text-[#334155] mb-2">{item.title}</h3>
                <p className="text-[#64748B] text-[16px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — GET STARTED */}
      <section className="bg-[#012060] py-4 sm:py-10 px-5 sm:px-6 md:px-10 lg:px-20 mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#01B0F1] text-[22px] font-semibold mb-2">
            GET STARTED
          </p>
          <h2 className="text-[32px] sm:text-4xl font-bold text-white mb-4 leading-tight">
            Ready to transform how your business operates?
          </h2>
          <p className="text-blue-200 text-[16px] sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Our flagship services have delivered measurable results for 60+ clients. Let&apos;s talk about what they can do for yours
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-[#012060] px-10 py-3 rounded-md flex items-center gap-2 mx-auto font-semibold text-[18px] hover:bg-blue-50 transition"
          >
            Get in Touch
            <img src={arrowIcon} alt="arrow" />
          </button>
        </div>
      </section>

      <ProductFooter />
      <Copyright />
    </div>
  );
}
