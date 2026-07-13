import React, { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Compass } from 'lucide-react';

const Availability = () => {
    const [selectedMonth, setSelectedMonth] = useState(5); // 5 = June, 6 = July, 7 = August (2026)

    const months = [
        { index: 5, name: "June 2026", startDay: 1, totalDays: 30, booked: [1, 2, 3, 4, 5, 12, 13, 14, 19, 20, 21, 26, 27, 28, 29, 30] },
        { index: 6, name: "July 2026", startDay: 3, totalDays: 31, booked: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31] },
        { index: 7, name: "August 2026", startDay: 6, totalDays: 31, booked: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23, 24, 25] }
    ];

    const currentMonthData = months.find(m => m.index === selectedMonth);

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Render calendar grid days
    const renderDays = () => {
        const days = [];
        // Add empty cells for starting day offset
        for (let i = 0; i < currentMonthData.startDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-9 w-9"></div>);
        }
        // Add actual days
        for (let day = 1; day <= currentMonthData.totalDays; day++) {
            const isBooked = currentMonthData.booked.includes(day);
            days.push(
                <div
                    key={`day-${day}`}
                    className={`h-9 w-9 flex items-center justify-center rounded-full text-xs font-semibold font-['Raleway'] transition-all ${isBooked
                        ? "bg-[#df9b29]/20 text-[#b7820c] line-through decoration-[#df9b29]"
                        : "bg-white text-gray-700 border border-gray-100 hover:border-[#df9b29] hover:text-[#df9b29]"
                        }`}
                >
                    {day}
                </div>
            );
        }
        return days;
    };

    const activities = [
        "Ocean Swimming & Beaches", "Whale Watching Tours", "Cape Cod Trail Hiking",
        "Sailing & Boating", "Historic Museums & Art Galleries", "Scenic Bicycling Paths",
        "Boutique Shopping on Commercial St", "Fine Dining & Seafood Restaurants"
    ];

    return (
        <section className="scroll-mt-24 space-y-8">
            <div>
                <h2 className="text-[#2D5D80] font-['Lora',serif] text-[28px] md:text-[36px] font-normal mb-2 leading-tight">
                    Availability & Location
                </h2>
                <p className="font-['Raleway',sans-serif] text-gray-500 text-sm">
                    Select a month to check open dates and view directions.
                </p>
            </div>

            {/* Layout Grid: Left (Calendar), Right (Location & Map) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Left Side: Mock Interactive Calendar */}
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                        {/* Header Calendar Details */}
                        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                            <div className="flex items-center gap-2 text-[#2D5D80]">
                                <CalendarIcon size={20} />
                                <h3 className="font-['Lora',serif] text-[18px] font-normal">
                                    Availability Calendar
                                </h3>
                            </div>

                            {/* Legend */}
                            <div className="flex gap-3 text-xs font-['Raleway']">
                                <div className="flex items-center gap-1">
                                    <span className="w-2.5 h-2.5 rounded-full bg-white border border-gray-200"></span>
                                    <span className="text-gray-500">Available</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#df9b29]/20 border border-[#df9b29]/30"></span>
                                    <span className="text-gray-500">Booked</span>
                                </div>
                            </div>
                        </div>

                        {/* Month Selector Tabs */}
                        <div className="flex gap-2">
                            {months.map(m => (
                                <button
                                    key={m.index}
                                    onClick={() => setSelectedMonth(m.index)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold font-['Raleway'] tracking-wider uppercase transition-all duration-300 cursor-pointer ${selectedMonth === m.index
                                        ? "bg-[#df9b29] text-black"
                                        : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                                        }`}
                                >
                                    {m.name.split(" ")[0]}
                                </button>
                            ))}
                        </div>

                        {/* Calendar Grid Header (Weekdays) */}
                        <div className="grid grid-cols-7 gap-1 text-center font-['Raleway'] text-[11px] font-bold text-gray-400 mt-4 uppercase">
                            {weekdays.map(day => (
                                <div key={day} className="h-6 flex items-center justify-center">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Days Grid */}
                        <div className="grid grid-cols-7 gap-1 justify-items-center mt-2">
                            {renderDays()}
                        </div>
                    </div>
                </div>

                {/* Right Side: Map & Address info */}
                <div className="space-y-6">
                    <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-6 space-y-4">
                        <div className="flex items-center gap-2 text-[#2D5D80] border-b border-gray-200 pb-3">
                            <MapPin size={20} />
                            <h3 className="font-['Lora',serif] text-[18px] font-normal">
                                Location Details
                            </h3>
                        </div>
                        <p className="font-['Raleway'] text-sm text-gray-700 font-semibold">
                            47 Pleasant St, Provincetown, MA 02657, United States
                        </p>

                        {/* Map iframe Embed */}
                        <div className="relative w-full h-[180px] rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
                            <iframe
                                title="Westville Cottage Map"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?q=47%20Pleasant%20St,%20Provincetown,%20MA%2002657&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            ></iframe>
                        </div>
                    </div>
                </div>

            </div>

            {/* Activities grid */}
            <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-[#2D5D80] border-b border-gray-200 pb-3">
                    <Compass size={20} />
                    <h3 className="font-['Lora',serif] text-[18px] font-normal">
                        What's Nearby & Activities
                    </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-600 font-['Raleway'] text-sm">
                    {activities.map((act, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#df9b29]"></span>
                            <span>{act}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Availability;
