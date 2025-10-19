import React from 'react'
import bg from '../assets/bg_ap1.jpg'
import img2 from '../assets/bg_ap2.jpg'
import img3 from '../assets/bg_ap3.jpg'
import Footer from '../Components/Footer'
import { SlArrowRight } from "react-icons/sl";

const HowToApply = () => {
    const steps=[
        {
            no:"1.",
            title:"Complete Application Form",
            desc:"Consequat scelerisque eros etiam donec elit et tempor efficitur tristique tincidunt pede. Penatibus interdum est dis curabitur tellus eros mollis."
        },
        {
            no:"2.",
            title:"Self-report your courses and complete CADRs",
            desc:"Consequat scelerisque eros etiam donec elit et tempor efficitur tristique tincidunt pede. Penatibus interdum est dis curabitur tellus eros mollis."
        },
        {
            no:"3.",
            title:"Choose your program",
            desc:"Consequat scelerisque eros etiam donec elit et tempor efficitur tristique tincidunt pede. Penatibus interdum est dis curabitur tellus eros mollis."
        },
        {
            no:"4.",
            title:"Additional information about yourself or your circumstances",
            desc:"Consequat scelerisque eros etiam donec elit et tempor efficitur tristique tincidunt pede. Penatibus interdum est dis curabitur tellus eros mollis."
        },
        {
            no:"5.",
            title:"Payment of Fees",
            desc:"Consequat scelerisque eros etiam donec elit et tempor efficitur tristique tincidunt pede. Penatibus interdum est dis curabitur tellus eros mollis."
        }
    ]

  return (
    <div>
      <div 
        style={{ backgroundImage: `url(${bg})` }} 
        className="bg-cover bg-center bg-no-repeat md:bg-fixed h-60 sm:h-80 md:h-100 bg-blend-soft-light bg-[#502d5f] flex items-center"
      >
        <div className='px-4 sm:px-10 md:px-20'>
          <p className='text-white text-3xl sm:text-4xl md:text-5xl font-bold'>How To Apply</p>
          <p className='border p-2 border-white text-white mt-3 sm:mt-4 md:mt-5 inline-flex items-center gap-2 font-bold'>
            Home <SlArrowRight className='mt-1' /> How To Apply
          </p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between px-6 md:px-20 mt-20 gap-10 items-start'>
        <div className='flex-1 mt-10'>
            <p className='border w-32 p-1'>How to Apply</p>
            <p className='font-bold text-4xl mt-5'>
              Here you'll find information on how to<br/> apply for Acadrova degrees and <br/>scholarships.
            </p>
            <p className='text-[#727272] mt-5'>
              Lobortis est eget lectus nibh ac nisl suscipit a. Pretium vitae praesent malesuada quam hac ante<br/>rhoncus. Cubilia ullamcorper massa si neque nullam rutrum. Dui nullam laoreet vestibulum augue<br/>per pede molestie euismod habitant. Maecenas ex in nulla iaculis nisi molestie magnis facilisi.
            </p>
            <p className='text-[#727272] mt-5'>
              Dis gravida nisi laoreet neque senectus duis. Nullam curabitur mi nisi habitasse ornare eros<br/> dignissim a sem primis gravida. Massa posuere dapibus curabitur penatibus class proin in <br/>ullamcorper potenti consequat dictumst.
            </p>
            <div className='mt-10'>
                <p className='text-xl'>
                  We want to ensure that you have everything you need to make an informed decision and that your admissions experience is a success.
                </p>
            </div>
            <button className='bg-[#8e44ad] font-bold text-white p-2 mt-10 w-40'>Discover More</button>
        </div>
        <div className='md:w-1/2 mt-10 flex md:flex-none'>
            <img src={img2} className='w-150 object-cover h-150' alt="Application process"/>
        </div>
      </div>

      <div className='mt-20 shadow-2xl flex flex-col md:flex-row gap-10 px-6 md:px-20 md:ml-20 md:mr-20 '>
        <div className='md:w-2/3 p-10'>
          <p className='text-3xl font-bold underline'>Easy Step to Apply</p>
          {steps.map((item,index) => (
            <div key={index} className='mt-5'>
              <div className='flex gap-2'>
                <p className='text-xl font-bold'>{item.no}</p>
                <p className='text-xl font-bold'>{item.title}</p>
              </div>
              <p className='text-[#727272] mt-2'>{item.desc}</p>
              <hr className='mt-5'/>
            </div>
          ))}
        </div>
        <div className='md:w-1/3 border border-dashed bg-[#f2f2f2] border-[#dadada] p-10 mt-20 mb-20'>
            <p className='text-xl font-bold'>Fermentum tortor ipsum nullam</p>
            <p className='text-[#727272] mt-3'>
              Libero nascetur senectus integer tincidunt vitae<br/>
              ante tempor felis. Dui fusce fringilla habitant<br/>
              blandit nulla nunc magna duis. Dictum conubia <br/>
              vulputate dis montes vehicula ante. Molestie<br/>
              donec eros hendrerit magna inceptos. Praesent<br/>
              quam arcu nam et hac inceptos. Penatibus dis <br/>
              rhoncus pharetra molestie risus nascetur justo<br/>
              lacinia iaculis suspendisse.
            </p>
            <p className='text-[#727272] mt-3'>
              Vulputate nostra fames netus consequat vitae<br/>
              efficitur. Nunc placerat faucibus ipsum aliquet a<br/>
              nostra accumsan fermentum commodo. Sem urna<br/>
              tortor praesent elit euismod. Donec ultrices est<br/>
              velit nec nisi vel enim sagittis. Platea sed tellus<br/>
              nam euismod augue ultricies per inceptos consequat dis.
            </p>
            <button className='bg-[#8e44ad] mt-6 p-2 text-white font-bold'>Application Form</button>
        </div>
      </div>

      <div 
        style={{ backgroundImage: `url(${img3})` }} 
        className="bg-cover bg-center bg-blend-soft-light bg-[#502d5f] mt-20 relative h-[800px] sm:h-[600px] md:h-[800px] md:top-54"
      >
        <div className='absolute top-[80px] left-[30px] sm:top-[40px] sm:left-[10px] md:top-[80px] md:left-[30px]'>
          <p className='text-5xl sm:text-3xl md:text-5xl font-bold text-white leading-snug'>
            Nothing Beats Good Education<br/>
            For The Betterment Of A<br/>
            Student’s Future
          </p>
          <p className='text-white mt-5 text-sm sm:text-xs md:text-lg leading-snug'>
            Ipsum aenean inceptos nostra eleifend interdum tortor dictumst donec purus <br/>
            ligula. Sociosqu dapibus iaculis in taciti egestas mauris. Rhoncus suscipit finibus<br/>
            et donec imperdiet fermentum auctor.
          </p>
          <button className='bg-[#8e44ad] p-2 text-white font-bold mt-5 text-sm sm:text-xs md:text-sm'>Apply Now!</button>  
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default HowToApply
