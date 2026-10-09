"use client";
import React from "react";
import Link from "next/link";
import { GiVirtualMarker } from "react-icons/gi";
import Footer from "../Othercomps/Footer";
import ProductFooter from "@/Product/ProductFooter";
import { useNavigate } from "@/nextNavigation";

const arrowIcon = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";

const temp = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/temp.png";
const temp2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/temp2.png";
const espctquote1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/espctquote1.png";
const espctquote2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/espctquote2.png";
const petrosim1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/kbcchempetro1.png";
const petrosim2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/kbcchempetro2.png";
const adanigas1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/adanigas1.png";
const adanigas2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/adanigas2.png";
const datamgmt1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/datamgmt1.png";
const datamgmt2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/datamgmt2.png";
const peep1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Peep1.png";
const peep2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/Peep2.png";
const voicecall1 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/voicecall1.png";
const voicecall2 = "https://d3r43jacxrwsrp.cloudfront.net/Compressed/voicecall2.png";


const AiVoice = "https://d3r43jacxrwsrp.cloudfront.net/ai/voice.jpg";
const inventryAi = "https://d3r43jacxrwsrp.cloudfront.net/ai/inventry.jpg";


function InventoryAi() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="max-w-7xl mx-auto px-3 xl:px-4 pt-14">
                <div className="w-full flex flex-col gap-4 pb-10">
                    <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">Development of AI-Based Inventory Management System</p>
                    <h1 className="font-general font-semibold text-blackk text-[32px] sm:text-[44px] leading-[1.1] text-left sm:text-center">Revolutionizing Inventory Management with AI: Enhancing Accuracy and Efficiency</h1>
                    <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center w-full">
                        For our client in the retail sector, we developed an AI-based inventory management system by integrating advanced machine learning algorithms, real-time data analytics, and predictive modeling. This solution ensured precise inventory tracking, optimal stock levels, and efficient supply chain operations.
                    </p>
                    <div className="w-full max-w-5xl mx-auto items-center justify-center">
                        <img
                            src={inventryAi}
                            alt="AI inventory management system — stock tracking visualization"
                            className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-lg"
                            width="1280"
                            height="1217"
                        />
                    </div>
                </div>
                <div className="w-full pt-10 pb-10">
                    <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
                        Key Challenges
                    </h2>
                    <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
                        <div className="flex items-start gap-4">
                            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">01</span>
                            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                                {" "}
                                Developed accurate demand forecasting to accommodate seasonal variations and unexpected changes in consumer behavior.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">02</span>
                            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                                Ensured accurate, real-time visibility into inventory levels across various locations and platforms.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">03</span>
                            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                                Created algorithms to balance inventory levels effectively, minimizing both excess stock and stockouts.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">04</span>
                            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                                Unified data from multiple sources, including suppliers, warehouses, and sales channels, to create a coherent inventory management system.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">05</span>
                            <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                                Ensured the AI system-maintained accuracy and reliability as inventory levels and market conditions evolved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-50 pt-10 pb-10">
                <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col gap-4">
                    <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">
                        About Our Client
                    </p>
                    <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full"></h2>
                    <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6] sm:max-w-4xl mx-auto text-left sm:text-center w-full">
                        Our client is a leading IT consulting company operating
                        internationally, renowned for delivering innovative technology
                        solutions. They specialize in digital transformation, cloud
                        computing, and cybersecurity services, helping businesses optimize
                        their IT infrastructure. With a commitment to excellence, they
                        empower organizations to achieve their strategic goals efficiently
                        and securely.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-3 xl:px-4 pt-10 pb-10">
                <div>
                    <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center">
                        Unlocking Success
                    </h2>
                </div>

                {/* changes for boxes orientation */}
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-8">

                    <div className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
                        <div className="flex flex-col items-start">
                            <div className="mb-[19px] text-bloo flex items-center">
                                <GiVirtualMarker size={44} className="text-bloo" />
                            </div>
                            <div>
                                <div className="flex flex-col text-start">
                                    <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                                        IDEATION
                                    </h3>
                                    <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                                        Our client aimed to enhance their inventory management processes to achieve greater accuracy, efficiency, and cost-effectiveness. Recognizing the potential of AI, we envisioned a solution that could automate inventory tracking, optimize stock levels, and streamline supply chain operations. We created an AI-based inventory management system that uses machine learning for demand forecasting, real-time analytics for inventory tracking, and predictive modeling for optimized stock management. Our mission was to AUTOMATE, OPTIMIZE & GROW their inventory processes, driving operational excellence and sustainable growth
                                    </p>
                                </div>
                                {/* Recognizing the transformative potential of AI, we
                    envisioned a solution that could streamline repetitive tasks
                    and deliver highly personalized interactions. We set out to
                    create an advanced AI-based voice call assistant that would
                    function as a virtual receptionist, conduct surveys, and
                    serve as a customer support agent.  */}
                            </div>
                        </div>
                    </div>

                    <div className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
                        <div className="flex flex-col items-start">
                            <div className="mb-[19px] text-bloo flex items-center">
                                <GiVirtualMarker size={44} className="text-bloo" />
                            </div>
                            <div>
                                <div className="flex flex-col text-start">
                                    <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                                        OUR APPROACH
                                    </h3>
                                    <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                                        We employed a multi-phase approach, beginning with research and development to create an AI framework tailored to the client’s needs. The system handles real-time inventory tracking, using predictive analytics for demand forecasting and machine learning for optimizing reorder points. We emphasized customization, scalability, and seamless integration to align with the client’s existing infrastructure. Our core mission was to AUTOMATE, OPTIMIZE & GROW their inventory management processes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group h-full rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col items-start text-start">
                        <div className="flex flex-col items-start">
                            <div className="mb-[19px] text-bloo flex items-center">
                                <GiVirtualMarker size={44} className="text-bloo" />
                            </div>
                            <div>
                                <div className="flex flex-col text-start">
                                    <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                                        OUTCOMES
                                    </h3>
                                    <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6]">
                                        The AI-based inventory management system significantly improved operational efficiency and inventory accuracy. The client experienced reduced stockouts and overstock situations due to precise demand forecasting and optimized reorder points. The scalable system managed inventory across multiple locations and channels without additional manual effort. Its integration capabilities ensured smooth incorporation into existing workflows, and real-time analytics provided actionable insights for better decision-making.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-3 xl:px-4 w-full pt-10 pb-10">
                <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
                    Project Outcomes
                </h2>
                <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-8">
                    <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
                        <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">01</span>
                        <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                            Enhanced Inventory Accuracy: The AI system’s precise demand forecasting and real-time tracking reduced errors and discrepancies in inventory levels.
                        </p>
                    </div>
                    <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
                        <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">02</span>
                        <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                            Improved Operational Efficiency: Automation of inventory management processes minimized manual effort and operational burdens, allowing staff to focus on strategic activities.
                        </p>
                    </div>
                    <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
                        <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">03</span>
                        <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                            Cost Savings: The optimized reorder points and reduced stockouts led to significant cost savings by preventing excess inventory and lost sales.
                        </p>
                    </div>
                    <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
                        <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">04</span>
                        <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                            Dynamic Scalability: The solution effectively managed inventory across multiple locations and sales channels, scaling seamlessly with the client’s growth and seasonal fluctuations.
                        </p>
                    </div>
                    <div className="rounded-[18px] border border-[#E6EAF1] bg-white p-[25px] transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex items-start gap-4">
                        <span className="font-general font-semibold text-bloo text-[20px] leading-[1.3] shrink-0">05</span>
                        <p className="font-inter font-normal text-blackk/70 text-[16px] sm:text-[18px] leading-[1.6]">
                            Advanced Analytics and Insights: Comprehensive data analysis and predictive modeling provided valuable insights, driving continuous improvement and strategic decision-making.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-50 pt-10 pb-10">
                <div className="max-w-7xl mx-auto px-3 xl:px-4 flex flex-col gap-4">
                    <p className="font-general font-semibold text-bloo text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-left sm:text-center">
                        More Like This
                    </p>
                    <h2 className="font-general font-semibold text-blackk text-[24px] sm:text-[32px] leading-[1.2] text-left sm:text-center max-w-3xl mx-auto w-full">
                        Take a look at other Case Studies
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                    <Link
                        href="/case-studies/petro-sim"
                        className="group h-full overflow-hidden rounded-[18px] border border-[#E6EAF1] bg-white transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col"
                    >
                        <img
                            src={petrosim1}
                            alt="PetroSIM"
                            className="w-full h-48 object-cover transition duration-300 filter grayscale group-hover:grayscale-0"
                            width="1068"
                            height="567"
                        />
                        <div className="pt-[19px] px-[25px] pb-[25px] flex flex-col flex-1">
                            <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                                PetroSIM
                            </h3>
                            <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] mb-[18px]">
                                Product Quality Assurance for Refinery Simulation Tool
                            </p>
                            <span className="mt-auto inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">
                                Explore More
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg>
                            </span>
                        </div>
                    </Link>
                    <Link
                        href="/case-studies/relimonitor"
                        className="group h-full overflow-hidden rounded-[18px] border border-[#E6EAF1] bg-white transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col"
                    >
                        <img
                            src={temp}
                            alt="RE.LI Monitor"
                            className="w-full h-48 object-cover transition duration-300 filter grayscale group-hover:grayscale-0"
                            width="742"
                            height="427"
                        />
                        <div className="pt-[19px] px-[25px] pb-[25px] flex flex-col flex-1">
                            <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                                RE.LI Monitor
                            </h3>
                            <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] mb-[18px]">
                                Developed a Real Time Sensor monitoring tool using SCADA
                            </p>
                            <span className="mt-auto inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">
                                Explore More
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg>
                            </span>
                        </div>
                    </Link>
                    <Link
                        href="/case-studies/espct-quote"
                        className="group h-full overflow-hidden rounded-[18px] border border-[#E6EAF1] bg-white transition duration-200 hover:-translate-y-1 hover:border-[#01B0F1]/60 hover:shadow-[0_18px_55px_rgba(1,32,96,.10)] flex flex-col"
                    >
                        <img
                            src={espctquote1}
                            alt="ESPCT Quote"
                            className="w-full h-48 object-cover transition duration-300 filter grayscale group-hover:grayscale-0"
                            width="506"
                            height="335"
                        />
                        <div className="pt-[19px] px-[25px] pb-[25px] flex flex-col flex-1">
                            <h3 className="font-general font-semibold text-[#373737] text-[18px] sm:text-[20px] leading-[1.3] mb-[7px]">
                                ESPCT Quote
                            </h3>
                            <p className="font-inter font-normal text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] mb-[18px]">
                                Web Based Sales and Quotation Tool
                            </p>
                            <span className="mt-auto inline-flex items-center gap-2 text-[14px] font-bold text-[#01B0F1] group-hover:text-blue-900 transition">
                                Explore More
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" /></svg>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
            {/* CTA */}
            <section className="bg-[#012060] pt-10 pb-10">
                <div className="max-w-4xl px-3 xl:px-4 flex flex-col items-start sm:items-center gap-4 text-left sm:text-center">
                    <h2 className="font-general font-semibold text-white text-[24px] sm:text-[32px] leading-[1.2]">Tired of Stockouts and Overstock?</h2>
                    <p className="font-inter font-normal text-blue-200 text-[16px] sm:text-[18px] leading-[1.6] max-w-2xl">Talk to our team about AI-driven inventory forecasting and reconciliation.</p>
                    <button onClick={() => navigate("/demo-form?product=Logistics")} className="bg-[#01B0F1] text-white px-10 py-3 rounded-md flex items-center gap-2 font-semibold text-[18px] hover:text-[#012060] transition">
                        Talk to Our Logistics Team
                        <img src={arrowIcon} alt="arrow" width="24" height="24" />
                    </button>
                </div>
            </section>

            {/* <Footer /> */}
            <ProductFooter />
        </div>
    );
}

export default InventoryAi;

