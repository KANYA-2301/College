import React from 'react'
import box1 from '../assets/box1.jpg'
import box2 from '../assets/box2.jpg'
import box3 from '../assets/box3.jpg'
import box4 from '../assets/box4.jpg'
import box5 from '../assets/box5.jpg'
import box6 from '../assets/box6.jpg'
import bg1 from '../assets/bg1.jpg'
import { SlCalender } from "react-icons/sl";
import { FaMedal } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaPenNib } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { GrCertificate } from "react-icons/gr";
import { SlArrowRight } from "react-icons/sl";
import Footer from '../Components/Footer'
import Map from './Map'
import AchievingPage from './AchievingPage'

const Faculty = () => {
  const dept = [
    { name: "Faculty of Natural Sciences", img: box1, desc: "Nulla sociosqu per sagittis mattis fringilla eget vestibulum pulvinar ad ullamcorper egestas. Vel hendrerit semper sodales dolor est ad.", btn: "Learn More" },
    { name: "Faculty of Mathematics", img: box2, desc: "Nulla sociosqu per sagittis mattis fringilla eget vestibulum pulvinar ad ullamcorper egestas. Vel hendrerit semper sodales dolor est ad.", btn: "Learn More" },
    { name: "Faculty of Engineering", img: box3, desc: "Nulla sociosqu per sagittis mattis fringilla eget vestibulum pulvinar ad ullamcorper egestas. Vel hendrerit semper sodales dolor est ad.", btn: "Learn More" },
    { name: "Faculty of Economic", img: box4, desc: "Nulla sociosqu per sagittis mattis fringilla eget vestibulum pulvinar ad ullamcorper egestas. Vel hendrerit semper sodales dolor est ad.", btn: "Learn More" },
    { name: "Faculty of Laws", img: box5, desc: "Nulla sociosqu per sagittis mattis fringilla eget vestibulum pulvinar ad ullamcorper egestas. Vel hendrerit semper sodales dolor est ad.", btn: "Learn More" },
    { name: "Faculty of Arts", img: box6, desc: "Nulla sociosqu per sagittis mattis fringilla eget vestibulum pulvinar ad ullamcorper egestas. Vel hendrerit semper sodales dolor est ad.", btn: "Learn More" }
  ]

  const choose1 = [
    { icon: <SlCalender size="30" color="white"/>, title:"Flexibility", desc:"Dignissim nam molestie condimentum taciti interdum pharetra nullam. Ad congue proin condimentum semper convallis." },
    { icon: <FaMedal size="30" color="white"/>, title:"Excellence", desc:"Dignissim nam molestie condimentum taciti interdum pharetra nullam. Ad congue proin condimentum semper convallis." },
    { icon: <CiGlobe size="30" color="white"/>, title:"Diversity", desc:"Dignissim nam molestie condimentum taciti interdum pharetra nullam. Ad congue proin condimentum semper convallis." },
    { icon: <FaPenNib size="30" color="white"/>, title:"Innovation", desc:"Dignissim nam molestie condimentum taciti interdum pharetra nullam. Ad congue proin condimentum semper convallis." },
    { icon: <LuMessageCircle size="30" color="white"/>, title:"Community", desc:"Dignissim nam molestie condimentum taciti interdum pharetra nullam. Ad congue proin condimentum semper convallis." },
    { icon: <GrCertificate size="30" color="white"/>, title:"Integrity", desc:"Dignissim nam molestie condimentum taciti interdum pharetra nullam. Ad congue proin condimentum semper convallis." }
  ]

  return (
    <div>
      {/* HERO SECTION */}
      <div
        style={{ backgroundImage: `url(${bg1})` }}
        className="bg-cover bg-no-repeat bg-blend-soft-light bg-[#502d5f] bg-fixed flex items-center h-60 sm:h-80 md:h-96"
      >
        <div className="ml-5 sm:ml-10 md:ml-20 lg:ml-32 text-left">
          <p className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white'>Our Faculty</p>
          <p className='border p-2 border-white text-white mt-3 sm:mt-5 flex gap-2 w-fit sm:w-40 font-bold'>
            Home <SlArrowRight className='mt-1'/> Faculty
          </p>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 px-6 md:px-10">
        <div>
          <p className="border w-fit px-3 py-1 text-center">OUR FACULTIES & SCHOOLS</p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5">
            Advancing knowledge and <br className="hidden sm:block"/> innovation for a better world
          </p>
        </div>
        <div>
          <p className='text-base sm:text-lg text-[#727272] mt-5'>
            Morbi ridiculus sit placerat tortor mauris elementum sagittis magna nunc conubia pharetra.
            Risus phasellus donec sodales molestie malesuada conubia eget aliquam. Inceptos massa
            imperdiet maecenas netus faucibus.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 mt-10">
        {dept.map((item, index) => (
          <div key={index} className="shadow-xl">
            <p className="text-center text-2xl font-bold p-6 bg-gradient-to-r from-[#8e44ad] to-[#401f4e] text-white">
              {item.name}
            </p>
            <div className='group relative overflow-hidden shadow-lg'>
              <img src={item.img} alt={item.name} className='object-cover transition-transform duration-500 group-hover:scale-110 w-full'/>
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-25"></div>
            </div>
            <p className="p-5 text-sm sm:text-base">{item.desc}</p>
            <button className="mt-2 mb-6 ml-5 px-4 py-2 bg-[#8e44ad] text-white hover:bg-[#732d99] transition">
              {item.btn}
            </button>
          </div>
        ))}
      </div>
      <Map/>
      <div className='mt-16 px-6'>
        <p className='text-center border p-2 w-fit mx-auto'>Why Choose Us</p>
        <p className='text-center text-2xl sm:text-3xl font-bold mt-5'>
          Why choose Acadrova University?
        </p>
        <p className='text-center mt-5 text-sm sm:text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-6 mt-10'>
          {choose1.map((item, index) => (
            <div key={index} className='border border-gray-200 p-8 hover:shadow-lg transition'>
              <div className='flex justify-center h-20 w-20 rounded-full items-center mx-auto mb-5 bg-[#8e44ad]'>
                {item.icon}
              </div>
              <p className='text-center mb-2 text-[#8e44ad] text-xl font-bold'>{item.title}</p>
              <p className='text-center text-sm sm:text-base'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative md:left-50'>
        <AchievingPage/>
      </div>
      <Footer/>
    </div>
  )
}

export default Faculty
