import React from 'react';

// Update these paths to match your actual asset directory
import logo from '../../assets/logo.png'
import premiumLogo from '../../assets/pbw_logo.png';
import footerBg from '../../assets/footerbg.png'; // Add your background image path here

const Footer = () => {
    return (
        <footer className="relative w-full font-['Raleway',sans-serif] bg-[#0a0a0a] overflow-hidden">

            {/* === ENTIRE FOOTER BACKGROUND IMAGE === 
                Scale-105 prevents the blur effect from creating faded edges.
            */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src={footerBg}
                    alt="Footer Background"
                    className="w-full h-full object-cover opacity-40 blur-[5px] scale-105"
                />
            </div>

            {/* === TOP BAR === */}
            <div className="relative z-10 w-full border-b border-t border-white/10">
                <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-16 py-4 md:py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex gap-6 md:gap-8 text-white text-[14px] md:text-[15px] font-medium">
                        <a href="#email" className="hover:text-[#c38b31] transition-colors">Email Offers</a>
                        <a href="#location" className="hover:text-[#c38b31] transition-colors">Location & Contact</a>
                    </div>
                    <div className="flex gap-6 text-[#c38b31]">
                        <a href="#facebook" aria-label="Facebook" className="hover:text-[#a87b4f] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="#instagram" aria-label="Instagram" className="hover:text-[#a87b4f] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16.11 7.5v-.01"></path>
                                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* === MAIN FOOTER CONTENT === */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-8">

                {/* Left Column: Contact Info */}
                <div className="flex flex-col text-center md:text-left items-center md:items-start">
                    <h3 className="text-[#df9b29] font-['Lora',serif] text-[20px] md:text-[24px] uppercase tracking-wide mb-4 md:mb-6">
                        WESTVILLE COTTAGE
                    </h3>

                    <div className="flex flex-col gap-4 text-[15px] md:text-[16px] text-gray-200 leading-relaxed">
                        {/* Address / Serving Info */}
                        <div className="flex items-start justify-center md:justify-start gap-3 md:gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#c38b31] w-[20px] h-[20px] md:w-[22px] md:h-[22px] mt-1 shrink-0">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <p className="max-w-[280px]">
                                Has been proudly serving Provincetown and the Outer Cape since 2005
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#c38b31] w-[20px] h-[20px] md:w-[22px] md:h-[22px] shrink-0">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <a href="tel:+15082964550" className="hover:text-[#c38b31] transition-colors">
                                +1 (508) 296-4550
                            </a>
                        </div>

                        {/* Email */}
                        <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#c38b31] w-[20px] h-[20px] md:w-[22px] md:h-[22px] shrink-0">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                            <a href="mailto:info@westvillecottage.com" className="hover:text-[#c38b31] transition-colors">
                                info@westvillecottage.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Center Column: Logo */}
                <div className="flex justify-center items-start pt-4 md:pt-2 lg:col-span-1 md:col-span-2 lg:mx-auto">
                    <a href="#">
                        <img
                            src={logo}
                            alt="Westville Cottage Logo"
                            className="w-[200px] md:w-[260px] object-contain brightness-0 invert opacity-90"
                        />
                    </a>
                </div>

                {/* Right Column: FAQ / CTA */}
                <div className="flex flex-col text-center lg:text-left items-center lg:items-start lg:pl-16">
                    <h3 className="text-[#df9b29] font-['Lora',serif] text-[20px] md:text-[24px] uppercase tracking-wide mb-4 md:mb-6">
                        FREQUENTLY ASKED QUESTIONS
                    </h3>
                    <p className="text-[15px] md:text-[16px] text-gray-200 leading-relaxed mb-6 md:mb-8 max-w-[300px] mx-auto lg:mx-0">
                        Have questions? We’ve got the answers right here.
                    </p>
                    <div>
                        <a
                            href="#"
                            className="inline-block bg-[#df9b29] hover:bg-[#c48824] text-black font-semibold text-[13px] px-8 py-3.5 tracking-[0.05em] uppercase transition-all duration-300 transform hover:-translate-y-1 shadow-sm rounded-sm"
                        >
                            HELP & FAQ
                        </a>
                    </div>
                </div>

            </div>

            {/* === BOTTOM BAR === */}
            <div className="relative z-10 w-full border-t border-white/10 py-8 px-4">
                <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center text-center gap-4 md:gap-5 text-[13px] md:text-[14px] text-gray-300">

                    {/* Bottom Links */}
                    <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-2 md:gap-y-3">
                        <a href="blogs" className="hover:text-[#c38b31] transition-colors">Blogs</a>
                        <a href="#form1" className="hover:text-[#c38b31] transition-colors">Form 1</a>
                        <a href="#form2" className="hover:text-[#c38b31] transition-colors">Form 2</a>
                        <a href="#accessibility" className="hover:text-[#c38b31] transition-colors">Accessibility</a>
                    </div>

                    {/* Copyright */}
                    <p>
                        © Copyright {new Date().getFullYear()} Westville Cottage | All Rights Reserved.
                    </p>

                    {/* Powered By */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-1 md:mt-2">
                        <span>Powered by</span>
                        <a
                            href="https://premiumbusinesswebsites.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <img
                                src={premiumLogo}
                                alt="Premium Business Websites"
                                className="h-7 md:h-8 w-auto object-contain bg-black px-2 py-1 rounded"
                            />
                        </a>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;