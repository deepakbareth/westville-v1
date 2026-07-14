import React, { useState, useEffect } from 'react';

// Import PDF assets from assets directory (adjusted paths from Component/WestvilleDocuments/)
import checkingOutPdf from '../../assets/documents/Checking-Out-2025-Edition-Final.pdf';
import guidelinesPdf from '../../assets/documents/Guidelines and Instructions 2026 0.01.pdf';

function WestvilleDocuments() {
    const [activePdf, setActivePdf] = useState(null); // stores { url, title }

    // Lock page scrolling when lightbox is active
    useEffect(() => {
        if (activePdf) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activePdf]);

    return (
        <div className="flex-grow flex flex-col items-center justify-center py-20 px-6 relative bg-[#fcfbfa]">
            <div className="max-w-[800px] w-full text-center">

                {/* Header: OUR RESOURCES */}
                <h2 className="text-[#2D5D80] font-helvetica text-[32px] md:text-[40px] font-normal mb-12 tracking-wide leading-tight w-full text-center uppercase">
                    OUR RESOURCES
                </h2>

                {/* Centered Buttons Container */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
                    {/* Checking-Out PDF Button */}
                    <button
                        onClick={() => setActivePdf({ url: checkingOutPdf, title: 'Checking-Out' })}
                        className="w-full sm:w-auto inline-block bg-[#df9b29] hover:bg-[#c48824] text-white font-bold font-raleway text-[16px] px-10 py-5 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-center min-w-[240px] cursor-pointer"
                    >
                        Checking-Out
                    </button>

                    {/* Guidelines & Instructions PDF Button */}
                    <button
                        onClick={() => setActivePdf({ url: guidelinesPdf, title: 'Guidelines & Instructions' })}
                        className="w-full sm:w-auto inline-block bg-[#df9b29] hover:bg-[#c48824] text-white font-bold font-raleway text-[16px] px-10 py-5 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-center min-w-[240px] cursor-pointer"
                    >
                        Guidelines & Instructions
                    </button>
                </div>

            </div>

            {/* === LIGHTBOX MODAL === */}
            {activePdf && (
                <div
                    className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 md:p-8 backdrop-blur-xs transition-opacity duration-300"
                    onClick={(e) => {
                        // Close modal on backdrop click
                        if (e.target === e.currentTarget) {
                            setActivePdf(null);
                        }
                    }}
                >
                    {/* Modal Content Box */}
                    <div className="relative w-full max-w-[1000px] h-auto max-h-[90vh] md:h-[92vh] bg-[#1e293b] rounded-2xl overflow-hidden shadow-2xl flex flex-col transition-all duration-300 transform scale-100">

                        {/* Modal Header */}
                        <div className="bg-[#1e293b] text-white px-6 py-4 flex items-center justify-between border-b border-slate-700 select-none">
                            <h3 className="font-helvetica text-[18px] md:text-[20px] font-semibold tracking-wide">
                                {activePdf.title}
                            </h3>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-3">
                                {/* Download Button */}
                                <a
                                    href={activePdf.url}
                                    download
                                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors duration-200"
                                    title="Download PDF"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </a>

                                {/* Close Button */}
                                <button
                                    onClick={() => setActivePdf(null)}
                                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors duration-200 cursor-pointer"
                                    title="Close"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* PDF View Port */}
                        <div className="flex-grow bg-slate-100 relative h-full">
                            {/* Desktop/Tablet Iframe viewer */}
                            <iframe
                                src={`${activePdf.url}#toolbar=1`}
                                className="hidden md:block w-full h-full border-none"
                                title={activePdf.title}
                            />

                            {/* Mobile Document Access Card */}
                            <div className="md:hidden flex flex-col items-center justify-center text-center p-8 h-full bg-slate-900 text-white select-none">
                                {/* Document Icon */}
                                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 border border-slate-700 text-[#d9a44c]">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>

                                {/* Text content */}
                                <h4 className="font-helvetica text-[20px] font-semibold text-white mb-2 uppercase tracking-wide">
                                    {activePdf.title}
                                </h4>
                                <p className="text-[13px] text-slate-400 font-raleway tracking-wider uppercase mb-6">
                                    Westville Cottage Resource
                                </p>
                                <p className="text-slate-300 font-raleway text-[14px] leading-relaxed max-w-[280px] mb-8">
                                    Mobile browsers require opening PDFs in a separate window. Click below to view the document in full resolution.
                                </p>

                                {/* Controls */}
                                <div className="w-full max-w-[280px] space-y-4">
                                    <a
                                        href={activePdf.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-block bg-[#d9a44c] hover:bg-[#c48824] text-black font-bold font-raleway text-[14px] py-4 rounded-lg shadow-md tracking-wider uppercase transition-colors duration-200"
                                    >
                                        View Document
                                    </a>

                                    <button
                                        onClick={() => setActivePdf(null)}
                                        className="w-full inline-block bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold font-raleway text-[14px] py-3.5 rounded-lg border border-slate-700 tracking-wider uppercase transition-colors duration-200 cursor-pointer"
                                    >
                                        Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WestvilleDocuments;
