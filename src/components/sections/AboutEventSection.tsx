import Image from "next/image";

export default function AboutEventSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-full mx-auto px-4 lg:px-15 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT TEXT BLOCK */}
        <div className="flex flex-col justify-center">
          
          <p className="text-[30px] text-gray-900 mb-3">
            About the Event
          </p>

          <h2 className="text-[52px] leading-[50px] font-medium text-gray-900 mb-8">
            Navigating the<br />
            New Global
            Order
          </h2>

          <p className="text-[16px] leading-[28px] text-gray-700 mb-6">
            We are witnessing a transformative era marked by rapid shifts in global 
            power dynamics and systemic disruptions. Key drivers such as artificial 
            intelligence, war and trade conflicts, geopolitical realignments, digital 
            and technological advancements, the pandemic, ecological crises, and 
            shifting demographic patterns are collectively informing these 
            transformations. These changing dynamics are deeply entangled and are 
            significantly redefining economic paradigms, business ecosystems, labor, 
            educational practices, societal norms, culture & our everyday lives. 
            Together, they mark the rise of a New Global Order, which is defined by 
            uncertainty, interdependence, and a continual renegotiation of power, 
            identity, and values.
          </p>

          <p className="text-[16px] leading-[28px] text-gray-700">
            In this evolving context, the need to understand and make sense of the 
            structural and affective impact of such changes is both urgent & necessary. 
            It is in this context that TAPMI Bengaluru, MAHE, in collaboration with 
            Deakin University, Australia, is organising Intersections 2026, a two-day 
            interdisciplinary conference. The conference seeks to bring together 
            academics and scholars working in Management, Humanities and Social sciences 
            to address some of the larger concerns of the time.
          </p>

        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="relative w-full h-[600px] lg:h-full">
          <Image
            src="/images/buildingImg.png" // update path
            alt="TAPMI Bengaluru Building"
            fill
            className="object-cover "
          />
        </div>

      </div>
    </section>
  );
}
