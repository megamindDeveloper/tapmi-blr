import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8F8F8] pt-12 pb-10 border-t border-gray-200">

      {/* Logo + Address */}
      <div className="max-w-full mx-auto px-4 text-center">
        
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
        <div className="w-full border-t border-gray-300 mt-10 mb-8"></div>
      </div>


      {/* CONTACT + SOCIAL BLOCK */}
      <div className="max-w-6xl mx-auto px-4">

        {/* CONTACTS — MOBILE FIXED */}
        <div className="
          flex flex-col 
          md:flex-row md:justify-between md:items-center
          text-gray-900 
          gap-6 md:gap-0
        ">

          {/* Contact #1 */}
          <div className="flex items-center gap-3 justify-center text-sm">
          <Image src='/svgs/phone.svg' alt="" height={20} width={20} className="w-5 h-5 text-gray-800 hover:text-black" />
            <p className="font-semibold">Abhishek Singh:</p>
            <p className="text-gray-700">+91 917 955 5441</p>
          </div>

          {/* Contact #2 */}
          <div className="flex items-center gap-3 justify-center text-sm">
          <Image src='/svgs/phone.svg' alt="" height={20} width={20} className="w-5 h-5 text-gray-800 hover:text-black" />
            <p className="font-semibold">Jhonson P:</p>
            <p className="text-gray-700">+91 960 601 3114</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 justify-center text-sm">
          <Image src='/svgs/email.svg' alt="" height={20} width={20} className="w-5 h-5 text-gray-800 hover:text-black" />
            <p className="text-gray-700">engage.tapmiblr@manipal.edu</p>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <Image src='/svgs/instagram.svg' alt="" height={20} width={20} className="w-6 h-6 text-gray-800 hover:text-black" />
          <Image src='/svgs/facebook.svg' alt="" height={20} width={20} className="w-6 h-6 text-gray-800 hover:text-black" />
          <Image src='/svgs/linkedin.svg' alt="" height={20} width={20} className="w-6 h-6 text-gray-800 hover:text-black" />
          <Image src='/svgs/youtube.svg' alt="" height={20} width={20} className="w-6 h-6 text-gray-800 hover:text-black" />
        </div>

      </div>

    </footer>
  );
}
