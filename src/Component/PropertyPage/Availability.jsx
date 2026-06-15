import React from 'react';

const AvailabilityCalendar = () => {
    // Helper function to render a dummy month for UI purposes
    // (In a real app, you would use a library like react-calendar or react-dates here)
    const renderMonth = (monthName, startDay, totalDays, bookedDates) => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const blanks = Array(startDay).fill(null);
        const days = Array.from({ length: totalDays }, (_, i) => i + 1);

        return (
            <div className="bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] overflow-hidden w-full max-w-[300px] mx-auto border border-gray-100">
                {/* Month Header */}
                <div className="bg-[#2a3b4c] text-white text-center py-2.5 font-semibold text-[15px] mx-3 mt-3 rounded-md">
                    {monthName}
                </div>

                <div className="p-4">
                    {/* Days of Week */}
                    <div className="grid grid-cols-7 text-center mb-2">
                        {daysOfWeek.map((day, idx) => (
                            <div key={idx} className="text-[13px] font-bold text-gray-800">{day}</div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-y-2 text-center text-[14px]">
                        {blanks.map((_, idx) => (
                            <div key={`blank-${idx}`}></div>
                        ))}
                        {days.map((day) => {
                            const isBooked = bookedDates.includes(day);
                            return (
                                <div
                                    key={day}
                                    className={`w-8 h-8 mx-auto flex items-center justify-center rounded-md ${isBooked ? 'bg-[#e2e8f0] text-gray-500' : 'text-gray-700 hover:bg-gray-100 cursor-pointer'
                                        }`}
                                >
                                    {day}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="w-full bg-[#fafafa] py-16 px-4">
            <div className="max-w-[1000px] mx-auto flex flex-col items-center">

                {/* Title & Subtitle */}
                <h2 className="text-[#3b5998] text-[28px] md:text-[36px] font-normal mb-2 text-center font-['Raleway',sans-serif]">
                    Availability Calendar
                </h2>
                <p className="text-gray-700 text-[14px] md:text-[15px] text-center mb-6">
                    <strong className="font-bold">Note:</strong> Click check-in date, then check-out date to get a quote
                </p>

                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 text-[13px] text-gray-800 font-semibold">
                    <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-[#8b9de2]"></span> Current Date
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-[#38a169]"></span> Start Date
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-[#ed8936]"></span> End Date
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-[#e2e8f0]"></span> Booked
                    </div>
                </div>

                {/* Calendars Grid */}
                {/* Top Row: 2 Months, Bottom Row: 1 Month centered */}
                <div className="w-full max-w-[650px] mx-auto flex flex-col items-center gap-6">
                    <div className="flex flex-col md:flex-row justify-center w-full gap-6">
                        {/* Example parameters: Month Name, Starting Day Offset, Total Days, Array of Booked Dates */}
                        {renderMonth('July, 2026', 3, 31, [5, 12, 20])}
                        {renderMonth('August, 2026', 6, 31, [5, 12, 20])}
                    </div>
                    <div className="flex justify-center w-full">
                        {renderMonth('September, 2026', 2, 30, [5, 12, 20])}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8">
                    <button className="bg-[#2a3b4c] text-white px-6 py-2 rounded shadow hover:bg-[#1a252f] transition-colors text-sm font-semibold">
                        Prev
                    </button>
                    <button className="bg-[#2a3b4c] text-white px-6 py-2 rounded shadow hover:bg-[#1a252f] transition-colors text-sm font-semibold">
                        Next
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AvailabilityCalendar;