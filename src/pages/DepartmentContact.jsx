import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import Outdoor from "../assets/Outdoor.jpg";

const DepartmentContact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
      <div className="md:col-span-2">
        <h1 className="text-4xl font-bold mb-6 leading-snug">
          The secret entry to the faculty of <br /> Computer Science
        </h1>
        <p className="text-gray-600 mb-4">
           Vehicula porttitor netus adipiscing facilisi leo letius fames congue. Sollicitudin arcu vel habitant suspendisse posuere efficitur dis mauris per. 
           Ridiculus himenaeos duis eleifend dignissim dolor. Congue montes id fusce tortor tempor sapien torquent dolor. Consectetuer nascetur per blandit dapibus vestibulum sed quam mauris sem eu viverra. Senectus sollicitudin posuere duis nisl euismod.        </p>
        <p className="text-gray-600 mb-8">
            Egestas feugiat integer cubilia dapibus magna. Volutpat hendrerit massa sapien pellentesque montes dolor rutrum curae augue fringilla. Molestie potenti elit mus lacus bibendum curabitur nisi posuere. Pharetra fringilla auctor risus elit montes.
             Elit ipsum accumsan praesent hendrerit nec curae. Curae rhoncus quam leo magnis augue volutpat. Libero dis magna lacinia justo pede potenti ultricies fusce curae tellus maecenas.</p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Test registration & fee :</h2>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Dolor tristique blandit sapien</li>
              <li>Lacinia accumsan pulvinar dis condimentum</li>
              <li>Lacinia hac fringilla eu nec</li>
              <li>Ullamcorper potenti maecenas dignissim</li>
              <li>Primis condimentum integer taciti</li>
            </ul>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://webkit.moxcreative.com/acadrova/wp-content/uploads/sites/20/2023/06/asian-student-visiting-lecture-at-university-1536x1024.jpg"
              alt="Student"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">Graduate benefit</h2>
        <p className="text-gray-600 mt-3">
         Nostra habitant finibus eleifend commodo ridiculus pede mattis lacinia hac orci. Primis potenti sapien at ante morbi quisque facilisi adipiscing. A est accumsan fusce iaculis consectetuer magnis. 
         Massa cursus accumsan pede nulla parturient dictum erat condimentum scelerisque porttitor.
        </p>
      </div>
      <div className="space-y-8">
        <div className="relative overflow-hidden text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${Outdoor})` }}
          ></div>
          <div className="absolute inset-0 bg-[#8e44ad] opacity-80"></div>
          <div className="relative p-8 py-23">
            <h3 className="text-2xl font-bold mb-4">Department Contact</h3>
            <p><strong>Hotline :</strong> 888-2003-234</p>
            <p className="mt-2">Jl Cempaka Wangi No 22 Jakarta - ID</p>
            <p>(+62)21-2002-2012</p>
            <p>hello@yourdomain.tld</p>
            <p className="mt-2">Mon - Fri : 09.00-17.00</p>

            <h4 className="mt-4 font-semibold">Social info :</h4>
            <div className="flex space-x-3 mt-2">
              <a href="#" target="_top" className="bg-white text-[#8e44ad] p-2 flex items-center justify-center hover:bg-gray-200 transition">
                <FaFacebookF />
              </a>
              <a href="#" target="_top" className="bg-white text-[#8e44ad] p-2 flex items-center justify-center hover:bg-gray-200 transition">
                <FaTwitter />
              </a>
              <a href="#" target="_top" className="bg-white text-[#8e44ad] p-2 flex items-center justify-center hover:bg-gray-200 transition">
                <FaLinkedinIn />
              </a>
              <a href="#" target="_top" className="bg-white text-[#8e44ad] p-2 flex items-center justify-center hover:bg-gray-200 transition">
                <FaYoutube />
              </a>
              <a href="#" target="_top" className="bg-white text-[#8e44ad] p-2 flex items-center justify-center hover:bg-gray-200 transition">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="border-gray-400 border p-8">
          <h3 className="text-2xl font-bold mb-4 text-[#8e44ad]">Related downloads</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-black"><span className="text-[#8e44ad] text-xl font-bold">📄</span>Brochure Department</li>
            <li className="flex items-center gap-2 text-black"> <span className="text-[#8e44ad] text-xl font-bold">📄</span>Online Programs</li>
            <li className="flex items-center gap-2 text-black"><span className="text-[#8e44ad] text-xl font-bold">📄</span>Journals Departments</li>
            <li className="flex items-center gap-2 text-black"><span className="text-[#8e44ad] text-xl font-bold">📄</span> Academic Calendar</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DepartmentContact;
