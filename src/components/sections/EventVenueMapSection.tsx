import { StyledMap } from "../ui/StyledMap";


export default function EventVenueSection() {
  return (
    <section id="venue" className="relative w-full overflow-hidden">

      {/* FOR MOBILE: STACKED LAYOUT */}
      <div className="block md:hidden w-full">

        {/* EVENT VENUE CARD */}
        <div className="w-full bg-[#1BA3B9] text-white px-12 py-12">
          <h2 className="text-3xl font-medium mb-4">Event Venue</h2>

          <p className="text-[15px] font-thin leading-6 mb-4">
            T A Pai Management Institute<br />
            Manipal Academy of Higher Education,<br />
            Govindapura, Yelahanka,<br />
            Bengaluru 560063, Karnataka, India
          </p>

          <a
            href="https://maps.app.goo.gl/yxDXjJt8XEQs4Fon6"
            target="_blank"
            className="inline-block text-[16px] font-thin text-white/90 border-b-[1.5px] border-white/80 mb-8 "
          >
            View on Maps
          </a>

          <div className="mt-8">
            <h3 className="text-[18px] font-semibold mb-2">Please Note</h3>

            <ul className="list-disc pl-8   space-y-2 text-[15px] font-thin leading-6">
              <li>Accommodation and travel arrangements will need to be made by participants.</li>
              <li>A list of recommended places to stay will be provided upon request.</li>
            </ul>
          </div>
        </div>

        {/* MOBILE MAP BELOW CARD */}
        <div className="w-full h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.545023547391!2d77.58836297482189!3d13.127984011430867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae146c1aeeb9fb%3A0xf51149b8ae2bd6e5!2sT.%20A.%20Pai%20Management%20Institute!5e0!3m2!1sen!2sin!4v1765886548875!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>


      {/* DESKTOP (unchanged layout) */}
      <div className="hidden md:block relative h-[75vh]">

        {/* MAP FULL BG */}
        {/* <StyledMap /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.545023547391!2d77.58836297482189!3d13.127984011430867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae146c1aeeb9fb%3A0xf51149b8ae2bd6e5!2sT.%20A.%20Pai%20Management%20Institute!5e0!3m2!1sen!2sin!4v1765886548875!5m2!1sen!2sin"
          width={2000}
          height={1000}
           className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />


        {/* OVERLAY CARD */}
        <div
          className="
            absolute top-0 left-16 
            bg-[#1BA3B9] text-white 
            px-10 pt-16
            w-[400px] h-full
          "
        >
          <h2 className="text-5xl font-medium mb-5">Event Venue</h2>

          <p className="text-[18px] font-thin leading-6 mb-5">
            T A Pai Management Institute<br />
            Manipal Academy of Higher Education,<br />
            Govindapura, Yelahanka,<br />
            Bengaluru 560063, Karnataka, India
          </p>

          <a
            href="https://maps.app.goo.gl/yxDXjJt8XEQs4Fon6"
            target="_blank"
            className="
              inline-block text-[18px] font-thin 
              text-white/90 border-b-[2px] border-white/80 
              mb-10 hover:text-[#436667] hover:border-[#436667] duration-300 transition-all
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
