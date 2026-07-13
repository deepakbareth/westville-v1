import React, { useState } from 'react';

const AvailabilityCalendar = () => {
    // === STATE MANAGEMENT ===
    const [baseDate, setBaseDate] = useState(() => {
        const today = new Date();
        return { month: today.getMonth(), year: today.getFullYear() };
    });

    const [selectionStart, setSelectionStart] = useState(null);
    const [selectionEnd, setSelectionEnd] = useState(null);

    // Modal States
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAvailable, setIsAvailable] = useState(true);
    // Views: 'check' (initial prompt) | 'bookingForm' (if available) | 'notifyForm' (if not available)
    const [modalView, setModalView] = useState('check');

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

    // Helper to check if any booked date falls between start and end
    const checkAvailabilityRange = (start, end) => {
        let currentDate = new Date(start);
        while (currentDate <= end) {
            // In a real app, you'd compare full date strings. Here we use your dummy day array.
            if (bookedDaysArray.includes(currentDate.getDate())) {
                return false;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return true;
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

                // Verify if the selected range is completely free
                const rangeIsFree = checkAvailabilityRange(selectionStart, dateObj);
                setIsAvailable(rangeIsFree);
                setModalView('check'); // Reset view to the initial prompt
                setIsModalOpen(true);
            } else {
                alert("Checkout must be after check-in!");
                setSelectionStart(dateObj);
                setSelectionEnd(null);
            }
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectionStart(null);
        setSelectionEnd(null);
        // Reset the modal view after a slight delay so it doesn't flicker while fading out
        setTimeout(() => setModalView('check'), 200);
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        alert("✅ Your booking inquiry has been sent!");
        closeModal();
    };

    const handleNotifySubmit = (e) => {
        e.preventDefault();
        alert("📬 You will be notified if these dates become available!");
        closeModal();
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

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        return (
            <div key={`${year}-${monthIndex}`} className="bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] overflow-hidden w-full max-w-[300px] border border-gray-100">
                <div className="bg-[#2D5D80] text-white text-center py-2.5 font-semibold text-[15px] mx-3 mt-3 rounded-md font-helvetica">
                    {monthName}, {year}
                </div>

                <div className="p-4 font-helvetica">
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

                            const isStart = selectionStart && currentDateObj.getTime() === selectionStart.getTime();
                            const isEnd = selectionEnd && currentDateObj.getTime() === selectionEnd.getTime();
                            const isInRange = selectionStart && selectionEnd && currentDateObj > selectionStart && currentDateObj < selectionEnd;

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
        <section className="scroll-mt-24 space-y-6">
            <div>
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#df9b29] block mb-2 font-helvetica">
                    Booking
                </span>
                <h2 className="text-[#2D5D80] font-helvetica text-[28px] md:text-[36px] font-normal mb-4 leading-tight">
                    Availability Calendar
                </h2>
                <p className="text-gray-600 text-[14px] md:text-[15px] font-helvetica mb-4">
                    <strong className="font-bold">Note:</strong> Click check-in date, then check-out date to get a quote.
                </p>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-[13px] text-gray-800 font-semibold font-helvetica">
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

                <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
                    {renderMonth(monthsToDisplay[0].month, monthsToDisplay[0].year)}
                    {renderMonth(monthsToDisplay[1].month, monthsToDisplay[1].year)}
                </div>

                <div className="flex gap-4 mt-8">
                    <button onClick={handlePrev} className="bg-[#2D5D80] text-white px-6 py-2.5 rounded-lg shadow hover:bg-[#1e425c] transition-colors text-sm font-semibold font-helvetica cursor-pointer">
                        Prev
                    </button>
                    <button onClick={handleNext} className="bg-[#2D5D80] text-white px-6 py-2.5 rounded-lg shadow hover:bg-[#1e425c] transition-colors text-sm font-semibold font-helvetica cursor-pointer">
                        Next
                    </button>
                </div>
            </div>

            {/* === MODAL === */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl w-full max-w-[400px] p-6 shadow-2xl relative animate-in fade-in-50 duration-200">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl leading-none cursor-pointer"
                        >
                            &times;
                        </button>

                        {/* VIEW 1: Initial Availability Check */}

                        {/* VIEW 1: Initial Availability Check */}
                        {modalView === 'check' && (
                            <div className="font-helvetica text-[14px] text-gray-700 flex flex-col gap-4 mt-2">
                                <h3 className={`text-xl font-bold font-helvetica ${isAvailable ? 'text-[#38a169]' : 'text-[#e53e3e]'}`}>
                                    {isAvailable ? 'Dates Available!' : 'Dates Already Booked'}
                                </h3>

                                <p>
                                    {isAvailable
                                        ? "Great news! These dates are available. Would you like to book these dates now?"
                                        : "Sorry, some or all of these dates are already booked. Please select a different date range."
                                    }
                                </p>

                                <div className="flex gap-3 mt-2">
                                    {isAvailable ? (
                                        <button onClick={() => setModalView('bookingForm')} className="w-full bg-[#df9b29] hover:bg-[#c48824] transition-colors text-white font-bold py-2.5 rounded-md cursor-pointer">
                                            Yes, Book Now
                                        </button>
                                    ) : (
                                        /* Agar dates booked hain, toh user ko wapas calendar par bhejne ka button */
                                        <button onClick={closeModal} className="w-full bg-[#2D5D80] hover:bg-[#1e425c] transition-colors text-white font-bold py-2.5 rounded-md cursor-pointer">
                                            Choose Other Dates
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* {modalView === 'check' && (
                            <div className="font-helvetica text-[14px] text-gray-700 flex flex-col gap-4 mt-2">
                                <h3 className={`text-xl font-bold font-helvetica ${isAvailable ? 'text-[#38a169]' : 'text-[#e53e3e]'}`}>
                                    {isAvailable ? 'Dates Available!' : 'Dates Not Available'}
                                </h3>

                                <p>
                                    {isAvailable
                                        ? "Great news! These dates are available. Would you like to book these dates now?"
                                        : "Sorry, these dates are not available. Please select other dates. Would you like to be notified if these dates become available again in the next 30 days?"
                                    }
                                </p>

                                <div className="flex gap-3 mt-2">
                                    {isAvailable ? (
                                        <button onClick={() => setModalView('bookingForm')} className="w-full bg-[#df9b29] hover:bg-[#c48824] transition-colors text-white font-bold py-2.5 rounded-md cursor-pointer">
                                            Yes, Book Now
                                        </button>
                                    ) : (
                                        <button onClick={() => setModalView('notifyForm')} className="w-full bg-[#2D5D80] hover:bg-[#1e425c] transition-colors text-white font-bold py-2.5 rounded-md cursor-pointer">
                                            Notify Me
                                        </button>
                                    )}
                                </div>
                            </div>
                        )} */}

                        {/* VIEW 2: Booking Form (If Available) */}
                        {modalView === 'bookingForm' && (
                            <>
                                <h3 className="text-[#2D5D80] text-xl font-bold mb-4 font-helvetica">Booking Form</h3>
                                <form onSubmit={handleBookingSubmit} className="flex flex-col gap-3 font-helvetica text-[14px]">
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
                                        <input type="text" required className="p-2 border border-gray-300 rounded-md outline-none focus:border-[#df9b29]" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="font-semibold text-sm">Email</label>
                                        <input type="email" required className="p-2 border border-gray-300 rounded-md outline-none focus:border-[#df9b29]" />
                                    </div>
                                    
                                    {/* Adults and Pets side-by-side */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex flex-col gap-1">
                                            <label className="font-semibold text-sm">Adults</label>
                                            <select required className="p-2 border border-gray-300 rounded-md outline-none focus:border-[#df9b29] bg-white cursor-pointer">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="font-semibold text-sm">Pets</label>
                                            <select required className="p-2 border border-gray-300 rounded-md outline-none focus:border-[#df9b29] bg-white cursor-pointer">
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col gap-1">
                                        <label className="font-semibold text-sm">Message</label>
                                        <textarea rows="2" className="p-2 border border-gray-300 rounded-md outline-none focus:border-[#df9b29] resize-none" placeholder="Tell us about your stay..." />
                                    </div>

                                    <button type="submit" className="mt-3 bg-[#df9b29] hover:bg-[#c48824] transition-colors text-white font-bold py-2.5 rounded-md cursor-pointer">
                                        Send Booking
                                    </button>
                                </form>
                            </>
                        )}

                        {/* VIEW 3: Notify Me Form (If Not Available) */}
                        {modalView === 'notifyForm' && (
                            <>
                                <h3 className="text-[#2D5D80] text-xl font-bold mb-4 font-helvetica">Waitlist Request</h3>
                                <form onSubmit={handleNotifySubmit} className="flex flex-col gap-3 font-helvetica text-[14px]">
                                    <p className="text-gray-600 mb-2">Enter your email to be notified if your selected dates open up within the next 30 days.</p>

                                    <div className="flex flex-col gap-1">
                                        <label className="font-semibold text-sm">Requested Dates</label>
                                        <input type="text" readOnly value={`${selectionStart ? selectionStart.toLocaleDateString() : ''} - ${selectionEnd ? selectionEnd.toLocaleDateString() : ''}`} className="p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="font-semibold text-sm">Name</label>
                                        <input type="text" required className="p-2 border border-gray-300 rounded-md outline-none focus:border-[#2D5D80]" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="font-semibold text-sm">Email Address</label>
                                        <input type="email" required className="p-2 border border-gray-300 rounded-md outline-none focus:border-[#2D5D80]" />
                                    </div>

                                    <button type="submit" className="mt-3 bg-[#2D5D80] hover:bg-[#1e425c] transition-colors text-white font-bold py-2.5 rounded-md cursor-pointer">
                                        Join Waitlist
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default AvailabilityCalendar;