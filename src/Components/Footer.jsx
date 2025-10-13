import React from 'react'
import bg3 from '../assets/bg3.png'
import logo from '../assets/logo_clg.png'
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const location = [
    { icon: <IoIosArrowForward size="18" color="#27ae60" />, name: "Jakarta" },
    { icon: <IoIosArrowForward size="18" color="#27ae60" />, name: "Bandung" },
    { icon: <IoIosArrowForward size="18" color="#27ae60" />, name: "Surabaya" },
    { icon: <IoIosArrowForward size="18" color="#27ae60" />, name: "Medan" },
    { icon: <IoIosArrowForward size="18" color="#27ae60" />, name: "Balikpapan" }
  ];

  const campus = [
    { icon: <IoIosArrowForward size="18" color="#27ae60" />, name: "Academic" },
    { icon: <IoIosArrowForward size="18" color="#27ae60" />, name: "Planning & Administration" },
    { icon: <IoIosArrowForward size="18" color="#27ae60" />, name: "Campus Safety" },
    { icon: <IoIosArrowForward size="18" color="#27ae60" />, name: "Facility Services" },
    { icon: <IoIosArrowForward size="18" color="#27ae60" />, name: "Human Resources" }
  ];

  const academics = [
    { icon: <IoIosArrowForward size="18" color="#27ae60" />, name: "Master's Programs" },
    { icon: <IoIosArrowForward size="18" color="#27ae60" />, name: "Doctoral Programs" },
    { icon: <IoIosArrowForward size="18" color="#27ae60" />, name: "Online Programs" },
    { icon: <IoIosArrowForward size="18" color="#27ae60" />, name: "Graduate Certificates" },
    { icon: <IoIosArrowForward size="18" color="#27ae60" />, name: "Academic Calendar" }
  ];

  const details = [
    { icon: <FaLocationDot size="18" color="#27ae60" />, desc: "Jl Cempaka Wangi No 22 Jakarta - Indonesia" },
    { icon: <BsFillTelephoneFill size="18" color="#27ae60" />, desc: "(+62)21-2002-2012" },
    { icon: <IoMdMail size="18" color="#27ae60" />, desc: "hello@yourdomain.tld" }
  ];

  return (
    <div className="w-full text-white">
      <div className="relative bg-gradient-to-r from-[#8e44ad] to-[#401f4e] py-10 px-6 flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden md:ml-20 md:mr-20 md:top-25">
        <img src={bg3} alt="background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        
        <div className="relative text-center lg:text-left max-w-xl z-10">
          <h2 className="text-3xl font-bold mb-3">Don't Miss Our Updates</h2>
          <p className="text-sm lg:text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="relative flex flex-col sm:flex-row gap-3 w-full sm:w-auto z-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 w-full bg-white sm:w-72 rounded focus:outline-none text-black"
          />
          <button className="bg-[#7b2cbf] hover:bg-[#5a189a] px-6 py-3 font-semibold rounded transition">Subscribe</button>
        </div>
      </div>
      <div className="bg-[#0d0d0d] px-6 md:px-12 py-12 border-t border-[#2b2b2b]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-8 md:mt-30">
          <div>
            <img src={logo} alt="Logo" className="w-32 mb-4" />
            <p className="text-sm leading-relaxed text-gray-300">Viverra libero cras vestibulum pede natoque magna consectetur ultrices augue.</p>
            <div className="mt-4 space-y-2">
              {details.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                  {item.icon}
                  <span>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-lg mb-2 text-white">Location</p>
            <div className="space-y-2 text-sm text-gray-300">
              {location.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-lg mb-2 text-white">Our Campus</p>
            <div className="space-y-2 text-sm text-gray-300">
              {campus.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-lg mb-2 text-white">Academics</p>
            <div className="space-y-2 text-sm text-gray-300">
              {academics.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2023 Acadrova. All rights reserved. Powered by MoxCreative</p>
          <div className="flex flex-wrap justify-center gap-6">
            <p className="hover:text-white cursor-pointer">Terms of Service</p>
            <p className="hover:text-white cursor-pointer">Privacy Policy</p>
            <p className="hover:text-white cursor-pointer">Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
