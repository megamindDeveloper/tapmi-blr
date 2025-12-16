"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import speakers from "@/src/data/speakers";

interface Speaker {
  id: string | number;
  name: string;
  image: string;
  title: string;
  subtitle?: string;
  subtitle2?: string;
  subtitle3?: string;
  description: string;
  description2?: string;
  Publishing?: string;
  readMoreLink: string;
}

export default function KeynoteSection() {
  const [selected, setSelected] = useState<Speaker | null>(null);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (typeof window === "undefined") return;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    if (selected) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalBodyOverflow || "";
      document.documentElement.style.overflow = originalHtmlOverflow || "";
    }
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [selected]);

  const openModal = (speaker: Speaker) => {
    setSelected(speaker);
  };

  const closeModal = () => {
    setSelected(null);
  };

  return (
    <div className="w-full md:pt-16 md:pb-16 pt-16 pb-8 bg-white">

      <div className="max-w-7xl mx-auto px-8 md:px-4">
        <div className="">
            {/* KEYNOTE SPEAKERS */}
        <h2 className="text-center  text-[32px] md:text-5xl font-medium mb-8">
          Keynote Speakers
        </h2>

        <div className="
    grid grid-cols-2 sm:grid-cols-3 
    sm:flex sm:justify-center sm:flex-wrap
    gap-5 sm:gap-8 lg:gap-16 
    mb-12 lg:mb-10
  ">            {speakers.keynoteSpeakers.map((sp) => (
          <SpeakerCard key={sp.id} sp={sp} onClick={() => openModal(sp)} />
        ))}
     
        </div>
        </div>
    
<div className="my-12">
           <div className="   max-w-6xl mx-auto text-center mb-12 md:flex  flex-col gap-2 ">
          <h2 className="md:text-5xl text-[27px]   font-medium tracking-tight" >Publishing Workshop Series</h2>
          <div className=" flex items-center justify-center  ">

          </div>
            <p className=" md:text-xl text-lg font-normal text-justify md:text-center  mt-8">As part of Intersection 2026, senior scholars and journal editors will facilitate a focused Publishing Workshop Series for PhD scholars and early career researchers. The sessions will address ethics in publication (AI and beyond), avoiding desk rejection and securing an R&R, job market papers and interviews, and fieldwork and research ethics, offering practical insights for successful publishing and academic careers. </p>
        </div>
           <div
          className="
    grid grid-cols-2 
    sm:flex sm:justify-center sm:flex-wrap
    gap-4 sm:gap-6 lg:gap-12  
  "
        >            {speakers.facilitators.map((sp) => (
          <SpeakerCard key={sp.id} sp={sp} onClick={() => openModal(sp)} />
        ))}
    
       
        </div>

</div>

        
       
       

<div className="my-12">
           <div className="   max-w-6xl mx-auto text-center mb-12 md:flex  flex-col gap-3 ">
          <h2 className="md:text-5xl text-[32px]   font-medium" >Editorial Panel</h2>
          <div className=" flex items-center justify-center  ">
                      <span className="text-[#2E8E9EE5] md:text-3xl text-lg  font-bold flex gap-3 py-4">Time: 02:00 PM - 03:45 PM <span className="md:block hidden -mt-1 ">|</span> <br className="md:hidden block" /> Date: 13th March 2026</span>

          </div>
            <p className=" md:text-xl text-lg font-normal text-justify md:text-center mt-5">As part of Intersection 2026, this panel discussion brings together distinguished editors from leading journals to provide PhD scholars and early-career researchers with firsthand insights into the academic publishing landscape. Under the theme Navigating the Publishing Landscape with Insights from Leading Editors, the session will cover editorial expectations, evolving peer-review practices, and emerging trends shaping research across disciplines. The discussion will also highlight the importance of research ethics, transparency, and the key factors influencing editorial decisions and retractions, offering participants practical guidance for successful publishing. </p>
        </div>
           <div
          className="
    grid grid-cols-2 
    sm:flex sm:justify-center sm:flex-wrap
    gap-4 sm:gap-6 lg:gap-12  
  "
        >            {speakers.Editorial.map((sp) => (
          <SpeakerCard key={sp.id} sp={sp} onClick={() => openModal(sp)} />
        ))}
    
       
        </div>

