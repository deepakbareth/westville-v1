import React from 'react';
import { Check } from 'lucide-react';

const TravelTipsComp = () => {
    const listItems = [
        "Be sure to keep your pets certifications handy for the trip...just in case.",
        "Make sure vaccines are up to date",
        "Apply flea and tick repellent 2 days before embarking on your trip to Provincetown",
        "Map out the emergency care facilities on your way from your hometown to us here in Provincetown.",
        "Keep your pet leashed at all times especially if you stop for a break at a service plaza or welcome center on your way here. Highway/road noise can be disorienting to dogs even the most well trained one.",
        "Use harnesses (seatbelts) or travel crates to keep your pal secure in the event of an accident.",
        "Know the pet friendly hotel chains that are enroute to and from Provincetown (pre-book if possible.)",
        "Keep food and water with you for your trip. Remember dehydration is very common during travel.",
        "Always offer your pet water frequently during the trip. Bring Bottled water or a few gallons of home water with you for your trip.",
        <span><strong className="text-red-600 font-bold">Do NOT</strong> leave your pet in the car unattended especially during the warmer months</span>
    ];

    return (
        <section className="w-full bg-white py-2 md:py-5 overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6 flex flex-col justify-center items-center">

                {/* Heading */}
                <h2 className="text-[#2D5D80] font-helvetica text-[32px] md:text-[40px] font-normal mb-6 tracking-wide leading-tight w-full text-center">
                    Travel Tips
                </h2>

                {/* Description */}
                <p className="text-[14px] md:text-[15px] text-gray-900 font-normal font-helvetica leading-relaxed mb-8 w-full text-left">
                    Some travel tips when planning your vacation with your four legged pal:
                </p>

                {/* List Items - GRID LAYOUT */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-[14px] md:text-[15px] text-gray-900 font-normal font-helvetica leading-relaxed w-full">
                    {listItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 bg-gray-50 border border-gray-100 p-5 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:bg-gray-100/50 transition-all duration-200">
                            <span className="mt-1 flex-shrink-0 text-[#df9b29]">
                                <Check size={18} strokeWidth={2.5} />
                            </span>
                            <span className="text-gray-800">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
};

export default TravelTipsComp;
