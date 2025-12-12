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
    <section className="w-full py-8 md:py-16 bg-white font-sans">
      <div className="max-w-full mx-auto px-8 md:px-16">
        {/* Title */}
        <h2 className="text-[20px] md:text-[45px] font-medium text-left md:text-center mb-6 md:mb-12 text-black">
          Registration & Participation Details
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 md:gap-48 mb-6 md:mb-12 relative border-b-2 border-[#C8C8C8] md:border-t-2 py-4 md:py-6">
          {registrationTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 text-[14px] md:text-[18px] font-semibold relative z-10 transition-colors ${
                activeTab === tab.id
                  ? "text-black border-b-[3px] border-[#0EA5A9]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Registration Details Table */}
        {activeTab === "registration" && (
          <div className="w-full">
            {/* Table Header - Hidden on mobile */}
            <div className="hidden md:grid grid-cols-[2fr_1fr_1fr] pb-4 mb-0 px-6 border-b-2 border-[#1BA3B9]">
              {registrationTable.headings.map((h, i) => (
                <p
                  key={i}
                  className={`text-[18px] font-medium text-gray-800 ${
                    i === 0 ? "text-left" : "text-right"
                  }`}
                >
                  {h}
                </p>
              ))}
            </div>

            {/* Table Body */}
            {registrationTable.rows.map((row, idx) => {
              const isExtended = row.section.includes("Extended");

              return (
                <div key={idx}>
                  {/* Section Title or Special Row */}
                  {!isExtended ? (
                    <>
                      <div className="py-3 md:py-4 border-b-2 border-[#1BA3B9] px-4 md:px-8">
                        <p className="text-[16px] md:text-[18px] font-semibold text-black">
                          {row.section}
                        </p>
                      </div>
                      {/* Rows */}
                      {row.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] py-3 md:py-4 border-b-2 border-[#1BA3B9] px-4 md:px-8 gap-2 md:gap-0"
                        >
                          <p className="text-[14px] md:text-[18px] text-gray-700 font-normal">
                            {item.label}
                          </p>
                          <div className="flex justify-between md:contents">
                            <p className="text-[14px] md:text-[18px] text-gray-700 md:text-right">
                              <span className="md:hidden font-medium">Ph.D Scholars: </span>
                              {item.phd}
                            </p>
                            <p className="text-[14px] md:text-[18px] text-gray-700 md:text-right">
                              <span className="md:hidden font-medium">Early Career: </span>
                              {item.aca}
                            </p>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    /* Special Case for Extended Abstract which is a single row with bold title */
                    <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] py-3 md:py-4 border-b-2 border-[#1BA3B9] px-4 md:px-8 gap-2 md:gap-0">
                      <p className="text-[16px] md:text-[18px] font-semibold text-black">
                        {row.section}
                      </p>
                      <div className="flex justify-between md:contents">
                        <p className="text-[14px] md:text-[18px] text-gray-700 md:text-right">
                          {row.items[0].phd}
                        </p>
                        <p className="text-[14px] md:text-[18px] text-gray-700 md:text-right">
                          {row.items[0].aca}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Footnote */}
                  {row.footnote && (
                       <p className="mt-3 md:mt-4 text-[12px] md:text-[16px] text-black font-normal px-4 md:px-8">
                       <span className="text-[#1BA3B9]">*</span>  {row.footnote}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Participation Details */}
        {activeTab === "participation" && (
          <div className="w-full">
            <div className="space-y-6 md:space-y-8 mb-6 md:mb-10">
              <div>
                <p className="text-[16px] md:text-[20px] font-semibold text-black mb-1">Eligibility</p>
                <p className="text-[14px] md:text-[18px] text-gray-700 leading-relaxed">
                  {participationContent.eligibility}
                </p>
              </div>

              <div>
                <p className="text-[16px] md:text-[20px] font-semibold text-black mb-1">Accommodation</p>
                <p className="text-[14px] md:text-[18px] text-gray-700 leading-relaxed">
                  {participationContent.accommodation}
                </p>
              </div>

              <div>
                <p className="text-[16px] md:text-[20px] font-semibold text-black mb-1">Travel</p>
                <p className="text-[14px] md:text-[18px] text-gray-700 leading-relaxed">
                  {participationContent.travel}
                </p>
              </div>
            </div>

            {/* Teal Box */}
            <div className="bg-[#1BA3B9] text-white p-5 md:px-8 md:py-10 rounded-none shadow-sm">
              <p className="text-[16px] md:text-[20px] font-semibold mb-5 md:mb-8">Submission Deadlines</p>

              <div className="space-y-5 md:space-y-8">
                {/* Abstract */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-8">
                  <div className="flex-1">
                    <p className="text-[15px] md:text-[22px] font-semibold mb-2">
                      {participationContent.submissionBox.abstract.title}
                    </p>
                    <p className="text-[13px] md:text-[18px] leading-relaxed opacity-90">
                      {participationContent.submissionBox.abstract.description}
                    </p>
                  </div>
                  <p className="text-[13px] md:text-[18px] font-normal md:whitespace-nowrap mt-1 md:mt-0">
                    {participationContent.submissionBox.abstract.date}
                  </p>
                </div>

                {/* Extended Abstract */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-8">
                  <div className="flex-1">
                    <p className="text-[15px] md:text-[22px] font-semibold mb-2">
                      {participationContent.submissionBox.extended.title}
                    </p>
                    <p className="text-[13px] md:text-[18px] leading-relaxed opacity-90">
                      {participationContent.submissionBox.extended.description}
                    </p>
                  </div>
                  <p className="text-[13px] md:text-[18px] font-normal md:whitespace-nowrap mt-1 md:mt-0">
                    {participationContent.submissionBox.extended.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
