import React from 'react';

const PoliciesAndFees = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 border-t border-gray-100 pt-10">

            {/* === LEFT COLUMN === */}
            <div className="border-l-[3px] border-[#2D5D80] pl-6 md:pl-8 flex flex-col space-y-4 font-helvetica text-[14px] md:text-[15px] text-gray-600">

                <h3 className="text-[18px] md:text-[20px] text-[#2D5D80] font-semibold mb-2 leading-snug">
                    Applicable Taxes, Fees &amp; Insurance
                </h3>

                <p className="leading-relaxed">Cleaning Fee: $250**</p>
                <p className="leading-relaxed">Pet Fee: $175 per pet / per week</p>

                <div className="space-y-1">
                    <p className="leading-relaxed">Property Damage Insurance from $89</p>
                    <p className="text-gray-500 text-[13px]">(paid directly to the insurance carrier)</p>
                </div>

                <p className="leading-relaxed">
                    For more information visit{' '}
                    <a
                        href="https://www.propertydamageprotection.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#df9b29] font-semibold underline hover:text-[#c48824] transition-colors"
                    >
                        Property Damage Insurance Protection
                    </a>
                </p>

                <div className="space-y-1">
                    <p className="leading-relaxed">State &amp; Local Vacation Rental Tax applies</p>
                    <p className="leading-relaxed">
                        14.45% For more information visit{' '}
                        <a
                            href="https://www.mass.gov/info-details/room-occupancy-excise-tax"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#df9b29] font-semibold underline hover:text-[#c48824] transition-colors"
                        >
                            Massachusetts Vacation Rental Tax
                        </a>
                    </p>
                </div>

                {/* Fine Print */}
                <div className="text-[13px] text-gray-400 space-y-2 pt-2 border-t border-gray-100">
                    <p>*Rates are subject to change without notice.</p>
                    <p>**Management reserves the right to assess additional cleaning fees of $250 if property is not "broom swept" at checkout.</p>
                </div>
            </div>

            {/* === RIGHT COLUMN === */}
            <div className="border-l-[3px] border-[#2D5D80] pl-6 md:pl-8 flex flex-col space-y-4 font-helvetica text-[14px] md:text-[15px] text-gray-600">

                <h3 className="text-[18px] md:text-[20px] text-[#2D5D80] font-semibold mb-2 leading-snug">
                    Payments &amp; Deposits
                </h3>

                <p className="leading-relaxed">We accept bank certified checks, cash, or credit cards.</p>
                <p className="text-gray-500 text-[13px]">(add 3.75% admin fee for all CC payments) or Bank Certified Checks or Cash payments</p>
                <p className="leading-relaxed">50% due at booking; balance + refundable deposit due 60 days before arrival.</p>
                <p className="leading-relaxed">Damage deposit is payable by bank-certified check.</p>

                {/* Cancellation Section */}
                <h3 className="text-[18px] md:text-[20px] text-[#2D5D80] font-semibold mt-6 mb-2 leading-snug">
                    Cancellation
                </h3>

                <p className="leading-relaxed text-gray-600">
                    If you have to cancel your reservation due to unforeseen circumstances, a written request must be made to the owner. If the owner is successful in renting the unit for the same period at the same rate or greater value, your deposit will be returned less a $200 processing fee. A detailed description of refunds is located in the rental agreement.
                </p>
            </div>

        </div>
    );
};

export default PoliciesAndFees;