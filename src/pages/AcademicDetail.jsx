import React from "react";
import Labimg from "../assets/Labimg.jpg";
import DepartmentContact from "./DepartmentContact";
import NothingBeast from "./NothingBeast";
import AchievingPage from "./AchievingPage";
import Footer from "./Footer";

const AcademicDetail = () => {
  return (
    <>
      <section
        className="relative w-full h-[380px] bg-cover bg-center bg-fixed flex items-center"
        style={{ backgroundImage: `url(${Labimg})` }}
      >
        <div className="absolute inset-0 bg-[#8e44ad]/40"></div>
        <div className="relative max-w-5xl mx-auto px-10 text-white md:m-0">
          <span className="bg-[#8e44ad] px-4 py-1 text-sm font-semibold uppercase">
            Graduate Program
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Computer Science
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </section>
      <DepartmentContact />
      <NothingBeast />
      <div className='relative md:left-50 md:mb-20'>
      <AchievingPage />
      </div>
      <Footer />
    </>
  );
};

export default AcademicDetail;
