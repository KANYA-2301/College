import React from "react";
import ABC from "../assets/nb.jpg";

export default function NothingBeast() {
  return (
    <div
      className="relative flex items-center justify-start bg-cover h-screen bg-center mt-20 py-20 px-6 md:px-16"
      style={{ backgroundImage: `url(${ABC})` }}
    >
      <div className="absolute inset-0 bg-fuchsia-400/30"></div>

      <div className="relative text-white max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug md:leading-tight">
          Nothing Beats Good Education For The Betterment Of A Student's Future
        </h1>
        <p className="text-gray-200 mb-8 text-base md:text-lg lg:text-xl leading-relaxed">
          Ipsum aenean inceptos nostra eleifend interdum tortor dictumst donec purus ligula.
          Sociosqu dapibus iaculis in taciti egestas mauris. Rhoncus suscipit finibus et donec
          imperdiet fermentum auctor.
        </p>
        <button className="bg-[#8e44ad] hover:bg-white hover:text-[#8e44ad] transition-all font-semibold px-8 py-4 text-base md:text-lg rounded-md">
          Apply Now!
        </button>
      </div>
    </div>
  );
}
