import React from "react";

export default function VisionMission() {
  return (
    <div className="max-w-screen-xl mx-auto mt-20 mb-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="border border-gray-200 md:border-r-0">
          <article className="relative bg-white text-gray-700 p-10 min-h-[220px] flex flex-col justify-between">
            <div className="absolute top-0 bg-[#8e44ad] text-white font-bold text-xl px-6 py-3">
              Our Vision
            </div>
            <p className="text-lg text-left mt-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="mt-6 w-16 h-1 bg-emerald-500 mx-auto"></div>
          </article>
        </div>
        <div className="border border-gray-200 md:border-r-0">
          <article className="relative bg-white text-gray-700 p-10 min-h-[220px] flex flex-col justify-between">
            <div className="absolute top-0 bg-[#8e44ad] text-white font-bold text-xl px-6 py-3">
              Our Mission
            </div>
            <p className="text-lg text-left mt-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="mt-6 w-16 h-1 bg-emerald-500 mx-auto"></div>
          </article>
        </div>
        <div className="border border-gray-200">
          <article className="relative bg-[#8e44ad] text-white shadow-lg p-10 min-h-[220px] flex flex-col justify-between">
            <div className="absolute top-0 bg-white text-[#8e44ad] font-bold text-xl px-6 py-3 shadow-sm">
              Our History
            </div>
            <p className="text-lg text-left mt-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="mt-6 w-16 h-1 bg-orange-400 mx-auto"></div>
          </article>
        </div>
      </div>
    </div>
  );
}
