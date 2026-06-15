// import React, { useState } from 'react';

// const AvailabilityCalendar = () => {
//     // === STATE MANAGEMENT ===
//     // Current base month/year to display
//     const [baseDate, setBaseDate] = useState(() => {
//         const today = new Date();
//         return { month: today.getMonth(), year: today.getFullYear() };
//     });

//     // Selections
//     const [selectionStart, setSelectionStart] = useState(null);
//     const [selectionEnd, setSelectionEnd] = useState(null);

//     // Modal
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     // Dummy booked dates (e.g., the 5th, 12th, and 20th of every month are booked)
//     const bookedDaysArray = [5, 12, 20];

//     // === HANDLERS ===
//     const handlePrev = () => {
//         setBaseDate(prev => {
//             let newMonth = prev.month - 1;
//             let newYear = prev.year;
//             if (newMonth < 0) {
//                 newMonth = 11;
//                 newYear--;
//             }
//             return { month: newMonth, year: newYear };
//         });
//     };

//     const handleNext = () => {
//         setBaseDate(prev => {
//             let newMonth = prev.month + 1;
//             let newYear = prev.year;
//             if (newMonth > 11) {
//                 newMonth = 0;
//                 newYear++;
//             }
//             return { month: newMonth, year: newYear };
//         });
//     };

//     const handleDateClick = (dateObj, isBooked) => {
//         if (isBooked) return;

//         if (!selectionStart || (selectionStart && selectionEnd)) {
//             // Start a new selection
//             setSelectionStart(dateObj);
//             setSelectionEnd(null);
//         } else if (!selectionEnd) {
//             // Set the end date
//             if (dateObj > selectionStart) {
//                 setSelectionEnd(dateObj);
//                 setIsModalOpen(true); // Open modal when range is selected
//             } else {
//                 alert("Checkout must be after check-in!");
//                 setSelectionEnd(null);
//             }
//         }
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         alert("✅ Your booking has been confirmed!");
//         setIsModalOpen(false);
//         setSelectionStart(null);
//         setSelectionEnd(null);
//     };

//     // === RENDER HELPERS ===
//     const renderMonth = (monthIndex, year) => {
//         const dateObj = new Date(year, monthIndex);
//         const monthName = dateObj.toLocaleString('default', { month: 'long' });

//         const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//         const firstDay = new Date(year, monthIndex, 1).getDay();
//         const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

//         const blanks = Array(firstDay).fill(null);
//         const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

//         // Get today's date at midnight for comparison
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);

//         return (
//             <div key={`${year}-${monthIndex}`} className="bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] overflow-hidden w-full max-w-[300px] mx-auto border border-gray-100">
//                 <div className="bg-[#2a3b4c] text-white text-center py-2.5 font-semibold text-[15px] mx-3 mt-3 rounded-md">
//                     {monthName}, {year}
//                 </div>

//                 <div className="p-4">
//                     <div className="grid grid-cols-7 text-center mb-2">
//                         {daysOfWeek.map((day, idx) => (
//                             <div key={idx} className="text-[13px] font-bold text-gray-800">{day}</div>
//                         ))}
//                     </div>

//                     <div className="grid grid-cols-7 gap-y-2 text-center text-[14px]">
//                         {blanks.map((_, idx) => <div key={`blank-${idx}`}></div>)}

//                         {days.map((day) => {
//                             const currentDateObj = new Date(year, monthIndex, day);
//                             const isBooked = bookedDaysArray.includes(day);
//                             const isToday = currentDateObj.getTime() === today.getTime();

//                             // Determine selection classes
//                             const isStart = selectionStart && currentDateObj.getTime() === selectionStart.getTime();
//                             const isEnd = selectionEnd && currentDateObj.getTime() === selectionEnd.getTime();
//                             const isInRange = selectionStart && selectionEnd && currentDateObj > selectionStart && currentDateObj < selectionEnd;

//                             // Apply conditional Tailwind classes
//                             let dateClasses = "text-gray-700 hover:bg-gray-100 cursor-pointer";
//                             if (isBooked) dateClasses = "bg-[#e2e8f0] text-gray-500 cursor-not-allowed";
//                             else if (isStart) dateClasses = "bg-[#38a169] text-white font-bold";
//                             else if (isEnd) dateClasses = "bg-[#ed8936] text-white font-bold";
//                             else if (isInRange) dateClasses = "bg-[#b2ebf2] text-gray-800";
//                             else if (isToday) dateClasses = "bg-[#8b9de2] text-white font-bold";

