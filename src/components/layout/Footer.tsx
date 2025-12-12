import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8F8F8] pt-12 pb-10 border-t border-gray-200">

      {/* Logo + Address */}
      <div className="max-w-full mx-auto px-6  md:px-18 text-center">
        
        {/* LOGO */}
        <div className="flex justify-center">
          <Image
            src="/tapmiLogo-Colour2.png"
            alt="TAPMI Logo"
            width={260}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Address */}
        <p className="text-[16px] text-gray-800 mt-6 leading-relaxed">
          Manipal Academy of Higher Education,<br />
          Thanisandra Main Rd, Chokkanahalli,<br className="block md:hidden" />
          Bengaluru, Karnataka 560064
        </p>

        {/* Divider */}
        <div className="w-full  border-t  border-gray-300 mt-10 mb-8"></div>
      </div>


      {/* CONTACT + SOCIAL BLOCK */}
      <div className="max-w-full mx-auto   md:px-25">

        {/* CONTACTS — responsive: stacked on mobile, inline on md+ */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center text-gray-900 gap-6 md:gap-0">

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
            {/* Contact #1 */}
            <div className="flex items-center gap-3 text-md md:hidden ">
              <Image src="/svgs/phone.svg" alt="" height={20} width={20} className="w-4 h-4 md:w-4 md:h-4 text-[#2B2A29]/70 hover:text-black" />
              <div className="flex  md:flex-row gap-2 md:gap-0 md:items-center">
                <p className="font-semibold text-[#2B2A29]/70 md:mr-2">Abhishek Singh:</p>
                <p className="text-gray-700">+91 917 955 5441</p>
              </div>
            </div>

            {/* Contact #2 */}
            <div className="flex items-center gap-3 text-md md:hidden " >
              <Image src="/svgs/phone.svg" alt="" height={20} width={20} className="w-4 h-4 md:w-4 md:h-4 text-[#2B2A29]/70 hover:text-black" />
              <div className="flex  md:flex-row gap-2 md:gap-0 md:items-center">
                <p className="font-semibold text-[#2B2A29]/70 md:mr-2">Jhonson P:</p>
                <p className="text-gray-700">+91 960 601 3114</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-lg">
              <Image src="/svgs/email.svg" alt="" height={20} width={20} className="w-5 h-5 text-[#2B2A29]/70 hover:text-black" />
              <p className="text-[#2B2A29]/70">engage.tapmiblr@manipal.edu</p>
            </div>
          </div>

          {/* SOCIAL ICONS - appear below contacts on mobile */}
          <div className="flex justify-center items-center gap-3 mt-4 md:mt-0">
            <Image src="/svgs/instagram.svg" alt="" height={20} width={20} className="w-7 h-7 md:w-9 md:h-9 text-gray-800 hover:text-black" />
            <Image src="/svgs/facebook.svg" alt="" height={20} width={20} className="w-7 h-7 md:w-9 md:h-9 text-gray-800 hover:text-black" />
            <Image src="/svgs/linkedin.svg" alt="" height={20} width={20} className="w-7 h-7 md:w-9 md:h-9 text-gray-800 hover:text-black" />
            <Image src="/svgs/youtube.svg" alt="" height={20} width={20} className="w-7 h-7 md:w-9 md:h-9 text-gray-800 hover:text-black" />
          </div>

        </div>

      </div>

    </footer>
  );
}
