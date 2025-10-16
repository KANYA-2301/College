import React from 'react'
import box1 from '../assets/box1.jpg'
import box2 from '../assets/box2.jpg'
import box3 from '../assets/box3.jpg'
import box4 from '../assets/box4.jpg'
import box5 from '../assets/box5.jpg'
import box6 from '../assets/box6.jpg'

const OurFacility = () => {
     const dept = [
    { name: "Faculty of Natural Sciences", img: box1, desc: "Nulla sociosqu per sagittis mattis fringilla eget vestibulum pulvinar ad ullamcorper egestas. Vel hendrerit semper sodales dolor est ad.", btn: "Learn More" },
    { name: "Faculty of Mathematics", img: box2, desc: "Nulla sociosqu per sagittis mattis fringilla eget vestibulum pulvinar ad ullamcorper egestas. Vel hendrerit semper sodales dolor est ad.", btn: "Learn More" },
    { name: "Faculty of Engineering", img: box3, desc: "Nulla sociosqu per sagittis mattis fringilla eget vestibulum pulvinar ad ullamcorper egestas. Vel hendrerit semper sodales dolor est ad.", btn: "Learn More" },
    { name: "Faculty of Economic", img: box4, desc: "Nulla sociosqu per sagittis mattis fringilla eget vestibulum pulvinar ad ullamcorper egestas. Vel hendrerit semper sodales dolor est ad.", btn: "Learn More" },
    { name: "Faculty of Laws", img: box5, desc: "Nulla sociosqu per sagittis mattis fringilla eget vestibulum pulvinar ad ullamcorper egestas. Vel hendrerit semper sodales dolor est ad.", btn: "Learn More" },
    { name: "Faculty of Arts", img: box6, desc: "Nulla sociosqu per sagittis mattis fringilla eget vestibulum pulvinar ad ullamcorper egestas. Vel hendrerit semper sodales dolor est ad.", btn: "Learn More" }
  ]

  return (
    <div>
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
    </div>
  )
}

export default OurFacility
