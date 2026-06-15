import React from 'react';

const LocationMap = () => {
    return (
        <section className="scroll-mt-24 space-y-6 py-20">

            {/* Standardized Header */}
            <div>
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#df9b29] block mb-2 font-raleway">
                    Location
                </span>
                <h2 className="text-[#2D5D80] font-helvetica text-[28px] md:text-[36px] font-normal mb-4 leading-tight">
                    Find Us Here
                </h2>
                <p className="text-gray-600 leading-relaxed text-[15px] md:text-[16px] font-helvetica mb-4">
                    Explore Provincetown while you plan your stay at the luxury and comfort of Westville Cottage LLC. Located in the heart of Ptown, the cottage offers easy access to everything that defines Provincetown at its best. Come and stay with us.
                </p>

                <div className="text-gray-600 font-helvetica text-[15px] space-y-1 mt-4">
                    <p className="font-bold text-[#2D5D80]">Westville Cottage LLC</p>
                    <p>47 Pleasant St, Provincetown, MA 02657, United States</p>
                </div>
            </div>

            {/* GOOGLE MAP EMBED */}
            <div className="w-full h-[400px] md:h-[450px] bg-gray-200 relative rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4688.123456789!2d-70.1951215!3d42.0478181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89fb587fbe02c803%3A0xe758118f88e86c6d!2sWestville%20Cottage%20LLC!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Westville Cottage LLC Location">
                </iframe>
            </div>

        </section>
    );
};

export default LocationMap;