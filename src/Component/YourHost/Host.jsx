import React, { useState, useEffect } from 'react';

// Update these paths to match your actual asset directory
import host1 from '../../assets/Host/h1.jpg'; // Replace with your actual image paths
import host2 from '../../assets/Host/h2.jpg';
import host3 from '../../assets/Host/h3.jpg';
import host4 from '../../assets/Host/h4.jpg';
import Heading from '../ReusableComp/Heading';
import Paragraph from '../ReusableComp/Paragraph';

const Host = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const images = [host1, host2, host3, host4];

    // Image Slider Logic (Changes every 4 seconds)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="w-full bg-white py-2 md:py-5 overflow-hidden">

            <h2 className="max-w-5xl mx-auto text-center font-['Lora',serif] text-[#2D5D80] text-[17px] md:text-[20px] mb-6 md:mb-10 font-normal px-5 sm:px-0 leading-tight ">
                "We're dedicated to maintaining old traditions that made Provincetown, Provincetown"
                Voted #1 in guest hospitality
            </h2>
            <div className='flex justify-center items-center '>
                <Heading title="THE HOSTS" />
            </div>
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start gap-12 md:gap-16">

                {/* === LEFT SIDE: TEXT CONTENT === */}
                <div className="w-full md:w-1/2 flex flex-col items-start text-left">


                    <div className="font-helvetica text-gray-700 leading-[1.8] text-[15px] md:text-[15px] space-y-5">

                        <Paragraph color='gray-700' text={"Paul and Dominic met in Connecticut in the Fall of 1995. We have been inseparable ever since. Having to coerce Paul into taking vacations, as it was never a favorite pastime of his, was the most intensive challenge. Our first vacation together was to Provincetown for one week in the summer of 1996. Steamer trunks, bicycles, and the likes in a little Mitsubishi Eclipse, we were off to discover a place like none other... Provincetown."} />
                        <p>
                            Though we have traveled extensively throughout the country and abroad, Provincetown has been our perfect getaway, just a few hours from Connecticut. We have stayed at many places, most notably with our dear friends Bill &amp; Jerry at their Delft Haven cottage. We decided that we wanted a place of our own to just go to after a really tough week at work to relax, rejuvenate, and revive.
                        </p>

                        {/* Expanded Text */}
                        <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                                <p className="pt-2">
                                    Finally, after three years of searching for our home away from home, we found this precious little gem. Our cozy, comfortable getaway for the family with, of course, our kids — Hadley, Whiskey*, Josie*, and Liberty* ... “the Wheatens”.
                                </p>

                                <div className="mt-6 space-y-2 text-[#3a4a5d]">
                                    <p><strong className="font-bold text-gray-900">Whiskey*</strong> Mar. 4, 2000 - Aug. 23, 2012</p>
                                    <p><strong className="font-bold text-gray-900">Josie*</strong> Mar. 4, 2000 - Oct. 20, 2012</p>
                                    <p><strong className="font-bold text-gray-900">Liberty*</strong> Oct. 6, 2001 - Feb. 2, 2016</p>
                                </div>

                                <p className="mt-6 font-bold text-gray-900">
                                    ..."Until we meet again"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Read More Button */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-8 bg-[#df9b29] hover:bg-[#c48824] text-black font-semibold font-['lora',serif] cursor-pointer text-[13px] px-8 py-3.5 tracking-[0.05em] uppercase transition-all duration-300 rounded-sm shadow-sm"
                    >
                        {isExpanded ? "READ LESS" : "READ MORE"}
                    </button>
                </div>

                {/* === RIGHT SIDE: IMAGE SLIDER === */}
                <div className="w-full md:w-1/2 relative h-[350px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
                    {images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`Host image ${idx + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Host;