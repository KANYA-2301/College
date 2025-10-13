import React from 'react'
import { LuDot } from "react-icons/lu";
import bg from '../assets/bg_blog1.jpg'
import box1 from '../assets/bg_blog2.jpg'
import box2 from '../assets/bg_blog3.jpg'
import box3 from '../assets/bg_blog4.jpg'
import box4 from '../assets/bg_blog5.jpg'
import box5 from '../assets/bg_blog6.jpg'
import box6 from '../assets/bg_blog7.jpg'
import Footer from '../Components/Footer'
import { SlArrowRight } from "react-icons/sl";

const Blog = () => {
  const blog = [
    { box: "Event", img: box1, title: "Building Future Success: Essential Skills for University and Beyond", desc: "Rhoncus sollicitudin dolor phasellus dictumst taciti lacus sed inceptos justo etiam nec. Quam odio neque dictum elit cubilia tellus auctor felis sagittis nisl finibus. Class", date: "June 5, 2023", icon: <LuDot color="#27ae60"/>, comments: " No Comments" },
    { box: "Seminar", img: box2, title: "How Schools are Transforming Education for the Future", desc: "Rhoncus sollicitudin dolor phasellus dictumst taciti lacus sed inceptos justo etiam nec. Quam odio neque dictum elit cubilia tellus auctor felis sagittis nisl finibus. Class", date: "June 5, 2023", icon: <LuDot color="#27ae60"/>, comments: " No Comments" },
    { box: "Seminar", img: box3, title: "Effective Learning Strategies to Foster Growth and Excellence in Schools", desc: "Rhoncus sollicitudin dolor phasellus dictumst taciti lacus sed inceptos justo etiam nec. Quam odio neque dictum elit cubilia tellus auctor felis sagittis nisl finibus. Class", date: "June 5, 2023", icon: <LuDot color="#27ae60"/>, comments: " No Comments" },
    { box: "Student", img: box4, title: "Empowering Students for Success in the Modern World", desc: "Rhoncus sollicitudin dolor phasellus dictumst taciti lacus sed inceptos justo etiam nec. Quam odio neque dictum elit cubilia tellus auctor felis sagittis nisl finibus. Class", date: "June 5, 2023", icon: <LuDot color="#27ae60"/>, comments: " No Comments" },
    { box: "Research", img: box5, title: "Exploring the Value of a Holistic Education Approach", desc: "Rhoncus sollicitudin dolor phasellus dictumst taciti lacus sed inceptos justo etiam nec. Quam odio neque dictum elit cubilia tellus auctor felis sagittis nisl finibus. Class", date: "June 5, 2023", icon: <LuDot color="#27ae60"/>, comments: " No Comments" },
    { box: "Insight", img: box6, title: "A Comprehensive Guide to Navigating the Road to Higher Education", desc: "Rhoncus sollicitudin dolor phasellus dictumst taciti lacus sed inceptos justo etiam nec. Quam odio neque dictum elit cubilia tellus auctor felis sagittis nisl finibus. Class", date: "June 5, 2023", icon: <LuDot color="#27ae60"/>, comments: " No Comments" }
  ]

  return (
    <div>
      <div>
        <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover h-64 sm:h-80 md:h-96 bg-blend-soft-light bg-[#502d5f] bg-fixed flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 sm:px-6 md:px-20">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Blog</p>
          <p className="border p-2 border-white text-white mt-3 sm:mt-5 flex gap-2 text-sm sm:text-base md:text-lg justify-center md:justify-start">Home <SlArrowRight className="mt-1" /> Blog</p>
        </div>
      </div>
      <div className='max-w-7xl mx-auto mt-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {blog.map((item, index) => (
          <div key={index} className='shadow-xl w-full'>
            <div className='p-2 font-bold bg-[#8e44ad] text-white w-24 text-center relative top-10 left-48 md:top-10 md:left-75'>{item.box}</div>
            <img src={item.img} className='w-full h-48 object-cover' alt={item.title}/>
            <p className='font-bold text-xl p-4 mt-2'>{item.title}</p>
            <p className='text-[#727272] p-4'>{item.desc}</p>
            <hr className='border-[#dadada]'/>
            <div className='flex justify-between items-center p-2 text-xs text-[#27ae60]'>
              <span>{item.date}</span>
              <span>{item.icon}</span>
              <span>{item.comments}</span>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Blog
