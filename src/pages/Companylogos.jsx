import React from "react";

const logos = [
  "https://webkit.moxcreative.com/acadrova/wp-content/uploads/sites/20/2023/06/Brand-4.png",
  "https://webkit.moxcreative.com/acadrova/wp-content/uploads/sites/20/2023/06/Brand-3.png",
  "https://webkit.moxcreative.com/acadrova/wp-content/uploads/sites/20/2023/06/Brand-1.png",
  "https://webkit.moxcreative.com/acadrova/wp-content/uploads/sites/20/2023/06/Brand-5.png",
  "https://webkit.moxcreative.com/acadrova/wp-content/uploads/sites/20/2023/06/Brand-2.png",
];

export default function BillingSection() {
  return (
    <div className="w-full py-2 px-4 md:px-12 bg-gray-100 relative">     
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[length:100%_20px] opacity-40 pointer-events-none"></div>
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        <div className="text-center md:text-left md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Questions about billing, registration, or financial aid?
          </h2>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#8e44ad] font-semibold hover:text-[#8e44ad]-700 transition"
          >
            Learn More
            <span className="ml-1 text-lg text-[#8e44ad]">➜</span>
          </a>
        </div>
        <div className="hidden md:block w-px bg-gray-300 h-20" />
        <div className="relative overflow-hidden w-full md:w-2/3">
          <div className="flex animate-scroll">
            {[...logos, ...logos].map((src, index) => (
              <div key={index} className="flex-shrink-0 px-6 w-1/4">
                <img
                  src={src}
                  alt={`Logo ${index}`}
                  className="h-16 md:h-20 object-contain opacity-90 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
