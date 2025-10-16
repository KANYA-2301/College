import React from "react";
import Degreeimg from "../assets/Degreeimg.jpg";
import {
  FaFlask,
  FaBalanceScale,
  FaCogs,
  FaPalette,
  FaChartBar,
  FaMicrochip,
} from "react-icons/fa";

export default function Degree() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row relative p-6 lg:p-0 mt-40"> 
      <div className="lg:w-1/3 w-full relative h-[777px] -translate-y-16 md:ml-8"> 
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Degreeimg})` }}
        ></div>
        <div className="absolute inset-0 bg-[#8e44ad] opacity-90"></div>
        <div className="relative text-white p-8 shadow-2xl h-full flex flex-col justify-start">
          <h2 className="text-3xl font-bold mb-4">Degrees & Certifications</h2>
          <hr className="border-white/40 mb-6" />
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Bachelor's</h3>
              <p className="text-gray-200 text-sm">
                Consequat scelerisque eros etiam donec elit et tempor efficitur tristique.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Master's</h3>
              <p className="text-gray-200 text-sm">
                Consequat scelerisque eros etiam donec elit et tempor efficitur tristique.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Doctoral</h3>
              <p className="text-gray-200 text-sm">
                Consequat scelerisque eros etiam donec elit et tempor efficitur tristique.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Certification</h3>
              <p className="text-gray-200 text-sm">
                Consequat scelerisque eros etiam donec elit et tempor efficitur tristique.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Minor</h3>
              <p className="text-gray-200 text-sm">
                Consequat scelerisque eros etiam donec elit et tempor efficitur tristique.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 w-full p-8">
        <h2 className="text-4xl font-bold mb-4">
          Majors, Minors & Graduate Programs
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Ac tortor eleifend placerat integer platea himenaeos ante rutrum habitant.
          Curae parturient cubilia elementum lorem facilisi interdum ad nostra
          consequat mus maximus.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ProgramCard
            icon={<FaMicrochip className="text-[#8e44ad] text-2xl" />}
            title="Computer Science"
          />
          <ProgramCard
            icon={<FaChartBar className="text-[#8e44ad] text-2xl" />}
            title="Management Business"
          />
          <ProgramCard
            icon={<FaFlask className="text-[#8e44ad] text-2xl" />}
            title="Sciences"
          />
          <ProgramCard
            icon={<FaCogs className="text-[#8e44ad] text-2xl" />}
            title="Engineering"
          />
          <ProgramCard
            icon={<FaBalanceScale className="text-[#8e44ad] text-2xl" />}
            title="Law Department"
          />
          <ProgramCard
            icon={<FaPalette className="text-[#8e44ad] text-2xl" />}
            title="Art & Design"
          />
        </div>
      </div>
    </div>
  );
}

function ProgramCard({ icon, title }) {
  return (
    <div className="p-4 hover:shadow-lg rounded-lg transition bg-white">
      <div className="flex items-center space-x-3 mb-2">
        {icon}
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </div>
  );
}
