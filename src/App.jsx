"use client";

/* eslint-disable react/display-name */
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const logo = "https://d3r43jacxrwsrp.cloudfront.net/logo.svg";
import { NavLink, Link, useNavigate } from "@/nextNavigation";

import { GoLaw } from "react-icons/go";
import { FaBusinessTime, FaOilCan, FaSyringe } from "react-icons/fa";
import { IoIosCash } from "react-icons/io";
import { BiPencil } from "react-icons/bi";
import { MdPermMedia, MdHotel } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import { FaPeopleArrows } from "react-icons/fa";
import { MdOutlineAppRegistration } from "react-icons/md";
import { IoIosBuild } from "react-icons/io";
import { LuCircuitBoard } from "react-icons/lu";

import PropTypes from "prop-types";
import clsx from "clsx";
import { Menu as BaseMenu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem } from "@mui/base/MenuItem";
import { Dropdown } from "@mui/base/Dropdown";
const menu = "https://d3r43jacxrwsrp.cloudfront.net/menu.svg";

const easylogyIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Easylogy.svg";
const eiceriseIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/EiceRise.svg";
const eicevoiceIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/EiceVoice.svg";
const infrasightIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/infrasight.svg";
const isyncdriveIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/isyncdrive.svg";
const isyncliteIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/isynclite.svg";
const verilockIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/Verilock.svg";
const eiceAgentIcon = "https://d3r43jacxrwsrp.cloudfront.net/common/EiceAiAgent.svg";
const eiceSmartfitIcon = "https://d3r43jacxrwsrp.cloudfront.net/smartfit/SmartFit_Icon.svg";
const eiceopsIcon = "https://d3r43jacxrwsrp.cloudfront.net/EiceOps/EICEOPS.svg";

