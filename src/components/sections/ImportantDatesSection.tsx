import { importantDates } from "@/src/data/importantDates";

export default function ImportantDatesSection() {
  return (
    <section className="w-full h-auto md:h-[70vh] bg-[#1BA3B9] py-12 md:py-18">
      <div className="w-full max-w-full mx-auto px-8 md:px-16  ">

        {/* Heading */}
        <h2 className="text-white text-[26px] md:text-[45px] font-normal mb-8 md:mb-7 leading-tight">
          Important Dates
        </h2>

        {/* Dates List */}
        <div className="flex flex-col">
          {importantDates.map((item, index) => (
            <div
              key={index}
              className={`
                flex flex-col md:flex-row md:items-center
                py-4 md:py-7 
                ${index !== importantDates.length - 1 ? "border-b border-white/40" : ""}
              `}
            >
              {/* Date */}
              <div className="w-full md:w-[300px] shrink-0 mb-1 md:mb-0">
                <p className="text-white font-semibold text-[18px] md:text-[22px] leading-tight">
                  {item.date}
                </p>
              </div>

              {/* Description */}
              <div className="flex-1">
                <p className="text-white/90 text-[14px] md:text-[24px] font-light leading-[20px] md:leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
