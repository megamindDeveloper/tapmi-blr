"use client";

import React from "react";

export default function PublicationAvenuesSection() {
  return (
    <section className="w-full bg-[#1BA3B9]">
      <div className="text-white container border-none mx-auto px-6 md:px-16 py-20">
        {/* Heading */}
          <h2 className=" text-[29px] md:text-[42px] font-medium mb-6 leading-tight">
          Publication Avenues for Selected Research Work
        </h2>

        {/* Subheading */}
        <p className="text-white/90 text-lg md:text-2xl font-normal mb-6">
          Partnering Journal
        </p>

        {/* Journal Name */}
        <p className="text-white/90 text-lg md:text-2xl font-medium mb-8">
          The Journal of Emerging Market Finance (Sage, ABDC- B, IF 1.2)
        </p>

        {/* Note */}
        <p className="text-white/90 text-base md:text-start text-justify md:text-lg leading-relaxed mt-12">
          <span className="font-medium">Note:</span> Authors of selected
          high-quality contributions will be invited to extend their work into
          full-length papers for potential submission to the journal. However,
          all recommended submissions must adhere to the journal&apos;s regular
          review policy.
        </p>

    
      </div>
    </section>
  );
}
