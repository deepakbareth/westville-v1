import React from 'react';
import { MapPin, Phone, Globe, AlertCircle } from 'lucide-react';

const EmergencyCareComp = () => {
    const hospitals = [
        {
            name: "Herring Cove Animal Hospital",
            address: "83 Shank Painter Rd, Provincetown",
            phone: "(508) 487-6449",
            website: "www.herringcoveah.com/",
            websiteUrl: "https://www.herringcoveah.com/"
        },
        {
            name: "Provincetown Animal Hospital",
            address: "9 Center Street, Provincetown, MA 02657",
            phone: "(508) 487-2191",
            website: "",
            websiteUrl: ""
        },
        {
            name: "Cape Cod Veterinary Specialists",
            tag: "24 Hour/Emergency Care",
            address: "79 Theophilus Smith Road, South Dennis, MA 02660",
            phone: "(508) 398-7575",
            website: "www.ccvsdennis.com",
            websiteUrl: "https://www.ccvsdennis.com"
        }
    ];

    return (
        <section className="w-full bg-white py-8 md:py-12 overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6 flex flex-col justify-center items-center">

                {/* Heading */}
                <h2 className="text-[#2D5D80] font-helvetica text-[32px] md:text-[40px] font-normal mb-8 tracking-wide leading-tight w-full text-center">
                    Local Animal Hospitals
                </h2>

                {/* List Items - GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-full mx-auto font-helvetica">
                    {hospitals.map((hospital, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col justify-between bg-gray-50 border border-gray-100 p-6 md:p-8 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:bg-gray-100/50 transition-all duration-200 ${idx === 2 ? 'md:col-span-1 md:max-w-full md:mx-auto w-full' : ''
                                }`}
                        >
                            <div>
                                {/* Hospital Title & Tag */}
                                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                                    <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 leading-tight">
                                        {hospital.name}
                                    </h3>
                                    {hospital.tag && (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-raleway uppercase tracking-wider bg-red-50 text-red-600 border border-red-100">
                                            <AlertCircle size={12} />
                                            {hospital.tag}
                                        </span>
                                    )}
                                </div>

                                {/* Hospital Details */}
                                <div className="space-y-3.5 text-[14px] md:text-[15px] text-gray-700 font-normal leading-relaxed">
                                    {/* Address */}
                                    <div className="flex items-start gap-3">
                                        <MapPin size={18} className="text-[#df9b29] mt-0.5 flex-shrink-0" />
                                        <span>{hospital.address}</span>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-center gap-3">
                                        <Phone size={18} className="text-[#df9b29] flex-shrink-0" />
                                        <a
                                            href={`tel:${hospital.phone.replace(/[^0-9]/g, '')}`}
                                            className="hover:text-[#df9b29] transition-colors duration-200"
                                        >
                                            {hospital.phone}
                                        </a>
                                    </div>

                                    {/* Website if available */}
                                    {hospital.website && (
                                        <div className="flex items-center gap-3">
                                            <Globe size={18} className="text-[#df9b29] flex-shrink-0" />
                                            <a
                                                href={hospital.websiteUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline decoration-[#df9b29] decoration-2 underline-offset-4 hover:text-[#df9b29] transition-colors duration-200 font-medium"
                                            >
                                                {hospital.website}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default EmergencyCareComp;
