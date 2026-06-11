import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import logo from '../../assets/logo.png'; // Update path if needed

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const testimonials = [
        {
            text: "Wonderful off season stay I rented Westville Cottage for a quiet off-season respite from daily life and was not disappointed. The cottage is so comfortable and well-appointed and its walking location to all the shops and restaurants can't be beaten. Dominic and Paul are the ultimate hosts they couldn't have been more accomodating to me and my faithful dog. I landed up in hospital on my last day and when I contacted D&P, they could not have been nicer about helping me arrange care for my dog and my belongings. Even after my stay, they have kept in touch to keep up with my progress. A stay at Westville is like staying at a friend's home. You immediately feel at home. I hope to stay at Westville again in the fall and would recommend this accommodation to any single person or couple.",
            author: "GEORGE C"
        },
        {
            text: "It was an amazing place to stay. Super friendly staff, clean, lots of seating, amazing pool, spa/hot tub. Perfect location, just simply amazing. I highly recommend you not be disappointed. Free breakfast and cheese wine to boot.",
            author: "DEBORAH S"
        },
        {
            text: "Peaceful, private, and close to everything. The cottage was the perfect balance of quiet retreat and accessible location. We strolled to local shops and cafes during the day and relaxed on the private patio at night. The bed was so comfortable we had trouble getting up in the mornings. A true sanctuary—we’re already recommending it to friends and family!",
            author: "MICHAEL D"
        }
    ];

    // Reset expanded state when changing slides
    useEffect(() => {
        setIsExpanded(false);
    }, [currentIndex]);

    // Auto-slide logic
    useEffect(() => {
        if (isExpanded) return; // Pause auto-slide if reading expanded text

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [isExpanded, testimonials.length]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="bg-[#f0f2f5] py-15 px-4 flex justify-center items-center w-full min-h-[700px]">
            {/* 
              Inner Container: 
              Matches the exact light grayish-blue background and delicate border.
            */}
            <div className="relative w-full max-w-[900px] border border-gray-300  px-6 sm:px-16 md:px-24 pt-20 pb-16 mt-16">

                {/* 
                  Overlapping Top Logo: 
                  Perfectly centered on the top border line using -translate-y-1/2 
                */}
                <img
                    src={logo}
                    alt="Logo Overlay"
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-[280px] object-contain opacity-20 pointer-events-none"
                />

                {/* Delicate Lucide Quote Icon */}
                <div className="flex justify-center mb-6">
                    <Quote
                        size={44}
                        strokeWidth={1}
                        className="text-[#d9a44c] fill-none"
                    />
                </div>

                {/* Testimonial Content Container */}
                <div className="relative flex flex-col justify-center items-center min-h-[200px]">
                    {testimonials.map((testimonial, idx) => {
                        const isLongText = testimonial.text.length > 250;
                        const displayText = (!isExpanded && isLongText)
                            ? testimonial.text.substring(0, 250) + "..."
                            : testimonial.text;

                        return (
                            <div
                                key={idx}
                                className={`w-full flex flex-col justify-center items-center transition-all duration-700 ease-in-out ${idx === currentIndex
                                    ? 'opacity-100 relative translate-y-0'
                                    : 'opacity-0 absolute pointer-events-none translate-y-4'
                                    }`}
                            >
                                {/* Quote Text - Matches the exact typography and spacing */}
                                <p className="text-[#2D5D80] font-lora text-xl md:text-[25px] leading-[1.5] text-center mb-6">
                                    "{displayText}"
                                </p>

                                {/* Read More Button */}
                                {isLongText && (
                                    <button
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        className="text-[#d9a44c] hover:text-[#c48824] uppercase tracking-widest text-xs font-bold font-['Raleway',sans-serif] mb-6 transition-colors"
                                    >
                                        {isExpanded ? "READ LESS" : "READ MORE"}
                                    </button>
                                )}

                                {/* Author Name */}
                                <p className="uppercase text-[14px] font-bold tracking-[0.2em] text-[#111827] font-['Raleway',sans-serif] mt-2">
                                    {testimonial.author}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Custom Dots Navigation */}
                <div className="flex justify-center items-center gap-3 mt-14">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleDotClick(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            className={`h-2 rounded-full transition-all duration-500 ease-in-out ${idx === currentIndex
                                ? 'w-6 bg-[#d9a44c]' // Active: Gold pill shape
                                : 'w-2 bg-[#2D5D80] hover:bg-[#1a3850]' // Inactive: Dark blue dot
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;