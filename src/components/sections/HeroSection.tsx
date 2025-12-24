"use client";

import Image from "next/image";
import HeroHeader from "./HeroHeader";

export default function HeroSection() {
  return (
    <section className="w-full h-[92vh]  flex flex-col overflow-hidden">
      <HeroHeader />

      <div className="flex-1 w-full bg-gradient-to-r from-white via-[#bbedf7] to-[#B8EDF7] relative flex flex-col">


        {/* Main Content Container */}
        <div className="flex-1 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-15 flex items-center relative z-10">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[55%] py-2  md:mt-0 sm:py-6 lg:py-3">
            <p className="text-[24px] lg:text-[28px] text-[#1E9BB0] font-normal">
              Intersection 2026
            </p>

            <h1 className="text-[38px] lg:text-[72px] leading-[1.2] sm:leading-[1.2] lg:leading-[72px] font-bold text-[#1E9BB0] mb-3 sm:mb-4  decoration-4 ">
              Navigating the<br />
              New Global Order
            </h1>

            <p className="text-[18px] lg:text-[24px] text-[#000000CC] mb-4 sm:mb-5 lg:mb-6">
              PhD and Early Career Research Colloquium on Management,<br />
              Social Sciences, and Humanities
            </p>

            <button  onClick={() => {
    window.open(
      "https://forms.gle/y9h7p1ZebvSE3GFg9",
      "_blank",
      "noopener,noreferrer"
    );
  }} className="bg-[#1E9BB0] hover:bg-[#1a8a9d] transition text-white px-3 sm:px-4 py-3 sm:py-3 text-[17px] font-bold mt-2 sm:mb-6 lg:mb-8 ">
              Submit Your Abstract
            </button>

            <p className="hidden sm:block text-[12px] sm:text-[15px] lg:text-[18px] text-[#000000CC]">
              Organized by T.A. Pai Management Institute for TAPMI, Bengaluru<br />
              Knowledge Partner: Deakin University, Australia
            </p>
          </div>
        </div>

        {/* IMAGE - Absolute Bottom Right */}
        <div className="absolute md:bottom-0 bottom-20 right-0 w-[80%] h-[50%] sm:w-[90%] sm:h-[70%] lg:w-[80%] lg:h-[90%] z-0 pointer-events-none">
          <Image
            src="/heroBannerImg.png"
            alt="Hero Globe"
            fill
            className="object-contain object-right-bottom"
            priority
          />
        </div>

        {/* BOTTOM VENUE STRIP - Desktop/Tablet */}
        <div className="hidden sm:block w-full bg-[#1E9BB0] text-white py-3 sm:py-4 lg:py-6 relative z-5">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-15 lg2:px-12 text-[14px] sm:text-[20px] lg:text-[24px] flex flex-col gap-1 sm:gap-2">
            <p>
              <span className="font-semibold">Venue:</span> TAPMI, MAHE Bengaluru Campus
            </p>
            <p>
              <span className="font-semibold">Dates:</span> March 12-13th, 2026
            </p>

          </div>
        </div>

        {/* MOBILE-ONLY Organized By + Venue Card */}
        <div className="block sm:hidden w-full bg-[#1E9BB0] text-white pt-4 pb-6 relative z-10">
          <div className="max-w-full mx-auto px-4 text-[17px] leading-relaxed">
            <p className="text-center opacity-95">
              Organized by T.A. Pai Management Institute (TAPMI), Bengaluru
            </p>
            <p className="text-center opacity-95 mt-1">
              Knowledge Partner: Deakin University, Australia
            </p>
            <div className="bg-white text-[#1BA3B9]  px-4 py-3 mt-4 mx-1 shadow">
              <p className="text-[14px] text-center">
                <span className="font-semibold">Venue:</span> TAPMI, MAHE Bengaluru Campus
              </p>
              <p className="text-[14px] mt-1 text-center">
                <span className="font-semibold">Dates:</span> March 12–13th, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
