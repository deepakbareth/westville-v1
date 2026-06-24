import React, { useState } from 'react';
import GalleryPage from "../Component/GalleryPage/GalleryPage";
import PageBanner from "../Component/ReusableComp/PageBanner";
import WestvilleCottage from "../Component/ReusableComp/WestvilleCottage";

const CATEGORIES = [
    { id: 'all', label: 'All' },
    { id: 'interior', label: 'Interior' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'provincetown', label: 'Provincetown' }
];

function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    return (
        <>
            <PageBanner title="Gallery" />

            {/* Sticky SubNavbar for Gallery Categories */}
            <div className="sticky top-20 md:top-24 z-40 w-full bg-[#0b1e2c]">
                <div className="max-w-[1400px] mx-auto px-4 py-3 pt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                    {CATEGORIES.map((tab) => {
                        const isActive = selectedCategory === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedCategory(tab.id)}
                                className={`text-[12px] md:text-[13px] font-bold font-raleway tracking-wider uppercase transition-all duration-300 pb-1 border-b-[5px] cursor-pointer ${isActive
                                    ? "border-[#df9b29] text-white"
                                    : "border-transparent text-white hover:text-[#df9b29]"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <WestvilleCottage />
            <GalleryPage selectedCategory={selectedCategory} />
        </>
    );
}

export default Gallery;