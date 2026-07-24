import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';
import logo from '../../assets/logo.png'; // Update path if needed
import bgImg from '../../assets/home/g3.jpg'; // <-- ADDED: Path to your background image

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const testimonials = [
        {
            text: "We can't say enough good things about the place! Loved the private patio and green space, made for lovely evenings with a glass of wine to end the day. The neighborhood is quiet and friendly and it's close to everything. Highly recommend!",
            author: "Airbnb Guest"
        },
        {
            text: "We had a fantastic 7 night stay! The location was perfect and close to everything while still nestled in a charming, quiet neighborhood. The property was easy to access, with convenient parking that made coming and going effortless. The communication before and during the stay was exceptional. The home was beautifully appointed, exceptionally clean, and thoughtfully updated with modern upgrades throughout. It had everything we needed for a comfortable and relaxing stay, and the amenities truly made it feel like a home away from home. The personal touches were thoughtful and greatly appreciated. We wouldn't hesitate to stay here again and highly recommend this property to anyone looking for a convenient, comfortable, and welcoming place to stay!",
            author: "Guest (Reservation #HA-8V7K88)"
        },
        {
            text: "Stylish, Comfortable and Expertly Appointed Westville Cottage was stylish, comfortable, and expertly appointed. We particularly loved the private garden and patio space, where we relaxed, read, and had evening cocktails. My husband and I were celebrating our anniversary and Dominic and Paul helped with restaurant recommendations and also had beautiful flowers delivered for the occasion. In addition to being beautiful, the cottage was also dog-friendly. The location was great and it was easy to walk everywhere. We hope to return again soon.",
            author: "Nancy & Todd, Massachusetts"
        },
        {
            text: "Perfect Provincetown Hideaway Oh wow... I almost don't want to write this review because I want to keep the Westville Cottage a secret all to ourselves but I suppose the 'right thing to do' would be to share our wonderful weeklong experience there. From the moment we arrived on a rainy Saturday night, my partner and I felt completely at home thanks, in no small part, to the lovely bottle of wine that was waiting for us. Perfect after a long day of driving. Our pup was also very happy to find a bag of treats and his own personalized name tag (with his address and phone number in Provincetown) waiting for him. The little details like this were what made our stay really special. The cottage is located in a perfect location. Just far enough off the beaten path so you can relax and enjoy the peace and quiet when you arrive home but close enough to the action that a quick, five-minute walk will put you right onto Commercial Street. Everything in the house was of the best quality. The bed was, seriously, the most comfortable bed I've ever slept in. The kitchen was great... I wish we had used it more but there are so many great places to eat, that it was hard to stay home and cook. The bikes they provided were a huge asset as were the beach chairs and towels. We feel very fortunate to have discovered such a welcoming, peaceful home in one of our favorite places in the world. In fact, we've already booked our stay for next year.",
            author: "James, Brooklyn, NY"
        },
        {
            text: "Classic comfort & style We booked a 4-night stay at the Westville over New Year and will most likely do so again. On our arrival day, we had both worked a full day and then had a 3 1/2 hr drive to P-town. I held my breath and hoped that the place I had reserved for our 'special' New Year was going to be OK. We arrived late, it was cold and we were tired. Opening the private entrance to our unit we were both thrilled with our first few steps inside. The Westville was everything that Dominic (co-owner) described...and more. Cozy, clean comfortable and welcoming. All the stress of the day melted away. Every attention to detail was made with regard to furnishings and cleanliness. This is not 'just a place to sleep'. The kitchen is accommodating and you will want to make some meals there. (which we did!!!!) From a Lobster and asparagus night to a lazy morning brunch with coffee (great coffee maker) enjoying the paper and the surround sound stereo. I must add that one day we enjoyed the surround sound so much that we just danced for about 4-5 hours. The location is within easy walking distance to everything in P-town; yet not so close to downtown that it would be too noisy in the summer.",
            author: "Kevin and Alice, New Hampshire"
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
        <section className="relative overflow-hidden bg-[#f0f2f5] py-15 px-4 flex justify-center items-center w-full min-h-[700px]">

            {/* === BACKGROUND IMAGE LAYER === 
                scale-105 prevents the blur from pulling in the edges.
                opacity-30 blends it with the light background to make it look "whitewashed".
            */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src={bgImg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-40 blur-[6px] scale-105"
                />
            </div>

            {/* 
              Inner Container: 
              Matches the exact light grayish-blue background and delicate border.
              Added z-10 so it sits perfectly above the new background image.
            */}
            <div className="relative z-10 w-full max-w-[900px] px-6 sm:px-16 md:px-20 pt-20 pb-16 mt-16 border-[0px] border-transparent [border-image:linear-gradient(to_right,#d9a44c,#2D5D80)_1]">
                {/* 
                  Overlapping Top Logo: 
                  Perfectly centered on the top border line using -translate-y-1/2 
                */}
                <img
                    src={logo}
                    alt="Logo Overlay"
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-[280px] object-contain opacity-40 pointer-events-none"
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

                {/* View All Testimonials Button */}
                <div className="flex justify-center mt-10">
                    <Link
                        to="/westville-v1/testimonials"
                        className="inline-block bg-[#df9b29] hover:bg-[#c48824] text-white font-bold font-lora text-[13px] px-8 py-3.5 tracking-widest uppercase transition-all duration-300 rounded-sm shadow-sm cursor-pointer"
                    >
                        View All Testimonials
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;