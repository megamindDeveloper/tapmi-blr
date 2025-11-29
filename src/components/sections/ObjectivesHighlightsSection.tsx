import Image from "next/image";
import { objectives, eventHighlights } from "@/src/data/objectivesAndHighlights";

export default function ObjectivesHighlightsSection() {
  return (
    <section className="w-full font-sans bg-white">

      {/* ====================== OBJECTIVES ====================== */}
      <div className="max-w-full lg:px-18 mx-auto px-4 py-24">
        
        {/* Title */}
        <h2 className="text-center text-5xl font-medium mb-16 text-black">
          Objectives
        </h2>

        {/* 3 Cards Grid */}
        <div className="  grid grid-cols-1 md:grid-cols-3 gap-14">
          {objectives.map((item) => (
            <div
              key={item.id}
              className="  py-10 border border-[#0EA5A9] rounded-none px-16  flex flex-col justify-center items-center text-center transition-transform hover:scale-101 duration-300 bg-white"
            >
              <div className="mb-8 w-20 h-20 relative">
                 <Image
                  src={item.icon}
                  alt={item.text}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-lg text-gray-800 leading-relaxed max-w-xs">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ====================== EVENT HIGHLIGHTS ====================== */}
      <div className="w-full bg-[#1BA3B9] py-24 relative overflow-hidden">
        
        {/* Title */}
        <h2 className="text-center text-white text-5xl font-medium mb-16">
          Event Highlights
        </h2>

        {/* 3 Cards */}
        <div className="max-w-full lg:px-18 mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-14">
          {eventHighlights.map((item) => (
            <div
              key={item.id}
              className="border border-white rounded-none px-12 flex flex-col justify-center items-center text-center text-white min-h-[240px] transition-transform hover:scale-101 duration-300"
            >
              <div className="mb-8 w-20 h-20 relative">
                <Image
                  src={item.icon}
                  alt={item.text}
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <p className="text-xl leading-relaxed max-w-xs">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
