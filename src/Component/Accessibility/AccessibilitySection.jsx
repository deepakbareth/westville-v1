import React from 'react';
import HotelAccessibility from './HotelAccessibility';
import WebsiteAccessibility from './WebsiteAccessibility';

const AccessibilitySection = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-0 md:px-8 mt-12">
            <div className="bg-white border border-gray-300 rounded-lg p-8 md:p-12 shadow-sm text-left">
                <div className="divide-y divide-gray-200">
                    <HotelAccessibility />
                    <WebsiteAccessibility />
                </div>
            </div>
        </div>
    );
};

export default AccessibilitySection;
