"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { scroller } from "react-scroll";


export default function HeroHeader() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setOpen(false);
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`w-full py-3 fixed top-0 z-50 transition-all duration-300 md:static md:bg-white md:shadow-none ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className=" px-4 md:px-15 flex justify-between items-center">

          {/* LEFT LOGO */}
          <div className="flex items-center gap-4">
            <Image
              src="/tapmiLogo-Colour2.png"
              alt="TAPMI Logo"
              width={180}
              height={80}
              className="object-contain w-32 h-12 md:w-auto md:h-auto"
            />
          </div>
<div className="mx-4 h-10 w-px bg-gray-300 md:hidden block" />          {/* RIGHT AREA */}
          <div className="flex items-center md:gap-4 gap-16 pr-1">

            {/* RIGHT LOGO */}
            <Image
              src="/deakinLogo.png"
              alt="Deakin University Logo"
              width={140}
              height={50}
              className="object-contain w-22 h-12 md:w-auto md:h-auto"
            />

            {/* HAMBURGER ICON */}
            <button
              onClick={() => setOpen(true)}
              className="flex flex-col gap-[6px] ml-3 cursor-pointer md:hidden block"
            >
              <span className="w-7 h-[2px] bg-[#1BA3B9]"></span>
              <span className="w-7 h-[2px] bg-[#1BA3B9]"></span>
              <span className="w-7 h-[2px] bg-[#1BA3B9]"></span>
            </button>

          </div>
        </div>
      </header>

      {/* SIDEBAR OVERLAY + PANEL */}
      <AnimatePresence>
        {open && (
          <>
            {/* DARK BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* SLIDING SIDEBAR */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full bg-[#298A95] text-white z-50  flex flex-col justify-between"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.45, ease: "easeInOut" }} // smooth & slow
            >
              {/* CLOSE ICON */}
           <div className="p-8 flex flex-col">
               <button
                onClick={() => setOpen(false)}
                className="text-4xl font-light mb-10 self-end "
              >
                ×
              </button>

              {/* MENU ITEMS */}
              <ul className="space-y-8 text-2xl leading-relaxed">
                <li onClick={() => scrollToSection("trajectories")} className="cursor-pointer">Trajectories</li>
                <li onClick={() => scrollToSection("important-dates")} className="cursor-pointer">Important Dates</li>
                <li onClick={() => scrollToSection("registration")} className="cursor-pointer">Registration & Participation</li>
                <li onClick={() => scrollToSection("schedule")} className="cursor-pointer">Schedule</li>
                <li onClick={() => scrollToSection("venue")} className="cursor-pointer">Venue</li>
              </ul>
           </div>

           
              <div className="mt-auto mb-16">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_wmYFez7rMTnQmEjw7fnkkS-5y0on5-hKWd8AoLlIJ0T6kg/viewform?pli=1" className="block w-full bg-white text-[#298A95] py-4 font-bold shadow text-center">
                  Submit Your Abstract
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