//                             return (
//                                 <div
//                                     key={day}
//                                     onClick={() => handleDateClick(currentDateObj, isBooked)}
//                                     className={`w-8 h-8 mx-auto flex items-center justify-center rounded-md transition-colors duration-200 ${dateClasses}`}
//                                 >
//                                     {day}
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     // Calculate the 3 months to display
//     const monthsToDisplay = [0, 1, 2].map(offset => {
//         let m = baseDate.month + offset;
//         let y = baseDate.year;
//         if (m > 11) {
//             y += Math.floor(m / 12);
//             m = m % 12;
//         }
//         return { month: m, year: y };
//     });

//     return (
//         <section className="w-full bg-[#fafafa] py-16 px-4 relative">
//             <div className="max-w-[1000px] mx-auto flex flex-col items-center">

//                 {/* Title & Subtitle */}
//                 <h2 className="text-[#2D5D80] font-['Helvetica',sans-serif] text-[25px] md:text-[35px] font-normal mb-6 leading-tight">
//                     Availability Calendar
//                 </h2>
//                 <p className="text-gray-700 text-[14px] md:text-[15px] text-center mb-6">
//                     <strong className="font-bold">Note:</strong> Click check-in date, then check-out date to get a quote
//                 </p>

//                 {/* Legend */}
//                 <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 text-[13px] text-gray-800 font-semibold">
//                     <div className="flex items-center gap-2">
//                         <span className="w-5 h-5 rounded bg-[#8b9de2]"></span> Current Date
//                     </div>
//                     <div className="flex items-center gap-2">
//                         <span className="w-5 h-5 rounded bg-[#38a169]"></span> Start Date
//                     </div>
//                     <div className="flex items-center gap-2">
//                         <span className="w-5 h-5 rounded bg-[#ed8936]"></span> End Date
//                     </div>
//                     <div className="flex items-center gap-2">
//                         <span className="w-5 h-5 rounded bg-[#e2e8f0]"></span> Booked
//                     </div>
//                 </div>

//                 {/* Calendars Grid */}
//                 <div className="w-full max-w-[650px] mx-auto flex flex-col items-center gap-6">
//                     <div className="flex flex-col md:flex-row justify-center w-full gap-6">
//                         {renderMonth(monthsToDisplay[0].month, monthsToDisplay[0].year)}
//                         {renderMonth(monthsToDisplay[1].month, monthsToDisplay[1].year)}
//                     </div>
//                     <div className="flex justify-center w-full">
//                         {renderMonth(monthsToDisplay[2].month, monthsToDisplay[2].year)}
//                     </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-4 mt-8">
//                     <button onClick={handlePrev} className="bg-[#2a3b4c] text-white px-6 py-2 rounded shadow hover:bg-[#1a252f] transition-colors text-sm font-semibold font-['Helvetica',sans-serif]">
//                         Prev
//                     </button>
//                     <button onClick={handleNext} className="bg-[#2a3b4c] text-white px-6 py-2 rounded shadow hover:bg-[#1a252f] transition-colors text-sm font-semibold font-['Helvetica',sans-serif]">
//                         Next
//                     </button>
//                 </div>
//             </div>

//             {/* === MODAL === */}
//             {isModalOpen && (
//                 <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//                     <div className="bg-white rounded-xl w-full max-w-[400px] p-6 shadow-2xl relative">
//                         <button
//                             onClick={() => setIsModalOpen(false)}
//                             className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl leading-none"
//                         >
//                             &times;
//                         </button>
//                         <h3 className="text-[#000e90] text-xl font-bold mb-4 font-['Helvetica',sans-serif]">Booking Form</h3>

