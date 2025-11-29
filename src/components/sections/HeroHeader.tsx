import Image from "next/image";

export default function HeroHeader() {
  return (
    <header className="w-full bg-white py-3  ">
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">

        {/* LEFT LOGOS */}
        <div className="flex items-center gap-4">
          <Image
            src="/tapmiLogo-Colour2.png"
            alt="TAPMI Logo"
            width={180}
            height={80}
            className="object-contain"
          />
     
        </div>

        {/* RIGHT LOGO */}
        <Image
          src="/deakinlogo.png"
          alt="Deakin University Logo"
          width={140}
          height={50}
          className="object-contain"
        />

      </div>
    </header>
  );
}
