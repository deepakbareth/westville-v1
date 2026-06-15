import React from 'react';
import PoliciesAndFees from './PoliciesAndFees';

const Rates = () => {
    const rateList = [
        { season: "Pre-Season 2026", weekly: "$1,975.00", nightly: "$278 / $295", holiday: "—" },
        { season: "May 2026", weekly: "$1,975.00", nightly: "$275 / $295", holiday: "—" },
        { season: "Memorial Special", weekly: "—", nightly: "$350 / $350", holiday: "Memorial Weekend" },
        { season: "Circuit", weekly: "$3,333.00", nightly: "$500 / $525", holiday: "4th of July / Independence" },
        { season: "NOMAD", weekly: "—", nightly: "$468 / $500", holiday: "Pre Bear Week" },
        { season: "Bear Special", weekly: "$3,600.00", nightly: "$480 / $550", holiday: "Bear Week" },
        { season: "Women", weekly: "$3,332.00", nightly: "$468 / $550", holiday: "—" },
        { season: "In-Season", weekly: "$3,647.00", nightly: "$462 / $550", holiday: "—" },
        { season: "End of Summer", weekly: "$3,330.00", nightly: "$468 / $550", holiday: "Labor Day" }
    ];

    const fees = [
        { label: "Cleaning Fee", value: "$250" },
        { label: "Pet Fee", value: "$175 per pet / per week" },
        { label: "State & Local Vacation Rental Tax", value: "14.45%" },
        { label: "Property Damage Insurance", value: "From $89" }
    ];

    return (
        <section className="scroll-mt-45 space-y-8" id='rates'>
            <div>
                <h2 className="text-[#2D5D80] font-Helvetica text-[25px] md:text-[35px] font-normal mb-6 leading-tight">
                    Rates & Policies
                </h2>

            </div>
            {/* Rates Table Container */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse block md:table">

                    {/* Desktop Header: Hidden on mobile (hidden md:table-header-group) */}
                    <thead className="hidden md:table-header-group">
                        <tr className="bg-[#f8f9fa] border-b border-gray-200 text-gray-700 font-helvetica text-[13px] md:text-[14px] font-bold">
                            <th className="py-4 px-6">Season / Period</th>
                            <th className="py-4 px-6 text-right">Per Week</th>
                            <th className="py-4 px-6 text-right">Per Night (Min 3 Nights)</th>
                            <th className="py-4 px-6">Events</th>
                        </tr>
                    </thead>

                    <tbody className="block md:table-row-group font-helvetica text-[13px] md:text-[15px] text-gray-600">
                        {rateList.map((rate, idx) => (
                            // On mobile: acts as a flex-column card (block md:table-row). Adds bottom border between cards.
                            <tr
                                key={idx}
                                className="block md:table-row border-b md:border-none border-gray-200 hover:bg-gray-50 transition-colors duration-150 p-4 md:p-0"
                            >
                                {/* Column 1: Season */}
                                {/* flex justify-between pushes label to left and value to right on mobile */}
                                <td className="flex justify-between items-center md:table-cell py-3 md:py-4 md:px-6 font-semibold text-gray-800 border-b border-gray-100 md:border-none">
                                    <span className="md:hidden font-bold text-gray-500 uppercase text-[11px] tracking-wider">Season / Period</span>
                                    <span className="text-right md:text-left">{rate.season}</span>
                                </td>

                                {/* Column 2: Per Week */}
                                <td className="flex justify-between items-center md:table-cell py-3 md:py-4 md:px-6 md:text-right font-mono border-b border-gray-100 md:border-none">
                                    <span className="md:hidden font-bold text-gray-500 font-sans uppercase text-[11px] tracking-wider">Per Week</span>
                                    <span>{rate.weekly}</span>
                                </td>

                                {/* Column 3: Per Night */}
                                <td className="flex justify-between items-center md:table-cell py-3 md:py-4 md:px-6 md:text-right font-mono border-b border-gray-100 md:border-none">
                                    <span className="md:hidden font-bold text-gray-500 font-sans uppercase text-[11px] tracking-wider">Per Night</span>
                                    <span>{rate.nightly}</span>
                                </td>

                                {/* Column 4: Events */}
                                <td className="flex justify-between items-center md:table-cell py-3 md:py-4 md:px-6 text-sm ">
                                    <span className="md:hidden font-bold text-gray-500 font-sans not-italic uppercase text-[11px] tracking-wider">Events</span>
                                    <span className="text-right md:text-left">{rate.holiday}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

            {/* Policies and Fees grid */}
            <PoliciesAndFees />
        </section>
    );
};

export default Rates;