//                         <form onSubmit={handleFormSubmit} className="flex flex-col gap-3 font-['Raleway',sans-serif]">
//                             <div className="flex flex-col gap-1">
//                                 <label className="font-semibold text-sm">Check-in Date</label>
//                                 <input type="text" readOnly value={selectionStart ? selectionStart.toDateString() : ''} className="p-2 border border-gray-300 rounded-md bg-gray-50" />
//                             </div>
//                             <div className="flex flex-col gap-1">
//                                 <label className="font-semibold text-sm">Check-out Date</label>
//                                 <input type="text" readOnly value={selectionEnd ? selectionEnd.toDateString() : ''} className="p-2 border border-gray-300 rounded-md bg-gray-50" />
//                             </div>
//                             <div className="flex flex-col gap-1">
//                                 <label className="font-semibold text-sm">Name</label>
//                                 <input type="text" required className="p-2 border border-gray-300 rounded-md outline-none focus:border-[#2D5D80]" />
//                             </div>
//                             <div className="flex flex-col gap-1">
//                                 <label className="font-semibold text-sm">Email</label>
//                                 <input type="email" required className="p-2 border border-gray-300 rounded-md outline-none focus:border-[#2D5D80]" />
//                             </div>
//                             <div className="flex flex-col gap-1">
//                                 <label className="font-semibold text-sm">Guests</label>
//                                 <input type="number" min="1" required className="p-2 border border-gray-300 rounded-md outline-none focus:border-[#2D5D80]" />
//                             </div>
//                             <button type="submit" className="mt-3 bg-[#a57f16] hover:bg-[#0215b9] transition-colors text-white font-bold py-2.5 rounded-md">
//                                 Confirm Booking
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default AvailabilityCalendar;


import React, { useState } from 'react';

