"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function PageNavHeader() {
  const [open, setOpen] = useState(false);
 
  return (
    <header className="hidden md:block w-full bg-[#1B9AAA] relative z-50">

      {/* Top Blue Line */}
      {/* <div className="w-full h-[3px] bg-[#0066A6]"></div> */}

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex w-full justify-end px-8">
        <div
          className="
            max-w-full  px-4 
            flex justify-end items-center
            h-[66px]
            gap-8
            text-white
            text-[14px]
          "
        >
          <a href="#trajectories" className="hover:opacity-80 transition">Trajectories</a>
          <a href="#important-dates" className="hover:opacity-80 transition">Important Dates</a>
          <a href="#registration" className="hover:opacity-80 transition">Registration & Participation</a>
          <a href="#schedule" className="hover:opacity-80 transition">Schedule</a>
          <a href="#venue" className="hover:opacity-80 transition">Venue</a>
          <a href="#submit" className=" hover:opacity-80 transition">Submit Your Abstract</a>
        </div>
      </nav>


      {/* MOBILE NAV */}
      <div className="md:hidden flex justify-start items-center px-6 h-[66px] text-white">
        {/* Hamburger Menu on Left */}
        <button onClick={() => setOpen(true)}>
          <Menu className="w-7 h-7" />
        </button>
      </div>


      {/* SIDEBAR OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>


      {/* SIDEBAR PANEL */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[80%] max-w-[320px]
          bg-[#1B9AAA] text-white shadow-xl 
          flex flex-col p-6 space-y-6
          transform transition-transform duration-400 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <div className="w-full flex justify-end">
          <button onClick={() => setOpen(false)}>
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* MENU ITEMS */}
        <nav className="flex flex-col text-[18px] space-y-6 mt-4 font-light">
          <a href="#trajectories" onClick={() => setOpen(false)}>Trajectories</a>
          <a href="#important-dates" onClick={() => setOpen(false)}>Important Dates</a>
          <a href="#registration" onClick={() => setOpen(false)}>Registration & Participation</a>
          <a href="#schedule" onClick={() => setOpen(false)}>Schedule</a>
          <a href="#venue" onClick={() => setOpen(false)}>Venue</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_wmYFez7rMTnQmEjw7fnkkS-5y0on5-hKWd8AoLlIJ0T6kg/viewform?pli=1" className="font-semibold" onClick={() => setOpen(false)}>
            Submit Your Abstract
          </a>
        </nav>
      </div>

    </header>
  );
}
