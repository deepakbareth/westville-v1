import React from 'react';
import { Plus, ArrowRightCircle } from 'lucide-react';

// Update these paths to match your project's asset structure
import imgTheatre from '../../assets/home/e1.jpg';
import imgMonument from '../../assets/home/e2.jpg';
import imgMuseum from '../../assets/home/e3.jpg';

const LocalExperiences = () => {
    const experiences = [
        {
            id: 1,
            title: "Provincetown Theatre",
            description: "Encouraging, promoting, and sustaining the performing arts through a year-round schedule of programming.",
            image: imgTheatre,
            linkText: "LEARN MORE"
        },
        {
            id: 2,
            title: "Monument & Museum",
            description: "Commemorating the landing of the Mayflower Pilgrims in 1620 and the signing of the Mayflower Compact.",
            image: imgMonument,
            linkText: "LEARN MORE"
        },
        {
            id: 3,
            title: "PAAM Art Museum",
            description: "A cultural institution dedicated to fine arts in America's oldest living art colony.",
            image: imgMuseum,
            linkText: "LEARN MORE"
        }
    ];

    return (
        <section className="w-full bg-[#f8f9fa] py-20 md:py-24">

            {/* Top Header Section */}
            <div className="text-center mb-12 md:mb-16">
                <p className="text-[13px] md:text-[14px] font-bold tracking-[4px] uppercase font-['Raleway',sans-serif] text-gray-900 mb-4">
                    EXPLORE
                </p>
                <h2 className="text-[30px] md:text-[40px] font-['Lora',serif] text-[#2D5D80] font-normal">
                    LOCAL EXPERIENCES
                </h2>
            </div>

            {/* 
              Grid Layout: 3 columns on desktop, stacking on mobile. 
              Centered with max-width to match the screenshot proportions perfectly.
            */}
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        className="relative group overflow-hidden w-full h-[450px] md:h-[500px] cursor-pointer bg-black"
                    >
                        {/* Background Image with the smooth zoom & slight blur effect */}
                        <img
                            src={exp.image}
                            alt={exp.title}
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-[1000ms] ease-out group-hover:scale-110 group-hover:blur-sm"
                        />

                        {/* Default Overlay: Bottom gradient for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0" />

                        {/* Hover Overlay: Solid dark slate/blue mimicking the active card in the image */}
                        <div className="absolute inset-0 bg-[#1d2b38]/95 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        {/* Content Container */}
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end h-full">

                            {/* Animated Text Wrapper */}
                            <div className="relative transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">

                                <h3 className="text-white text-[22px] md:text-[24px] font-['Lora',serif] tracking-wide pr-10 mb-4">
                                    {exp.title}
                                </h3>

                                {/* Expandable Description & Link */}
                                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <div className="overflow-hidden">
                                        <p className="text-gray-300 font-['Raleway',sans-serif] font-light text-sm md:text-[15px] leading-relaxed mb-8 pr-4">
                                            {exp.description}
                                        </p>

                                        <div className="flex items-center text-[#df9b29] hover:text-[#c48824] transition-colors duration-300 w-fit">
                                            <span
                                                className="uppercase tracking-[0.15em] text-xs  font-['lora'] mr-3 font-[13px]">
                                                {exp.linkText}
                                            </span>
                                            <ArrowRightCircle size={16} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Default State "+" Button */}
                            <div className="absolute bottom-8 right-8 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#17202A] opacity-100 transition-opacity duration-300 group-hover:opacity-0 shadow-lg z-20">
                                <Plus size={20} strokeWidth={1.5} />
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default LocalExperiences;