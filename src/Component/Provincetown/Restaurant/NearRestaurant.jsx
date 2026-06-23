import React from 'react';
import { ArrowRightCircle } from 'lucide-react'; // Using Lucide for the arrow icon in the 2nd design

// Placeholder images - replace these with your actual image paths
import theatreImg from '../../../assets/P-Town/restaurant/r1.jpg';
import monumentImg from '../../../assets/P-Town/restaurant/r2.jpg';
import factory from '../../../assets/P-Town/restaurant/r3.jpg';
import sleep from '../../../assets/P-Town/restaurant/r4.jpg';
// import vineyards from '../../../assets/P-Town/attractions/Vineyards.jpg';
// import Paragraph from '../../ReusableComp/Paragraph';
// import monumentImg4 from '../../../assets/home/e5.jpg';

const NearbyRestaurant = () => {

    // Data Array (Content from Image 1)
    const attractions = [
        {
            id: 1,
            image: theatreImg,
            title: "ROSS Grill",
            description: "Ross Grill is a vibrant celebration of sea and family. With the bay out the front door, this salty tavern brings a unique vibe to the East End. Drawing inspiration from the coastal Mediterranean, the menu emphasizes regional flavors of Spain, Italy, Greece, Morocco and Turkey featuring an abundance of fresh vegetables, pasta, seafood, grains and herbs.",
            link: "#"
        }
        ,
        {
            id: 2,
            image: monumentImg,
            title: "Mac's SeaFood",
            description: "We still believe there is no match for our local catch. That’s what inspires our ultra-high standards of quality, traceability, and sustainability. We take pride in sourcing directly from local fishermen to ensure every bite is as fresh as the ocean breeze. We ship our fresh seafood too.",
            link: "#"
        }
        ,
        {
            id: 3,
            image: factory,
            title: "Lobster Pot",
            description: "After 42 years of serving delicious seafood in the heart of Provincetown, we now bring to you a new location! Featuring many of our classic dishes inspired by the original Lobster Pot Restaurant, the Lobster Pot Express was designed to bring Cape Codders fast, fresh, seafood and more all at once!",
            link: "#"
        }
        ,
        {
            id: 4,
            image: sleep,
            title: "Front Street",
            description: "We are a chef owned restaurant with the most delicious menu of classic Italian food along with ever changing eclectic Continental delights available in Provincetown. Our venue has a warm and inviting ambiance and a knowledgable, friendly staff that will ensure you have a memorable dining experience.",
            link: "#"
        }

    ];

    return (
        <section className="w-full  py-20 md:py-24">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 ">

                {/* Heading styled from the first image, but keeping it clean */}
                <h2 className="text-[#2D5D80] font-helvetica text-[28px] md:text-[36px] font-normal mb-4 leading-tight">
                    Incredible places to eat
                </h2>

                {/* Grid Layout mimicking Image 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {attractions.map((item) => (
                        <div key={item.id} className="flex flex-col group">

                            {/* Image Container */}
                            <div className="w-full aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`w-full h-full  ${item.id === 2 ? 'object-center' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
                                />
                            </div>

                            {/* Title (Styling from Image 2: serif font, dark blue/slate color) */}
                            <h3 className="text-[#3b5998] font-helvetica text-[24px] md:text-[26px] font-normal mb-4 leading-tight">
                                {item.title}
                            </h3>

                            {/* Description (Styling from Image 2: lighter gray, sans-serif, clean leading) */}
                            <p className="text-gray-600 font-helvetica text-[14px] md:text-[15px] leading-relaxed mb-6 flex-grow">
                                {item.description}
                            </p>
                            {/* <Paragraph text={item.description} className="mb-10" /> */}

                            {/* Link (Styling from Image 2: Uppercase, arrow circle icon) */}
                            <a
                                href={item.link}
                                className="inline-flex items-center gap-2 text-gray-700 font-['lora',sans-serif] text-[12px] md:text-[13px] font-semibold tracking-widest uppercase hover:text-[#df9b29] transition-colors duration-300 w-fit mt-auto"
                            >
                                VISIT WEBSITE
                                <ArrowRightCircle size={16} strokeWidth={1.5} className="mt-[1px]" />
                            </a>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default NearbyRestaurant;