import React from 'react';
import PageBanner from '../Component/ReusableComp/PageBanner';
import WestvilleCottage from '../Component/ReusableComp/WestvilleCottage';

function TermsConditions() {
    return (
        <div className="bg-[#fcfcfc] min-h-screen text-gray-800 pb-16 font-helvetica">
            <PageBanner title="Terms & Conditions" />
            <WestvilleCottage />

            <div className="max-w-[1200px] mx-auto px-6 md:px-8 mt-12">
                <div className="bg-white border border-gray-300 rounded-lg p-8 md:p-12 shadow-sm text-left leading-relaxed text-gray-700 space-y-8">

                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 border-b border-gray-300 pb-3 mb-4 uppercase tracking-wide">
                            WESTVILLE COTTAGE TERMS AND CONDITIONS
                        </h1>
                        <p className="text-sm md:text-[15px] leading-relaxed">
                            Welcome to the Westville Cottage website. Please review the following basic rules that govern your use of, your search and possible purchase of accommodations from this Site. (the "Agreement"). Please note that your use of this Site constitutes your unconditional agreement to follow and be bound by these Terms and Conditions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase tracking-wider">
                            GENERAL
                        </h2>
                        <p className="text-sm md:text-[15px] leading-relaxed">
                            We reserve the right to update or modify these Terms and Conditions at any time without prior notice to you. We may change, move, or delete portions of, or may add to, this Site from time to time. Your use of this Site following any such change constitutes your unconditional agreement to follow and be bound by these Terms and Conditions as changed. For this reason, we encourage you to review these Terms and Conditions whenever you use this Site.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase tracking-wider">
                            SITE CONTENTS
                        </h2>
                        <div className="space-y-4 text-sm md:text-[15px] leading-relaxed">
                            <p>
                                All software used on this Site is the property of Westville Cottage or its suppliers and is protected by U.S. and international copyright laws. The contents and software on this Site may be used only as a comparison resource. Any other use, including the reproduction, modification, distribution, transmission, republication, display, or performance of the contents on this Site is strictly prohibited.
                            </p>
                            <p>
                                Westville Cottage and its suppliers and licensors expressly reserve all intellectual property rights in all text, programs, products, processes, technology, content and other materials which appear on this Site. Access to this Site does not confer and shall not be considered as conferring upon anyone any license under any of Westville Cottage or any third party's intellectual property rights. It is a violation of Federal and international law to use this Site in any manner other than as presented herein.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase tracking-wider">
                            PAYMENT METHODS
                        </h2>
                        <p className="text-sm md:text-[15px] leading-relaxed">
                            Westville Cottage accepts MasterCard, VISA, American Express, and Discover, cash and certified bank checks. All prices published on this site are in United States dollars (US$). All payments must be in United States dollars. Other terms may apply.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase tracking-wider">
                            INDEMNIFICATION
                        </h2>
                        <p className="text-sm md:text-[15px] leading-relaxed">
                            You agree to defend, indemnify and hold harmless Westville Cottage and its affiliates from and against any and all claims, damages, costs and expenses, including attorney's fees, arising from or related to your use of this Site.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase tracking-wider">
                            INACCURACY DISCLAIMER
                        </h2>
                        <p className="text-sm md:text-[15px] leading-relaxed">
                            From time to time there may be information on Westville Cottage that contains typographical errors, inaccuracies, or omissions that may relate to product descriptions, pricing, and availability. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice (including after you have submitted your inquiry request). We apologize for any inconvenience this may cause you.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase tracking-wider">
                            EXTERNAL SITES/THIRD PARTY LINK
                        </h2>
                        <div className="space-y-4 text-sm md:text-[15px] leading-relaxed">
                            <p>
                                This site includes links to Internet sites owned or operated by entities other than WestvilleCottage.com (the "External Sites").
                            </p>
                            <p className="font-bold">
                                These may include, but are not limited to, links leading to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Sources of safety information, standards, and specifications.</li>
                                <li>Third-party product reviews and other product performance information.</li>
                            </ul>
                            <p>
                                By using westvillecottage.com, you acknowledge that Westville Cottage is not responsible for the availability of or content on or accessed through, any external site, or access through any external site, nor does Westville Cottage intend such site to be a referral by Westville Cottage or an endorsement of the entities operating such external sites. You should contact the webmaster or site administrator for those external sites if you have any questions or concerns regarding content or links which exist on such external sites.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TermsConditions;
