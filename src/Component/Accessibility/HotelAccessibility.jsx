import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import accessibilityImg from '../../Assets/accessibility.png';

const HotelAccessibility = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer hover:bg-gray-50/50 transition-colors focus:outline-none"
            >
                <div className="flex items-center gap-4">
                    <img
                        src={accessibilityImg}
                        alt="Accessibility"
                        className="w-7 h-7 object-contain shrink-0"
                        style={{ filter: 'invert(69%) sepia(85%) saturate(450%) hue-rotate(350deg)' }}
                    />
                    <span className="text-lg sm:text-xl md:text-2xl font-helvetica text-gray-800 tracking-wide font-normal">
                        Hotel Accessibility
                    </span>
                </div>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
            </button>

            {isOpen && (
                <div className="pb-8 pl-4 sm:pl-10 pr-2 sm:pr-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <h4 className="text-[17px] font-helvetica text-[#2D5D80] font-semibold mb-4">Accessibility Features:</h4>
                    <ul className="space-y-2.5 text-sm md:text-[15px] font-helvetica text-gray-600">
                        <li className="flex items-start gap-2">
                            <span className="text-gray-400">•</span>
                            <span>Accessible entrance without stairs</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gray-400">•</span>
                            <span>Service Animals Accepted</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gray-400">•</span>
                            <span>Accessible self-parking</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gray-400">•</span>
                            <span>Two van-accessible parking spaces</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gray-400">•</span>
                            <span>Two accessible parking spots</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gray-400">•</span>
                            <span>All accessible parking spaces are closest to the restaurant entrance</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gray-400">•</span>
                            <span>An accessible path to check-in</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gray-400">•</span>
                            <span>An accessible way to guest rooms</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gray-400">•</span>
                            <span>An accessible way for all public spaces</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gray-400">•</span>
                            <span>2 Accessible Rooms</span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HotelAccessibility;
