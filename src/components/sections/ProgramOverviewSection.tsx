"use client";

import { programOverview } from "@/src/data/programOverview";
import { useState } from "react";

export default function ProgramOverviewSection() {
  const [activeDay, setActiveDay] = useState<"dayOne" | "dayTwo">("dayOne");

  const data = activeDay === "dayOne" ? programOverview.dayOne : programOverview.dayTwo;

  return (
    <section className="w-full py-8 md:py-20 bg-white">
      <div className="max-w-full mx-auto px-8 md:px-16">
        
        {/* Heading */}
        <h2 className="text-[24px] md:text-[45px] text-black font-medium mb-3 md:mb-10">
          Program Overview{" "}
          <span className="hidden md:inline font-thin text-[28px]">
            {activeDay === "dayOne" ? "Day One" : "Day Two"}
          </span>
        </h2>

        {/* Tabs + Day Indicator (Mobile) / Tabs Only (Desktop) */}
        <div className="flex justify-between md:justify-end items-center mb-6 md:mb-10">
          {/* Day indicator - Only visible on mobile */}
          <span className="md:hidden font-thin text-[18px] text-black">
            {activeDay === "dayOne" ? "Day One" : "Day Two"}
          </span>

          <div className="relative flex p-1 bg-gray-100 rounded-full border border-gray-200 w-[200px] md:w-54">
            <div
              className={`absolute top-1 bottom-1 left-1 w-[95px] md:w-26 rounded-full bg-[#0EA5A9] transition-transform duration-300 ease-in-out ${
                activeDay === "dayTwo" ? "translate-x-full" : "translate-x-0"
              }`}
            />
            <button
              onClick={() => setActiveDay("dayOne")}
              className={`relative z-10 w-[95px] md:w-32 py-2 rounded-full text-[12px] md:text-[14px] font-medium transition-colors duration-300 ${
                activeDay === "dayOne" ? "text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Day One
            </button>
            <button
              onClick={() => setActiveDay("dayTwo")}
              className={`relative z-10 w-[95px] md:w-32 py-2 rounded-full text-[12px] md:text-[14px] font-medium transition-colors duration-300 ${
                activeDay === "dayTwo" ? "text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Day Two
            </button>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[110px_1fr] md:grid-cols-[300px_1fr] gap-x-6 md:gap-x-0 text-black border-t border-b border-black py-2 md:py-3 px-8 md:px-10 text-[14px] md:text-[18px] font-normal">
          <p className="md:px-20">Time</p>
          <p className="md:text-center">Activity</p>
        </div>

        {/* Table Content */}
        <div className="flex flex-col">
          {data.map((item, index) => {
            // Split time at the dash for mobile display
            const timeParts = item.time.split(' – ');
            
            return (
              <div
                key={index}
                className="grid grid-cols-[110px_1fr] md:grid-cols-[300px_1fr] gap-x-6 md:gap-x-0 py-3 md:py-4 px-8 md:px-10 text-[13px] md:text-[18px] leading-relaxed border-b border-gray-200 last:border-b-0"
              >
                <div className="text-gray-800">
                  {/* Mobile: two lines, Desktop: one line */}
                  <div className="flex flex-col md:block">
                    <span>{timeParts[0]} –</span>
                    {timeParts[1] && <span className="md:inline">{timeParts[1]}</span>}
                  </div>
                </div>
                <p className="text-gray-800">{item.activity}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
