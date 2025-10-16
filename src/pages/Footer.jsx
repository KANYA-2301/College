import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import { FaLocationDot } from "react-icons/fa6"
import { BsFillTelephoneFill } from "react-icons/bs"
import { IoMdMail } from "react-icons/io"
import Footerbg from '../assets/Footerbg.jpg'

const Footer = () => {
  const location = [
    { icon: <IoIosArrowForward size="20" color="#27ae60" />, name: "Jakarta" },
    { icon: <IoIosArrowForward size="20" color="#27ae60" />, name: "Bandung" },
    { icon: <IoIosArrowForward size="20" color="#27ae60" />, name: "Surabaya" },
    { icon: <IoIosArrowForward size="20" color="#27ae60" />, name: "Medan" },
    { icon: <IoIosArrowForward size="20" color="#27ae60" />, name: "Balikpapan" }
  ]

  const campus = [
    { icon: <IoIosArrowForward size="20" color="#27ae60" />, name: "Academic" },
    { icon: <IoIosArrowForward size="20" color="#27ae60" />, name: "Planning & Administration" },
    { icon: <IoIosArrowForward size="20" color="#27ae60" />, name: "Campus Safety" },
    { icon: <IoIosArrowForward size="20" color="#27ae60" />, name: "Facility Service" },
    { icon: <IoIosArrowForward size="20" color="#27ae60" />, name: "Human Resources" }
  ]

  const Academics = [
    { icon: <IoIosArrowForward size="20" color="#27ae60" />, name: "Master's Programs" },
    { icon: <IoIosArrowForward size="20" color="#27ae60" />, name: "Doctoral Programs" },
    { icon: <IoIosArrowForward size="20" color="#27ae60" />, name: "Online Programs" },
    { icon: <IoIosArrowForward size="20" color="#27ae60" />, name: "Undergraduate Programs" },
    { icon: <IoIosArrowForward size="20" color="#27ae60" />, name: "Graduate Certificates" },
    { icon: <IoIosArrowForward size="20" color="#27ae60" />, name: "Academic Calendar" }
  ]

  const details = [
    { icon: <FaLocationDot size="20" color="#27ae60" />, desc: "Jl Cempaka Wangi No 22 Jakarta - Indonesia" },
    { icon: <BsFillTelephoneFill size="20" color="#27ae60" />, desc: "‪(+62)21-2002-2012‬" },
    { icon: <IoMdMail size="20" color="#27ae60" />, desc: "hello@yourdomain.tld" }
  ]

  return (
    <div>
      <div className="w-full relative flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-10 bg-gradient-to-r from-[#8e44ad] to-[#401f4e] ">
        <div className="absolute inset-0">
          <img src={Footerbg}  alt="Background" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
          <p className="text-white text-2xl font-bold">Don't Miss Our Updates</p>
          <p className="text-white mt-2 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 mt-4 w-full md:w-auto'>
          <input className='p-2 w-full sm:w-60 bg-white' placeholder="Enter your email" />
          <button className='p-2 px-6 bg-purple-700 text-white font-bold w-full sm:w-auto'>Subscribe</button>
        </div>
      </div>

      <div className='bg-black text-white'>
        <div className='flex flex-col md:flex-row justify-around p-6 md:p-10 gap-10 md:gap-0'>
          <div className='flex-1'>
            <img src="https://webkit.moxcreative.com/acadrova/wp-content/uploads/sites/20/2023/06/Logo_Acadrova_4.png" alt="logo" className='w-40 mb-4' />
            <p className='text-sm'>Viverra libero cras vestibulum pede natoque magna consectetur ultrices augue.</p>
            <div className='mt-4 space-y-2'>
              {details.map((item, index) => (
                <div key={index} className='flex gap-2 items-center'>
                  {item.icon}
                  <span className='text-sm'>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='flex-1'>
            <p className='font-bold text-xl mb-4'>Locations</p>
            <div className='space-y-2'>
              {location.map((item, index) => (
                <div key={index} className='flex gap-2 items-center'>
                  {item.icon}
                  <span className='text-sm'>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='flex-1'>
            <p className='font-bold text-xl mb-4'>Our Campus</p>
            <div className='space-y-2'>
              {campus.map((item, index) => (
                <div key={index} className='flex gap-2 items-center'>
                  {item.icon}
                  <span className='text-sm'>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='flex-1'>
            <p className='font-bold text-xl mb-4'>Academics</p>
            <div className='space-y-2'>
              {Academics.map((item, index) => (
                <div key={index} className='flex gap-2 items-center'>
                  {item.icon}
                  <span className='text-sm'>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className='border-[#dadada] my-4' />

        <div className='flex flex-col md:flex-row justify-between items-center p-6 md:px-10 gap-4'>
          <p className='text-sm md:text-base text-center md:text-left'>Copyright © 2023 Acadrova, All rights reserved. Powered by MoxCreative</p>
          <div className='flex flex-wrap justify-center md:justify-end gap-4 md:gap-10 text-sm'>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
