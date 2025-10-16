import React from 'react'
import bg2 from '../assets/bg2.jpg'
import { FaQuoteRight } from "react-icons/fa";

const AchievingPage = () => {
  return (
   
       <div style={{ backgroundImage: `url(${bg2})` }} className='bg-cover bg-no-repeat bg-blend-soft-light bg-[#502d5f] mt-20 px-4 md:px-1 md:ml-7 w-full md:w-[1120px] h-auto md:h-[600px] relative flex flex-col md:flex-row'>
        <div className='md:flex md:gap-10 gap-2 relative  top-0 md:left-5 left-0'>
         
          <div className='flex gap-10 mt-77'>
            <FaQuoteRight color="white" size="50" className='flex'/>
            <div className=''> 
            <p className='text-white italic md:text-lg text-xs'>Nunc tellus quam est inceptos pulvinar lorem per vel vivamus<br/>volutpat. Fermentum augue ipsum curae proin urna ultricies<br/>viverra nam porta vitae litora. Maximus augue eu sollicitudin<br/>venenatis himenaeos.</p>
          <p className='text-white font-bold mt-5'>John Doe</p>
            <p className='text-[#e67e22]'>(Alumini 2015)</p></div> 
          </div>
        </div>
        <div className='shadow-xl p-10 w-full md:w-120 h-auto md:h-105 mt-5 md:mt-30 md:relative md:bottom-3 md:left-40 bg-white'>
          <p className='md:text-4xl font-bold text-center md:text-left'>A High Achieving<br/> Multicultural <br/>Community For<br/> Learning</p>
          <p className='mt-5 text-xs md:text-lg text-center md:text-left'>Habitasse diam si at lobortis est penatibus finibus <br/>torquent dapibus viverra vel. Justo massa nulla aenean <br/>molestie lacinia iaculis urna sociosqu et.
          </p>
          <button className='mt-5 text-white font-bold p-2 w-30 bg-[#8e44ad] block mx-auto md:mx-0 hover:bg-white hover:text-[#8e44ad] border-1'>Apply Now!</button>
        </div>
      
    </div>
  )
}

export default AchievingPage