// â”€â”€â”€ Navigation Shell â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const NavLayout = ({ children }) => {
  const [menuView, setMenuView] = useState("main");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => { setMenuOpen(false); setMenuView("main"); };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100000] focus:bg-[#012060] focus:text-white focus:px-4 focus:py-2 focus:rounded focus:font-semibold"
      >
        Skip to main content
      </a>

      <div className="relative overflow-visible">

        {/* â”€â”€ Desktop Navbar â”€â”€ */}
        <nav className="overflow-visible fixed w-full top-0 left-0 z-30 shadow-md shadow-blackk/20 font-manrope bg-white font-semibold 2xl:block xl:block hidden">
          <div className="flex max-w-7xl mx-auto items-center text-lg py-3">
            <div className="cursor-pointer px-4 flex-1">
              <Link href="/"><img src={logo} alt="EICE Technology" className="h-8 w-auto" /></Link>
            </div>
            <div className="flex items-center justify-center flex-1 mt-2">
              <Tabs />
            </div>
            <div className="px-4 flex-1 flex justify-end">
              <NavLink to="/contact">
                <button className="flex items-center justify-center transition duration-200 py-2 w-28 hover:bg-blue-900/90 hover:shadow-md hover:shadow-blue-900/30 bg-blue-900 text-white text-sm font-semibold px-3 rounded">
                  Contact Us
                </button>
              </NavLink>
            </div>
          </div>
        </nav>

        {/* â”€â”€ Mobile Navbar â”€â”€ */}
        <nav className="2xl:hidden xl:hidden flex fixed w-full top-0 left-0 z-30 shadow-md shadow-blackk/20 font-manrope bg-white font-semibold items-center overflow-hidden">
          <div className="cursor-pointer pl-3">
            <Link href="/"><img src={logo} alt="EICE Technology" className="scale-[1.15]" /></Link>
          </div>
          <div className="w-full">
            <div className="flex flex-row items-center justify-end">
              <Dropdown open={menuOpen} onOpenChange={setMenuOpen}>
                <MenuButton
                  onClick={() => setMenuOpen((p) => !p)}
                  className="scale-[0.6] -mr-1"
                  aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={menuOpen}
                  aria-controls="mobile-nav-menu"
                >
                  <span><img src={menu} alt="" aria-hidden="true" /></span>
                </MenuButton>
                <Menu id="mobile-nav-menu" aria-label="Mobile navigation" className="font-semibold z-50">
                  <AnimatePresence mode="wait">
                    {menuView === "main" && (
                      <motion.div key="main" initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <MenuItem><Link onClick={closeMenu} className="w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]" to="/">Home</Link></MenuItem>
                        <MenuItem>
                          <button
                            onClick={() => setMenuView("products")}
                            aria-expanded={menuView === "products"}
                            aria-haspopup="true"
                            className="w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px] flex items-center cursor-pointer text-left bg-transparent border-0"
                          >
                            Products <span aria-hidden="true" className="ml-1">+</span>
                          </button>
                        </MenuItem>
                        <MenuItem><Link onClick={closeMenu} className="w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]" to="/about">About Us</Link></MenuItem>
                        <MenuItem><Link onClick={closeMenu} className="w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]" to="/services">Service Profile</Link></MenuItem>
                        <MenuItem><Link onClick={closeMenu} className="w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]" to="/industries">Sector Portfolio</Link></MenuItem>
                        <MenuItem><Link onClick={closeMenu} className="w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]" to="/resources">Resources</Link></MenuItem>
                        <MenuItem><Link onClick={closeMenu} className="w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]" to="/contact">Contact Us</Link></MenuItem>
                      </motion.div>
                    )}
                    {menuView === "products" && (
                      <motion.div key="products" initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }} transition={{ duration: 0.3 }} className="w-screen h-screen bg-white">
                        <div className="w-screen h-screen bg-white">
                          <div className="p-4 text-sm border-b flex gap-2">
                            <span className="cursor-pointer text-gray-500" onClick={() => setMenuView("main")}>Home</span>
                            <span className="text-gray-400">{">"}</span><span className="font-semibold">Products</span>
                          </div>
                          {[
                            ["/products/eicerise",   "EICE Rise"],
                            ["/products/eice-ops",    "EICEOps"],
                            ["/products/isync-lite",  "iSyncLite"],
                            ["/products/isync-drive", "iSyncDrive"],
                            ["/products/eice-agent",  "EICE AI Agent"],
                            ["/products/verilock",    "Verilock"],
                            ["/products/infrasight",  "InfraSight"],
                            ["/products/easylogy",   "EasyLogy"],
                            ["/products/smartfit",    "EICE SmartFit"],
                            ["/products/eice-voice",  "EICE Voice"],
                          ].map(([href, label]) => (
                            <Link key={href} onClick={closeMenu} className="block p-4 text-lg border-b" to={href}>{label}</Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Menu>
              </Dropdown>
            </div>
          </div>
        </nav>

        <main id="main-content" className="2xl:mt-28 2xl:w-full 2xl:scale-100 w-screen scale-100">
          {children}
        </main>
      </div>
    </>
  );
};

// â”€â”€â”€ Desktop Mega-Menu Tabs â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") setDir(selected > val ? "r" : "l");
    else if (val === null) setDir(null);
    setSelected(val);
  };

  return (
    <div onMouseLeave={() => handleSetSelected(null)} className="relative overflow-visible flex items-center gap-4">
      <div onMouseEnter={() => handleSetSelected(null)} className="h-10 flex items-center rounded-full px-3 text-md cursor-pointer">
        <NavLink to="/" className="block">
          <div className="group overflow-visible hover:text-bloo transition duration-300 ease-in-out">
            <div>HOME</div>
            <div className="bg-bloo h-0.5 rounded-full w-0 group-hover:w-full transition-width duration-300"></div>
          </div>
        </NavLink>
      </div>
      {TABS.map((t) => (
        <Tab key={t.id} selected={selected} handleSetSelected={handleSetSelected} tab={t.id} link={t.link}>{t.title}</Tab>
      ))}
      <AnimatePresence>{selected && <Content dir={dir} selected={selected} handleSetSelected={handleSetSelected} />}</AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected, link }) => {
  const tabContent = (
    <div className="group overflow-visible hover:text-bloo transition duration-300 ease-in-out">
      <div className="flex flex-row items-center justify-center">
        <span className="pr-2">{children}</span>
        <FiChevronDown className={`transition-transform ${selected === tab ? "rotate-180" : ""}`} />
      </div>
      <div className="bg-bloo h-0.5 rounded-full w-0 group-hover:w-full transition-width duration-300"></div>
    </div>
  );
  return (
    <div
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      className="h-10 flex items-center gap-1 rounded-full px-3 text-md transition-colors cursor-pointer"
    >
      {link ? (
        <Link href={link} onClick={() => handleSetSelected(null)} className="block">
          {tabContent}
        </Link>
      ) : (
        <Link href="" onClick={(e) => { e.preventDefault(); handleSetSelected(tab); }} className="block">
          {tabContent}
        </Link>
      )}
    </div>
  );
};

