import React from "react";
import studingboy from "../assets/studingboy.jpg"


export default function NothingBeast() {
  return (
    <div className="relative h-130 flex items-center object-cover justify-start bg-cover bg-center mt-20 bg-blend-soft-light"
    style={{ backgroundImage: `url(${studingboy})` }} >
      <div className="absolute inset-0 bg-fuchsia-900/30"></div>
      <div className="relative text-white px-8 md:px-10 w-3xl ">
        <h1 className="text-xl md:text-3xl font-bold mb-6 leading-tight">
          Nothing Beats Good Education For The Betterment Of A Student's Future
        </h1>
        <p className="text-gray-200 mb-8 text-lg">
          Ipsum aenean inceptos nostra eleifend interdum tortor dictumst donec purus ligula. 
          Sociosqu dapibus iaculis in taciti egestas mauris. Rhoncus suscipit finibus et donec 
          imperdiet fermentum auctor.</p>
        <button className="bg-[#8e44ad] hover:bg-white hover:text-[#8e44ad]  transition text-white font-semibold px-6 py-3">Discover More</button>
      </div>
    </div>
  );
}
