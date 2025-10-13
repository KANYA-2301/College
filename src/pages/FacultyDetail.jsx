import React,{ useState } from 'react'
import bg from '../assets/bg_fd1.jpg'
import bg2 from '../assets/bg_fd2.jpg'
import bg_3 from '../assets/bg_fd3.jpg'
import bg_4 from '../assets/bg_fd4.jpg'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaFilePdf } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { BsFillTelephoneFill } from "react-icons/bs"
import { IoMdMail, IoIosArrowForward } from "react-icons/io"
import { HiBadgeCheck } from "react-icons/hi"
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5"
import Footer from '../Components/Footer'
import Map from './Map'

const FacultyDetail = () => {
  const [openPaymentIndex, setOpenPaymentIndex] = useState(null)
  const togglePayment = (index) => setOpenPaymentIndex(openPaymentIndex === index ? null : index)

  const reason = [
    { icon:<HiBadgeCheck color="#8e44ad" size="40"/>, title:"Top 50 worldwide", desc:"Himenaeos facilisi amet phasellus egestas lorem. Placerat conubia facilisi vestibulum suspendisse primis ligula." },
    { icon:<HiBadgeCheck color="#8e44ad" size="40"/>, title:"Most employable students", desc:"Himenaeos facilisi amet phasellus egestas lorem. Placerat conubia facilisi vestibulum suspendisse primis ligula." }
  ]

  const payment = [
    { icon:<IoAddSharp size="20"/>, title:"What Are Your Terms And Conditions?", desc:"Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus.Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus." },
    { icon:<IoAddSharp size="20"/>, title:"Can I Buy Directly From The Factory?", desc:"Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus.Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus." },
    { icon:<IoAddSharp size="20"/>, title:"What Kinds of Payment Do You Accept?", desc:"Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus.Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus." }
  ]

  const icons = [<FaFacebookF size="20" color="white"/>, <FaTwitter size="20" color="white"/>, <FaLinkedinIn size="20" color="white"/>, <FaInstagram size="20" color="white"/>]
  const detail = ["Jl Cempaka Wangi No 22 Jakarta - ID","(+62)21-2002-2012","hello@yourdomain.tld","Mon - Fri : 09.00-17.00"]
  const downloads = [
    { icon:<FaFilePdf size="20" color="#8e44ad"/>, desc:"Brocheure Department" },
    { icon:<FaFilePdf size="20" color="#8e44ad"/>, desc:"Online Programs" },
    { icon:<FaFilePdf size="20" color="#8e44ad"/>, desc:"Journals Departments" },
    { icon:<FaFilePdf size="20" color="#8e44ad"/>, desc:"Academic Calendar" }
  ]
  const ad_details = [
    { img:bg_3, title:"Tuition & Funding", desc:"Nulla sociosqu per sagittis mattis fringilla eget vestibulum pulvinar ad ullamcorper egestas. Vel hendrerit semper sodales dolor est ad.", btn:"Learn More" },
    { img:bg_4, title:"Admissions", desc:"Nulla sociosqu per sagittis mattis fringilla eget vestibulum pulvinar ad ullamcorper egestas. Vel hendrerit semper sodales dolor est ad.", btn:"Learn More" }
  ]
  const details = [
    { icon:<FaLocationDot size="20" color="#8e44ad"/>, desc:"Jl Cempaka Wangi No 22 Jakarta - Indonesia" },
    { icon:<BsFillTelephoneFill size="20" color="#8e44ad"/>, desc:"(+62)21-2002-2012" },
    { icon:<IoMdMail size="20" color="#8e44ad"/>, desc:"hello@yourdomain.tld" }
  ]

  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover md:bg-fixed bg-center bg-no-repeat h-60 sm:h-80 md:h-100 bg-blend-soft-light bg-[#502d5f] flex items-center">
        <div className='px-4 sm:px-10 md:px-20'>
          <p className='text-white text-3xl sm:text-4xl md:text-5xl font-bold'>Faculty of Engineering</p>
          <p className='text-white mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-xl font-semibold leading-snug'>Nec nunc viverra finibus lacinia fusce lacus cursus. Porttitor neque <br/> tincidunt ultrices pulvinar volutpat. Habitasse in pretium ornare proin <br/> ad dapibus aliquet maximus felis.</p>
        </div>
      </div>
      <div className='border border-[#727272] text-[#727272] flex flex-col md:flex-row p-6 justify-between items-center'>
        <p className='flex gap-1 text-[#727272] text-center md:text-left mb-2 md:mb-0'>Home Faculty <IoIosArrowForward className='mt-1'/> Faculty <IoIosArrowForward className='mt-1'/> Faculty of Engineering</p>
        <button className='text-white bg-[#8e44ad] w-full md:w-40 h-10'>Apply Now!</button>
      </div>
      <div className='flex flex-col lg:flex-row justify-around gap-10 mt-20 px-4 md:px-20'>
        <div className='flex-1'>
          <p className='md:text-3xl font-bold'>Overview</p>
          <p className='text-[#727272] mt-5'>Vehicula porttitor netus adipiscing facilisi leo letius fames congue. Sollicitudin arcu vel habitant suspendisse<br/>posuere efficitur dis mauris per. Ridiculus himenaeos duis eleifend dignissim dolor. Congue montes id fusce<br/>tortor tempor sapien torquent dolor. Consectetuer nascetur per blandit dapibus vestibulum sed quam mauris<br/>sem eu viverra. Senectus sollicitudin posuere duis nisl euismod.</p>
          <p className='text-[#727272] mt-3'> Egestas feugiat integer cubilia dapibus magna. Volutpat hendrerit massa sapien pellentesque montes dolor<br/>rutrum curae augue fringilla. Molestie potenti elit mus lacus bibendum curabitur nisi posuere. Pharetra fringilla<br/>auctor risus elit montes. Elit ipsum accumsan praesent hendrerit nec curae. Curae rhoncus quam leo magnis<br/>augue volutpat. Libero dis magna lacinia justo pede potenti ultricies fusce curae tellus maecenas.</p>
          <div className='flex flex-col md:flex-row justify-between mt-5 gap-6'>
            {reason.map((item,index)=>(
              <div key={index} className='flex gap-2'>
                <div className='mt-1'>{item.icon}</div>
                <div>
                  <p className='text-3xl font-bold'>{item.title}</p>
                  <p className='mt-3'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {payment.map((item,index)=>{
            const isOpen = openPaymentIndex === index
            return (
              <div key={index} className='border border-[#727272] w-full md:w-200 mt-10 mb-5 p-4 gap-2'>
                <div className='flex items-center gap-3 cursor-pointer' onClick={()=>togglePayment(index)}>
                  <div>{isOpen ? <IoRemoveSharp size={25}/> : <IoAddSharp size={25}/>}</div>
                  <p className='font-bold text-lg'>{item.title}</p>
                </div>
                {isOpen && <p className='text-[#727272] mt-2'>{item.desc}</p>}
              </div>
            )
          })}
          <p className='text-3xl font-bold mt-10'>Our Vision and Mission</p>
          <p className='text-[#727272] mt-5'>Nostra habitant finibus eleifend commodo ridiculus pede mattis lacinia hac orci. Primis potenti sapien at ante<br/>morbi quisque facilisi adipiscing. A est accumsan fusce iaculis consectetuer magnis. Massa cursus accumsan<br/>pede nulla parturient dictum erat condimentum scelerisque porttitor.</p>
        </div>
        <div className='flex flex-col gap-8'>
          <div  style={{ backgroundImage: `url(${bg2})` }} className=" max-w-[360px] w-full bg-cover bg-blend-soft-light bg-[#8e44ad] p-5 flex flex-col gap-4">
            <p className='text-3xl font-bold text-white'>Department Contact</p>
            <p className='font-bold text-xl text-white'>Hotline : 888-2003-234</p>
            {detail.map((item,index)=><div key={index} className='text-white'>{item}</div>)}
            <p className='font-bold text-xl text-white mt-4'>Social info :</p>
            <div className='flex gap-4 mt-2'>{icons.map((item,index)=><div key={index}>{item}</div>)}</div>
          </div>
          <div className='border border-[#727272] p-5 max-w-[360px] w-full'>
            <p className='text-3xl font-bold mb-5'>Related downloads</p>
            {downloads.map((item,index)=>(
              <div key={index} className='flex mb-2 gap-2'>
                <div>{item.icon}</div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Map/>
      <div className='flex flex-col lg:flex-row justify-around gap-8 mt-20 px-4 md:px-20'>
        <div className='border border-[#dadada] w-full md:w-1/3 p-10'>
          <p className='text-4xl font-bold mt-5'>We enter to learn,<br/>leave to achieve</p>
          <p className='mt-5'> Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Ut elit tellus, luctus nec ullamcorper<br/>mattis, pulvinar dapibus leo.</p>
          <p className='font-bold mt-8 text-xl'>Visit our campus :</p>
          <div className='mt-4'>
            {details.map((item,index)=>(
              <div key={index} className='flex mt-2 gap-2'>
                <div className='mt-2'>{item.icon}</div>
                <div className='text-xl'>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-5 w-full'>
          {ad_details.map((item,index)=>(
            <div key={index} className='border border-[#dadada] w-full md:w-1/2'>
              <img src={item.img} className='w-full'/>
              <p className='text-2xl font-bold p-4'>{item.title}</p>
              <p className='text-[#3f444b] p-4'>{item.desc}</p>
              <button className='p-2 bg-[#8e44ad] text-white font-bold m-4'>{item.btn}</button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default FacultyDetail
