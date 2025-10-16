import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import bg2 from '../assets/bg2.jpg'
import Footer from './Footer';
import CampusIntro from './CampusIntro';
import VisionMission from './VisionMission';
import Map from './Map'
import OurTeacher from './OurTeacher'
import AchievingPage from './AchievingPage';
const Academics = () => {
  return (
    <div>
      <div  style={{ backgroundImage: `url(${bg2})` }}  className=' bg-cover md:bg-fixed bg-center bg-no-repeat sm:h-80 md:h-100 bg-blend-soft-light bg-[#502d5f]  h-85 w-full flex flex-col justify-center px-6 md:px-20'>
        <h1 className='text-4xl md:text-5xl uppercase text-white font-bold'>About Us</h1>
        <p className='mt-8 justify-center text-white text-sm md:text-base box-border border-1 text-center w-46 flex items-center gap-2 '>Home < FaGreaterThan/> About Us</p>
      </div>
        <CampusIntro/>
      <VisionMission/>
      <Map/>
      <OurTeacher/>
      <div className='relative md:left-50 md:mb-20'>
      <AchievingPage/>
      </div>
      <Footer/>
    </div>
  )
}

export default Academics
