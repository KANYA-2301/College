import React from 'react'
import box1 from '../assets/box1.jpg'
import box2 from '../assets/box2.jpg'
import box3 from '../assets/box3.jpg'
import box4 from '../assets/box4.jpg'
import box5 from '../assets/box5.jpg'
import box6 from '../assets/box6.jpg'
import bg2 from '../assets/bg2.jpg'
import bg1 from '../assets/bg1.jpg'
import { SlCalender } from "react-icons/sl";
import { FaMedal } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaPenNib } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { GrCertificate } from "react-icons/gr";
import { SlArrowRight } from "react-icons/sl";
import { FaQuoteRight } from "react-icons/fa";
import Footer from '../Components/Footer'
import Map from './Map'

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
      <div>
        <div style={{ backgroundImage: `url(${bg1})` }} className="bg-cover bg-no-repeat md:bg-contain h-60 sm:h-96 bg-blend-soft-light bg-[#502d5f] bg-fixed flex items-center">
          <div className="ml-5 sm:ml-10 md:ml-20 lg:ml-32 text-left sm:text-left">
            <p className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white'>Our Faculty</p>
            <p className='border p-2 border-white text-white mt-3 sm:mt-5 flex gap-2 w-36 sm:w-40 font-bold'>Home <SlArrowRight className='mt-1'/> Faculty
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-around mt-20 md:ml-10 px-4 md:px-0">
        <div>
          <p className="border w-[220px] text-center p-2">OUR FACULTIES & SCHOOLS</p>
          <p className="text-5xl font-bold mt-5"> Advancing knowledge and <br />innovation for a better world
          </p>
        </div>
        <div>
          <p className='text-lg text-[#727272] mt-10'>Morbi ridiculus sit placerat tortor mauris elementum sagittis magna nunc conubia pharetra.<br /> Risus phasellus donec sodales molestie malesuada conubia eget aliquam. Inceptos massa<br /> imperdiet maecenas netus faucibus.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-5 p-8 mt-10">
        {dept.map((item, index) => (
          <div key={index} className="shadow-xl">
            <p className="text-center text-2xl font-bold p-6 bg-gradient-to-r from-[#8e44ad] to-[#401f4e] text-white">{item.name}</p>
            <div className='group relative overflow-hidden shadow-lg'>
              <img src={item.img} alt={item.name} className='object-cover transition-transform duration-500 group-hover:scale-110 w-full'/>
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-25"></div>
            </div>
            <p className="ml-5 mt-5">{item.desc}</p>
            <button className="mt-5 mb-10 ml-5 p-2 bg-[#8e44ad] text-white">{item.btn}</button>
          </div>
        ))}
      </div>
      <Map/>
      <div>
        <p className='text-center border p-1 w-35 ml-190'>Why Choose Us</p>
        <p className='text-center text-3xl font-bold mt-5'>Why choose Acadrova University?</p>
        <p className='text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec<br/> ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-5 p-8 mt-10'>
          {choose1.map((item,index) => (
            <div key={index} className='border border-gray-200 p-10'>
              <div className='flex justify-center h-20 w-20 rounded-full items-center mx-auto mb-5 bg-[#8e44ad]'>{item.icon}</div>
              <p className='text-center mb-2 text-[#8e44ad] text-2xl font-bold'>{item.title}</p>
              <p className='text-center'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ backgroundImage: `url(${bg2})` }} className='bg-cover bg-no-repeat bg-blend-soft-light bg-[#502d5f] mt-20 px-4 md:px-8 md:ml-40 w-full md:w-[1120px] h-auto md:h-[600px] relative flex flex-col md:flex-row'>
        <div className='md:flex md:gap-10 gap-2 relative md:top-80 top-0 md:left-5 left-0'>
          <div><FaQuoteRight color="white" size="50" /></div>
          <div>
            <p className='text-white italic md:text-lg text-xs'>Nunc tellus quam est inceptos pulvinar lorem per vel vivamus<br/>volutpat. Fermentum augue ipsum curae proin urna ultricies<br/>viverra nam porta vitae litora. Maximus augue eu sollicitudin<br/>venenatis himenaeos.</p>
            <p className='text-white font-bold mt-5'>John Doe</p>
            <p className='text-[#e67e22]'>(Alumini 2015)</p>
          </div>
        </div>
        <div className='shadow-xl p-10 w-full md:w-120 h-auto md:h-105 mt-5 md:mt-30 md:relative md:bottom-3 md:left-80 bg-white'>
          <p className='md:text-4xl font-bold text-center md:text-left'>A High Achieving<br/> Multicultural <br/>Community For<br/> Learning</p>
          <p className='mt-5 text-xs md:text-lg text-center md:text-left'>Habitasse diam si at lobortis est penatibus finibus <br/>torquent dapibus viverra vel. Justo massa nulla aenean <br/>molestie lacinia iaculis urna sociosqu et.
          </p>
          <button className='mt-5 text-white font-bold p-2 w-30 bg-[#8e44ad] block mx-auto md:mx-0'>Apply Now!</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Faculty
