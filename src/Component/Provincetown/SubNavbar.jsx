import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SubNavbar = () => {
    const location = useLocation();

    // Exact links from your design image

    const subLinks = [
        { name: "P-TOWN", path: "/westville-v1/provincetown" },
        { name: "ATTRACTIONS", path: "/westville-v1/provincetown/attractions" },
        { name: "RESTAURANTS", path: "/westville-v1/provincetown/restaurants" },
        { name: "THINGS TO DO", path: "/westville-v1/provincetown/things-to-do" }
    ];


    return (
        // < div className="w-full bg-[#111922]" >

        <div className="sticky top-20 md:top-24 z-40 w-full bg-[#0b1e2c]">

            <div className="max-w-[1400px] mx-auto px-4 py-3 pt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">

                {subLinks.map((link, idx) => {
                    // Check if current URL matches the link
                    // (For testing purposes, you can temporarily hardcode `const isActive = idx === 0` to see the gold line on the first item)
                    const isActive = location.pathname === link.path;

                    return (
                        <Link
                            key={idx}
                            to={link.path}
                            // pb-1.5 creates the exact gap between the text and the line
                            // border-b-[3px] creates the thick underline
                            className={`text-[12px] md:text-[13px] font-bold font-['Raleway',sans-serif] tracking-wider uppercase transition-all duration-300 pb-1 border-b-[5px] ${isActive
                                ? "border-[#df9b29] text-white" // Gold underline and white text for active
                                : "border-transparent text-white hover:text-[#df9b29]" // Transparent border and white text for inactive
                                }`}
                        >
                            {link.name}
                        </Link>
                    )
                })}

            </div>
        </div >
    );
};

export default SubNavbar;