</div>

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-lenis-prevent
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-0 md:px-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-none md:max-w-6xl overflow-hidden rounded-md bg-white shadow-2xl flex flex-col h-[90vh] md:h-[680px]"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Close Button */}
              <button
                className="absolute right-6 top-6 z-10 text-[#2E8E9E] transition hover:text-[#72bfcd]"
                onClick={closeModal}
              >
                <X size={26} strokeWidth={2.2} />
              </button>

              {/* CONTENT */}
              <div
                data-lenis-prevent
                className="flex-1 overflow-y-auto hide-scrollbar px-5 py-6 md:px-10 md:py-10"
              >
                {/* Top row: image left, name/titles right */}
                <div className="flex flex-col gap-4 md:flex-row md:gap-1">
                  <div className="w-auto md:w-[260px] shrink-0">
                    <Image
                      src={selected.image}
                      width={190}
                      height={190}
                      className="shrink-0 w-[160px] h-[200px] md:w-[210px] md:h-[250px] object-cover border border-gray-200"
                      alt={selected.name}
                    />
                  </div>

                  <div className="flex-1 md:mt-8 mt-0">
                    {/* Name */}
                    <h3 className="text-[26px] font-medium leading-snug text-gray-900">
                      {selected.name}
                    </h3>

                    {/* Titles exactly like screenshot */}
                    <p className="mt-2 text-[18px] leading-relaxed text-gray-800 whitespace-pre-line">
                      {selected.title}
                      {selected.subtitle && `\n${selected.subtitle}`}
                      {selected.subtitle2 && `\n${selected.subtitle2}`}
                      {selected.subtitle3 && `\n${selected.subtitle3}`}
                    </p>
                  </div>
                </div>
                <div className=" mt-5 md:mt-8">
                  <p className="md:text-xl text-lg  leading-relaxed text-[#2E8E9E] font-bold">
                     {selected.Publishing}
                  </p>
                </div>

                {/* Full-width description below image section */}
                <div className="mt-6 md:mt-8">


                  <p className="md:text-xl text-lg text-justify leading-relaxed text-[#000000E5]">
                    {selected.description}
                  </p>
                  <p className="md:text-xl text-lg md:text-start text-justify  leading-relaxed text-[#000000E5]">
                    {selected.description2}
                  </p>
                  {selected.readMoreLink &&
                    <a
                    href={selected.readMoreLink}
                    className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[#2E8E9EE5] hover:text-[#72bfcd] transition-all cursor-pointer   "
                  >
                    <Image src="/svgs/learnmore.svg" width={15} height={15} alt="" />
                    <span className="border-b border-[#2E8E9EE5] leading-5 ">Learn More About the Speaker</span>
                  </a>
                  }
                  
                </div>
                <style jsx>{`
        .hide-scrollbar { scrollbar-width: none; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
              </div>

              {/* FOOTER (unchanged) */}
              <div className="hidden md:block w-full bg-[#2E8E9E] ">
                <div className="flex items-center justify-between px-10 py-6">
                  <h4 className="text-[18px] md:text-[20px] font-medium text-white">
                    Become a part of Intersection 2026
                  </h4>

                  <a href="https://forms.gle/y9h7p1ZebvSE3GFg9" className=" bg-white px-6 py-4 text-[15px] font-bold text-[#2E8E9E] shadow-sm transition hover:bg-gray-100">
                    Submit Your Abstract
                  </a>
                </div>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

function SpeakerCard({ sp, onClick }: { sp: Speaker; onClick: () => void }) {
  return (
    <div className="w-full max-w-[180px] cursor-pointer my-2" onClick={onClick}>
      <div className="overflow-hidden w-full mb-3">
        <Image
          alt="speakers"
          src={sp.image}
          width={300}
          height={300}
          className="object-cover w-full transition-transform duration-400 hover:scale-103"
        />
      </div>

      <div className="text-left">
        <p className="text-md font-semibold tracking-tight mb-1 h-11  ">{sp.name}</p>

        <button
          onClick={onClick}
          className="text-[#2E8E9E] md:text-sm text-md font-normal  md:font-bold   tracking-tight border-b border-[#2E8E9E] leading-[24px] md:leading-[16px] hover:text-[#72bfcd] transition-all cursor-pointer "
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

