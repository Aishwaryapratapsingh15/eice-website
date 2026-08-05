"use client";

/* eslint-disable react/display-name */
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Menu as BaseMenu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem } from "@mui/base/MenuItem";
import { Dropdown } from "@mui/base/Dropdown";
import { Link } from "@/nextNavigation";

const menu = "https://d3r43jacxrwsrp.cloudfront.net/menu.svg";

const resolveSlotProps = (fn, args) => (typeof fn === "function" ? fn(args) : fn);

const Menu = React.forwardRef((props, ref) => (
  <BaseMenu
    ref={ref}
    {...props}
    slotProps={{
      ...props.slotProps,
      root: (s) => {
        const r = resolveSlotProps(props.slotProps?.root, s);
        return { ...r, className: clsx(r?.className) };
      },
      listbox: (s) => {
        const r = resolveSlotProps(props.slotProps?.listbox, s);
        return {
          ...r,
          className: clsx(
            "w-screen h-screen text-2xl box-border font-sans p-1.5 my-3 mx-0 rounded-xl overflow-auto outline-0 bg-white border border-solid border-slate-200 text-slate-900 min-w-listbox shadow-md",
            r?.className
          ),
        };
      },
    }}
  />
));
Menu.propTypes = {
  slotProps: PropTypes.shape({
    listbox: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
};

const MenuButton = React.forwardRef(({ className, ...other }, ref) => (
  <BaseMenuButton
    ref={ref}
    className={clsx(
      "cursor-pointer text-sm font-sans box-border rounded-lg font-semibold px-4 py-2 bg-bloo text-white",
      className
    )}
    {...other}
  />
));
MenuButton.propTypes = { className: PropTypes.string };

const MenuItem = React.forwardRef(({ className, ...other }, ref) => (
  <BaseMenuItem
    ref={ref}
    className={clsx(
      "list-none pt-2 pb-2 mt-2 grid rounded-lg cursor-default select-none last-of-type:border-b-0 disabled:text-slate-400",
      className
    )}
    {...other}
  />
));
MenuItem.propTypes = { className: PropTypes.string };

export default function MobileNavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuView, setMenuView] = useState("main");

  const closeMenu = () => {
    setMenuOpen(false);
    setMenuView("main");
  };

  useEffect(() => {
    console.log("[MobileNavMenu] menuOpen state is now:", menuOpen);
  }, [menuOpen]);

  return (
    <Dropdown
      open={menuOpen}
      onOpenChange={(event, isOpen) => {
        console.log("[MobileNavMenu] onOpenChange fired — event.type:", event?.type, "isOpen:", isOpen);
        setMenuOpen(isOpen);
      }}
    >
      <MenuButton
        className="scale-[0.6] -mr-1"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav-menu"
      >
        <span>
          <img src={menu} alt="" aria-hidden="true" width="48" height="48" />
        </span>
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
              <MenuItem>
                <button
                  onClick={() => setMenuView("services")}
                  aria-expanded={menuView === "services"}
                  aria-haspopup="true"
                  className="w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px] flex items-center cursor-pointer text-left bg-transparent border-0"
                >
                  Services <span aria-hidden="true" className="ml-1">+</span>
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  onClick={() => setMenuView("industries")}
                  aria-expanded={menuView === "industries"}
                  aria-haspopup="true"
                  className="w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px] flex items-center cursor-pointer text-left bg-transparent border-0"
                >
                  Industries <span aria-hidden="true" className="ml-1">+</span>
                </button>
              </MenuItem>
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
          {menuView === "services" && (
            <motion.div key="services" initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }} transition={{ duration: 0.3 }} className="w-screen h-screen bg-white">
              <div className="w-screen h-screen bg-white">
                <div className="p-4 text-sm border-b flex gap-2">
                  <span className="cursor-pointer text-gray-500" onClick={() => setMenuView("main")}>Home</span>
                  <span className="text-gray-400">{">"}</span><span className="font-semibold">Services</span>
                </div>
                {[
                  ["/services/app-development", "App Development"],
                  ["/services/enterprise-app-dev", "Enterprise App Dev"],
                  ["/services/web-development", "Web Development"],
                  ["/services/saas", "SaaS Development"],
                  ["/services/android", "Mobile Development"],
                  ["/services/chatbot", "Chatbot Development"],
                  ["/services/emerging-tech", "Emerging Tech"],
                  ["/services/ai-ml", "AI / ML"],
                  ["/services/blockchain", "Blockchain"],
                  ["/services/iot", "IoT Solutions"],
                  ["/services/consultancy-services", "Consultancy Services"],
                  ["/services/flagship-services", "Flagship Services"],
                  ["/services/digital-transformation", "Digital Transformation"],
                  ["/services/devops", "DevOps"],
                  ["/services/cloud", "Cloud Services"],
                  ["/services/data-analytics", "Data Analytics"],
                  ["/services/ui-ux", "UI/UX Design"],
                  ["/services/software-testing", "Software Testing"],
                  ["/services/gis", "GIS Solutions"],
                ].map(([href, label]) => (
                  <Link key={href} onClick={closeMenu} className="block p-4 text-lg border-b" to={href}>{label}</Link>
                ))}
              </div>
            </motion.div>
          )}
          {menuView === "industries" && (
            <motion.div key="industries" initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }} transition={{ duration: 0.3 }} className="w-screen h-screen bg-white">
              <div className="w-screen h-screen bg-white">
                <div className="p-4 text-sm border-b flex gap-2">
                  <span className="cursor-pointer text-gray-500" onClick={() => setMenuView("main")}>Home</span>
                  <span className="text-gray-400">{">"}</span><span className="font-semibold">Industries</span>
                </div>
                {[
                  ["/industries/oil-and-gas", "Oil and Gas"],
                  ["/industries/healthcare", "Healthcare"],
                  ["/industries/legal", "Legal"],
                  ["/industries/education", "Education"],
                  ["/industries/financial", "Financial"],
                  ["/industries/digital-media", "Digital Media"],
                  ["/industries/logistics", "Logistics"],
                  ["/industries/enterprise", "Enterprise"],
                  ["/industries/hospitality", "Hospitality"],
                ].map(([href, label]) => (
                  <Link key={href} onClick={closeMenu} className="block p-4 text-lg border-b" to={href}>{label}</Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Menu>
    </Dropdown>
  );
}
