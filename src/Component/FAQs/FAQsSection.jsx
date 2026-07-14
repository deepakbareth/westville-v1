import React, { useState } from 'react';

const FAQsSection = () => {
    // Accordion active index (null means all closed, initially item 0 is open)
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Know before you go",
            answer: (
                <p>
                    Here you will find answers to the most common questions about your stay with us at the Westville Cottage. The Westville Cottage is a beautifully restored luxury property. We are also pet friendly which is a rare find in Provincetown. Affectionately so and accordingly we book up rather quickly. When you arrive here you will see why.
                </p>
            )
        },
        {
            question: "Location",
            answer: (
                <div className="space-y-4">
                    <p>
                        Provincetown is a beach resort. We are nestled in the heart of West End, just two blocks away from the town beach. Or, if you are a nudist at heart, the Herring Cove Beach is a five-minute bike ride away. If you love T-Dance, you can be there in five minutes as well. Or if you enjoy working out you can be at Mussel Beach in two minutes.
                    </p>
                    <p className="font-semibold text-gray-800">Is the Westville Cottage located on the water?</p>
                    <p>
                        We are not currently on the water, but in a few years with the global warming trends, we will be...just kidding. We are located minutes from the water. You can have sand in your sandals or under your feet or completely submerged underwater in a short 5-minute walk to the town beach.
                    </p>
                </div>
            )
        },
        {
            question: "Why No Street Address",
            answer: (
                <div className="space-y-4">
                    <p className="font-semibold text-gray-800">Why Don't You Post A Street Address For The Westville?</p>
                    <p>
                        We do not post our address for the safety and security of our guests and our property. Although we have a property manager, for a few months of the year, Westville is unoccupied and can easily be a target for idle hands. We will tell you the blocks of our location, but until we know that you are a serious potential guest, our street address remains confidential.
                    </p>
                </div>
            )
        },
        {
            question: "Our Season",
            answer: (
                <p>
                    We are in season from June to September. Weekly rentals are generally Saturday to Saturday with a seven-night minimum. Off-season we have a three-night minimum. Our Hip Season rates apply to months before and after the peak.
                </p>
            )
        },
        {
            question: "Reservations",
            answer: (
                <p>
                    Generally, returning guests of Westville Cottage have the first right of refusal. If a time period you desire is open, please contact us and mail in your deposit ASAP. We cannot hold your reservation dates until we receive your deposit check. Unless you are an established guest with us, it is the first deposit that gets the reservation.
                </p>
            )
        },
        {
            question: "Why The Guest Information Form",
            answer: (
                <div className="space-y-4">
                    <p>
                        The form is only required for all first-time guests, or if there are changes to record since your last visit. We prepare a lease agreement for every vacation. The lease agreement is an enforceable document in a court of law. It protects both parties... the hosts and the guests. You know exactly what you're getting... no surprises.
                    </p>
                    <p>
                        Additionally, we have candidly shared our lives throughout this website especially in the "Your Hosts" section, therefore it is only fitting that we get to know who you are. If you are uncomfortable sharing, then we are uncomfortable opening our home to you. Provincetown has a place for everyone, with many other types of rentals that may meet your needs. Feel free to visit other vacation rentals and inquire about availability. Maybe their lack of concern would serve as a better fit for you and your hard-earned vacation dollars. Remember you get what you pay for!
                    </p>
                </div>
            )
        },
        {
            question: "What is included in Rental Fees",
            answer: (
                <div className="space-y-4">
                    <p className="font-semibold text-gray-800">A reservation at the Westville Cottage comes complete with the following:</p>
                    <ul className="space-y-1">
                        <li>• 680 thread count bedding</li>
                        <li>• Turkish luxury towels</li>
                        <li>• Dishwasher tabs</li>
                        <li>• Beach accessories</li>
                        <li>• Two(2) adult-size mountain bicycles</li>
                    </ul>
                    <p className="font-semibold text-gray-800">Also, we provide a starter supply of sundries:</p>
                    <ul className="space-y-1">
                        <li>• Shampoo</li>
                        <li>• Body wash</li>
                        <li>• Paper towels</li>
                        <li>• Toilet paper</li>
                        <li>• Trash bags</li>
                    </ul>
                    <p>
                        Our soaps, shampoos, and lotions are by Gilchrist & Soames. If the item is not listed on the starter supply list above and you use and deplete any other item you found at the Westville for your convenience during your stay, please replace it before you leave.
                    </p>
                    <p>
                        You may want to stop at the local Stop & Shop grocery store before you check in to buying food or your specialty store in your hometown for some of your must-have items. For more info, please visit our amenities area on this site. Standard vacation rental etiquette applies, please replace any item you used.
                    </p>
                    <p>
                        You will receive a copy of the Guidelines and Instructions with your welcome package before check-in. The guidelines and Instructions with key (pickup) are provided approximately two (2) weeks prior to check-in.
                    </p>
                </div>
            )
        },
        {
            question: "Cancellation Policy",
            answer: (
                <div className="space-y-3">
                    <p className="font-semibold text-gray-800">No refunds for cancellations made within four weeks of arrival</p>
                    <p>
                        If you have to cancel your reservation due to unforeseen circumstances, a written request must be made to the owner. If the owner is successful in re-renting the unit for the same period at the same rate or greater value, your deposit will be returned less than $200.
                    </p>
                </div>
            )
        },
        {
            question: "Payments/Deposits/Fees",
            answer: (
                <div className="space-y-4">
                    <p className="font-semibold text-gray-800">Payment Methods Accepted:</p>
                    <ul className="space-y-1">
                        <li>• MasterCard</li>
                        <li>• Visa</li>
                        <li>• American Express- (add 3% admin fee for all CC payments)</li>
                        <li>• Bank Certified Checks</li>
                        <li>• Wire Transfers (account information following request)</li>
                        <li>• Cash payments</li>
                    </ul>
                    <p>
                        All payments are to be made with bank-certified checks or US Money Order. We ask for a 50% deposit on booking, with the balance due sixty days before occupancy. This is all standard in P-town.
                    </p>
                    <p>
                        Pet owners, please add $175 per pet/week or $35/night/pet.
                    </p>
                    <p>
                        Nightly stays (where applicable), please add $250.00 (cleaning fee).
                    </p>
                    <p className="font-semibold text-gray-800">Final Payment</p>
                    <p>
                        With your final payment please include a <strong>SEPARATE</strong> $650 Bank Certified check for security deposit, returnable within 30 days upon your departure.
                    </p>
                    <p>
                        <strong>FOR ALL BANK CERTIFIED CHECKS*</strong> all payment and mailing information will be provided directly by the owner.
                    </p>
                    <p className="text-xs text-gray-500 italic">
                        *Bank Certified Checks are checks obtained through your personal banking institution with a teller or supervisor's signature. They are not to be confused with personal checks.
                    </p>
                </div>
            )
        },
        {
            question: "Arrival & Departure",
            answer: (
                <div className="space-y-4">
                    <p>Check-in is at 4 pm; check-out is at 10 am.</p>
                    <p>There is parking onsite for one car only. Please be courteous to the next guest by being on time at check out.</p>
                    <p>Our Housekeeper needs every minute to create the "WOW" factor that you will soon experience.</p>
                </div>
            )
        },
        {
            question: "Non-Smoking Policy",
            answer: (
                <div className="space-y-3">
                    <p className="font-semibold text-gray-800">Our home is completely smoke-free.</p>
                    <p>
                        Any violations will result in a damage assessment to decontaminate the premises. We would like all guests to experience the Westville Cottage just as you have, allergic reactions due to smoke pollutants can be deadly to some. Please be courteous to other guests by not smoking. We appreciate your cooperation.
                    </p>
                </div>
            )
        },
        {
            question: "Cleaning",
            answer: (
                <div className="space-y-4">
                    <p>
                        Although a cleaning fee is added to all rentals, guests are required to leave the premises as well as they found it. There are "checking out" guidelines located onsite for your reference. If you are not willing to clean up after yourself, then guests might opt to include an additional cleaning fee of $250.00, or it will be deducted from the security deposit.
                    </p>
                    <p>
                        Guests are asked to broom sweep before departure. Broom sweep is standard industry lingua for "don't be a slob." As a courtey to incoming guests and housekeeping staff, existing guests are strongly encouraged to leave the property tidy. On-site there is a vacuum cleaner with a pet hair/removal device attachment. We encourage all guests to use the vacuum even if they did not vacation with your pet. You will be surprised to see what comes at you. If you would like a daily maid or turn down service, please inquire, we can arrange for such at an additional cost to you.
                    </p>
                    <p className="font-semibold text-gray-800">Extended Stays (14 days or more) are subject to:</p>
                    <ol className="list-decimal pl-5 space-y-1">
                        <li>Interim cleaning</li>
                        <li>Addiitonal cleaning fee, professional deep cleaning service maybe apply.</li>
                    </ol>
                </div>
            )
        },
        {
            question: "Pets",
            answer: (
                <div className="space-y-4">
                    <p>
                        We love our pets and welcome yours to stay here as long as they are well behaved and relatively quiet (dogs do bark!), and housebroken (no pee-pee/poo pads). We accept non-shedding breeds only, with a maximum weight of 75lbs. We ask that you clean up after your pet both inside and outside and please walk your pet off-property. You are also responsible for watching over and/or containing your pet at all times.
                    </p>
                    <p className="font-semibold text-gray-800">Can Rover go potty or pee-pee in the garden?</p>
                    <p>
                        No. The Westville is a small space and we are not surrounded by rolling acres of gardens, we cannot allow Rover/Rita to go to the bathroom in the gardens. Please do not allow your dog in the garden area or leave him/her unattended while outside as damage to the gardens may occur i.e. Urine burns, digging leaves unsightly holes in the well-manicured gardens. Any such occurrence will result in a damage assessment.
                    </p>
                </div>
            )
        },
        {
            question: "Pets Control & Vaccination Requirement",
            answer: (
                <div className="space-y-4">
                    <p>
                        Please note, if your pet is approved you must be able to provide current vaccination records. Owners must provide records with final payment. Your dog should be treated for fleas and ticks prior to check-in. Provincetown is a beach resort location, warm weather in the summertime is noted for higher breeding rates for ticks and fleas.
                    </p>
                    <p>
                        About one week before your vacation with us, please have your pooch/Rover/Rita freshly bathed and or groomed, especially if you plan on visiting the park and meeting other nice pooches. Remember, he or she wants to be happy and healthy, just like Mom or Dad would on vacation. After all, they are on vacation too. We recommend that you apply your repellent (Frontline Plus, Advantage, Capstar caplets, or whichever is your preferred line) immediately following the bath/grooming (not before as the medicine becomes weakened). You will be happy you did and so would your four-legged companion.
                    </p>
                </div>
            )
        }
    ];

    return (
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16">
            <div className="text-center mb-12">
                {/* <p className="text-[13px] md:text-[14px] font-bold tracking-[4px] uppercase font-helvetica text-gray-900 mb-3">
                    QUESTIONS & ANSWERS
                </p> */}
                <h2 className="text-[28px] md:text-[40px] font-helvetica text-[#2D5D80] font-normal leading-tight">
                    Frequently Asked Questions
                </h2>
            </div>

            <div className="space-y-1.5 font-helvetica">
                {faqData.map((item, index) => {
                    const isOpen = activeIndex === index;
                    const headerBgClass = isOpen ? "bg-[#e8f2ff] text-[#1e70e2]" : "bg-white text-[#2d3748] hover:bg-gray-50/50";
                    const borderClass = isOpen ? "border-blue-200" : "border-gray-200";

                    return (
                        <div
                            key={index}
                            className={`border ${borderClass} overflow-hidden bg-white shadow-sm transition-all duration-300 rounded-sm`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`w-full flex items-center justify-between p-5 md:p-5 text-left focus:outline-none transition-colors duration-300 cursor-pointer ${headerBgClass}`}
                            >
                                <span className="font-helvetica font-medium text-base md:text-[17px] pr-4 flex items-center gap-2">
                                    <span className="font-bold shrink-0">
                                        {index + 1}.
                                    </span>
                                    {item.question}
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={`w-4 h-4 transform transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#1e70e2]' : 'text-gray-400'}`}
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="overflow-hidden font-helvetica">
                                    <div className="px-5 pb-6 md:px-6 md:pb-8 pt-6 text-[14px] md:text-[15px] leading-relaxed text-gray-600 border-t border-gray-100">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQsSection;
