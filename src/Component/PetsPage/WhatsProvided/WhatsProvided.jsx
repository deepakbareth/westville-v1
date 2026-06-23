import React from 'react';
import { Check } from 'lucide-react';

const WhatsProvidedComp = () => {
    const listItems = [
        { id: 1, text: "Ceramic Water Bowl (Westville Cottage Monogrammed item)", crossed: false },
        { id: 2, text: "Pet Bed", crossed: false },
        { id: 3, text: "Pet Blanket (Westville Cottage Monogrammed item)", crossed: false },
        { id: 4, text: "Generous supply of handmade Gourmet treats (as available)", crossed: false },
        { id: 5, text: "Pet ID tag with local address and telephone no. of the Westville (7 nights or more only)", crossed: true }
    ];

    return (
        <section className="w-full bg-white py-2 md:py-5 overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6 flex flex-col justify-center items-center">

                {/* Heading */}
                <h2 className="text-[#2D5D80] font-helvetica text-[32px] md:text-[40px] font-normal mb-6 tracking-wide leading-tight">
                    What's Provided
                </h2>

                {/* Price Section */}
                <div className="text-[15px] md:text-[20px] text-gray-900 font-normal font-helvetica leading-relaxed mb-6">
                    <span className="font-bold text-[#df9b29] font-raleway tracking-[0.1em] uppercase mr-1">Price:</span>
                    <span>$175/pet/week or $35/night</span>
                </div>

                {/* Description */}
                <p className="text-[14px] md:text-[15px] text-gray-900 font-normal font-helvetica leading-relaxed mb-8">
                    Not only do we welcome your favored family member, but we pamper them too. So when you book with your pet for vacation at the Westville, Hadley has graciously agreed to provide the following items for our visiting four-legged pals:
                </p>

                {/* List Items - CHANGED TO GRID LAYOUT */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-[14px] md:text-[15px] text-gray-900 font-normal font-helvetica leading-relaxed w-full">
                    {listItems.map((item) => (
                        <li key={item.id} className="flex items-start gap-3 bg-gray-50 border border-gray-100 p-5 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:bg-gray-100/50 transition-all duration-200">
                            <span className="mt-1 flex-shrink-0 text-[#df9b29]">
                                <Check size={18} strokeWidth={2.5} />
                            </span>
                            <span className={item.crossed ? "line-through text-gray-400 opacity-60" : "text-gray-800"}>
                                {item.text}
                            </span>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
};

export default WhatsProvidedComp;