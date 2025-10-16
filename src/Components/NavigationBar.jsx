import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo_Acadrova.png";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const NavigationBar = () => {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [facultyOpen, setFacultyOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pagesRef = useRef();
  const facultyRef = useRef();
  const academicsRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pagesRef.current && !pagesRef.current.contains(event.target)) {
        setPagesOpen(false);
      }
      if (facultyRef.current && !facultyRef.current.contains(event.target)) {
        setFacultyOpen(false);
      }
      if (academicsRef.current && !academicsRef.current.contains(event.target)) {
        setAcademicsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#8e44ad] to-[#401f4e] flex justify-between items-center px-4 py-2 text-sm md:text-base">
        <div className="hidden lg:flex flex-row gap-5 text-white">
          <div className="flex items-center gap-1">
            <FaLocationDot /> (+62)21-2002-2012
          </div>
          <div className="flex items-center gap-1">
            <IoMdMail /> hello@yourdomain.tld
          </div>
          <div className="flex items-center gap-1">
            <FaClock /> Mon - Fri : 09.00-17.00
          </div>
        </div>
        <div className="flex gap-4 text-white text-lg justify-center w-full lg:w-auto">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaTwitter />
        </div>
      </div>

      {/* Main Nav */}
      <div className="p-4 lg:p-5 shadow-xl relative">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-4 md:gap-0">
          {/* Logo */}
          <Link to="/">
            <img src={logo} className="w-32 lg:w-40" alt="logo" />
          </Link>

          {/* Hamburger for mobile */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? (
                <IoMdClose size={30} className="cursor-pointer" />
              ) : (
                <GiHamburgerMenu size={30} className="cursor-pointer" />
              )}
            </button>
          </div>

          {/* Menu */}
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row gap-5 lg:gap-10 font-bold items-center absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent p-5 lg:p-0 shadow-md lg:shadow-none z-40 md:flex-row md:justify-between`}
          >
            <li>
              <Link
                to="/"
                className="text-lg hover:text-purple-700"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
              <li>
              <Link
                to="/about"
                className="text-lg hover:text-purple-700"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            {/* Academics Dropdown */}
            <li className="relative" ref={academicsRef}>
              <div className="flex items-center gap-1 text-lg hover:text-purple-700 cursor-pointer">
                <Link to="/academics" onClick={() => setMenuOpen(false)}>Academics</Link>
                <IoIosArrowDown
                  size={16}
                  onClick={(e) => {
                    e.stopPropagation();
                    setAcademicsOpen(!academicsOpen);
                  }}
                />
              </div>
              {academicsOpen && (
                <ul className="absolute bg-white shadow-lg rounded-md mt-2 w-48 z-50">
                  <li className="hover:bg-gray-200 p-2">
                    <Link
                      to="/academic-detail"
                      className="block"
                      onClick={() => {
                        setAcademicsOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Academic Detail
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Faculty Dropdown */}
            <li className="relative" ref={facultyRef}>
              <div className="flex items-center gap-1 text-lg hover:text-purple-700 cursor-pointer">
                <Link to="/faculty" onClick={() => setMenuOpen(false)}>Faculty</Link>
                <IoIosArrowDown
                  size={16}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFacultyOpen(!facultyOpen);
                  }}
                />
              </div>
              {facultyOpen && (
                <ul className="absolute bg-white shadow-lg rounded-md mt-2 w-48 z-50">
                  <li className="hover:bg-gray-200 p-2">
                    <Link
                      to="/faculty-detail"
                      className="block"
                      onClick={() => {
                        setFacultyOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Faculty Details
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Pages Dropdown */}
            <li className="relative" ref={pagesRef}>
              <div
                className="flex items-center gap-1 text-lg hover:text-purple-700 cursor-pointer"
                onClick={() => setPagesOpen(!pagesOpen)}
              >
                <span>Pages</span>
                <IoIosArrowDown size={16} />
              </div>
              {pagesOpen && (
                <ul className="absolute bg-white shadow-lg rounded-md mt-2 w-48 z-50">
                  <li className="hover:bg-gray-200 p-2">
                    <Link
                      to="/contact"
                      className="block"
                      onClick={() => {
                        setPagesOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="hover:bg-gray-200 p-2">
                    <Link
                      to="/how-to-apply"
                      className="block"
                      onClick={() => {
                        setPagesOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      How To Apply
                    </Link>
                  </li>
                  <li className="hover:bg-gray-200 p-2">
                    <Link
                      to="/teachers"
                      className="block"
                      onClick={() => {
                        setPagesOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Teachers
                    </Link>
                  </li>
                  <li className="hover:bg-gray-200 p-2">
                    <Link
                      to="/blog"
                      className="block"
                      onClick={() => {
                        setPagesOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="hover:bg-gray-200 p-2">
                    <Link
                      to="/single-post"
                      className="block"
                      onClick={() => {
                        setPagesOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Single Post
                    </Link>
                  </li>
                  <li className="hover:bg-gray-200 p-2">
                    <Link
                      to="/error"
                      className="block"
                      onClick={() => {
                        setPagesOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Error Page
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            
          </ul>

          {/* Search icon */}
          <div className="hidden lg:block absolute right-5 top-6 md:static">
            <IoMdSearch size={30} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