const Content = ({ selected, dir, handleSetSelected }) => (
  <motion.div
    id="overlay-content"
    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
    className="absolute overflow-visible z-50 left-0 transform -translate-x-1/2 top-16 w-[90vw] max-w-[720px] rounded-lg border border-blackk/50 shadow-md shadow-blackk/20 bg-white py-6 px-4"
  >
    <Bridge />
    <Nub selected={selected} />
    {TABS.map((t) => (
      <div className="overflow-hidden" key={t.id}>
        {selected === t.id && (
          <motion.div initial={{ opacity: 0, x: dir === "l" ? 100 : dir === "r" ? -100 : 0 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }}>
            <t.Component handleSetSelected={handleSetSelected} />
          </motion.div>
        )}
      </div>
    ))}
  </motion.div>
);

const Bridge = () => <div className="absolute overflow-visible -top-[24px] left-0 right-0 h-[24px]" />;

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);
  useEffect(() => {
    if (selected) {
      const tab = document.getElementById(`shift-tab-${selected}`);
      const overlay = document.getElementById("overlay-content");
      if (!tab || !overlay) return;
      const tabRect = tab.getBoundingClientRect();
      const { left: oLeft } = overlay.getBoundingClientRect();
      setLeft(tabRect.left + tabRect.width / 2 - oLeft);
    }
  }, [selected]);
  return (
    <motion.span
      style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)" }}
      animate={{ left }} transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute overflow-visible left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl bg-bloo"
    />
  );
};

// â”€â”€â”€ Mega-Menu Panel Components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const StatsCard = () => (
  <div className="bg-[#012060] w-full h-full rounded-md">
    <div className="text-white grid grid-cols-2 p-1">
      {[["Since","2010"],["Projects","180+"],["Clients","60+"],["Countries","10+"]].map(([label,val]) => (
        <div key={label} className="p-2"><h1>{label}</h1><h2 className="font-extrabold text-3xl">{val}</h2></div>
      ))}
    </div>
    <div className="p-1 text-white text-sm px-4">
      <h1>Our experience in more than 180 projects across 10+ countries has helped us bring immediate impact</h1>
    </div>
    <div className="p-3">
      <Link to="/contact" className="py-1 px-2 cursor-pointer rounded-full bg-white text-sm">Contact Us</Link>
    </div>
  </div>
);

const Aboutus = ({ handleSetSelected = () => {} }) => (
  <div className="grid grid-cols-3 p-1 gap-4">
    <div><StatsCard /></div>
    <div className="col-span-2">
      <div className="flex flex-col gap-6 text-wrap">
        <div><h1>Who We Are</h1><p className="font-semibold text-blackk/70 text-sm">We are a global IT services and consulting firm with over 200 professional technologists, specializing in innovative strategies that bridge technology and business solutions.</p></div>
        <div><h1>What We Do</h1><p className="font-semibold text-blackk/70 text-sm">We partner with global leaders and startups to turn ideas into reality through custom software and integrated models, delivering cutting-edge IT solutions.</p></div>
        <div>Mission and Vision<p className="font-semibold text-blackk/70 text-sm">Our mission is to ensure client satisfaction through innovative technology solutions that drive growth. Our vision is to be a global leader in IT services and software development.</p></div>
      </div>
      <Link href="/our-team" onClick={() => handleSetSelected(null)}>
        <button className="bg-blue-900 rounded-md p-2 mt-4 flex items-center gap-1 hover:bg-blue-900/90 text-white text-base"><span>Our Team</span><FiArrowRight /></button>
      </Link>
    </div>
  </div>
);

