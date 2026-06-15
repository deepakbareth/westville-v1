import React, { useState } from 'react';
import { Calendar, Send } from 'lucide-react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        adults: '1',
        pets: '0',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Inquiry submitted for ${formData.name}. We will get back to you soon!`);
    };

    const handleReset = () => {
        setFormData({
            name: '',
            phone: '',
            email: '',
            adults: '1',
            pets: '0',
            message: ''
        });
    };

    return (
        <div className="border border-gray-200 shadow-lg rounded-2xl overflow-hidden bg-white">

            {/* Top Rates Header (Matches Image) */}
            <div className="bg-[#df9b29] text-white text-center py-6 px-4 font-font-Helvetica">
                <h4 className="text-xl md:text-[24px] font-normal tracking-wide">Rates from</h4>
                <p className="text-4xl md:text-5xl font-bold my-2">$315</p>
                <p className="text-xs tracking-wider uppercase opacity-90">Avg / Night</p>
            </div>

            {/* Bottom Form (Light Gray Background) */}
            <div className="bg-[#e5e7eb] p-6 md:p-8">

                {/* Check Availability Header Button */}
                <button
                    type="button"
                    className="w-full bg-[#df9b29] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-['lora',sans-serif] font-bold text-[15px] uppercase tracking-wider shadow-sm hover:opacity-90 transition-opacity cursor-pointer mb-6"
                >
                    <Calendar size={18} />
                    Check Availability
                </button>

                <form onSubmit={handleSubmit} className="space-y-4 font-['Raleway',sans-serif] text-[14px]">

                    {/* Name & Phone side by side */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Name */}
                        <div className="space-y-1">
                            <label className="block text-[14px] font-semibold text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full bg-white border border-gray-300 rounded-lg py-2.5 px-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#df9b29] transition-all font-['Raleway',sans-serif]"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-1">
                            <label className="block text-[14px] font-semibold text-gray-700">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-full bg-white border border-gray-300 rounded-lg py-2.5 px-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#df9b29] transition-all font-['Raleway',sans-serif]"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <label className="block text-[14px] font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full bg-white border border-gray-300 rounded-lg py-2.5 px-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#df9b29] transition-all font-['Raleway',sans-serif]"
                        />
                    </div>

                    {/* Grid for Adults and Pets */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Adults */}
                        <div className="space-y-1">
                            <label className="block text-[14px] font-semibold text-gray-700">Adults</label>
                            <select
                                name="adults"
                                value={formData.adults}
                                onChange={handleChange}
                                className="w-full bg-white border border-gray-300 rounded-lg py-2.5 px-4 text-gray-800 focus:outline-none focus:border-[#df9b29] cursor-pointer font-['Raleway',sans-serif]"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>

                        {/* Pets */}
                        <div className="space-y-1">
                            <label className="block text-[14px] font-semibold text-gray-700">Pets</label>
                            <select
                                name="pets"
                                value={formData.pets}
                                onChange={handleChange}
                                className="w-full bg-white border border-gray-300 rounded-lg py-2.5 px-4 text-gray-800 focus:outline-none focus:border-[#df9b29] cursor-pointer font-['Raleway',sans-serif]"
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                        <label className="block text-[14px] font-semibold text-gray-700">Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your stay..."
                            className="w-full bg-white border border-gray-300 rounded-lg p-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#df9b29] transition-all resize-none font-['Raleway',sans-serif]"
                        />
                    </div>

                    {/* Button actions (Submit & Reset side by side) */}
                    <div className="flex gap-4 pt-2">
                        <button
                            type="submit"
                            className="flex-grow flex items-center justify-center gap-2 bg-[#df9b29] hover:bg-[#c48824] text-white font-bold font-['lora',sans-serif] tracking-wider text-[14px] uppercase py-3 rounded-lg shadow-sm transition-all duration-300 cursor-pointer"
                        >
                            <Send size={16} />
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}
                            className="bg-white border border-[#df9b29] text-[#df9b29] hover:bg-gray-50 font-bold font-['lora',sans-serif] tracking-wider text-[14px] uppercase py-3 px-6 rounded-lg transition-all duration-300 cursor-pointer"
                        >
                            Reset
                        </button>
                    </div>
                </form>

                <div className="text-[12px] font-['Raleway',sans-serif] text-gray-600 text-center leading-relaxed mt-4">
                    We will only use your info to handle your inquiry.
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
