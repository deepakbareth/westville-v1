import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// Import local video assets
import video1 from '../../assets/videos/video1.mp4';
import video2 from '../../assets/videos/video2.mp4';

// Dynamically import all images from src/assets/Gallery using Vite's import.meta.glob
const imageModules = import.meta.glob('../../assets/Gallery/*.{jpg,jpeg,png,webp,gif}', { eager: true });

// Sort keys numerically so images appear in sequential order
const sortedImageKeys = Object.keys(imageModules).sort((a, b) => {
    const numA = parseInt(a.match(/img(\d+)/)?.[1] || '0', 10);
    const numB = parseInt(b.match(/img(\d+)/)?.[1] || '0', 10);
    return numA - numB;
});

// Process modules and build the initial images metadata array
const rawImages = sortedImageKeys.map((key, index) => {
    const filename = key.split('/').pop();
    const imgUrl = imageModules[key].default || imageModules[key];

    // Parse numerical value from filename to separate categories
    const match = filename.match(/img(\d+)/);
    const num = match ? parseInt(match[1], 10) : 0;

    let category = 'interior';
    let title = `Interior Detail ${num}`;

    if (num >= 37 && num <= 55) {
        category = 'exterior';
        title = `Exterior Detail ${num}`;
    } else if (num >= 56 && num <= 63) {
        category = 'provincetown';
        title = `Provincetown Scene ${num}`;
    }

    return {
        id: index + 1,
        filename,
        img: imgUrl,
        category,
        title
    };
});

// Categories list
const CATEGORIES = [
    { id: 'all', label: 'All' },
    { id: 'interior', label: 'Interior' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'provincetown', label: 'Provincetown' }
];

const GalleryPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [visibleCount, setVisibleCount] = useState(8);

    // Reset visible count when category changes to reduce initial image loading load
    useEffect(() => {
        setVisibleCount(8);
    }, [selectedCategory]);

    // Filtered images list
    const filteredImages = rawImages.filter(img =>
        selectedCategory === 'all' || img.category === selectedCategory
    );

    // Slice filtered images to limit first load
    const visibleImages = filteredImages.slice(0, visibleCount);

    // Lightbox handlers
    const openLightbox = (index) => {
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const showNext = (e) => {
        e.stopPropagation();
        if (lightboxIndex !== null) {
            setLightboxIndex((prev) => (prev + 1) % visibleImages.length);
        }
    };

    const showPrev = (e) => {
        e.stopPropagation();
        if (lightboxIndex !== null) {
            setLightboxIndex((prev) => (prev - 1 + visibleImages.length) % visibleImages.length);
        }
    };

    // Keyboard navigation in lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % visibleImages.length);
            if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + visibleImages.length) % visibleImages.length);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, visibleImages]);

    return (
        <section className="bg-[#f4f6f8] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* === CATEGORY FILTER TABS === */}
                <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
                    {CATEGORIES.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedCategory(tab.id)}
                            className={`px-6 py-2.5 font-['lora',sans-serif] text-[13px] font-semibold tracking-[0.15em] uppercase border transition-all duration-300 cursor-pointer ${selectedCategory === tab.id
                                ? 'bg-[#df9b29] text-black border-[#df9b29] shadow-md'
                                : 'bg-white text-[#1c2c3e] border-gray-200 hover:border-[#df9b29] hover:text-[#df9b29]'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                {/* === VIDEOS SECTION === */}
                {selectedCategory === 'all' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="group relative overflow-hidden bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] rounded-sm aspect-video animate-fade-in">
                            <video
                                src={video1}
                                controls
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />

                        </div>
                        <div className="group relative overflow-hidden bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] rounded-sm aspect-video animate-fade-in">
                            <video
                                src={video2}
                                controls
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />

                        </div>
                    </div>
                )}


                {/* === IMAGE GRID === */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {visibleImages.map((image, idx) => (
                        <div
                            key={image.id}
                            onClick={() => openLightbox(idx)}
                            className="group relative overflow-hidden bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] cursor-pointer aspect-square rounded-sm"
                        >
                            {/* Image element */}
                            <img
                                src={image.img}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                loading="lazy"
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-[#0a192f]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                                {/* Top tag */}
                                <div className="text-right">
                                    <span className="text-[#df9b29] text-[10px] tracking-widest uppercase font-semibold font-['raleway']">
                                        {image.category}
                                    </span>
                                </div>

                                {/* Center Zoom Icon */}
                                <div className="flex justify-center items-center flex-grow text-white/80">
                                    <ZoomIn size={32} strokeWidth={1.2} className="transform scale-90 group-hover:scale-100 transition-transform duration-300" />
                                </div>

                                {/* Bottom title */}
                                <div>
                                    <h3 className="text-white font-['lora'] text-sm tracking-wide">
                                        {image.title}
                                    </h3>
                                    <p className="text-white/50 text-[10px] uppercase tracking-widest font-['raleway'] mt-0.5">
                                        View Details
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See More Button */}
                {filteredImages.length > visibleCount && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 9)}
                            className="cursor-pointer px-8 py-3 bg-[#df9b29] hover:bg-[#c48824] text-black font-['lora',sans-serif] text-[13px] font-semibold tracking-[0.15em] uppercase border border-[#df9b29] hover:border-[#c48824] transition-all duration-300 cursor-pointer shadow-md transform hover:-translate-y-0.5 animate-fade-in"
                        >
                            See More
                        </button>
                    </div>
                )}

                {/* Empty State */}
                {filteredImages.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 font-['lora'] text-lg">No images found in this category.</p>
                    </div>
                )}
            </div>

            {/* === LIGHTBOX MODAL === */}
            {lightboxIndex !== null && (
                <div
                    onClick={closeLightbox}
                    className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center select-none"
                >
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors cursor-pointer p-2 z-55"
                        aria-label="Close lightbox"
                    >
                        <X size={28} />
                    </button>

                    {/* Left Navigation Button */}
                    <button
                        onClick={showPrev}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 text-white p-3 rounded-full transition-all duration-200 z-55 cursor-pointer backdrop-blur-sm"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    {/* Main Image Container */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-[85vw] max-h-[75vh] flex flex-col items-center"
                    >
                        <img
                            src={visibleImages[lightboxIndex].img}
                            alt={visibleImages[lightboxIndex].title}
                            className="max-w-full max-h-[75vh] object-contain shadow-2xl rounded-sm transition-all duration-300"
                        />

                        {/* Image details overlay at bottom */}
                        <div className="w-full text-center mt-4 text-white">
                            <span className="text-[#df9b29] text-xs uppercase tracking-widest font-semibold font-['raleway'] block mb-1">
                                {visibleImages[lightboxIndex].category}
                            </span>
                            <h2 className="font-['lora'] text-lg md:text-xl font-normal tracking-wide">
                                {visibleImages[lightboxIndex].title}
                            </h2>
                            <p className="text-white/40 text-xs tracking-wider font-['raleway'] mt-1">
                                {lightboxIndex + 1} / {visibleImages.length}
                            </p>
                        </div>
                    </div>

                    {/* Right Navigation Button */}
                    <button
                        onClick={showNext}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 text-white p-3 rounded-full transition-all duration-200 z-55 cursor-pointer backdrop-blur-sm"
                        aria-label="Next image"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>
            )}
        </section>
    );
};

export default GalleryPage;
