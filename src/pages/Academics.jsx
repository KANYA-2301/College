import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import Academicsimg from '../assets/Academicsimg.png';
import Footer from '../Components/Footer'
import Degree from './Degree'
import OurAcademics from './OurAcademics';
import NothingBeast from './NothingBeast';
import EnterToLearn from './EntertoLearn';

const Academics = () => {
  return (
    <div>
      <div  style={{ backgroundImage: `url(${Academicsimg})` }}  className=' bg-cover md:bg-fixed bg-center bg-no-repeat sm:h-80 md:h-100 bg-blend-soft-light bg-[#502d5f]  h-85 w-full flex flex-col justify-center px-6 md:px-20'>
        <h1 className='text-4xl md:text-5xl text-white font-bold'>Academics</h1>
        <p className='mt-8 justify-center text-white text-sm md:text-base box-border border-1 text-center w-46 flex items-center gap-2 '>Home < FaGreaterThan/> Academics</p>
      </div>
      
      <OurAcademics/>
      <Degree/>
      <NothingBeast/>
      <EnterToLearn/>
      <Footer/>
    </div>
  )
}

export default Academics
