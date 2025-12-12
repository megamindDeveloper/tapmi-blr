"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-white py-3">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 flex justify-between items-center">

          {/* LEFT LOGO */}
          <div className="flex items-center gap-4">
            <Image
              src="/tapmiLogo-Colour2.png"
              alt="TAPMI Logo"
              width={180}
              height={80}
              className="object-contain"
            />
          </div>
<div className="mx-4 h-10 w-px bg-gray-300 md:hidden block" />          {/* RIGHT AREA */}
          <div className="flex items-center gap-4">

            {/* RIGHT LOGO */}
            <Image
              src="/deakinlogo.png"
              alt="Deakin University Logo"
              width={140}
              height={50}
              className="object-contain"
            />

            {/* HAMBURGER ICON */}
            <button
              onClick={() => setOpen(true)}
              className="flex flex-col gap-[6px] ml-3 cursor-pointer md:hidden block"
            >
              <span className="w-7 h-[2px] bg-black"></span>
              <span className="w-7 h-[2px] bg-black"></span>
              <span className="w-7 h-[2px] bg-black"></span>
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
              className="fixed top-0 right-0 h-full w-full bg-[#298A95] text-white z-50 p-8 flex flex-col justify-between"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.45, ease: "easeInOut" }} // smooth & slow
            >
              {/* CLOSE ICON */}
              <button
                onClick={() => setOpen(false)}
                className="text-2xl font-light mb-10 self-end"
              >
                ×
              </button>

              {/* MENU ITEMS */}
              <ul className="space-y-8 text-2xl leading-relaxed">
                <li className="cursor-pointer">Trajectories</li>
                <li className="cursor-pointer">Important Dates</li>
                <li className="cursor-pointer">Registration & Participation</li>
                <li className="cursor-pointer">Schedule</li>
                <li className="cursor-pointer">Venue</li>
              </ul>

              {/* BUTTON */}
              <div className="mt-auto mx-auto">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_wmYFez7rMTnQmEjw7fnkkS-5y0on5-hKWd8AoLlIJ0T6kg/viewform?pli=1" className="w-full bg-white text-[#298A95] py-3 px-12  shadow">
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
