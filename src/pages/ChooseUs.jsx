import React from 'react'
import { SlCalender } from "react-icons/sl";
import { FaMedal } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaPenNib } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { GrCertificate } from "react-icons/gr";

const ChooseUs = () => {
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
        <p className='text-center border p-1 w-35 ml-30 md:ml-190 mt-10 '>Why Choose Us</p>
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
   
  )
}

export default ChooseUs
