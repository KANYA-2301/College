import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import home_bg from '../assets/home_bg.jpg';
import CampusIntro from './CampusIntro';
import VisionMission from './VisionMission';
import OurFacility from './OurFacility';
import TeacherBelieve from './TeacherBelieve';
import OurAcademics from './OurAcademics';
import Map from './Map';
import ChooseUs from './ChooseUs';
import OurTeacher from './OurTeacher';
import AchievingPage from './AchievingPage';
import FAQPage from './FAQPage';
import NothingBeast from './NothingBeast';
import Footer from '../Components/Footer'

const ApplyPage = () => {
  return (
    <div className="w-full">
      <div
        className="relative w-full h-screen bg-cover bg-fixed bg-center flex items-center justify-start"
        style={{ backgroundImage: `url(${home_bg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        <div className="relative max-w-3xl w-full px-6 md:px-10 text-center md:text-left">
          <h1 className="border border-white/40 w-max mx-auto md:mx-0 text-sm uppercase tracking-wider text-white px-3 py-1">
            Welcome To Acadrova
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white mt-5">
            Securing a Brighter Future Through Education
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-7 text-white mt-6">
            Adipiscing suscipit fringilla sociosqu erat libero. Nascetur quisque maecenas
            consectetuer efficitur vivamus sodales porttitor. Libero per montes senectus sem
            fames euismod magnis.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <button className="bg-[#8e44ad] px-6 py-3 flex items-center gap-2 font-bold text-white hover:bg-white hover:text-[#8e44ad] hover:border-[#8e44ad] transition">
              Apply Now
              <MdOutlineKeyboardDoubleArrowRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <CampusIntro />
      <VisionMission />
      <TeacherBelieve />
      <OurFacility />
      <OurAcademics />
      <Map />
      <ChooseUs />
      <OurTeacher />
      <div className='relative md:left-50'>
      <AchievingPage />
      </div>
      <FAQPage />
      <NothingBeast />
      <Footer />

    </div>
  );
};

export default ApplyPage;
