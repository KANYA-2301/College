import React from 'react';
import TBimg from '../assets/bg_teacher2.jpg';
import { BsPlayCircleFill } from "react-icons/bs";

const TeacherBelieve = () => {
  return (
    <div
      className="relative bg-fixed bg-cover bg-center py-20 flex items-center justify-center mt-10"
      style={{ backgroundImage: `url(${TBimg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative text-center px-6 sm:px-10 max-w-4xl">
        <p className="text-2xl sm:text-4xl font-bold text-white leading-snug">
          Teachers Believe That Education <br />
          Is An Important Aspect In Every <br />
          Person’s Life
        </p>

        <p className="text-white mt-4 text-sm sm:text-base leading-relaxed">
          Scelerisque potenti nisi nec venenatis inceptos maecenas viverra feugiat purus gravida. <br />
          Pellentesque fusce vivamus nulla sed natoque. Phasellus accumsan venenatis nisi sollicitudin inceptos.
        </p>

        <div className="mt-6 sm:mt-10 flex justify-center">
          <BsPlayCircleFill className="text-white hover:scale-110 transition-transform duration-300" size={70} />
        </div>
      </div>
    </div>
  );
};

export default TeacherBelieve;
