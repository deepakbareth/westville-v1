import React from 'react';

const LocationMap = () => {
    return (
        <section className="w-full bg-white ">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-stretch gap-8 md:gap-12">

                {/* === LEFT SIDE: TEXT CONTENT === */}
                <div className="w-full md:w-1/3 flex flex-col justify-center">
                    <p className="uppercase tracking-[0.25em] text-[#111827] text-[12px] md-text-[14px] font-bold font-font-Helvetica mb-3">
                        LOCAL MAP
                    </p>
                    <h2 className="text-[#2D5D80] font-Helvetica text-[25px] md:text-[35px] font-normal mb-6 leading-tight">
                        FIND US<br />HERE
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] md:text-[16px] font-['Raleway',sans-serif]">
                        Explore Provincetown while you plan your stay at the luxury and comfort of Westville Cottage LLC. Located in the heart of Ptown, the cottage offers easy access to everything that defines Provincetown at its best. Come and stay with us.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] font-bold md:mt-10 mt-5 md:text-[16px] font-['Raleway',sans-serif]">
                        Westville Cottage LLC</p>

                    <p className="text-gray-600 leading-relaxed text-[15px] md:text-[16px] font-['Raleway',sans-serif]">
                        47 Pleasant St, Provincetown, MA 02657, United States</p>
                </div>

                {/* === RIGHT SIDE: GOOGLE MAP EMBED === */}
                <div className="w-full md:w-2/3 h-[400px] md:h-[500px] bg-gray-200 border-l-[8px] border-gray-300 relative">     <iframe
                    // class="wv-map-iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4688.123456789!2d-70.1951215!3d42.0478181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89fb587fbe02c803%3A0xe758118f88e86c6d!2sWestville%20Cottage%20LLC!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    // style="border:0;"
                    // allowfullscreen=""
                    // loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                    title="Westville Cottage LLC Location">
                </iframe>
                </div>

            </div>
        </section>
    );
};

export default LocationMap;