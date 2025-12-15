"use client";

import { useState } from "react";
import {
  registrationTabs,
  registrationTable,
  participationContent,
} from "@/src/data/registrationDetails";


export default function RegistrationDetailsSection() {
  const [activeTab, setActiveTab] = useState("registration");

  return (
    <section id="registration" className="w-full py-16 bg-white font-sans text-black">
      <div className=" mx-auto px-8 sm:px-6 lg:px-15">
        
        {/* Title */}
        <div className="mb-0">
          <h2 className="text-[32px] md:text-[45px] font-medium text-left leading-tight text-black mb-6">
            Registration & <br className="md:hidden" />
            Participation Details
          </h2>
        
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 md:gap-48 mb-6 md:mb-12 relative border-b-2 border-[#C8C8C8] md:border-t-2 py-4 md:py-6">
          {registrationTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-[16px] md:text-[18px] font-medium relative transition-colors ${
                activeTab === tab.id
                  ? "text-black border-b-[3px] border-[#1BA3B9] pb-1"
                  : "text-black hover:text-[#1BA3B9] transition-all pb-1"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Registration Details Table */}
        {activeTab === "registration" && (
          <div className="w-full">
            {/* Table Header */}
            <div className=" flex items-center justify-center gap-6 md:gap-0  md:grid grid-cols-[1.5fr_1fr_1fr] pb-4 mb-2">
              <p className="md:text-[18px] text-[16px] font-normal text-black text-left">
                {registrationTable.headings[0]}
              </p>
              <p className="md:text-[18px] text-[16px] font-normal text-black text-center">
                {registrationTable.headings[1]}
              </p>
              <p className="md:text-[18px] text-[16px] font-normal text-black text-center">
                {registrationTable.headings[2]}
              </p>
            </div>
            {/* Divider under headers */}
            {/* <hr className="border-t border-[#1BA3B9] w-full mb-0" />  -- Removed per image observation, strictly following section borders */}

            {/* Table Body */}
            {registrationTable.rows.map((row, idx) => {
              const isExtended = row.section.includes("Extended");

              return (
                <div key={idx} className="mb-0">
                  {/* Section Title */}
                  <div className="py-4 border-t border-b border-[#1BA3B9] w-full mt-4 mb-4">
                     <p className="text-[16px] md:text-[18px] font-bold text-black text-center md:text-start">
                        {isExtended ? (
                             <>
                                {row.section.replace("*", "")}
                                <span className="text-[#1BA3B9]">*</span>
                             </>
                        ) : (
                            row.section
                        )}
                      </p>
                  </div>

                  {/* Rows */}
                  {row.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col md:grid md:grid-cols-[1.5fr_1fr_1fr] py-4 items-center"
                    >
                      {/* Label - Hide for extended abstract special row if needed, but design implies empty space or specific layout. 
                          For normal rows: Left Aligned. 
                          For Extended: The image shows empty first col. */}
                       <p className={` md:block hidden text-[16px] md:text-[18px] text-black font-normal ${isExtended ? 'hidden md:block md:invisible' : 'text-left'}`}>
                          {item.label}
                        </p>
                      
                    

                      {/* Early Career Data */}
                      <div className="grid grid-cols-3 w-full md:w-auto md:contents">
                         <span className="md:hidden text-[18px] font-medium text-gray-700 md:text-center text-start"> {item.label}</span>
                        <p className="text-[16px] md:text-[18px] text-black text-center">
                          {item.phd}
                        </p>
                        <p className="text-[16px] md:text-[18px] text-black text-center">
                          {item.aca}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Footnote */}
                  {row.footnote && (
                    <p className="mt-8 text-[14px] md:text-[16px] text-black font-normal text-left">
                      <span className="text-[#1BA3B9]">*</span> {row.footnote}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Participation Details - Kept mostly same but ensuring structure aligns if needed */}
        {activeTab === "participation" && (
          <div className="w-full pt-4">
             {/* Reusing similar typography for consistency */}
            <div className="space-y-8 mb-10">
              <div>
                <p className="text-[20px] font-semibold text-black mb-2">Eligibility</p>
                <p className="text-[18px] text-gray-700 leading-relaxed">
                  {participationContent.eligibility}
                </p>
              </div>

              <div>
                <p className="text-[20px] font-semibold text-black mb-2">Accommodation</p>
                <p className="text-[18px] text-gray-700 leading-relaxed">
                  {participationContent.accommodation}
                </p>
              </div>

              <div>
                <p className="text-[20px] font-semibold text-black mb-2">Travel</p>
                <p className="text-[18px] text-gray-700 leading-relaxed">
                  {participationContent.travel}
                </p>
              </div>
            </div>

            {/* Teal Box */}
           {/* Teal Box */}
<div className="bg-[#1BA3B9] text-white p-6 md:p-10">
  {/* Title */}
  <p className="text-[24px] font-semibold mb-10">
    Submission Deadlines
  </p>

  <div className="space-y-10">
    {/* Abstract */}
    <div className="flex justify-between items-start gap-8">
      <div className="max-w-[75%]">
        <p className="text-[20px] font-semibold md:mb-3">
          Abstract
        </p>
        <p className="text-[18px] hidden md:block  leading-[28px] opacity-90">
          500–600 words, highlighting research gap, objectives,
          methodology, key findings, and contributions
        </p>
      </div>

      <p className="text-[18px] font-normal whitespace-nowrap pt-[2px]">
        15 / 30 Dec 2025
      </p>
    </div>
 <p className="text-[18px] leading-[28px] -mt-6 md:hidden block opacity-90">
          500–600 words, highlighting research gap, objectives,
          methodology, key findings, and contributions
        </p>
    {/* Extended Abstract */}
    <div className="flex justify-between items-start gap-8">
      <div className="max-w-[75%]">
        <p className="text-[20px] font-semibold mb-3">
          Extended Abstract<br />/ Full Paper
        </p>
        <p className="text-[18px] hidden md:block leading-[28px] opacity-90">
          3000–5000 words, including literature review,
          methodology, results, and conclusions
        </p>
      </div>

      <p className="text-[18px] font-normal whitespace-nowrap pt-[2px]">
        1 Jan 2026
      </p>
    </div>
    <p className="text-[18px] -mt-6 leading-[28px] md:hidden block opacity-90">
      3000–5000 words, including literature review,
      methodology, results, and conclusions
    </p>
  </div>
</div>
          </div>
        )}
      </div>
    </section>
  );
}
