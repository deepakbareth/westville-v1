import React from 'react';
import { Check } from 'lucide-react';

const MustDosComp = () => {
    const listItems = [
        "Guests must provide references of good behaviour.",
        "We prefer non-shedding breeds. Please note, if your dog is a shedding breed and we accept your reservation, daily vacuuming is essential during your stay. Your daily fur removal helps us prepare for guests checking in behind you.",
        "Must be 45lbs or less (max of 2 dogs)....please inquire within for larger breeds above the specified weight limit",
        "Must be house broken (no pads, diapers, or the like).",
        "Your pet should never be allowed to mark or potty inside the cottage, or outside in the yard, or even the gardens",
        "Must be well behaved and not aggressive towards other animals and persons.",
        "Must present current vaccination certificate.",
        "Must be freshly groomed and bathed before check-in.",
        "Must be treated for fleas and ticks before check-in.",
        "Must be respectful of furniture—we cover the sofas with throws when families visit with pets. Please keep furniture covers provided on furniture. You are welcome to bring your own throw to protect the furniture, but ultimately the furniture should remain covered during your visit.",
        "Report any accident on furniture, floor or rugs immediately. DO NOT ATTEMPT to deep clean or scrub with abrasive material on furniture, the floors or rugs. If a simple solution of soap and water does take care of the accident, please call us immediately.",
        "Please DO NOT use toxic chemicals in our home in an attempt to cover up “accidents” items such as “Love my Carpet” is prohibited.....your damage deposit will be applied including and up to complete rug replacement.",
        "We ask that you walk pets off property.",
        "Always clean up after your dog (bring poo poo bags on walks or strolls.) Most local merchants and residents love pets, they even provide water bowls and treats for your buddy around town. Please know that they will frown disgustingly if waste is not immediately removed."
    ];

    return (
        <section className="w-full bg-white py-2 md:py-5 overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6 flex flex-col justify-center items-center">

                {/* Heading */}
                <h2 className="text-[#2D5D80] font-helvetica text-[32px] md:text-[40px] font-normal mb-6 tracking-wide leading-tight w-full text-center">
                    Must Do's
                </h2>

                {/* Description */}
                <p className="text-[14px] md:text-[15px] text-gray-900 font-normal font-helvetica leading-relaxed mb-8 w-full text-left">
                    We believe that it is a privilege to travel with your pet. Pet travel is now more widely accepted by many hotel chains, BnBs, and vacation rentals while others choose not to include our four-legged companions. We at the Westville welcome pets into our home that meet these standards, and in so keeping we also reserve the right to refuse some pets. Here are some must do's according to Hadley:
                </p>

                {/* List Items - GRID LAYOUT */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-[14px] md:text-[15px] text-gray-900 font-normal font-helvetica leading-relaxed w-full">
                    {listItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 bg-gray-50 border border-gray-100 p-5 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:bg-gray-100/50 transition-all duration-200">
                            <span className="mt-1 flex-shrink-0 text-[#df9b29]">
                                <Check size={18} strokeWidth={2.5} />
                            </span>
                            <span className="text-gray-800">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
};

export default MustDosComp;
