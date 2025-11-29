import { StyledMap } from "../ui/StyledMap";

export default function EventVenueSection() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* FOR MOBILE: STACKED LAYOUT */}
      <div className="block md:hidden w-full">

        {/* EVENT VENUE CARD */}
        <div className="w-full bg-[#1BA3B9] text-white px-6 py-12">
          <h2 className="text-2xl font-medium mb-4">Event Venue</h2>

          <p className="text-[15px] font-thin leading-6 mb-4">
            T A Pai Management Institute<br />
            Manipal Academy of Higher Education,<br />
            Thanisandra Main Rd, Chokkanahalli,<br />
            Bengaluru, Karnataka 560064
          </p>

          <a
            href="#"
            className="inline-block text-[16px] font-thin text-white/90 border-b-[1.5px] border-white/80 mb-8"
          >
            View on Maps
          </a>

          <div className="mt-8">
            <h3 className="text-[18px] font-semibold mb-2">Please Note</h3>

            <ul className="list-disc pl-5 space-y-2 text-[15px] font-thin leading-6">
              <li>Accommodation and travel arrangements will need to be made by participants.</li>
              <li>A list of recommended places to stay will be provided upon request.</li>
            </ul>
          </div>
        </div>

        {/* MOBILE MAP BELOW CARD */}
        <div className="w-full h-[300px]">
          <StyledMap />
        </div>
      </div>


      {/* DESKTOP (unchanged layout) */}
      <div className="hidden md:block relative h-[75vh]">

        {/* MAP FULL BG */}
        <StyledMap />

        {/* OVERLAY CARD */}
        <div
          className="
            absolute top-0 left-16 
            bg-[#1BA3B9] text-white 
            px-10 pt-16
            w-[400px] h-full
          "
        >
          <h2 className="text-3xl font-medium mb-5">Event Venue</h2>

          <p className="text-[18px] font-thin leading-6 mb-5">
            T A Pai Management Institute<br />
            Manipal Academy of Higher Education,<br />
            Thanisandra Main Rd, Chokkanahalli,<br />
            Bengaluru, Karnataka 560064
          </p>

          <a
            href="#"
            className="
              inline-block text-[18px] font-thin 
              text-white/90 border-b-[2px] border-white/80 
              mb-10
            "
          >
            View on Maps
          </a>

          <div className="mt-12">
            <h3 className="text-[20px] font-semibold mb-2">Please Note</h3>

            <ul className="list-disc pl-5 space-y-1 text-[18px] font-thin leading-6">
              <li>Accommodation and travel arrangements will need to be made by participants.</li>
              <li>A list of recommended places to stay will be provided upon request.</li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
}
