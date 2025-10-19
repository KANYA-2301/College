import React from 'react'
import bg from '../assets/bg_siglepost.jpg'
import img1 from '../assets/bg_sp1.jpg'
import img2 from '../assets/bg_sp2.jpg'
import p1 from '../assets/bg_blog2.jpg'
import p2 from '../assets/bg_blog3.jpg'
import p3 from '../assets/bg_blog5.jpg'
import p4 from '../assets/bg_blog6.jpg'
import p5 from '../assets/bg_blog7.jpg'
import { IoMdContact } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaCalendarAlt, FaRegSquare } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import Footer from '../Components/Footer'

const SinglePost = () => {
  const detail = [
    { icon: <IoMdContact color='white' size="25" />, name: "By rocken" },
    { icon: <FaCalendarAlt color='white' size="25" />, name: "June 5,2023" },
    { icon: <LuMessageCircleMore color='white' size="25" />, name: "No Comments" }
  ]

  const post = [
    { img: p1, description: "Building Future Success: Essential Skills for University and Beyond", date: "June 5, 2023", comment: "No Comments" },
    { img: p2, description: "How Schools are Transforming Education for the Future", date: "June 5, 2023", comment: "No Comments" },
    { img: p3, description: "Empowering Students for Success in the Modern World", date: "June 5, 2023", comment: "No Comments" },
    { img: p4, description: "Exploring the Value of a Holistic Education Approach", date: "June 5, 2023", comment: "No Comments" },
    { img: p5, description: "A Comprehensive Guide to Navigating the Road to Higher Education", date: "June 5, 2023", comment: "No Comments" }
  ]

  const socialmedia = ["Facebook", "Twitter", "LinkedIn", "Pinterest"]
  const Categories = ["Research", "Student", "Insight", "Seminar", "Event"]

  return (
    <div className="overflow-x-hidden">
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-no-repeat bg-center min-h-[350px] bg-[#502d5f]/80 bg-blend-overlay flex flex-col justify-center px-6 sm:px-10 md:px-20 text-white text-center md:text-left bg-fixed">
        <p className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">Effective Learning Strategies to Foster<br className="hidden md:block" /> Growth and Excellence in Schools</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mt-4 sm:mt-6 text-sm sm:text-base">
          {detail.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              {item.icon}
              <p className="font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-[#f2f2f2] flex flex-col sm:flex-row flex-wrap justify-between gap-3 sm:gap-0 items-center px-4 sm:px-10 md:px-20 py-4 text-center sm:text-left">
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 text-xs sm:text-sm md:text-base text-[#727272]">
          Home <SlArrowRight className="mt-[2px]" /> Blog <SlArrowRight className="mt-[2px]" /> Effective Learning Strategies to Foster Growth and Excellence in Schools
        </div>
        <button className="font-bold text-white bg-[#8e44ad] px-4 py-2 text-sm sm:text-base"># Seminar</button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 sm:px-10 md:px-20 py-10">
        <div className="lg:col-span-2 space-y-6">
          <p className='text-[#727272]'>Rhoncus sollicitudin dolor phasellus dictumst taciti lacus sed inceptos justo etiam nec. Quam odio neque dictum elit cubilia tellus auctor felis sagittis nisl finibus. Class eu venenatis eros est lacus curabitur mi hendrerit suscipit netus natoque. Nisi habitasse erat ullamcorper faucibus dolor libero. Ex hac sodales taciti metus sollicitudin arcu scelerisque orci nascetur dui.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <img src={img1} alt="College Students Posing Outdoors" className="w-full h-auto" />
              <p className="italic text-sm mt-2 text-center md:text-left">College Students Posing Outdoors</p>
            </div>
            <div>
              <p className='text-[#727272]'>Imperdiet ridiculus laoreet aliquet curae elementum metus quam diam fermentum mauris tempor. At fermentum vestibulum bibendum diam phasellus sociosqu lobortis molestie. Posuere scelerisque maecenas integer ultricies finibus. A at lectus dignissim si primis tristique non dui est malesuada venenatis. Pharetra vestibulum morbi justo ultricies nibh sodales. Nec nam nullam mus conubia nostra lectus dis iaculis ex ligula. Faucibus maximus diam fringilla odio dapibus. Letius ad dictumst fames est purus diam lacinia massa.</p>
            </div>
          </div>
          <p className='text-[#727272]'>Leo porttitor sollicitudin ad auctor class ligula faucibus consectetur senectus. Ultrices sem mollis condimentum mi penatibus faucibus porttitor vitae sit torquent. Letius potenti venenatis lacus malesuada ut pharetra. Hac nisi turpis fermentum letius scelerisque accumsan fusce. Hac quam arcu mus viverra nec ultrices efficitur.</p>
          <p className='text-[#727272]'>Viverra aliquet donec quam euismod ullamcorper conubia fermentum. Quis ad dignissim fringilla aliquam suscipit litora. Fermentum urna mi pede ipsum quam. Gravida diam habitant malesuada ante hendrerit pede at facilisi pretium.</p>
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <span className="font-bold">Tags:</span>
            <span className="italic">Campus, Study, University</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
            {socialmedia.map((item, index) => (
              <button key={index} className="text-[#8e44ad] font-bold w-full py-3 bg-[#f2f2f2] hover:bg-[#e8e8e8] transition">{item}</button>
            ))}
          </div>
          <p className='font-bold text-2xl sm:text-3xl'>Leave a Reply</p>
          <p className="text-sm sm:text-base">Your email address will not be published. Required fields are marked *</p>
          <form className="space-y-4">
            <div>
              <label>Comment *</label>
              <textarea className='border border-[#dadada] w-full h-32 mt-2 p-2'></textarea>
            </div>
            <div>
              <label>Name *</label>
              <input type='text' className='border border-[#dadada] w-full p-2 mt-2' />
            </div>
            <div>
              <label>Email *</label>
              <input type='text' className='border border-[#dadada] w-full p-2 mt-2' />
            </div>
            <div>
              <label>Website</label>
              <input type='text' className='border border-[#dadada] w-full p-2 mt-2' />
            </div>
            <div className='flex gap-2 items-start mt-2'>
              <FaRegSquare size="20" color="#dadada" />
              <p className='text-[#727272] text-sm'>Save my name, email, and website in this browser for the next time I comment.</p>
            </div>
            <button className='text-white font-bold bg-[#8e44ad] px-4 py-2 mt-3'>Post Comment</button>
          </form>
        </div>
        <div className="space-y-8 border-t lg:border-t-0 lg:border-l border-gray-200 pt-6 lg:pt-0 lg:pl-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <img src={img2} alt="Author" className="w-20 h-20 object-cover" />
            <div>
              <p className="font-bold">Author Profile</p>
              <p className="text-sm sm:text-base text-[#727272] mt-1">Facilisi viverra ultrices elementum odio sollicitudin vehicula posuere...</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3 border-b pb-1 border-[#dadada]">Categories</h3>
            <div className="space-y-2">
              {Categories.map((item, index) => (
                <div key={index} className='flex gap-2 items-center border-b border-[#dadada] pb-1'>
                  <SlArrowRight size="10" color="#8e44ad" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3 border-b pb-1 border-[#dadada]">Latest Post</h3>
            <div className="space-y-4">
              {post.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <img src={item.img} alt={item.description} className="w-16 h-16 object-cover" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{item.description}</p>
                    <p className="text-xs text-gray-600">{item.date} • {item.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SinglePost
