import React, { useState, useEffect } from 'react';

// Replace these imports with your actual image paths
import walkImg1 from '../../assets/P-Town/img1.jpg';
import walkImg2 from '../../assets/P-Town/img2.jpg';
import walkImg3 from '../../assets/P-Town/img3.jpg';
import walkImg4 from '../../assets/P-Town/img4.jpg';
import walkImg5 from '../../assets/P-Town/img5.jpg';
import walkImg6 from '../../assets/P-Town/img6.jpg';
import walkImg7 from '../../assets/P-Town/img7.jpg';
import walkImg8 from '../../assets/P-Town/img8.jpg';
import walkImg9 from '../../assets/P-Town/img9.jpg';
import walkImg10 from '../../assets/P-Town/img10.jpg';
import walkImg11 from '../../assets/P-Town/img11.jpg';
import walkImg12 from '../../assets/P-Town/img12.jpg';
import walkImg13 from '../../assets/P-Town/img13.jpg';
import walkImg14 from '../../assets/P-Town/img14.jpg';
import walkImg15 from '../../assets/P-Town/img15.jpg';
import walkImg16 from '../../assets/P-Town/img16.jpg';
import walkImg17 from '../../assets/P-Town/img17.jpg';



const WalkingAround = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Put all your images in this array
    const images = [walkImg1, walkImg2, walkImg3, walkImg4, walkImg5, walkImg6, walkImg7, walkImg8, walkImg9, walkImg10, walkImg11, walkImg12, walkImg13, walkImg14, walkImg15, walkImg16, walkImg17];

    // Image Slider Logic (Changes every 5 seconds)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 5000ms = 5 seconds

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="w-full bg-white py-3 pb-10 px-6">
            {/* max-w-[1000px] keeps the image wide but constrained, and centers the whole block */}
            <div className="max-w-[1000px] mx-auto flex flex-col items-start">

                {/* Heading - Matched to the dark blue/gray bold text in your screenshot */}
                <h2 className="text-[#2D5D80] font-normal font-helvetica text-[20px] md:text-[35px] mb-4">
                    Walking around P-town
                </h2>

                {/* Image Slider Container */}
                <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg bg-gray-100">
                    {images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`Walking around P-town view ${idx + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WalkingAround;