import React, { useState } from 'react'
import background from '../assets/bg_teacher.jpg'
import bg2 from '../assets/bg_teacher2.jpg'
import bg from '../assets/teacher.jpg'
import box1 from '../assets/staff1.jpg'
import box2 from '../assets/staff2.jpg'
import box3 from '../assets/staff3.jpg'
import box4 from '../assets/staff4.jpg'
import box5 from '../assets/staff5.jpg'
import box6 from '../assets/staff6.jpg'
import box7 from '../assets/staff7.jpg'
import box8 from '../assets/staff8.jpg'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaStar, FaQuoteRight } from "react-icons/fa";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";
import { BsPlayCircleFill } from "react-icons/bs";
import Footer from '../Components/Footer'

const Teachers = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAnswer = (index) => setOpenIndex(openIndex === index ? null : index);

  const faculty = [
    { icon1:<FaFacebookF color='white' size="20"/>, icon2:<FaTwitter color='white' size="20"/>, icon3:<FaInstagram color='white' size="20"/>, icon4:<FaLinkedinIn color='white' size="20"/>, img:box1, name:"Carlos Bailey", position:"Chair of the Corporation" },
    { icon1:<FaFacebookF color='white' size="20"/>, icon2:<FaTwitter color='white' size="20"/>, icon3:<FaInstagram color='white' size="20"/>, icon4:<FaLinkedinIn color='white' size="20"/>, img:box2, name:"Tammy Burris", position:"Vice President" },
    { icon1:<FaFacebookF color='white' size="20"/>, icon2:<FaTwitter color='white' size="20"/>, icon3:<FaInstagram color='white' size="20"/>, icon4:<FaLinkedinIn color='white' size="20"/>, img:box3, name:"Richard Miller", position:"Business Administration" },
    { icon1:<FaFacebookF color='white' size="20"/>, icon2:<FaTwitter color='white' size="20"/>, icon3:<FaInstagram color='white' size="20"/>, icon4:<FaLinkedinIn color='white' size="20"/>, img:box4, name:"Pamela Kauffman", position:"Senior Administrative" }
  ];

  const faculty1 = [
    { icon1:<FaFacebookF color='white' size="20"/>, icon2:<FaTwitter color='white' size="20"/>, icon3:<FaInstagram color='white' size="20"/>, icon4:<FaLinkedinIn color='white' size="20"/>, img:box5, name:"Jesse Rodriguez", position:"Office of the President" },
    { icon1:<FaFacebookF color='white' size="20"/>, icon2:<FaTwitter color='white' size="20"/>, icon3:<FaInstagram color='white' size="20"/>, icon4:<FaLinkedinIn color='white' size="20"/>, img:box6, name:"Katie Webb", position:"Health Science" },
    { icon1:<FaFacebookF color='white' size="20"/>, icon2:<FaTwitter color='white' size="20"/>, icon3:<FaInstagram color='white' size="20"/>, icon4:<FaLinkedinIn color='white' size="20"/>, img:box7, name:"Carolyn Pellegrino", position:"Senior Instructor" },
    { icon1:<FaFacebookF color='white' size="20"/>, icon2:<FaTwitter color='white' size="20"/>, icon3:<FaInstagram color='white' size="20"/>, icon4:<FaLinkedinIn color='white' size="20"/>, img:box8, name:"Kenneth Wagner", position:"Computer Science" }
  ];

  const feedback = [
    { rating:<FaStar color='rgb(252 185 2)'/>, quote:<FaQuoteRight color="rgba(37, 117, 252, 0.2)" size="50" />, desc:"Molestie odio inceptos adipiscing dui dictum. Sodales aptent hac tristique integer nullam in vestibulum. Hac feugiat placerat laoreet fames pharetra pede imperdiet sodales in.", image:box7, name:"Harold K. Grimm", place:"Semarang" },
    { rating:<FaStar color='rgb(252 185 2)'/>, quote:<FaQuoteRight color="rgba(37, 117, 252, 0.2)" size="50"/>, desc:"Molestie odio inceptos adipiscing dui dictum. Sodales aptent hac tristique integer nullam in vestibulum. Hac feugiat placerat laoreet fames pharetra pede imperdiet sodales in.", image:box8, name:"Valorie A. Woods", place:"Bandung" },
    { rating:<FaStar color='rgb(252 185 2)'/>, quote:<FaQuoteRight color="rgba(37, 117, 252, 0.2)" size="50"/>, desc:"Molestie odio inceptos adipiscing dui dictum. Sodales aptent hac tristique integer nullam in vestibulum. Hac feugiat placerat laoreet fames pharetra pede imperdiet sodales in.", image:box1, name:"George D. Coffey", place:"Jakarta" }
  ];

  const FAQ = [
    { icon:<IoAddSharp size="25"/>, question:"Where Can I Find Information?", answer:"Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus." },
    { icon:<IoAddSharp size="25"/>, question:"What Are Your Terms And Conditions?", answer:"Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus." },
    { icon:<IoAddSharp size="25"/>, question:"Can I Buy Directly From The Factory?", answer:"Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus." },
    { icon:<IoAddSharp size="25"/>, question:"What Kinds of Payment Do You Accept?", answer:"Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus." }
  ];

  return (
    <div>
      <div style={{ backgroundImage: `url(${background})` }} className="bg-cover h-64 sm:h-80 md:h-96 bg-blend-soft-light bg-[#502d5f] bg-fixed flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 sm:px-6 md:px-20">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Teachers</p>
        <p className="border p-2 border-white text-white mt-3 sm:mt-5 flex gap-2 text-sm sm:text-base md:text-lg justify-center md:justify-start">
          Home <SlArrowRight className="mt-1" /> Teachers
        </p>
      </div>

      <div className='px-5 sm:px-20 mt-5'>
        <p className='text-2xl sm:text-3xl font-bold'>Teachers & Staff</p>
        <p className='mt-2 flex gap-1 text-sm sm:text-lg items-center'>
          Home <IoIosArrowForward className='mt-1'/> Teachers
        </p>
      </div>

      <div className='flex flex-col md:flex-row justify-around mt-5 px-5 sm:px-20 gap-5'>
        <div className='md:w-1/2'>
          <img src={bg} className='w-full sm:w-150 object-cover' alt="Teacher"/>
        </div>
        <div className='md:w-1/2 text-center md:text-left'>
          <p className='font-bold text-3xl sm:text-5xl'>About Teacher<br/>Teachers Dedicate Their Life To <br/>Providing Good Education</p>
          <p className='text-[#727272] mt-5 text-sm sm:text-base'>
            Dui iaculis tempor phasellus litora enim proin ac aliquet aptent. Lobortis euismod vitae<br/>
            maximus tortor platea aliquet ridiculus tempus eget malesuada. Lacus hendrerit<br/>
            dictumst vel platea sem in placerat.
          </p>
          <button className='bg-[#8e44ad] text-white p-2 font-bold mt-5'>Discover More</button>
        </div>
      </div>

      <div className='mt-3 flex flex-col md:flex-row justify-around px-5 sm:px-20 gap-5'>
        <div>
          <p className='font-bold text-2xl sm:text-3xl'>Good Education Starts From Great<br/>Teachers</p>
        </div>
        <div>
          <p className='text-[#727272] text-sm sm:text-base'>
            Bibendum etiam sollicitudin ligula pellentesque hendrerit augue rutrum tortor<br/>
            faucibus. Enim est nascetur ex dolor tempus torquent. Potenti ex class gravida pede<br/>
            donec finibus himenaeos tempus diam penatibus.
          </p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center gap-5 mt-8 px-5 sm:px-20'>
        {faculty.concat(faculty1).map((item, index) => (
          <div key={index} className='shadow-xl w-full sm:w-80 h-auto'>
            <div className='flex justify-center sm:justify-start gap-3 p-2'>
              <div className='flex flex-col gap-2'>
                <div className='w-10 h-10 bg-gray-500 flex justify-center items-center'>{item.icon1}</div>
                <div className='w-10 h-10 bg-gray-500 flex justify-center items-center'>{item.icon2}</div>
                <div className='w-10 h-10 bg-gray-500 flex justify-center items-center'>{item.icon3}</div>
                <div className='w-10 h-10 bg-gray-500 flex justify-center items-center'>{item.icon4}</div>
              </div>
              <div>
                <img src={item.img} className='w-32 sm:w-50 mt-5' alt={item.name}/>
              </div>
            </div>
            <p className='font-bold text-xl sm:text-2xl text-center mt-5'>{item.name}</p>
            <p className='text-[#727272] text-center'>{item.position}</p>
          </div>
        ))}
      </div>

      <div style={{ backgroundImage: `url(${bg2})` }} className="bg-cover bg-center bg-blend-soft-light bg-[#3c2644] bg-fixed h-auto sm:h-screen mt-10 relative">
        <div className="absolute inset-2 border border-white flex flex-col justify-center items-center text-center p-5 sm:p-10">
          <p className="text-2xl sm:text-4xl font-bold text-white leading-snug">
            Teachers Believe That Education<br />
            Is An Important Aspect In Every <br />
            Person’s Life
          </p>
          <p className="text-white mt-2 text-sm sm:text-base">
            Scelerisque potenti nisi nec venenatis inceptos maecenas viverra feugiat purus<br />
            gravida. Pellentesque fusce vivamus nulla sed natoque. Phasellus accumsan<br />
            venenatis nisi sollicitudin inceptos.
          </p>
          <div className="mt-5 sm:mt-10">
            <BsPlayCircleFill color="white" size={60} />
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-center gap-5 mt-10 px-5 sm:px-20 relative md:bottom-30'>
        {feedback.map((item,index) => (
          <div key={index} className='shadow-lg p-5 w-full sm:w-95 bg-white'>
            <div className='flex gap-2'>{[...Array(5)].map((_, i) => <div key={i}>{item.rating}</div>)}</div>
            <div className='relative top-5 left-2'>{item.quote}</div>
            <p className='text-[#727272]'>{item.desc}</p>
            <div className='flex gap-5 mt-5 items-center'>
              <img src={item.image} className='w-12 h-12 sm:w-15 sm:h-15 rounded-full' alt={item.name}/>
              <div>
                <p>{item.name}</p>
                <p>{item.place}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col md:flex-row justify-around mt-10 px-5 sm:px-20 gap-5'>
        <div className='md:w-1/3'>
          <p className='font-bold border p-1 text-center w-15'>F.A.Q</p>
          <p className='text-2xl sm:text-4xl font-bold mt-3'>Frequently Asked Questions</p>
          <p className='text-[#727272] mt-5 text-sm sm:text-base'>
            Enim morbi in letius fames primis eget natoque<br/> vivamus ante. Adipiscing commodo senectus <br/>sagittis nibh urna.
          </p>
        </div>
        <div className='md:w-2/3 space-y-4'>
          {FAQ.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className='w-full border border-[#dadada] rounded-md overflow-hidden'>
                <div className='p-3 flex items-center gap-3 cursor-pointer' onClick={() => toggleAnswer(index)}>
                  <div className='transition-transform'>{isOpen ? <IoRemoveSharp size={25}/> : <IoAddSharp size={25}/>}</div>
                  <p className='text-xl font-bold'>{item.question}</p>
                </div>
                {isOpen && <p className='p-5 text-[#727272] text-sm sm:text-base'>{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Teachers;
