import React from 'react';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';

const WestvilleCottage = () => {
    return (
        <section className="relative w-full py-12 sm:py-5 md:py-10 overflow-hidden">
            {/* Watermark Logo */}
            <img
                src={logo2}
                alt=""
                className="hidden md:block absolute left-[-15%] lg:left-[10%] xl:left-[30%] top-1/2 -translate-y-1/2 rotate-90 w-[150px] md:w-[200px] opacity-[0.12] pointer-events-none object-contain"
            />

            {/* Main Content Container */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex items-center justify-center">

                {/* Text Align Center container */}
                <div className="max-w-[1050px] flex flex-col items-center justify-center w-full">

                    {/* Subheading Area */}
                    <img
                        src={logo}
                        alt="Westville Cottage Logo"
                        className="w-16 sm:w-24 md:w-32 h-auto object-contain"
                    />
                    <div className="flex flex-col sm:flex-row items-center  justify-center  gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-2">
                        {/* Logo Icon */}
                        {/* Subheading Text */}
                        <span className="uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-[12px] md:text-[14px] font-bold text-[#111827] font-['Raleway',sans-serif] text-center">
                            Westville Cottage
                        </span>
                    </div>

                    {/* Location Text */}
                    <p className="mb-2 md:mb-2 text-[#3c6798] text-center font-['Raleway',sans-serif] font-bold text-[13px] sm:text-[14px] md:text-base px-4">
                        West End Provincetown, MA.
                    </p>

                    {/* Main Heading */}
                    <h2 className="font-['Lora',serif] text-[#2D5D80] text-[22px] sm:text-[18px] md:text-[20px] mb-2 md:mb-2 font-normal leading-snug md:leading-tight uppercase text-center px-4">
                        A luxury Vacation Rental
                    </h2>

                    {/* Paragraph Content */}
                    <div className="font-['Raleway',sans-serif] text-gray-800 font-normal  text-[14px] sm:text-[15px] md:text-[17px] text-center px-4">
                        <p>
                            Our Home Away from Home
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WestvilleCottage; 