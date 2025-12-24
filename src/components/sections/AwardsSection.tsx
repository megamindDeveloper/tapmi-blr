"use client";

import Image from "next/image";
import React from "react";

export default function AwardsSection() {
  return (
    <section className="w-full bg-[#1BA3B9] text-white py-12 lg:py-24 ">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-1 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* IMAGE SECTION - Top on Mobile, Right on Desktop */}
        <div className="w-full lg:order-2 lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-[280px] h-[350px] md:w-[400px] md:h-[500px] lg:w-[550px] lg:h-[650px]">
            <Image
              src="/images/awardImg.png"
              alt="Award Trophy"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* TEXT CONTENT - Bottom on Mobile, Left on Desktop */}
        <div className="w-full lg:order-1 lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-[32px] md:text-[42px] font-medium mb-6 leading-tight">
            Best Paper Awards
          </h2>

          <p className="text-white/90 text-base text-justify lg:text-start  md:text-xl leading-relaxed mb-10 max-w-2xl lg:max-w-none">
            To recognise excellence in research and scholarly contribution, Best
            Paper Awards will be presented across the four major trajectories of
            the colloquium.
          </p>

          <div className="w-full space-y-7 mb-10">
            {/* Award Pills */}
            <div className="w-full lg:w-[85%] border-2 border-white/60 rounded-xl px-6 py-4 text-lg md:text-2xl font-normal bg-transparent">
              Best Paper Award – ₹5,000
            </div>

            <div className="w-full lg:w-[85%] border-2 border-white/60 rounded-xl px-6 py-4 text-lg md:text-2xl font-normal bg-transparent">
              Second Best Paper Award – ₹3,000
            </div>

            <div className="w-full lg:w-[85%] border-2 border-white/60 rounded-xl px-6 py-4 text-lg md:text-2xl font-normal bg-transparent">
              Third Best Paper Award – ₹2,000
            </div>
          </div>

          <p className="text-white/90 text-base md:text-lg text-justify lg:text-start leading-relaxed max-w-2xl lg:max-w-none">
            The awards will be adjudicated by the{" "}
            <span className="font-bold">Track Chairs and Review Committee</span>,
            based on originality, analytical rigour, and relevance to the theme
            of the colloquium. All accepted and presented papers will be
            considered for awards under their respective tracks.
          </p>
        </div>

      </div>
    </section>
  );
}