const AvailabilityCalendar = () => {
    // === STATE MANAGEMENT ===
    // Current base month/year to display
    const [baseDate, setBaseDate] = useState(() => {
        const today = new Date();
        return { month: today.getMonth(), year: today.getFullYear() };
    });

    // Selections
    const [selectionStart, setSelectionStart] = useState(null);
    const [selectionEnd, setSelectionEnd] = useState(null);

    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Dummy booked dates (e.g., the 5th, 12th, and 20th of every month are booked)
    const bookedDaysArray = [5, 12, 20];

    // === HANDLERS ===
    const handlePrev = () => {
        setBaseDate(prev => {
            let newMonth = prev.month - 1;
            let newYear = prev.year;
            if (newMonth < 0) {
                newMonth = 11;
                newYear--;
            }
            return { month: newMonth, year: newYear };
        });
    };

    const handleNext = () => {
        setBaseDate(prev => {
            let newMonth = prev.month + 1;
            let newYear = prev.year;
            if (newMonth > 11) {
                newMonth = 0;
                newYear++;
            }
            return { month: newMonth, year: newYear };
        });
    };

    const handleDateClick = (dateObj, isBooked) => {
        if (isBooked) return;

        if (!selectionStart || (selectionStart && selectionEnd)) {
            // Start a new selection
            setSelectionStart(dateObj);
            setSelectionEnd(null);
        } else if (!selectionEnd) {
            // Set the end date
            if (dateObj > selectionStart) {
                setSelectionEnd(dateObj);
                setIsModalOpen(true); // Open modal when range is selected
            } else {
                alert("Checkout must be after check-in!");
                setSelectionEnd(null);
            }
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("✅ Your booking has been confirmed!");
        setIsModalOpen(false);
        setSelectionStart(null);
        setSelectionEnd(null);
    };

    // === RENDER HELPERS ===
    const renderMonth = (monthIndex, year) => {
        const dateObj = new Date(year, monthIndex);
        const monthName = dateObj.toLocaleString('default', { month: 'long' });

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const firstDay = new Date(year, monthIndex, 1).getDay();
        const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

        const blanks = Array(firstDay).fill(null);
        const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

        // Get today's date at midnight for comparison
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        return (
            <div key={`${year}-${monthIndex}`} className="bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] overflow-hidden w-full max-w-[300px] border border-gray-100">
                <div className="bg-[#2a3b4c] text-white text-center py-2.5 font-semibold text-[15px] mx-3 mt-3 rounded-md">
                    {monthName}, {year}
                </div>

                <div className="p-4">
                    <div className="grid grid-cols-7 text-center mb-2">
                        {daysOfWeek.map((day, idx) => (
                            <div key={idx} className="text-[13px] font-bold text-gray-800">{day}</div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-y-2 text-center text-[14px]">
                        {blanks.map((_, idx) => <div key={`blank-${idx}`}></div>)}

                        {days.map((day) => {
                            const currentDateObj = new Date(year, monthIndex, day);
                            const isBooked = bookedDaysArray.includes(day);
                            const isToday = currentDateObj.getTime() === today.getTime();

                            // Determine selection classes
                            const isStart = selectionStart && currentDateObj.getTime() === selectionStart.getTime();
                            const isEnd = selectionEnd && currentDateObj.getTime() === selectionEnd.getTime();
                            const isInRange = selectionStart && selectionEnd && currentDateObj > selectionStart && currentDateObj < selectionEnd;

                            // Apply conditional Tailwind classes
                            let dateClasses = "text-gray-700 hover:bg-gray-100 cursor-pointer";
                            if (isBooked) dateClasses = "bg-[#e2e8f0] text-gray-500 cursor-not-allowed";
                            else if (isStart) dateClasses = "bg-[#38a169] text-white font-bold";
                            else if (isEnd) dateClasses = "bg-[#ed8936] text-white font-bold";
                            else if (isInRange) dateClasses = "bg-[#b2ebf2] text-gray-800";
                            else if (isToday) dateClasses = "bg-[#8b9de2] text-white font-bold";

                            return (
                                <div
                                    key={day}
                                    onClick={() => handleDateClick(currentDateObj, isBooked)}
                                    className={`w-8 h-8 mx-auto flex items-center justify-center rounded-md transition-colors duration-200 ${dateClasses}`}
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

    // Calculate ONLY the 2 months to display
    const monthsToDisplay = [0, 1].map(offset => {
        let m = baseDate.month + offset;
        let y = baseDate.year;
        if (m > 11) {
            y += Math.floor(m / 12);
            m = m % 12;
        }
        return { month: m, year: y };
    });

    return (
        <section className="w-full bg-[#fafafa] py-16 px-4 relative">
            <div className="max-w-[1000px] mx-auto flex flex-col items-center">

                {/* Title & Subtitle */}
                <h2 className="text-[#2D5D80] font-['Helvetica',sans-serif] text-[25px] md:text-[35px] font-normal mb-6 leading-tight">
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

                {/* Calendars Grid (Now exactly 2 months) */}
                <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
                    {renderMonth(monthsToDisplay[0].month, monthsToDisplay[0].year)}
                    {renderMonth(monthsToDisplay[1].month, monthsToDisplay[1].year)}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8">
                    <button onClick={handlePrev} className="bg-[#2a3b4c] text-white px-6 py-2 rounded shadow hover:bg-[#1a252f] transition-colors text-sm font-semibold font-['Helvetica',sans-serif]">
                        Prev
                    </button>
                    <button onClick={handleNext} className="bg-[#2a3b4c] text-white px-6 py-2 rounded shadow hover:bg-[#1a252f] transition-colors text-sm font-semibold font-['Helvetica',sans-serif]">
                        Next
                    </button>
                </div>
            </div>

            {/* === MODAL === */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl w-full max-w-[400px] p-6 shadow-2xl relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl leading-none"
                        >
                            &times;
                        </button>
                        <h3 className="text-[#000e90] text-xl font-bold mb-4 font-['Helvetica',sans-serif]">Booking Form</h3>

                        <form onSubmit={handleFormSubmit} className="flex flex-col gap-3 font-['Raleway',sans-serif]">
                            <div className="flex flex-col gap-1">
                                <label className="font-semibold text-sm">Check-in Date</label>
                                <input type="text" readOnly value={selectionStart ? selectionStart.toDateString() : ''} className="p-2 border border-gray-300 rounded-md bg-gray-50" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-semibold text-sm">Check-out Date</label>
                                <input type="text" readOnly value={selectionEnd ? selectionEnd.toDateString() : ''} className="p-2 border border-gray-300 rounded-md bg-gray-50" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-semibold text-sm">Name</label>
                                <input type="text" required className="p-2 border border-gray-300 rounded-md outline-none focus:border-[#2D5D80]" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-semibold text-sm">Email</label>
                                <input type="email" required className="p-2 border border-gray-300 rounded-md outline-none focus:border-[#2D5D80]" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-semibold text-sm">Guests</label>
                                <input type="number" min="1" required className="p-2 border border-gray-300 rounded-md outline-none focus:border-[#2D5D80]" />
                            </div>
                            <button type="submit" className="mt-3 bg-[#a57f16] hover:bg-[#0215b9] transition-colors text-white font-bold py-2.5 rounded-md">
                                Confirm Booking
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AvailabilityCalendar;