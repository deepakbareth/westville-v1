import React from 'react';
import { Link } from 'react-router-dom';

const PoliciesAndFees = () => {
    return (
        <section className="w-full bg-white py-12 md:py-20">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

                    {/* === LEFT COLUMN === */}
                    <div className="border-l-[3px] border-[#1f2937] pl-6 md:pl-8 py-2 flex flex-col space-y-4 font-helvetica text-[15px] text-gray-800">

                        <h2 className="text-[24px] md:text-[28px] text-[#1f2937] mb-2 font-normal leading-snug">
                            Applicable Taxes, Fees &<br />Insurance
                        </h2>

                        <p>Cleaning Fee: $250**</p>
                        <p>Pet Fee: $175 per pet / per week</p>

                        <div className="space-y-1">
                            <p>Property Damage Insurance from $89</p>
                            <p>(paid directly to the insurance carrier)</p>
                        </div>

                        <p>
                            For more information visit{' '}
                            <a
                                href="https://www.propertydamageprotection.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#3b12c3] underline hover:opacity-80 transition-opacity"
                            >
                                Property Damage<br />Insurance Protection
                            </a>
                        </p>

                        <div className="space-y-1">
                            <p>State and Local Vacation Rental Tax apply</p>
                            <p>
                                14.45% For more information visit{' '}
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#132fc9] underline hover:opacity-80 transition-opacity"
                                >
                                    Massachusetts<br />Vacation Rental Tax
                                </a>
                            </p>
                        </div>

                        <p>State & Local Vacation Rental Tax applies</p>

                        {/* Fine Print */}
                        <div className="text-[14px] text-[#6b7280] space-y-4 pt-2">
                            <p>*Rates are subject to change without notice.</p>
                            <p>**Management reserves the right to assess additional cleaning fees of $250 if property is not "broom swept" at checkout</p>
                        </div>
                    </div>

                    {/* === RIGHT COLUMN === */}
                    <div className="border-l-[3px] border-[#1f2937] pl-6 md:pl-8 py-2 flex flex-col space-y-4 font-helvetica text-[15px] text-gray-800">

                        <h2 className="text-[24px] md:text-[28px] text-[#1f2937] mb-2 font-normal">
                            Payments & Deposits
                        </h2>

                        <p>Payment Methods Accepted</p>
                        <p>We accept the following credit cards (only):</p>
                        <p>(add 3.75% admin fee for all CC payments) or Bank Certified Checks or Cash payments</p>
                        <p>Credit cards accepted (admin fee may apply)</p>
                        <p>50% due at booking; balance + refundable deposit due 60 days before arrival</p>
                        <p>Damage deposit payable by bank-certified check</p>

                        {/* Cancellation Section */}
                        <h2 className="text-[24px] md:text-[28px] text-[#1f2937] mt-6 mb-2 font-normal">
                            Cancellation
                        </h2>

                        <p className="text-[#6b7280] leading-relaxed text-[15px]">
                            If you have to cancel your reservation due to unforeseen circumstances, a written request must be made to the owner. If the owner is successful in renting the unit for the same period at the same rate or greater value, your deposit will be returned less $200. A detailed description of refunds is located in the rental agreement.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PoliciesAndFees;