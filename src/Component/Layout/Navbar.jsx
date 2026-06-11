import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    // New state to handle mobile menu toggle
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Track scroll position to trigger the sleek layout transformation
    useEffect(() => {
        const handleScroll = () => {
            // Triggers the compact state after scrolling down 50px
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Content pulled precisely from your code
    const navLinks = [
        "HOME",
        "YOUR HOSTS",
        "PROPERTY",
        "GALLERY",
        "P-TOWN",
        "PETS"
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
                    // On mobile (< md): Always solid background (white/light grey) with fixed height.
                    // On desktop (> md): Respects your original transparent/tall vs solid/compact states.
                    isScrolled
                        ? 'bg-white md:bg-[#f4f5f6] text-[#2c3e50] shadow-md h-20 md:h-24'
                        : 'bg-white md:bg-transparent text-[#2c3e50] md:text-white h-20 md:h-44 shadow-md md:shadow-none'
                    }`}
            >
                {/* Relative container keeps the overlapping inner layouts perfectly aligned */}
                <div className="relative w-full h-full max-w-screen-2xl mx-auto">

                    {/* =========================================
                        MOBILE HEADER (Visible only on mobile)
                        Matches Image 1 
                    ========================================= */}
                    <div className="flex md:hidden justify-between items-center w-full h-full px-4">
                        {/* Left: Phone Icon */}
                        <a href="tel:5082964550" className="p-2 text-[#2c3e50]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </a>

                        {/* Center: Logo */}
                        <img
                            src={logo}
                            alt="Westville Cottage"
                            className="h-12 w-auto object-contain"
                        />

                        {/* Right: Hamburger / Close Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex flex-col items-center justify-center p-2 w-16 text-[#2c3e50]"
                        >
                            {isMobileMenuOpen ? (
                                <>
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                    <span className="text-[10px] font-bold tracking-[0.15em] mt-1">CLOSE</span>
                                </>
                            ) : (
                                <>
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="3" y1="12" x2="21" y2="12"></line>
                                        <line x1="3" y1="6" x2="21" y2="6"></line>
                                        <line x1="3" y1="18" x2="21" y2="18"></line>
                                    </svg>
                                    <span className="text-[10px] font-bold tracking-[0.15em] mt-1">MENU</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* =========================================
                        STATE 1: INITIAL TWO-TIER LAYOUT (Desktop)
                        Added 'hidden md:flex' to hide on mobile
                    ========================================= */}
                    <div
                        className={`hidden md:flex absolute inset-0 w-full  px-8 pt-2 flex-col transition-opacity duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-100'
                            }`}
                    >
                        {/* Top Row: Call, Logo, Button */}
                        <div className="flex justify-between items-center w-full px-20">
                            {/* Left: Contact Info */}
                            <div className="flex flex-col text-sm tracking-widest w-1/3 mt-3">
                                <div className="text-white mb-1 text-[15px] font-['lora']">CALL:</div>
                                <div className="text-[15px] font-['lora']">5082964550</div>
                            </div>

                            {/* Center: Logo Placeholder */}
                            <div className="flex flex-col items-center justify-center w-1/3">
                                <img
                                    src={logo}
                                    alt="Westville Cottage"
                                    className="h-25 w-auto object-contain"
                                />
                            </div>

                            {/* Right: CTA Button */}
                            <div className="w-1/3 flex justify-end mt-2">
                                <button className="bg-[#df9b29] hover:bg-[#c48824] text-black font-semibold font-['Lora'] text-[13px] px-13 py-4 tracking-widest transition-colors duration-300">
                                    BOOK NOW
                                </button>
                            </div>
                        </div>

                        {/* Crisp Horizontal Divider */}
                        <div className="h-[1.5px] bg-gray-300 w-full mt-2 mb-4 "></div>

                        {/* Bottom Row: Navigation Links */}
                        <div className="flex justify-evenly space-x-12 ">
                            {navLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                                    className="text-[13px] hover:text-[#df9b29]  font-raleway"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* =========================================
                        STATE 2: COMPACT SINGLE-TIER LAYOUT (Desktop)
                        Added 'hidden md:flex' to hide on mobile
                    ========================================= */}
                    <div
                        className={`hidden md:flex absolute inset-0 w-full px-0 items-center justify-evenly transition-opacity duration-500 ${isScrolled ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'
                            }`}
                    >
                        {/* Left: Logo */}
                        <div className="flex items-center cursor-pointer">
                            <img
                                src={logo}
                                alt="Westville Cottage"
                                className="h-24 w-auto object-contain"
                            />
                        </div>

                        {/* Center: Links */}
                        <div className="flex items-center space-x-8">
                            {navLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                                    className="text-[13px] font-bold font-raleway tracking-widest text-[#2c3e50] hover:text-[#df9b29] transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>

                        {/* Right: CTA Button */}
                        <button className="bg-[#df9b29] hover:bg-[#c48824] text-black font-semibold font-['Lora'] text-[13px] px-13 py-4 tracking-widest transition-colors duration-300">
                            BOOK NOW
                        </button>
                    </div>

                </div>
            </header>

            {/* =========================================
                MOBILE MENU FULL-SCREEN OVERLAY
                Matches Image 2
            ========================================= */}
            <div
                className={`md:hidden fixed top-20 left-0 w-full bg-[#f4f6f8] transition-all duration-300 ease-in-out z-40 overflow-hidden flex flex-col ${
                    // Height calculation subtracts the 5rem (h-20) header
                    isMobileMenuOpen ? 'h-[calc(90vh-5rem)] opacity-100' : 'h-0 opacity-0 pointer-events-none'
                    }`}
            >
                {/* Links list area (scrollable if screen is very short) */}
                <div className="flex flex-col flex-grow px-6 pt-4 overflow-y-auto">
                    {navLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={`#${link.toLowerCase().replace(' ', '-')}`}
                            onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                            className="text-[13px] font-semibold font-raleway tracking-[0.15em] text-[#1c2c3e] py-5 border-b border-gray-200"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Full Width Book Now Button perfectly anchored at the bottom */}
                <div className="w-full bg-[#df9b29]">
                    <button className="w-full py-5 text-black font-semibold font-['Lora'] text-[13px] tracking-widest hover:bg-[#c48824] transition-colors">
                        BOOK NOW
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;