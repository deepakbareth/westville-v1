import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Download } from 'lucide-react';

import accessibilityImg from '../../Assets/accessibility.png';

const HotelAccessibility = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDownloadWord = () => {
        const htmlContent = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
            <head>
                <title>Non-ADA Accessibility Waiver - Westville Cottage</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        color: #333;
                        line-height: 1.6;
                        padding: 40px;
                        max-width: 800px;
                        margin: 0 auto;
                    }
                    .header-container {
                        text-align: center;
                        margin-bottom: 40px;
                    }
                    .header-container h2 {
                        margin: 5px 0;
                        font-weight: 300;
                        color: #666;
                        font-size: 16px;
                        letter-spacing: 1px;
                    }
                    h1 {
                        font-size: 22px;
                        text-transform: uppercase;
                        letter-spacing: 1.5px;
                        border-bottom: 2px solid #333;
                        padding-bottom: 12px;
                        margin-top: 10px;
                        margin-bottom: 20px;
                    }
                    p {
                        font-size: 15px;
                        margin-bottom: 24px;
                        text-align: justify;
                    }
                    .signature-section {
                        margin-top: 60px;
                    }
                    .field {
                        margin-bottom: 25px;
                    }
                    .field-label {
                        font-size: 13px;
                        font-weight: bold;
                        color: #444;
                    }
                    .line {
                        border-bottom: 1px solid #333;
                        height: 30px;
                        width: 350px;
                        margin-top: 5px;
                    }
                </style>
            </head>
            <body>
                <div class="header-container">
                    <h2>WESTVILLE COTTAGE</h2>
                    <h1>Non-ADA Accessibility Waiver</h1>
                </div>
                <p>
                    I acknowledge that the property I am renting is not compliant with the Americans with Disabilities Act (ADA) and may present challenges for guests with mobility or accessibility needs. This includes, but is not limited to, stairs, narrow doorways, uneven surfaces, and the absence of wheelchair ramps or elevators.
                </p>
                <p>
                    By signing below, I voluntarily assume all risks related to the lack of ADA accessibility and agree that the property owner/host is not liable for any injuries, inconveniences, or damages resulting from accessibility limitations.
                </p>
                <div class="signature-section">
                    <div class="field">
                        <span class="field-label">Guest Name:</span>
                        <div class="line"></div>
                    </div>
                    <div class="field">
                        <span class="field-label">Guest Signature:</span>
                        <div class="line"></div>
                    </div>
                    <div class="field">
                        <span class="field-label">Date:</span>
                        <div class="line"></div>
                    </div>
                </div>
            </body>
            </html>
        `;

        const blob = new Blob(['\ufeff' + htmlContent], {
            type: 'application/msword'
        });

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Non-ADA-Accessibility-Waiver.doc';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

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
                <div className="pb-8 pl-4 sm:pl-10 pr-2 sm:pr-4 animate-in fade-in slide-in-from-top-2 duration-200 text-slate-600 font-helvetica text-sm md:text-[15px] leading-relaxed space-y-6">
                    <p>
                        Please note that the Westville Cottage, built in 1847, has certain limitations regarding accessibility. Although we've made some updates to modernize the interiors, the property is not fully ADA compliant due to its age and feasibility issues. Guests with wheelchairs or requiring ADA accommodations may find it unsuitable. However, we can welcome guests using walkers, crutches, or similar devices. Guests with limited disabilities will need to sign a waiver in the rental agreement.
                    </p>

                    {/* Waiver Document Card */}
                    <div className="bg-[#FAF7F2] border border-gray-200 rounded-lg p-5 md:p-6 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-3">
                            <h4 className="text-[16px] font-bold text-gray-800 uppercase tracking-wide font-helvetica">
                                Non-ADA Accessibility Waiver
                            </h4>
                            <button
                                onClick={handleDownloadWord}
                                className="border border-[#df9b29] text-[#df9b29] hover:bg-[#df9b29] hover:text-white transition-colors duration-200 py-1.5 px-3.5 rounded-md text-[13px] font-semibold flex items-center justify-center gap-2 cursor-pointer w-fit"
                            >
                                <Download className="w-4 h-4 shrink-0" />
                                Download Waiver
                            </button>
                        </div>
                        <p className="text-[13px] md:text-[14px]">
                            I acknowledge that the property I am renting is not compliant with the Americans with Disabilities Act (ADA) and may present challenges for guests with mobility or accessibility needs. This includes, but is not limited to, stairs, narrow doorways, uneven surfaces, and the absence of wheelchair ramps or elevators.
                        </p>
                        <p className="text-[13px] md:text-[14px]">
                            By signing below, I voluntarily assume all risks related to the lack of ADA accessibility and agree that the property owner/host is not liable for any injuries, inconveniences, or damages resulting from accessibility limitations.
                        </p>

                        {/* Placeholder lines for signature */}
                        <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-[13px] md:text-[14px]">
                            <div className="flex flex-col gap-1">
                                <span className="text-slate-500 font-medium">Guest Name:</span>
                                <div className="border-b border-gray-300 h-6"></div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-slate-500 font-medium">Guest Signature:</span>
                                <div className="border-b border-gray-300 h-6"></div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-slate-500 font-medium">Date:</span>
                                <div className="border-b border-gray-300 h-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HotelAccessibility;
