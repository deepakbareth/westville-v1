import React from 'react';
import { Sparkles, Utensils, Tv, Car, Sun, ShieldCheck, Check } from 'lucide-react';

const Amenities = () => {
    // Exact data from screenshot
    const amenityCategories = [
        {
            title: "ESSENTIALS",
            icon: <Sparkles className="text-[#df9b29]" size={22} />,
            items: [
                "Free Wi-Fi", "Shampoo and Conditioner",
                "Heating", "Basic Soaps",
                "Air conditioning", "Linens provided",
                "Towels & Shampoo", "Paper towels / TP",
                "Wash cloths", "Telephone",
                "Bath and Face towel"
            ]
        },
        {
            title: "KITCHEN",
            icon: <Utensils className="text-[#df9b29]" size={22} />,
            items: [
                "Full kitchen", "Dishes & Utensils",
                "Coffee maker", "Refrigerator / Ice maker",
                "Blender", "Toaster",
                "Oven & Stove", "Dishwasher"
            ]
        },
        {
            title: "ENTERTAINMENT",
            icon: <Tv className="text-[#df9b29]" size={22} />,
            items: [
                "Smart TV", "Books",
                "Samsung AV surround Soundbar", "Board Games"
            ]
        },
        {
            title: "LAUNDRY & PARKING",
            icon: <Car className="text-[#df9b29]" size={22} />,
            items: [
                "Washer / Dryer", "Free onsite parking",
                "Iron & Board"
            ]
        },
        {
            title: "OUTSIDE",
            icon: <Sun className="text-[#df9b29]" size={22} />,
            items: [
                "Beach chairs / umbrellas, towels", "Bicycles"
            ]
        },
        {
            title: "SAFETY",
            icon: <ShieldCheck className="text-[#df9b29]" size={22} />,
            items: [
                "Smoke & CO detectors", "Deadbolt lock",
                "Fire extinguisher", "keyless Entry",
                "First aid kit", "Fenced yard"
            ]
        }
    ];

    // Additional info sections from the bottom of the screenshot
    const additionalInfo = [
        {
            title: "LOCATION TYPE",
            content: "Near the ocean • Village • Town"
        },
        {
            title: "NEARBY ACTIVITIES",
            content: "Swimming • Fishing • Whale watching • Hiking • Sailing • Museums • Cycling • Shopping • dinning"
        },
        {
            title: "NOTES",
            content: "Living & dining room combined. Fully equipped modern kitchen. Private backyard suitable for outdoor entertaining. Smoking is prohibited on the premises."
        }
    ];

    return (
        <section className="scroll-mt-24 space-y-6">
            {/* Standardized Header */}
            <div>
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#df9b29] block mb-2 font-raleway">
                    Features
                </span>
                <h2 className="text-[#2D5D80] font-helvetica text-[28px] md:text-[36px] font-normal mb-4 leading-tight">
                    Amenities
                </h2>
            </div>

            {/* Grid of Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {amenityCategories.map((category, idx) => (
                    <div
                        key={idx}
                        className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-all duration-300"
                    >
                        {/* Category Title */}
                        <div className="flex items-center gap-3 border-b border-gray-200 pb-3 mb-4">
                            {category.icon}
                            <h3 className="text-[#2D5D80] font-raleway text-[15px] md:text-[15px] font-bold tracking-wider">
                                {category.title}
                            </h3>
                        </div>

                        {/* Items List */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-2 text-gray-600 font-helvetica text-[13px] md:text-[14px]">
                            {category.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-2">
                                    <Check className="text-[#df9b29] shrink-0 mt-[1px]" size={16} strokeWidth={3} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Additional Text Information Sections */}
            <div className="space-y-6 pt-6">
                {additionalInfo.map((info, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-4">
                        <h3 className="text-[#2D5D80] font-raleway text-[14px] md:text-[15px] font-bold tracking-wider mb-2 uppercase">
                            {info.title}
                        </h3>
                        <p className="font-helvetica text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                            {info.content}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Amenities;