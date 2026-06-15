import React from 'react';
import { Users, Bed, Bath, Maximize2, Wifi, Wind, Car } from 'lucide-react';
import Paragraph from '../ReusableComp/Paragraph';

const Overview = () => {
    const badges = [
        { icon: <Users size={20} className="text-[#df9b29]" />, text: "2 Guests" },
        // { icon: <Bed size={20} className="text-[#df9b29]" />, text: "1 Bedroom" },
        { icon: <Bath size={20} className="text-[#df9b29]" />, text: "1 Bathroom" },
        { icon: <Maximize2 size={20} className="text-[#df9b29]" />, text: "500 Sq. Ft." },
        { icon: <Wifi size={20} className="text-[#df9b29]" />, text: "Wi-Fi" },
        { icon: <Wind size={20} className="text-[#df9b29]" />, text: "Air Conditioning" },
        { icon: <Car size={20} className="text-[#df9b29]" />, text: "Parking" }
    ];

    return (
        <section className="scroll-mt-24">
            {/* Title */}
            <h2 className="text-[#2D5D80] font-Helvetica text-[25px] md:text-[35px] font-normal mb-6 leading-tight">
                Westville Cottage
            </h2>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {badges.map((badge, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-3 bg-[#f8f9fa] border border-gray-200 rounded-xl p-4 transition-all duration-300 hover:shadow-sm"
                    >
                        {badge.icon}
                        <span className="text-[13px] md:text-[14px] font-bold font-['Raleway',sans-serif] text-gray-800">
                            {badge.text}
                        </span>
                    </div>
                ))}
            </div>

            {/* Paragraph Descriptions */}
            <div className="text-gray-600 leading-[1.8] text-[15px] space-y-4">
                <h2 className="text-[#2D5D80] font-Helvetica text-[25px] md:text-[35px] font-normal mb-6 leading-tight">
                    Overview</h2>
                <Paragraph
                    text={`
                        Thank you for your interest in our charming, historic cottage. Originally built in the 19th century and thoughtfully restored with modern comforts, this cozy home blends Cape Cod character with boutique-style amenities. Unwind after a day of beach adventures or town explorations in the private garden patio, or cook a favorite meal in the fully equipped kitchen with stainless appliances We’re pet-friendly and thoughtfully stocked with linens, plush towels, basic toiletries, and beach accessories so you can travel light and relax more.
                    `}
                />

            </div>
        </section>
    );
};

export default Overview;