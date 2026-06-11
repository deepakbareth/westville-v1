import React, { useState } from "react";
// Update this path to match your actual asset directory
import logo from '../../assets/logo.png';

const AboutSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const par2 = "We will also share some of our fun yet secret discoveries so your time visiting this magical place called Provincetown is well spent. You too will discover how and why we've made Westville Cottage our second home — and indeed why it's Provincetown's Best Kept Secret.";

    return (
        <section className="relative w-full bg-[#f4f6f8] py-16 md:py-25 overflow-hidden">

            {/* Watermark Logo 
                Adjusted size and position for mobile (w-[200px]) while keeping desktop (md:w-[350px])
            */}
            <img
                src={logo}
                alt=""
                className="absolute left-[-15%] md:left-[5%] top-1/2 -translate-y-1/2 rotate-90 w-[200px] md:w-[350px] opacity-[0.06] pointer-events-none object-contain"
            />

            {/* Main Content Container */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex items-center justify-center">

                {/* FIX: Changed `pl-30` to `pl-0 md:pl-10 lg:pl-30 w-full` 
                    This stops mobile text from being completely squished, but keeps desktop identical.
                */}
                <div className="max-w-[1050px] pl-0 md:pl-10 lg:pl-30 w-full">

                    {/* Subheading Area */}
                    <div className="flex items-center gap-3 md:gap-4 mb-6">
                        {/* Logo Icon */}
                        <img
                            src={logo}
                            alt="Key Icon"
                            className="w-10 md:w-16 h-auto object-contain"
                        />
                        {/* Gold Accent Line */}
                        <div className="w-6 md:w-12 h-[2px] bg-[#d9a44c]"></div>
                        {/* Subheading Text */}
                        <span className="uppercase tracking-[0.15em] md:tracking-[0.25em] text-[11px] md:text-[14px] font-bold text-[#111827] font-['Raleway',sans-serif]">
                            Welcome To Westville Cottage
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="font-['Lora',serif] text-[#2D5D80] text-[26px] md:text-[35px] mb-4 md:mb-6 font-normal leading-tight ">
                        A LUXURY VACATION COTTAGE RENTAL
                    </h2>

                    {/* Paragraph Content */}
                    <div className="font-['Raleway',sans-serif] text-gray-800 font-normal leading-[1.8] md:leading-[2.2] text-[15px] md:text-[17px]">
                        <p className="mb-4 md:mb-0">
                            West End Provincetown, MA. Our Home Away from Home.
                        </p>

                        <p className="mb-0">
                            Here we provide you with an intimate guide and tour of our home. We
                            will open our doors to share many details about us and the fully
                            appointed living space you will soon come to enjoy. We will let you in
                            on the luxury amenities, our great location, tips on how to pamper
                            yourself and your pet while here.
                        </p>

                        {/* Expandable Paragraph */}
                        <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                                <p className="pt-2 md:pt-4 mb-0">
                                    {par2}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Read More / Read Less Button */}
                    <button
                        className="mt-6 text-[#2D5D80] hover:text-[#d9a44c] cursor-pointer font-['Lora',serif] uppercase tracking-[0.15em] text-[13px] md:text-[14px] flex items-center gap-2 transition-colors duration-300"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? "READ LESS" : "READ MORE"}
                        <span className="text-lg font-light mb-[2px]">
                            {isExpanded ? "−" : "+"}
                        </span>
                    </button>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;