import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Tutionimg from '../assets/Tutionimg.jpg';
import Admissionimg from '../assets/Admissionimg.jpg';

export default function EnterToLearn() {
  return (
    <div className="bg-white flex flex-col py-10 px-4 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

        <div className="border border-gray-300 p-6 md:p-8 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We enter to learn, <br /> leave to achieve
          </h2>
          <p className="text-gray-600 text-base md:text-[17px] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <h3 className="font-semibold mb-3 text-lg">Visit our campus :</h3>

          <ul className="space-y-3 text-gray-800 text-base md:text-[16px]">
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-[#8e44ad] mt-1" />
              <span>
                Jl Cempaka Wangi No 22 Jakarta - <br /> Indonesia
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-[#8e44ad]" />
              <span>(+62)21-2002-2012</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-[#8e44ad]" />
              <span>hello@yourdomain.tld</span>
            </li>
          </ul>
        </div>

        <div className="border border-gray-300 overflow-hidden shadow-sm rounded-lg group">
          <div className="overflow-hidden h-60 md:h-64 lg:h-72">
            <img
              src={Tutionimg}
              alt="Tuition"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3">Tuition & Funding</h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Nulla sociosqu per sagittis mattis fringilla eget vestibulum
              pulvinar ad ullamcorper egestas. Vel hendrerit semper sodales dolor
              est ad.
            </p>
            <button className="bg-[#8e44ad] hover:bg-white hover:text-[#8e44ad] text-white font-semibold px-5 py-2 border border-transparent hover:border-[#8e44ad] transition rounded">
              Learn More
            </button>
          </div>
        </div>

        <div className="border border-gray-300 overflow-hidden shadow-sm rounded-lg group">
          <div className="overflow-hidden h-60 md:h-64 lg:h-72">
            <img
              src={Admissionimg}
              alt="Admissions"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3">Admissions</h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Nulla sociosqu per sagittis mattis fringilla eget vestibulum
              pulvinar ad ullamcorper egestas. Vel hendrerit semper sodales dolor
              est ad.
            </p>
            <button className="bg-[#8e44ad] hover:bg-white hover:text-[#8e44ad] text-white font-semibold px-5 py-2 border border-transparent hover:border-[#8e44ad] transition rounded">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
