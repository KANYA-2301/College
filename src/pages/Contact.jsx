import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";
import Footer from '../Components/Footer'
import bg from '../assets/bg_contact.jpg'

const Contact = () => {
  const contact_details = [
    {
      icon:<FaLocationDot size="30" color="white"/>,
      title:"Our Address",
      add1:"Jl. Cempaka Wangi No 22,",
      add2:"Jakarta - Indonesia"
    },
    {
      icon:<BsFillTelephoneFill size="30" color="white"/>,
      title:"Phone Number",
      add1:"(+62)21-2002-2012",
      add2:"(+62)21.2002.2021"
    },
    {
      icon:<IoMdMail size="30" color="white"/>,
      title:"Email Address",
      add1:"support@yourdomain.tld",
      add2:"hello@yourmail.tld"
    }
  ]

  return (
    <div>
      <div 
        style={{ backgroundImage: `url(${bg})` }} 
        className="bg-cover bg-center md:bg-fixed bg-no-repeat h-60 sm:h-80 md:h-[400px] bg-blend-soft-light bg-[#502d5f] flex items-center">
        <div className='px-4 sm:px-10 md:px-20'>
          <p className='text-white text-3xl sm:text-4xl md:text-5xl font-bold'>Contact Us</p>
          <p className='border p-2 border-white text-white mt-3 sm:mt-4 md:mt-5 inline-flex items-center gap-2 font-bold text-sm sm:text-base md:text-lg'>
            Home <SlArrowRight className='mt-1' /> Contact
          </p>
        </div>
      </div>
      <div className='mt-20 grid md:grid-cols-3 grid-cols-1 justify-center md:justify-around gap-10 px-4 md:px-20 flex-wrap'>
        {contact_details.map((item,index) => (
          <div key={index} className='border border-[#dadada] p-10 w-full sm:w-80 md:w-72 lg:w-[440px] mx-auto'>
            <div className='bg-[#8e44ad] rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto'>
              <div className='flex justify-center items-center h-full'>
                {item.icon}
              </div>
            </div>
            <p className='text-center text-[#8e44ad] font-bold text-xl mt-5'>{item.title}</p>
            <p className='text-center text-base sm:text-xl mt-2'>{item.add1}</p>
            <p className='text-center text-base sm:text-xl'>{item.add2}</p>
          </div>
        ))}
      </div>
      <div className='border border-[#dadada] p-6 sm:p-10 w-full sm:w-[640px] mt-20 mx-auto'>
        <p className='text-2xl sm:text-3xl md:text-3xl font-bold text-center sm:text-left'>Feel free to contact and<br/> reach us</p>
        <p className='mt-3 sm:mt-5 text-[#727272] text-base sm:text-lg text-center sm:text-left'>Imperdiet maecenas justo consectetuer leo duis. Praesent rutrum dui <br/>integer nostra primis morbi maximus dolor.</p>
        <form className='mt-5 flex flex-col gap-4'>
          <div className='flex flex-col md:flex-row gap-5'>
            <div className='flex-1'>
              <label>Name</label><br/>
              <input type='text' placeholder='Name' className='border p-2 w-full'/>
            </div>
            <div className='flex-1'>
              <label>Phone</label><br/>
              <input type='text' placeholder='Phone' className='border p-2 w-full'/>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-5 mt-2'>
            <div className='flex-1'>
              <label>Email</label><br/>
              <input type='text' placeholder='Email' className='border p-2 w-full'/>
            </div>
            <div className='flex-1'>
              <label>Subject</label><br/>
              <input type='text' placeholder='Subject' className='border p-2 w-full'/>
            </div>
          </div>
          <div className='mt-2'>
            <label>Message</label><br/>
            <textarea placeholder='Message' className='border w-full p-2'></textarea><br/>
            <button className='bg-[#8e44ad] p-2 mt-2 font-bold text-white flex items-center justify-center gap-2 w-full sm:w-auto'>
              Send Message <IoIosArrowForward color='white' className='mt-1'/>
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
