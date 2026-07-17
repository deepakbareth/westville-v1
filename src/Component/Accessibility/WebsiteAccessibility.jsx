import React, { useState } from 'react';
import { Globe, ChevronDown, ChevronUp } from 'lucide-react';

const WebsiteAccessibility = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer hover:bg-gray-50/50 transition-colors focus:outline-none"
            >
                <div className="flex items-center gap-4">
                    <Globe className="w-6 h-6 text-yellow-400 shrink-0" />
                    <span className="text-lg sm:text-xl md:text-2xl font-helvetica text-gray-800 tracking-wide font-normal">
                        Website Accessibility
                    </span>
                </div>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
            </button>

            {isOpen && (
                <div className="pb-8 pl-4 sm:pl-10 pr-2 sm:pr-4 animate-in fade-in slide-in-from-top-2 duration-200 font-helvetica text-sm md:text-[15px] text-gray-600 space-y-6">
                    <div>
                        <h4 className="text-[18px] sm:text-[20px] md:text-[22px] font-helvetica text-gray-900 font-semibold mb-2">
                            Accessibility Statement for Westville Cottage
                        </h4>
                        <p className="text-xs text-gray-400 mb-2">Date: 7/26/2022</p>
                        <p className="italic">This is an accessibility statement from Westville Cottage</p>
                    </div>

                    <div className="space-y-2">
                        <h5 className="text-[16px] font-semibold text-gray-800">Measures to support accessibility</h5>
                        <p>Westville Cottage takes the following measures to ensure accessibility of Westville Cottage:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Employ formal accessibility quality assurance methods.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h5 className="text-[16px] font-semibold text-gray-800">Conformance status</h5>
                        <p>
                            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Westville Cottage is fully conformant with WCAG 2.2 Level AA. Fully conformant means that the content fully conforms to the accessibility standard without any exceptions.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h5 className="text-[16px] font-semibold text-gray-800">Feedback</h5>
                        <p>
                            We welcome your feedback on the accessibility of Westville Cottage. Please let us know if you encounter accessibility barriers on Westville Cottage:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 font-medium text-gray-700">
                            <li>Phone: <a href="tel:+15082964550" className="text-[#2a5d88] hover:underline">+1(508) 296-4550</a></li>
                            <li>Email: <a href="mailto:info@westvillecottage.com" className="text-[#2a5d88] hover:underline">info@westvillecottage.com</a></li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h5 className="text-[16px] font-semibold text-gray-800">Compatibility with browsers and assistive technology</h5>
                        <p>Westville Cottage is designed to be compatible with the following assistive technologies:</p>
                        <ul className="list-disc pl-6 space-y-1.5 text-[#2a5d88]">
                            <li><a href="https://support.mozilla.org/en-US/kb/accessibility-features-firefox" target="_blank" rel="noopener noreferrer" className="hover:underline">Firefox – view additional accessibility features here</a></li>
                            <li><a href="https://accessibility.google/" target="_blank" rel="noopener noreferrer" className="hover:underline">Chrome – view additional Google accessibility features here</a></li>
                            <li><a href="https://support.microsoft.com/en-US/internet-explorer/internet-explorer-help" target="_blank" rel="noopener noreferrer" className="hover:underline">Internet Explorer – view additional ease of access options here</a></li>
                            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/accessibility-features-in-microsoft-edge-4c694d90-6d25-a501-49fb-e9418d184ffc" target="_blank" rel="noopener noreferrer" className="hover:underline">Microsoft Edge – view additional accessibility features here</a></li>
                            <li><a href="https://support.apple.com/guide/safari/accessibility-ibrw1015/mac" target="_blank" rel="noopener noreferrer" className="hover:underline">Safari – view Apple accessibility features here</a></li>
                        </ul>
                        <p className="pt-2">Westville Cottage is not compatible with:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Older web browsers:</strong> Content may not function correctly on older versions of web browsers that lack support for modern web standards, HTML5 features, or CSS3 properties. Examples: Internet Explorer 6-8, and versions of Firefox, Safari, or Chrome no longer supported by the creators (typically up to two previous versions).
                            </li>
                            <li>
                                <strong>Non-standard browser configurations:</strong> Uncommon browser configurations, such as highly customized settings, extensions, or experimental features, may conflict with certain web content or accessibility tools.
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h5 className="text-[16px] font-semibold text-gray-800">Technical specifications</h5>
                        <p>
                            Accessibility of Westville Cottage relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <p>These technologies are relied upon for conformance with the accessibility standards used.</p>
                    </div>

                    <div className="space-y-2">
                        <h5 className="text-[16px] font-semibold text-gray-800">Limitations and alternatives</h5>
                        <p>
                            Despite our best efforts to ensure accessibility of Westville Cottage, there may be some limitations based on third party entities that are providing data into the site. Please contact us if you observe an issue.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h5 className="text-[16px] font-semibold text-gray-800">Assessment approach</h5>
                        <p>Westville Cottage assessed the accessibility of Westville Cottage by the following approaches:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Self-evaluation at site launch</li>
                            <li>
                                <span>External evaluation: a recurring automated check via API providing tests for WCAG 2.2 specifications. Ongoing testing was conducted on: </span>
                                <span className="text-[13px] text-gray-500 block mt-1 font-mono leading-relaxed bg-gray-50 border border-gray-200 rounded-md p-3 max-h-[120px] overflow-y-auto break-all">
                                     07/02/2026; 06/03/2026; 05/06/2026; 04/02/2026; 03/02/2026; 02/05/2026; 12/03/2025; 11/05/2025; 10/02/2025; 09/03/2025; 08/03/2025; 07/01/2025; 06/09/2025; 05/16/2025; 05/02/2025; 04/01/2025; 03/05/2025; 02/05/2025; 01/03/2025; 12/01/2024; 11/07/2024; 10/03/2024; 09/04/2024; 08/01/2024; 07/01/2024; 06/24/2024; 06/03/2024; 05/18/2024; 05/01/2024; 04/01/2024; 03/05/2024; 02/01/2024; 01/01/2024; 12/05/2023; 11/01/2023; 10/01/2023; 09/01/2023; 08/01/2023; 07/03/2023; 06/01/2023; 05/01/2023; 04/25/2023; 04/03/2023; 03/01/2023; 02/04/2023; 01/12/2023; 01/02/2023; 12/01/2022; 11/04/2022; 10/22/2022; 10/03/2022; 09/01/2022; 08/01/2022; 07/27/2022
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-100 text-xs text-gray-400">
                        This statement was created on 9 February 2024 using the W3C Accessibility Statement Generator Tool.
                    </div>
                </div>
            )}
        </div>
    );
};

export default WebsiteAccessibility;
