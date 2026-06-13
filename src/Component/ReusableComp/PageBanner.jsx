import React from 'react';
import bannebg from '../../assets/footerbg.png';

const PageBanner = ({ title = "Your Page", bgImage = bannebg }) => {
    return (
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">

            {/* === BACKGROUND IMAGE LAYER === */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt={title}
                    // blur-[6px] image ko blur karega aur scale-105 edges ko cover karega
                    className="w-full h-full object-cover blur-[6px] scale-105"
                />
                {/* Dark Overlay - Taaki white text clear dikhe */}
                <div className="absolute inset-0 bg-[#0a192f]/40"></div>
            </div>

            {/* === CONTENT CONTAINER === */}
            <div className="relative z-10 text-center px-6 flex flex-col items-center pt-10 md:pt-20">

                {/* Sirf Ek Heading */}
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal font-['Lora',serif] tracking-[0.1em] uppercase drop-shadow-md">
                    {title}
                </h1>

            </div>
        </section>
    );
};

export default PageBanner;