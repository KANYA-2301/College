import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";

const CampusIntro = () => {
    const primaryPurple = '#8e44ad';

    const checkListItems = [
        "Graduate Programs",
        "Undergraduate Programs",
        "Doctoral Degrees",
        "International Hubs",
        "Global Students",
        "Alumni & Giving"
    ];
    return (
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start md:gap-23 relative">
                <div className="relative w-full lg:w-6/12">
                    <div className="w-full h-80 sm:h-96 lg:h-[480px] overflow-hidden shadow-lg">
                        <img
                            src="https://webkit.moxcreative.com/acadrova/wp-content/uploads/sites/20/2023/06/portrait-of-smiling-male-college-student-in-busy-communal-campus-building-1536x946.jpg"
                            alt="Smiling male college student"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div
                        className="absolute bottom-[-30px] -right-6 bg-white p-9  shadow-xl w-10/12 md:w-8/12 lg:w-9/12 max-w-xs"
                        style={{ borderTop: `4px solid ${primaryPurple}`, zIndex: 10 }}
                    >
                        <h2 className="text-xl sm:text-2xl font-bold mb-2">Established since 1972</h2>
                        <p className="text-gray-600 text-sm">
                            Interdum facilisi nullam nascetur sit arcu imperdiet. Ultrices finibus ipsum morbi nullam proin.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 mt-20 lg:mt-0">
                    <h3
                        className="uppercase text-xs tracking-widest px-4 py-1 mb-1 inline-block"
                        style={{ border: '1px solid black' }}
                    >
                        Introduction Our Campus
                    </h3>
                    <h1 className='text-2xl sm:text-4xl font-bold leading-tight mb-6 mt-8'>
                        A good education is a <span className="block">foundation for a better future</span>
                    </h1>
                    <p className="mt-5 text-gray-600 text-base mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-8 mb-10">
                        {checkListItems.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <FaCircleCheck className="text-lg" style={{ color: primaryPurple }} />
                                <span className="text-base text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>
                    <button
                        className="py-3 px-8 text-white bg-[#8e44ad] font-medium  hover:bg-white hover:border hover:border-[#8e44ad] hover:text-[#8e44ad] transition duration-300"
                    >More About Us</button>
                </div>
            </div>
        </div>
    );
}

export default CampusIntro;
