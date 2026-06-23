import React from 'react';
import img from '../../assets/home/vid3.jpg'

const CottageDetails = () => {

    return (
        <section
            // FIX 1: Changed h-[700px] to h-auto md:h-[700px]. 
            // This allows the section to grow on mobile to fit the text, but stays 700px on desktop.
            className="w-full h-auto md:h-[700px] mt-10 mb-10 flex flex-col md:flex-row bg-[#1d2733] text-white overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(rgba(29, 39, 51, 0.92), rgba(29, 39, 51, 0.92)), url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >

            {/* Left Side: Image container */}
            {/* FIX 2: Changed md:h-auto to md:h-full to ensure perfect vertical centering on desktop */}
            <div className="w-full md:w-[65%] h-72 sm:h-80 md:h-full flex items-center justify-center">
                <img
                    src={img}
                    alt="Westville Cottage Bedroom"
                    // FIX 3: Changed h-[600px] to h-full md:h-[600px]. 
                    // Fits the container on mobile, but stays exactly 600px on desktop.
                    className="w-full h-full  md:h-[600px] object-cover"
                />
            </div>

            {/* Right Side: Content with generous padding for a premium feel */}
            <div className="w-full md:w-1/2 p-5 md:p-10 lg:p-12 flex flex-col justify-center">

                {/* Title */}
                <h2 className="text-3xl md:text-[35px] font-helvetica mb-6 tracking-wide text-white">
                    WESTVILLE COTTAGE
                </h2>

                {/* Description Text */}
                <p className="text-gray-300 font-normal font-helvetica leading-relaxed mb-10 text-sm md:text-[15px] ">
                    Thank you for your interest in the Westville Cottage! The true spirit of Old
                    Cape Cod has been preserved in this unique property, originally built in
                    1839, which was meticulously designed and restored in 2002 and
                    graciously endowed with modern luxuries without compromising its historic
                    integrity. In 2005, we were fortunate to acquire this cottage-style condo; we
                    immediately fell in love with this charmer and decided to make it our home
                    away from home. Next, we embarked on our name.  After months and months of deliberating on a name that readily identifies and connects us to this space, we decided on the Westville Cottage. "West" for the west end location of the town and "Ville" capturing the village aspect of this new neighborhood.
                    {/* <span className="text-[#df9b29] cursor-pointer hover:text-[#c48824] transition-colors font-medium">... Read More</span> */}
                </p>

                {/* Content Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-10">

                    <div className="flex items-center space-x-3 font-raleway ">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span className="text-[15px] font-semibold">Sleeps: 2</span>
                    </div>

                    <div className="flex items-center space-x-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
                            <rect x="3" y="14" width="18" height="8" rx="2" ry="2"></rect><path d="M5 14v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"></path><circle cx="12" cy="7" r="2"></circle>
                        </svg>
                        <span className="text-[15px] font-semibold">Bedrooms: 1</span>
                    </div>

                    <div className="flex items-center space-x-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
                            <path d="M9 2v4 M15 2v4 M3 10h18 M4 10v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9 M12 14v3"></path>
                        </svg>
                        <span className="text-[15px] font-semibold">Bathrooms: 1</span>
                    </div>

                    <div className="flex items-center space-x-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <span className="text-[15px] font-semibold">Type: House</span>
                    </div>

                    <div className="flex items-center space-x-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                        <span className="text-[15px] font-semibold">Min: 3 Nights</span>
                    </div>

                    <div className="flex items-center space-x-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
                            <line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        <span className="text-[15px] font-semibold">$315.00 Per Night</span>
                    </div>

                </div>

                {/* View Details Button */}
                <div>
                    <button className="border border-white/60 hover:bg-white hover:text-[#1d2733] text-white font-medium font-['lora'] text-[13px] px-8 py-3 tracking-[0.15em] uppercase transition-colors duration-300">
                        VIEW DETAILS
                    </button>
                </div>

            </div>
        </section>
    );
};

export default CottageDetails;