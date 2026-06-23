import React, { useState, useEffect } from 'react';

// Update these paths to match your actual asset directory
import pet1 from '../../assets/petsImgs/pet1.jpg'; // Replace with your actual image paths
import pet2 from '../../assets/petsImgs/pet2.jpg';
import pet3 from '../../assets/petsImgs/pet3.jpg';
import pet4 from '../../assets/petsImgs/pet4.jpg';
import pet5 from '../../assets/petsImgs/pet5.jpg';
import pet6 from '../../assets/petsImgs/pet6.jpg';
import pet7 from '../../assets/petsImgs/pet7.jpg';
import pet8 from '../../assets/petsImgs/pet8.jpg';
import pet9 from '../../assets/petsImgs/pet9.jpg';
import pet10 from '../../assets/petsImgs/pet10.jpg';

import Heading from '../ReusableComp/Heading';
import Paragraph from '../ReusableComp/Paragraph';

const AboutPets = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const images = [pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10];

    // Image Slider Logic (Changes every 4 seconds)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="w-full bg-white py-2 md:py-5 overflow-hidden">

            <div className='flex justify-center items-center '>
                <Heading title="Pets at The Westville" />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start gap-12 md:gap-16">

                {/* === LEFT SIDE: TEXT CONTENT === */}
                <div className="w-full md:w-1/2 flex flex-col items-start text-left">

                    <div className="font-helvetica text-gray-700 leading-[1.8] text-[15px] md:text-[15px] space-y-5">

                        {/* Always Visible Paragraph */}
                        <Paragraph color='gray-700' text={"Pet lovers we are and when we travel anywhere in the country, the Wheatens* are with us all of the time. From the Ritz Carlton, Delft Haven, Homewood Suites, Best Western, Villa Galla and the homes of many friends across the country, we are always invited back because we consider it their home first."} />

                        <p className="pt-2">
                            We want you to feel very comfortable while at the Westville, therefore we ask that you respect our home and our furniture. If your dog is not completely house broken and has a tendency to "mark," the Westville should not be considered as your vacation getaway.
                        </p>
                        {/* Expanded Text */}
                        <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">

                                <p className="mt-5">
                                    We would like other dogs to feel at home; therefore, if they detect another dog's scent or mark it may make for a very yappy and uncomfortable stay for everyone. We offer a water bowl, special (BLACK) towels specifically for your pets. You are expected to travel with your pet's medication (if applicable) and some of their favorite toys.
                                </p>

                                <p className="mt-6 font-bold text-gray-900">
                                    ..."Forever our best friends"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Read More Button */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-8 bg-[#df9b29] hover:bg-[#c48824] text-[#ffffff] font-semibold font-['lora',serif] cursor-pointer text-[13px] px-8 py-3.5 tracking-[0.05em] uppercase transition-all duration-300 rounded-sm shadow-sm"
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

export default AboutPets;