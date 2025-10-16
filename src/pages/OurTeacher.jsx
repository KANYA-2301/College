import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
;

const primaryPurple = '#8e44ad';
const darkPurpleHover = '#5b2c6f'; 

const teacherData = [
    {
        name: "Carlos Bailey",
        title: "Chair of the Corporation",
        image: "https://webkit.moxcreative.com/acadrova/wp-content/uploads/sites/20/2023/06/Team-4.jpg",
        socials: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            linkedin: '#',
        }
    },
    {
        name: "Tammy Burris",
        title: "Vice President",
        image: "https://webkit.moxcreative.com/acadrova/wp-content/uploads/sites/20/2023/06/Team-8.jpg",
        socials: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            linkedin: '#',
        }
    },
    {
        name: "Carolyn Pellegrino",
        title: "Senior Instructor",
        image: "https://webkit.moxcreative.com/acadrova/wp-content/uploads/sites/20/2023/06/Team-7.jpg",
        socials: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            linkedin: '#',
        }
    },
];

const SocialIcons = ({ socials }) => {
    const iconMap = { facebook: FaFacebookF, twitter: FaTwitter, instagram: FaInstagram, linkedin:FaInstagram};
    const defaultStyle = { backgroundColor: 'white', color: primaryPurple, boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px -1px rgba(0,0,0,0.06)' };
    const hoverStyle = { color: darkPurpleHover, boxShadow: '0 4px 8px -2px rgba(0,0,0,0.2)' };

    return (
        <div className="absolute top-4 right-4 flex flex-col space-y-2 transition-opacity duration-300">
            {Object.entries(socials).map(([key, url]) => {
                const Icon = iconMap[key];
                if (!Icon) return null;
                return (
                    <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 w-8 h-8 flex items-center justify-center shadow-md transition-all duration-300"
                        style={defaultStyle}
                        onMouseEnter={e => { e.currentTarget.style.color = hoverStyle.color; e.currentTarget.style.boxShadow = hoverStyle.boxShadow; }}
                        onMouseLeave={e => { e.currentTarget.style.color = defaultStyle.color; e.currentTarget.style.boxShadow = defaultStyle.boxShadow; }}
                    >
                        <Icon size={16} />
                    </a>
                );
            })}
        </div>
    );
};

const TeacherCard = ({ teacher }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative group h-72">
                <img 
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                    onError={e => e.currentTarget.src = 'https://placehold.co/300x400/34495e/ffffff?text=Image+Unavailable'}
                />
                <SocialIcons socials={teacher.socials} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <div className="text-center py-6 px-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                <p className="text-sm font-medium" style={{ color: primaryPurple }}>{teacher.title}</p>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-25">
                    <div className="lg:col-span-1 mt-8">
                        <p className="uppercase text-sm font-semibold tracking-widest text-gray-500 mb-3 box-border border-1 text-center">Our Teacher</p>
                        <h2 className="text-2xl sm:text-3xl font-bold leading- text-gray-900 mb-6">
                            Good Education Starts From Great Teachers
                        </h2>
                        <p className="text-gray-600">
                            Leo erat nisl posuere lectus cubilia elit tempor vehicula dictumst bibendum finibus. Sodales ut pulvinar consequat a elementum rhoncus leo.
                        </p>
                    </div>
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {teacherData.map((teacher, index) => (
                                <TeacherCard key={index} teacher={teacher} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
