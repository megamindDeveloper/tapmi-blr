
  "use client";

  import { useState, useEffect } from "react";
  import Image from "next/image";
  import { X } from "lucide-react";
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
    Publishing?:string;
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
      <div className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-4">
          {/* KEYNOTE SPEAKERS */}
          <h2 className="text-center  text-[32px] md:text-[44px] font-medium mb-8">
            Keynote Speakers
          </h2>

          <div className="grid grid-cols-2 lg:flex lg:justify-center gap-6 lg:gap-16 mb-16 lg:mb-24 justify-items-center">
            {speakers.keynoteSpeakers.map((sp) => (
              <SpeakerCard key={sp.id} sp={sp} onClick={() => openModal(sp)} />
            ))}
          </div>

          {/* FACILITATORS */}
          <h2 className="text-center text-[32px] md:text-[44px] font-medium mb-8">Facilitators</h2>

          <div className="grid grid-cols-2 lg:flex lg:justify-center gap-6 lg:gap-12 justify-items-center">
            {speakers.facilitators.map((sp) => (
              <SpeakerCard key={sp.id} sp={sp} onClick={() => openModal(sp)} />
            ))}
          </div>
        </div>

        {/* MODAL */}
     {selected && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-0 md:px-4">
    <div className="relative w-full max-w-none md:max-w-6xl overflow-hidden rounded-md bg-white shadow-2xl flex flex-col h-[90vh] md:h-[680px]">

      {/* Close Button */}
      <button
        className="absolute right-6 top-6 z-10 text-sky-600 transition hover:text-sky-700"
        onClick={closeModal}
      >
        <X size={26} strokeWidth={2.2} />
      </button>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-5 py-6 md:px-10 md:py-10">
        {/* Top row: image left, name/titles right */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-1">
          <div className="w-auto md:w-[240px] shrink-0">
            <Image
              src={selected.image}
              width={190}
              height={190}
              className="shrink-0 w-[160px] h-[200px] md:w-[190px] md:h-[190px] object-cover border border-gray-200"
              alt={selected.name}
            />
          </div>

          <div className="flex-1">
            {/* Name */}
            <h3 className="text-[26px] font-medium leading-snug text-gray-900">
              {selected.name}
            </h3>

            {/* Titles exactly like screenshot */}
            <p className="mt-2 text-[18px] leading-relaxed text-gray-800 whitespace-pre-line">
              {selected.title}
              {"\n"}{selected.subtitle}
              {"\n"}{selected.subtitle2}
              {"\n"}{selected.subtitle3}
            </p>
          </div>
        </div>
        <div className=" mt-1 md:mt-8">
          <p className="text-[16px] leading-relaxed text-[#2E8E9E] font-bold">
            { selected.Publishing&&"Publishing Workshop: "} {selected.Publishing}
          </p>
        </div>
  
        {/* Full-width description below image section */}
        <div className="mt-6 md:mt-8">


          <p className="text-[14px] md:text-[16px] leading-relaxed text-[#000000E5]">
            {selected.description}
          </p>
           <p className="text-[14px] md:text-[16px]  leading-relaxed text-[#000000E5]">
            {selected.description2}
          </p>
          <a
            href={selected.readMoreLink}
            className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[#2E8E9EE5]  "
          >
            <Image src="/svgs/learnmore.svg" width={15} height={15} alt="" />
            <span className="border-b border-[#2E8E9EE5] leading-5 ">Learn More About the Speaker</span>
          </a>
        </div>
      <style jsx>{`
        .hide-scrollbar { scrollbar-width: none; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
      </div>

      {/* FOOTER (unchanged) */}
      <div className="hidden md:block w-full bg-[#5EB1B7] ">
        <div className="flex items-center justify-between px-10 py-6">
          <h4 className="text-[18px] md:text-[20px] font-medium text-white">
            Become a part of Intersection 2026
          </h4>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_wmYFez7rMTnQmEjw7fnkkS-5y0on5-hKWd8AoLlIJ0T6kg/viewform?pli=1" className=" bg-white px-6 py-2.5 text-[15px] font-medium text-[#356268] shadow-sm transition hover:bg-gray-100">
            Submit Your Abstract
          </a>
        </div>
      </div>
    </div>
  </div>
)}

      </div>
    );
  }

  function SpeakerCard({ sp, onClick }: { sp: Speaker; onClick: () => void }) {
    return (
      <div className="w-[180px]">
        <Image
          src={sp.image}
          width={150}
          height={150}
          alt={sp.name}
          className="object-cover w-full h-auto mb-3"
        />
        
        <div className="text-left">
          <p className="text-md font-semibold tracking-tight mb-1 h-11  ">{sp.name}</p>
          
          <button
            onClick={onClick}
            className="text-[#2E8E9E] text-sm font-bold tracking-tight border-b border-[#2E8E9E] leading-[16px]"
          >
            Learn More
          </button>
        </div>
      </div>
    );
  }
