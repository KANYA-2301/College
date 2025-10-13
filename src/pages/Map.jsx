import React from 'react'
import map from '../assets/map.png'
const Map = () => {
  return (
    <div>
      <div className='bg-[#8e44ad] flex flex-col md:flex-row items-center md:justify-around px-4 py-12 mt-20 mb-20'>
              <div className='w-full md:w-1/2'>
                 <img src={map} className='w-full h-auto'></img>
              </div>
              <div  className='text-white w-full md:w-1/2  mt-8 md:mt-0'>
                <p className='border border-white p-2 inline-block mb-4'>Acadrova by Number</p>
                <p className='text-3xl font-bold mt-5'>Live as if you were to die tomorrow.<br></br> Learn as if you were to live forever</p>
                <p className='mt-5'>Ipsum aenean inceptos nostra eleifend interdum tortor dictumst donec purus ligula.<br></br> Sociosqu dapibus iaculis in taciti egestas mauris. Rhoncus suscipit finibus et donec <br></br>imperdiet fermentum auctor.</p>
                <div className='flex flex-col sm:flex-row justify-between gap-6 mt-10'>
                  <div className='text-xl font-bold text-center'><span className='text-5xl'>89% </span><br></br>Freshman<br></br> graduation rate</div>
                  <div className='text-xl font-bold text-center'><span className='text-5xl'>4.3+</span><br></br>Avrg yrs to degree for <br></br>freshmen</div>
                  <div className='text-xl font-bold mr-5 text-center'><span className='text-5xl'>92%</span><br></br>Undergrads from <br></br>State</div>
                </div>
              </div>          
            </div>
    </div>
  )
}

export default Map
