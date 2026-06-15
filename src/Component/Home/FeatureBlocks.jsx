import React from 'react';
import { Plus, ArrowRightCircle } from 'lucide-react';

// Assuming these are your paths based on the file names provided
import imgPatio from '../../assets/home/f2.jpg';
import imgKitchen from '../../assets/home/f1.jpg';

const FeatureBlocks = () => {
    const features = [
        {
            id: 1,
            title: "PRIVATE PATIO OASIS",
            description: "Step outside to your own secluded sanctuary. Enjoy your morning coffee or an evening cocktail surrounded by lush greenery, comfortable seating, and the peaceful sounds of nature.",
            image: imgPatio,
            linkText: "LEARN MORE"
        },
        {
            id: 2,
            title: "FULLY EQUIPPED KITCHEN",
            description: "Discover the joy of cooking in our bright, modern kitchen featuring premium stainless steel appliances, ample counter space, and everything you need to prepare a perfect meal.",
            image: imgKitchen,
            linkText: "LEARN MORE"
        }
    ];

    return (
        <section className="w-full bg-[#f0f2f5] py-12 md:py-10">
            {/* 
              Grid Layout: Centered with max-width, padding on the sides, and a gap between items.
              This perfectly replicates the boxed, separated look from your screenshot.
            */}
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 h-auto md:h-[600px]">

                {features.map((feature) => (
                    <div
                        key={feature.id}
                        // Added h-[450px] for mobile, while it takes the full md:h-[600px] on desktop
                        className="relative group overflow-hidden w-full h-[450px] md:h-full cursor-pointer bg-black"
                    >
                        {/* Background Image */}
                        <img
                            src={feature.image}
                            alt={feature.title}
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-[1000ms] ease-out group-hover:scale-110 group-hover:blur-[2px]" />

                        {/* Default State Overlay: Subtle gradient at the bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0" />

                        {/* Hover State Overlay: Solid dark blue/slate color */}
                        <div className="absolute inset-0 bg-[#17202A]/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        {/* Content Container */}
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 lg:p-14 flex flex-col justify-end h-full">

                            {/* Wrapper to control the slide-up animation of the entire text block */}
                            <div className="relative transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">

                                {/* Title */}
                                <h2 className="text-white text-[22px] md:text-[26px] font-helvetica tracking-wide pr-14 mb-4">
                                    {feature.title}
                                </h2>

                                {/* Description & Button wrapper (Expands on hover) */}
                                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <div className="overflow-hidden">
                                        <p className="text-gray-300 font-helvetica font-light text-sm md:text-[15px] leading-relaxed mb-8 max-w-[95%]">
                                            {feature.description}
                                        </p>

                                        {/* Learn More Link */}
                                        <div className="flex items-center text-[#df9b29] hover:text-[#c48824] transition-colors duration-300 w-fit">
                                            <span
                                                className="uppercase tracking-[0.15em] text-xs  font-['lora'] mr-3 font-[13px]">
                                                {feature.linkText}
                                            </span>
                                            <ArrowRightCircle size={18} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Default State "+" Button */}
                            <div className="absolute bottom-8 right-8 md:bottom-10 md:right-10 lg:bottom-14 lg:right-14 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#17202A] opacity-100 transition-opacity duration-300 group-hover:opacity-0 shadow-lg z-20">
                                <Plus size={24} strokeWidth={1.5} />
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default FeatureBlocks;