const OurServices = ({ handleSetSelected = () => {} }) => (
  <div className="p-1">
    <div className="grid grid-cols-3 gap-4">
      <div><StatsCard /></div>
      <div className="col-span-2">
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 items-start">
          {[
            { to: "/services?scrollTo=appDevelopment",       Icon: MdOutlineAppRegistration, label: "App Development",       desc: "Leveraging 15+ years of expertise, EICE has delivered over 180 projects across 10+ countries." },
            { to: "/services?scrollTo=emergingTechnologies", Icon: LuCircuitBoard,           label: "Emerging Tech",          desc: "EICE pioneers in integrating emerging technologies, backed by experience across 10+ countries." },
            { to: "/services?scrollTo=consultancy",          Icon: FaPeopleArrows,           label: "Consultancy Services",   desc: "Our consultancy services draw on 15+ years of insight, assisting 60+ clients in 10+ countries." },
            { to: "/services?scrollTo=flagshipServices",     Icon: IoIosBuild,               label: "Flagship Services",      desc: "EICE provides robust technical services with a proven track record of 180+ projects." },
          ].map(({ to, Icon, label, desc }) => (
            <Link key={to} to={to} onClick={() => handleSetSelected(null)} className="group cursor-pointer py-1 text-blackk/70 transition-colors">
              <Icon size={40} className="mb-2 text-[#012060]" />
              <div className="text-md text-left fontweight_1 text-blackk">{label}</div>
              <div className="h-0.5 rounded-full group-hover:w-full w-0 group-hover:bg-bloo bg-white transition-width duration-500"></div>
              <h1 className="text-sm pt-1">{desc}</h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const OurResources = ({ handleSetSelected = () => {} }) => (
  <div className="p-1 grid-cols-2 grid gap-4">
    <Link to="/case-studies" onClick={() => handleSetSelected(null)} className="group cursor-pointer grid grid-rows-3 order-last rounded-md">
      <div className="row-span-2 w-full h-full bg-casestudy bg-contain bg-no-repeat"></div>
      <div>
        <h1 className="text-center">Case Studies</h1>
        <h1 className="w-0 group-hover:w-1/2 transition duration-500 mx-auto group-hover:bg-bloo h-0.5 bg-white"></h1>
        <h1 className="text-sm pt-2 text-blackk/50">Explore our detailed case studies and learn how we transform businesses.</h1>
      </div>
    </Link>
    <div><StatsCard /></div>
  </div>
);

const OurIndustries = ({ handleSetSelected = () => {} }) => (
  <div className="grid grid-cols-3 gap-4">
    <div><StatsCard /></div>
    <div className="col-span-2">
      <div className="grid grid-cols-2 gap-y-10 gap-x-1 p-6">
        {[
          { to: "/industries/oil-and-gas",   Icon: FaOilCan,       label: "Oil and Gas" },
          { to: "/industries/healthcare",    Icon: FaSyringe,      label: "Healthcare" },
          { to: "/industries/legal",         Icon: GoLaw,          label: "Legal" },
          { to: "/industries/education",     Icon: BiPencil,       label: "Education" },
          { to: "/industries/financial",     Icon: IoIosCash,      label: "Financial" },
          { to: "/industries/digital-media", Icon: MdPermMedia,    label: "Digital Media" },
          { to: "/industries/logistics",     Icon: BsTruck,        label: "Logistics" },
          { to: "/industries/enterprise",    Icon: FaBusinessTime, label: "Enterprise" },
          { to: "/industries/hospitality",   Icon: MdHotel,        label: "Hospitality" },
        ].map(({ to, Icon, label }) => (
          <div key={to} className="group flex flex-col gap-1">
            <Link to={to} onClick={() => handleSetSelected(null)} className="flex flex-row gap-4 items-center">
              <div className="icon-wrapper bg-[#E6F4FD] h-10 w-10 rounded-lg flex items-center justify-center">
                <Icon size={28} className="group-hover:text-bloo transition duration-300 text-[#012060]" />
              </div>
              <span className="group-hover:text-bloo transition duration-300">{label}</span>
            </Link>
            <div className="h-0.5 rounded-full group-hover:w-4/5 w-0 group-hover:bg-bloo bg-white transition-width duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const OurProducts = ({ handleSetSelected = () => {} }) => (
  <div className="grid grid-cols-3 gap-4">
    <div><StatsCard /></div>
    <div className="col-span-2">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="mb-8">
          <p className="text-xs text-gray-400 tracking-wide mb-3">ERP & LOGISTICS</p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { href: "/products/eicerise",  icon: eiceriseIcon,     name: "EICE Rise",      desc: "Hospitality ERP platform" },
              { href: "/products/easylogy",  icon: easylogyIcon,     name: "EasyLogy",       desc: "Logistics management" },
              { href: "/products/smartfit",   icon: eiceSmartfitIcon, name: "EICE SmartFit",  desc: "Cargo Management" },
              { href: "/products/eice-ops",   icon: eiceopsIcon,      name: "EICEOps",        desc: "Help Desk Management" },
            ].map(({ href, icon, name, desc }) => (
              <Link key={href} href={href} onClick={() => handleSetSelected(null)} className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-[#E6F4FD] rounded-lg p-2"><img src={icon} alt="" className="w-full h-full object-contain" /></div>
                <div><p className="font-semibold group-hover:text-bloo">{name}</p><p className="text-xs text-gray-500">{desc}</p></div>
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t my-3"></div>
        <div className="mb-8">
          <p className="text-xs text-gray-400 tracking-wide mb-3">SECURITY & COMPLIANCE</p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { href: "/products/verilock",   icon: verilockIcon,   name: "Verilock",   desc: "MFA & access control" },
              { href: "/products/infrasight", icon: infrasightIcon, name: "InfraSight", desc: "Infra monitoring" },
            ].map(({ href, icon, name, desc }) => (
              <Link key={href} href={href} onClick={() => handleSetSelected(null)} className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-[#E6F4FD] rounded-lg p-2"><img src={icon} alt="" className="w-full h-full object-contain" /></div>
                <div><p className="font-semibold group-hover:text-bloo">{name}</p><p className="text-xs text-gray-500">{desc}</p></div>
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t my-3"></div>
        <div>
          <p className="text-xs text-gray-400 tracking-wide mb-3">SYNC & AI</p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { href: "/products/isync-drive", icon: isyncdriveIcon, name: "iSyncDrive",    desc: "Enterprise cloud sync client" },
              { href: "/products/isync-lite",  icon: isyncliteIcon,  name: "iSyncLite",     desc: "Lightweight sync tool" },
              { href: "/products/eice-agent",  icon: eiceAgentIcon,  name: "EICE AI Agent", desc: "AI-powered automation suite" },
              { href: "/products/eice-voice",  icon: eicevoiceIcon,  name: "EICE Voice",    desc: "Voice-Powered Order Management" },
            ].map(({ href, icon, name, desc }) => (
              <Link key={href} href={href} onClick={() => handleSetSelected(null)} className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-[#E6F4FD] rounded-lg p-2"><img src={icon} alt="" className="w-full h-full object-contain" /></div>
                <div><p className="font-semibold group-hover:text-bloo">{name}</p><p className="text-xs text-gray-500">{desc}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TABS = [
  { title: "ABOUT",      Component: Aboutus,       link: "/about" },
  { title: "PRODUCTS",   Component: OurProducts,   link: "" },
  { title: "INDUSTRIES", Component: OurIndustries, link: "/industries" },
  { title: "SERVICES",   Component: OurServices,   link: "/services" },
  { title: "RESOURCES",  Component: OurResources,  link: "/resources" },
].map((n, idx) => ({ ...n, id: idx + 1 }));

// â”€â”€â”€ MUI-Based Mobile Menu Components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const resolveSlotProps = (fn, args) => typeof fn === "function" ? fn(args) : fn;

const Menu = React.forwardRef((props, ref) => (
  <BaseMenu ref={ref} {...props} slotProps={{
    ...props.slotProps,
    root: (s) => { const r = resolveSlotProps(props.slotProps?.root, s); return { ...r, className: clsx(r?.className) }; },
    listbox: (s) => { const r = resolveSlotProps(props.slotProps?.listbox, s); return { ...r, className: clsx("w-screen h-screen text-2xl box-border font-sans p-1.5 my-3 mx-0 rounded-xl overflow-auto outline-0 bg-white border border-solid border-slate-200 text-slate-900 min-w-listbox shadow-md", r?.className) }; },
  }} />
));
Menu.propTypes = { slotProps: PropTypes.shape({ listbox: PropTypes.oneOfType([PropTypes.func, PropTypes.object]), root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]) }) };

const MenuButton = React.forwardRef(({ className, ...other }, ref) => (
  <BaseMenuButton ref={ref} className={clsx("cursor-pointer text-sm font-sans box-border rounded-lg font-semibold px-4 py-2 bg-bloo text-white", className)} {...other} />
));
MenuButton.propTypes = { className: PropTypes.string };

const MenuItem = React.forwardRef(({ className, ...other }, ref) => (
  <BaseMenuItem ref={ref} className={clsx("list-none pt-2 pb-2 mt-2 grid rounded-lg cursor-default select-none last-of-type:border-b-0 disabled:text-slate-400", className)} {...other} />
));
MenuItem.propTypes = { className: PropTypes.string };

export { NavLayout };

