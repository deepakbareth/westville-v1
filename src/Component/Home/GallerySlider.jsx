import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Update these paths to match your actual asset directory
import img1 from '../../assets/home/g1.jpg';
import img2 from '../../assets/home/g2.jpg';
import img3 from '../../assets/home/g3.jpg';
import img4 from '../../assets/home/g4.jpg';

const GallerySlider = () => {
    const images = [img1, img2, img3, img4];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-slide logic
    useEffect(() => {
        if (isHovered) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000); // 5 seconds per slide for a premium, relaxed feel

        return () => clearInterval(timer);
    }, [isHovered, images.length]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    // Calculate dynamic styles for continuous looping and exact gap sizing
    const getSlideStyle = (idx) => {
        let diff = idx - currentIndex;
        const total = images.length;

        // Wrap around logic for an infinite loop feel
        if (diff > Math.floor(total / 2)) diff -= total;
        if (diff < -Math.floor(total / 2)) diff += total;

        const isVisible = Math.abs(diff) <= 1;

        return {
            // OPTIMIZATION 1: Use translate3d to force GPU hardware acceleration
            transform: `translate3d(calc(-50% + ${diff * 100}% + ${diff * 1.5}rem), 0, 0)`,
            opacity: isVisible ? 1 : 0,
            zIndex: diff === 0 ? 20 : 10 - Math.abs(diff),

            // OPTIMIZATION 2: Target exact properties to prevent expensive layout repaints
            transition: 'transform 800ms cubic-bezier(0.25, 1, 0.5, 1), opacity 800ms cubic-bezier(0.25, 1, 0.5, 1)',

            // OPTIMIZATION 3: Hint to the browser what will animate
            willChange: 'transform, opacity',

            // OPTIMIZATION 4: Disable pointer events on hidden slides to save CPU usage
            pointerEvents: isVisible ? 'auto' : 'none',
        };
    };

    return (
        <section className="w-full bg-[#f0f2f5] py-10 overflow-hidden">

            {/* Header Section */}
            <div className="text-center mb-5 md:mb-5">
                <p className="text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase font-['Raleway',sans-serif] text-gray-900 mb-4">
                    PHOTOS
                </p>
                <h2 className="text-[30px] md:text-[40px] font-['Lora',serif] text-[#2D5D80] font-normal">
                    FROM OUR GALLERY
                </h2>
            </div>

            {/* Carousel Container */}
            <div
                className="relative w-full h-[350px] md:h-[550px] lg:h-[650px] flex items-center justify-center my-8"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Track */}
                <div className="relative w-full h-full">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            // Width is 85% on mobile, 70% on desktop to leave room for the "peeking" side images
                            // OPTIMIZATION 5: Removed 'transition-all' from here since it is now strictly managed in style tag
                            className="absolute top-0 left-1/2 w-[85%] md:w-[70%] h-full"
                            style={getSlideStyle(idx)}
                        >
                            <img
                                src={img}
                                alt={`Gallery image ${idx + 1}`}
                                className="w-full h-full object-cover shadow-md"
                                loading={idx === 0 ? "eager" : "lazy"} // Helps with initial load performance
                            />
                        </div>
                    ))}
                </div>

                {/* Left Arrow - Positioned exactly on the left seam of the main image */}
                <button
                    onClick={handlePrev}
                    aria-label="Previous image"
                    className="absolute left-[7.5%] md:left-[15%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.15)] text-[#2D5D80] hover:scale-110 hover:bg-[#f8f9fa] transition-all duration-300"
                >
                    <ArrowLeft size={24} strokeWidth={1} />
                </button>

                {/* Right Arrow - Positioned exactly on the right seam of the main image */}
                <button
                    onClick={handleNext}
                    aria-label="Next image"
                    className="absolute right-[7.5%] md:right-[15%] top-1/2 -translate-y-1/2 translate-x-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.15)] text-[#2D5D80] hover:scale-110 hover:bg-[#f8f9fa] transition-all duration-300"
                >
                    <ArrowRight size={24} strokeWidth={1} />
                </button>
            </div>

            {/* Bottom Button */}
            <div className="flex justify-center mt-12 md:mt-16">
                <a
                    href="#full-gallery" // Replace with your actual gallery route
                    className="bg-[#df9b29] hover:bg-[#c48824] text-black font-['lora'] text-[13px] px-10 py-4 tracking-[0.15em] uppercase transition-all duration-300 transform hover:-translate-y-1"
                >
                    VIEW FULL GALLERY
                </a>
            </div>

        </section>
    );
};

export default GallerySlider;