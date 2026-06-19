import React, { useState } from "react";
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import Paragraph from "../ReusableComp/Paragraph";

const ProvinceTown = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="relative w-full bg-white py-16 md:py-18 overflow-hidden flex items-center justify-center">
            {/* Watermark Logo behind the content (not rotated, vertically oriented like the image) */}
            <img
                src={logo2}
                alt=""
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[700px] opacity-[0.060] pointer-events-none object-contain z-0"
            />

            {/* Content Container */}
            <div className="relative z-10 max-w-[850px] mx-auto px-6 flex flex-col items-center text-center">
                {/* Logo Icon at top center */}
                <img
                    src={logo}
                    alt="Key Icon"
                    className="w-12 md:w-32 h-auto object-contain mb-4"
                />

                {/* Subtitle / Category Label */}
                <span className="text-[13px] md:text-[15px] font-bold tracking-[0.25em] text-[#1c2c3e] font-raleway uppercase mb-3">
                    ABOUT US
                </span>

                {/* Main Heading */}
                <h2 className="text-[#2D5D80] font-helvetica text-[25px] md:text-[35px] font-normal mb-2 leading-tight">
                    ABOUT OUR QUAINT LITTLE TOWN
                </h2>

                {/* Secondary Title */}
                <h3 className="text-[#3c6798] font-helvetica text-[18px] md:text-[22px] font-normal  tracking-wide mb-3">
                    Affectionately Known As P-Town
                </h3>

                {/* Narrative Text */}
                <div className="font-['Raleway',sans-serif] text-gray-600 leading-[1.8] text-[14px] md:text-[15px] max-w-[820px]">
                    <Paragraph text={`
                        Provincetown is renowned for its beautiful beaches,
                        artsy residents, and wonderful vacation rentals dotting
                        its pristine landscape to accommodate endless vacationers
                        annually. Located in Barnstable County of Massachusetts,
                        this fishing and farming town has gradually transformed
                        into one of the most sought-after vacation destinations
                        of this region, flaunting exquisite historic attractions
                        and mind-blowing summer activities. You can even feel the
                        magic of this fantastic retreat lazing around in your cozy
                        Provincetown vacation rental with your near and dear ones.`}
                    />

                    {/* Expandable Paragraph */}
                    <div
                        className={`grid transition-all duration-500 ease-in-out ${isExpanded
                            ? "grid-rows-[1fr] opacity-100 mt-6"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                    >
                        <div className="overflow-hidden">
                            <Paragraph text={`
                                During the day make sure you enjoy all the lovely
                                activities on the beaches before making a few trips
                                to important landmarks like Pilgrim Monument and
                                Provincetown Museum. Depending on the time of your
                                vacation, you can also participate in many
                                interesting festivals and weeklong events which may
                                include The Portuguese Festival, Circuit Week (July
                                4th) Family Week, Carnival Week, Bear Week, and
                                Provincetown Jazz Festival.
                            `}
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-8 text-[12px] md:text-[13px] font-semibold tracking-[0.15em] text-[#2D5D80] hover:text-[#df9b29] font-['lora',serif] cursor-pointer transition-colors duration-300 uppercase"
                    >
                        {isExpanded ? "READ LESS −" : "READ MORE +"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProvinceTown;