import React from 'react'
import bg from '../assets/bg_error.jpg'
import Footer from '../Components/Footer'
import { SlArrowLeft } from "react-icons/sl"

const Error = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center bg-no-repeat bg-blend-soft-light bg-[#502d5f] min-h-[120vh] flex items-center justify-center px-4">
        <div className="border border-white text-center p-8 md:p-16 lg:p-20 ">
          <p className="text-5xl md:text-6xl text-white font-bold">404</p>
          <p className="text-2xl md:text-3xl text-white font-bold mt-2">Page not found</p>
          <p className="text-white mt-4 text-sm md:text-base leading-relaxed">The page you are looking for no longer exists. Perhaps you can return <br className="hidden md:block" />back to the site’s homepage and see if you can find what you are <br className="hidden md:block" />looking for.</p>
          <button className="mt-6 mx-auto text-white font-bold py-2 px-4 md:px-6 bg-[#8e44ad] flex items-center justify-center gap-2 "><SlArrowLeft size={20} />Previous Page</button>
        </div>
      </div>
      <div className='relative bottom-60'>
       <Footer />
      </div>
    </div>
  )
}

export default Error
