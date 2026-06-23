import React from 'react';
import { MapPin, Phone, Globe, Mail, PawPrint } from 'lucide-react';

const DogParkServicesComp = () => {
    return (
        <section className="w-full bg-white py-8 md:py-12 overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6 flex flex-col justify-center items-center">

                {/* Heading */}
                <h2 className="text-[#2D5D80] font-helvetica text-[32px] md:text-[40px] font-normal mb-10 tracking-wide leading-tight w-full text-center">
                    Dog Park & Services
                </h2>

                {/* 2-Column Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-full font-helvetica">

                    {/* 1. Dog Park */}
                    <div className="flex flex-col justify-between bg-gray-50 border border-gray-100 p-6 md:p-8 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:bg-gray-100/50 transition-all duration-200">
                        <div>
                            <div className="flex items-center gap-2.5 mb-4">
                                <span className="p-2 bg-blue-50 text-[#2D5D80] rounded-sm">
                                    <PawPrint size={20} />
                                </span>
                                <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 leading-tight uppercase tracking-wider">
                                    Dog Park
                                </h3>
                            </div>
                            <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-6">
                                Meet other pet moms and dads at the Pilgrim Bark Park and the best part your dog will meet new friends while vacationing. Bark Park is located at the intersection of Rt 6 and Shank Painter Road in Provincetown.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe size={16} className="text-[#df9b29] flex-shrink-0" />
                            <a
                                href="https://www.provincetowndogpark.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] md:text-[15px] text-gray-800 underline decoration-[#df9b29] decoration-2 underline-offset-4 hover:text-[#df9b29] transition-colors duration-200 font-medium"
                            >
                                www.provincetowndogpark.org
                            </a>
                        </div>
                    </div>

                    {/* 2. Walking & Pet Sitting */}
                    <div className="flex flex-col justify-between bg-gray-50 border border-gray-100 p-6 md:p-8 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:bg-gray-100/50 transition-all duration-200">
                        <div>
                            <div className="flex items-center gap-2.5 mb-4">
                                <span className="p-2 bg-blue-50 text-[#2D5D80] rounded-sm">
                                    <PawPrint size={20} />
                                </span>
                                <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 leading-tight uppercase tracking-wider">
                                    Services
                                </h3>
                            </div>
                            <h4 className="text-[15px] md:text-[15px] font-bold text-gray-900 mb-3">
                                Walking and Pet Sitting Services
                            </h4>
                            <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-4">
                                We encourage you to secure the services of either one of these three very good pet sitters in the area (Jose, Catherine or Chris)...They can assist you with pet sitting services...walking or even staying with your pal during extended absences from the cottage...day trips and the likes.
                            </p>
                            <div className="space-y-3.5 mb-2 pl-1">
                                <div className="flex flex-col text-[14px] md:text-[15px] text-gray-800 leading-relaxed">
                                    <div className="flex items-start gap-2">
                                        <PawPrint size={14} className="text-[#df9b29] mt-1.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-bold">Paul Halley...Wagmoor Dog Walking & Pet Care:</span>
                                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                                                <Phone size={14} className="text-[#df9b29]" />
                                                <a href="tel:7747724186" className="text-[#df9b29] hover:underline font-medium">(774) 772-4186</a>
                                                <span className="text-gray-300">|</span>
                                                <Mail size={14} className="text-[#df9b29]" />
                                                <a href="mailto:wagmoorptown@gmail.com" className="text-[#df9b29] hover:underline font-medium">Email</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col text-[14px] md:text-[15px] text-gray-800 leading-relaxed">
                                    <div className="flex items-start gap-2">
                                        <PawPrint size={14} className="text-[#df9b29] mt-1.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-bold">Catherine Winkler:</span>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Phone size={14} className="text-[#df9b29]" />
                                                <a href="tel:5087371663" className="text-[#df9b29] hover:underline font-medium">(508) 737-1663</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col text-[14px] md:text-[15px] text-gray-800 leading-relaxed">
                                    <div className="flex items-start gap-2">
                                        <PawPrint size={14} className="text-[#df9b29] mt-1.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-bold">Chris Bonelli:</span>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Phone size={14} className="text-[#df9b29]" />
                                                <a href="tel:6503806602" className="text-[#df9b29] hover:underline font-medium">(650) 380-6602</a>
                                            </div>
                                            <p className="text-[12px] text-gray-500 mt-1 italic">
                                                Overnight Pet Sitting from $50/night; Dog Walking Service $25/walk
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Doggie Styles Grooming */}
                    <div className="flex flex-col justify-between bg-gray-50 border border-gray-100 p-6 md:p-8 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:bg-gray-100/50 transition-all duration-200">
                        <div>
                            <div className="flex items-center gap-2.5 mb-4">
                                <span className="p-2 bg-blue-50 text-[#2D5D80] rounded-sm">
                                    <PawPrint size={20} />
                                </span>
                                <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 leading-tight uppercase tracking-wider">
                                    Doggie Styles Grooming
                                </h3>
                            </div>
                            <div className="space-y-3.5 text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-6">
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="text-[#df9b29] mt-0.5 flex-shrink-0" />
                                    <span>43 Race Point Road, Provincetown, MA</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={18} className="text-[#df9b29] flex-shrink-0" />
                                    <a href="tel:5084879663" className="hover:text-[#df9b29] transition-colors duration-200 font-medium">
                                        (508) 487-9663
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Pet Communication */}
                    <div className="flex flex-col justify-between bg-gray-50 border border-gray-100 p-6 md:p-8 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:bg-gray-100/50 transition-all duration-200">
                        <div>
                            <div className="flex items-center gap-2.5 mb-4">
                                <span className="p-2 bg-blue-50 text-[#2D5D80] rounded-sm">
                                    <PawPrint size={20} />
                                </span>
                                <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 leading-tight uppercase tracking-wider">
                                    Pet Communication
                                </h3>
                            </div>
                            <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-6">
                                Communicate with your Pet (present or past.) Choose thirty (30) minutes/1 hour pet communication by Sharon Warner (ask away and get answers to lingering questions about your four legged friend, you'll also learn what he or she lovingly thinks of you).
                            </p>
                            <div className="space-y-3 text-[14px] md:text-[15px] text-gray-700 leading-relaxed">
                                <div className="flex items-center gap-3">
                                    <Phone size={18} className="text-[#df9b29] flex-shrink-0" />
                                    <a href="tel:2037136459" className="hover:text-[#df9b29] transition-colors duration-200 font-medium">
                                        (203) 713-6459
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Globe size={18} className="text-[#df9b29] flex-shrink-0" />
                                    <a
                                        href="https://www.communicatorforyou.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-800 underline decoration-[#df9b29] decoration-2 underline-offset-4 hover:text-[#df9b29] transition-colors duration-200 font-medium"
                                    >
                                        www.communicatorforyou.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default DogParkServicesComp;
