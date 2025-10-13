import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo_Acadrova.png";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const NavigationBar = () => {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [facultyOpen, setFacultyOpen] = useState(false);

  const pagesRef = useRef();
  const facultyRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pagesRef.current && !pagesRef.current.contains(event.target)) {
        setPagesOpen(false);
      }
      if (facultyRef.current && !facultyRef.current.contains(event.target)) {
        setFacultyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-[#8e44ad] to-[#401f4e] flex flex-col sm:flex-row justify-between items-center px-4 py-2 text-sm sm:text-base gap-2 sm:gap-0">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 text-white">
          <div className="flex items-center gap-1"><FaLocationDot /> (+62)21-2002-2012</div>
          <div className="flex items-center gap-1"><IoMdMail /> hello@yourdomain.tld</div>
          <div className="flex items-center gap-1"><FaClock /> Mon - Fri : 09.00-17.00</div>
        </div>
        <div className="flex gap-3 sm:gap-5 text-white"><FaFacebookF /><FaInstagram /><FaLinkedinIn /><FaTwitter /></div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center p-5 shadow-xl gap-4 sm:gap-0 relative">
        <Link to="/"><img src={logo} className="w-36 sm:w-50" alt="logo" /></Link>
        <ul className="flex flex-col sm:flex-row gap-5 sm:gap-10 font-bold items-center">
          <li>
            <Link to="/" className="text-lg hover:text-purple-700">Home</Link>
          </li>
          <li className="relative" ref={facultyRef}>
            <Link to="/"className="flex items-center gap-1 text-lg hover:text-purple-700"onClick={() => setFacultyOpen(!facultyOpen)} >Faculty <IoIosArrowDown size={16} /> </Link>
            {facultyOpen && (
              <ul className="absolute bg-white shadow-lg rounded-md mt-2 w-48 z-50">
                <li className="hover:bg-gray-200 p-2">
                  <Link to="/faculty-detail" className="block" onClick={() => setFacultyOpen(false)}>Faculty Details</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative" ref={pagesRef}>
            <div className="flex items-center gap-1 cursor-pointer text-lg" onClick={() => setPagesOpen(!pagesOpen)}>Pages <IoIosArrowDown size={16} /></div>
            {pagesOpen && (
              <ul className="absolute bg-white shadow-lg rounded-md mt-2 w-48 z-50">
                <li className="hover:bg-gray-200 p-2">
                  <Link to="/contact" className="block" onClick={() => setPagesOpen(false)}> Contact</Link>
                </li>
                <li className="hover:bg-gray-200 p-2">
                  <Link to="/how-to-apply" className="block" onClick={() => setPagesOpen(false)} >How To Apply</Link>
                </li>
                <li className="hover:bg-gray-200 p-2">
                  <Link to="/teachers" className="block" onClick={() => setPagesOpen(false)}>Teachers</Link>
                </li>
                <li className="hover:bg-gray-200 p-2">
                  <Link to="/blog" className="block" onClick={() => setPagesOpen(false)} >Blog</Link>
                </li>
                <li className="hover:bg-gray-200 p-2">
                  <Link to="/single-post" className="block" onClick={() => setPagesOpen(false)}>Single Post</Link>
                </li>
                <li className="hover:bg-gray-200 p-2">
                  <Link to="/error" className="block" onClick={() => setPagesOpen(false)}>Error Page</Link>
                </li>
              </ul>
            )}
          </li>
          <li><Link to="/about" className="text-lg hover:text-purple-700">About Us</Link></li>
        </ul>
        <div><IoMdSearch size={30} className="cursor-pointer" /></div>
      </div>
    </div>
  );
};

export default NavigationBar;
