import React, { useState } from 'react';
import { format, parse, isValid } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

const Form2Section = () => {
    const [formData, setFormData] = useState({
        // Top Guest Information
        bookingId: '',
        emailAddress: '',
        todayDate: '',
        checkIn: '',
        checkOut: '',
        preferredContact: '',

        // Guest 1 Information
        g1FullName: '',
        g1DateOfBirth: '',
        g1Address: '',
        g1City: '',
        g1State: '',
        g1ZipCode: '',
        g1Country: '',
        g1Occupation: '',
        g1Home: '',
        g1Cell: '',
        g1WorkYears: '',
        g1WorkMonths: '',
        g1QuestionsComments: '',
        g1GovtId: null,

        // Guest 2 Information
        g2FullName: '',
        g2Email: '',
        g2DateOfBirth: '',
        g2Address: '',
        g2City: '',
        g2State: '',
        g2ZipCode: '',
        g2Country: '',
        g2Occupation: '',
        g2Home: '',
        g2Cell: '',
        g2WorkYears: '',
        g2WorkMonths: '',
        g2QuestionsComments: '',
        g2GovtId: null,

        // International Guests
        g1PassportNo: '',
        g1CountryOfIssue: '',
        g1PassportExpiry: '',
        g2PassportNo: '',
        g2CountryOfIssue: '',
        g2PassportExpiry: '',

        // Pet Information
        petName1: '',
        petBreed1: '',
        petWeight1: '',
        petVacDate1: '',
        petName2: '',
        petBreed2: '',
        petWeight2: '',
        petVacDate2: '',

        // Payment Information
        paymentMode: '',

        // Billing Address
        billingSameAsAbove: false,
        billingAddress: '',
        billingCity: '',
        billingState: '',
        billingZip: '',
        billingCountry: '',

        // References
        stayedBefore: '',
        ownerDetails: '',
        invitedBack: '',
        howDidHear: '',

        // Agreement checkboxes
        mailingListOptIn: false,
        attestCorrect: false,
        termsAgree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const parseDateString = (val) => {
        if (!val) return null;
        let parsed = parse(val, 'MM/dd/yy', new Date());
        if (isValid(parsed)) return parsed;
        parsed = parse(val, 'MM/dd/yyyy', new Date());
        if (isValid(parsed)) return parsed;
        return null;
    };

    const handleDatePickerChange = (date, name) => {
        if (!date) {
            setFormData(prev => ({ ...prev, [name]: '' }));
        } else {
            setFormData(prev => ({ ...prev, [name]: format(date, 'MM/dd/yy') }));
        }
    };

    const handleFileChange = (e, fieldName) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: e.target.files[0]
        }));
    };

    const handleCheckboxSame = (e) => {
        const checked = e.target.checked;
        if (checked) {
            setFormData(prev => ({
                ...prev,
                billingSameAsAbove: true,
                billingAddress: prev.g1Address,
                billingCity: prev.g1City,
                billingState: prev.g1State,
                billingZip: prev.g1ZipCode,
                billingCountry: prev.g1Country
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                billingSameAsAbove: false,
                billingAddress: '',
                billingCity: '',
                billingState: '',
                billingZip: '',
                billingCountry: ''
            }));
        }
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        alert("Booking ID verification request submitted.");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.attestCorrect || !formData.termsAgree) {
            alert("Please accept the declarations and terms to submit the form.");
            return;
        }
        alert("Thank you! Your Double Guest Information Form has been submitted successfully.");
    };

    const handlePrint = () => {
        window.print();
    };

    const handleReset = () => {
        if (window.confirm("Are you sure you want to reset the form?")) {
            setFormData({
                bookingId: '',
                emailAddress: '',
                todayDate: '',
                checkIn: '',
                checkOut: '',
                preferredContact: '',
                g1FullName: '',
                g1DateOfBirth: '',
                g1Address: '',
                g1City: '',
                g1State: '',
                g1ZipCode: '',
                g1Country: '',
                g1Occupation: '',
                g1Home: '',
                g1Cell: '',
                g1WorkYears: '',
                g1WorkMonths: '',
                g1QuestionsComments: '',
                g1GovtId: null,
                g2FullName: '',
                g2Email: '',
                g2DateOfBirth: '',
                g2Address: '',
                g2City: '',
                g2State: '',
                g2ZipCode: '',
                g2Country: '',
                g2Occupation: '',
                g2Home: '',
                g2Cell: '',
                g2WorkYears: '',
                g2WorkMonths: '',
                g2QuestionsComments: '',
                g2GovtId: null,
                g1PassportNo: '',
                g1CountryOfIssue: '',
                g1PassportExpiry: '',
                g2PassportNo: '',
                g2CountryOfIssue: '',
                g2PassportExpiry: '',
                petName1: '',
                petBreed1: '',
                petWeight1: '',
                petVacDate1: '',
                petName2: '',
                petBreed2: '',
                petWeight2: '',
                petVacDate2: '',
                paymentMode: '',
                billingSameAsAbove: false,
                billingAddress: '',
                billingCity: '',
                billingState: '',
                billingZip: '',
                billingCountry: '',
                stayedBefore: '',
                ownerDetails: '',
                invitedBack: '',
                howDidHear: '',
                mailingListOptIn: false,
                attestCorrect: false,
                termsAgree: false
            });
        }
    };

    const inputClasses = "w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#df9b29] transition-all text-sm font-helvetica";
    const labelClasses = "block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1";

    return (
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 font-helvetica text-gray-800">
            {/* NOTICE CONTAINER */}
            <div className="bg-[#f5f5f5] border border-gray-300 p-6 rounded-lg mb-8 text-left text-sm leading-relaxed text-gray-700">
                <h3 className="text-xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-3 text-center uppercase tracking-wide">
                    GUEST INFORMATION FORM
                </h3>
                <p className="mb-3">
                    <strong>Notice to the Guest(s):</strong> Thank you for your interest in booking the Westville Cottage for your vacation getaway to Provincetown. Please take a moment to complete this information for each Guest, including pets if applicable. Please note, prior to occupancy, owners must provide proof of vaccination and confirm application of flea and tick repellent. The information requested will be used strictly for the Rental/lease agreement. All tenants are responsible for their own personal injury, casualty and loss liability insurance. Also, kindly indicate the best form of contact for you. By submitting this form I/we confirm that the information provided herein is true and correct.
                </p>
                <p className="font-semibold text-gray-700 mt-2">
                    <strong>Hosts:</strong> Dominic Carew & Paul Nye
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">

                {/* === SECTION 1: GUEST INFORMATION (Top Block) === */}
                <div className="bg-[#2a5d88] text-white py-2.5 px-4 font-bold text-[15px] tracking-wider uppercase rounded-t-md">
                    Guest Information
                </div>
                <div className="bg-white border-x border-b border-gray-300 rounded-b-md p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Booking ID */}
                        <div>
                            <label className={labelClasses}>Booking Id <span className="text-red-500">*</span></label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    name="bookingId"
                                    required
                                    value={formData.bookingId}
                                    onChange={handleChange}
                                    placeholder="Enter Booking Id."
                                    className={inputClasses}
                                />
                                <button
                                    type="button"
                                    onClick={handleBookingSubmit}
                                    className="bg-[#2a5d88] hover:bg-[#1f4565] text-white font-bold text-xs px-4 py-2.5 rounded-md transition-colors cursor-pointer uppercase shrink-0"
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </div>

                        {/* Email Address */}
                        <div>
                            <label className={labelClasses}>Email Address <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                name="emailAddress"
                                required
                                value={formData.emailAddress}
                                onChange={handleChange}
                                placeholder="Enter Email"
                                className={inputClasses}
                            />
                        </div>

                        {/* Today Date */}
                        <div>
                            <label className={labelClasses}>Today Date <span className="text-red-500">*</span></label>
                            <DatePicker
                                selected={parseDateString(formData.todayDate)}
                                onChange={(date) => handleDatePickerChange(date, 'todayDate')}
                                placeholderText="MM/DD/YY"
                                dateFormat="MM/dd/yy"
                                className={inputClasses}
                                wrapperClassName="w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Check In */}
                        <div>
                            <label className={labelClasses}>Check In <span className="text-red-500">*</span></label>
                            <DatePicker
                                selected={parseDateString(formData.checkIn)}
                                onChange={(date) => handleDatePickerChange(date, 'checkIn')}
                                placeholderText="MM/DD/YY"
                                dateFormat="MM/dd/yy"
                                className={inputClasses}
                                wrapperClassName="w-full"
                                required
                            />
                        </div>

                        {/* Check Out */}
                        <div>
                            <label className={labelClasses}>Check Out <span className="text-red-500">*</span></label>
                            <DatePicker
                                selected={parseDateString(formData.checkOut)}
                                onChange={(date) => handleDatePickerChange(date, 'checkOut')}
                                placeholderText="MM/DD/YY"
                                dateFormat="MM/dd/yy"
                                className={inputClasses}
                                wrapperClassName="w-full"
                                required
                            />
                        </div>

                        {/* Preferred Method of Contact */}
                        <div>
                            <label className={labelClasses}>Preferred Method of Contact <span className="text-red-500">*</span></label>
                            <select
                                name="preferredContact"
                                required
                                value={formData.preferredContact}
                                onChange={handleChange}
                                className={`${inputClasses} bg-white cursor-pointer h-[42px]`}
                            >
                                <option value="">Select Method</option>
                                <option value="Phone">Phone</option>
                                <option value="Email">Email</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* === SECTION 2: GUEST 1 INFORMATION === */}
                <div className="bg-[#2a5d88] text-white py-2.5 px-4 font-bold text-[15px] tracking-wider uppercase rounded-t-md">
                    Guest 1 Information
                </div>
                <div className="bg-white border-x border-b border-gray-300 rounded-b-md p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Full Name */}
                        <div className="md:col-span-2">
                            <label className={labelClasses}>Full Name of Guest <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="g1FullName"
                                required
                                value={formData.g1FullName}
                                onChange={handleChange}
                                placeholder="Enter Full Name"
                                className={inputClasses}
                            />
                        </div>

                        {/* DOB */}
                        <div>
                            <label className={labelClasses}>Date of Birth <span className="text-red-500">*</span></label>
                            <DatePicker
                                selected={parseDateString(formData.g1DateOfBirth)}
                                onChange={(date) => handleDatePickerChange(date, 'g1DateOfBirth')}
                                placeholderText="MM/DD/YY"
                                dateFormat="MM/dd/yy"
                                className={inputClasses}
                                wrapperClassName="w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Address */}
                        <div className="md:col-span-3">
                            <label className={labelClasses}>Address of Guest <span className="text-red-500">*</span></label>
                            <textarea
                                name="g1Address"
                                required
                                rows="1"
                                value={formData.g1Address}
                                onChange={handleChange}
                                placeholder="Address...."
                                className={`${inputClasses} h-[42px] py-2 resize-none`}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                        {/* City */}
                        <div>
                            <label className={labelClasses}>City <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="g1City"
                                required
                                value={formData.g1City}
                                onChange={handleChange}
                                placeholder="City Name"
                                className={inputClasses}
                            />
                        </div>

                        {/* State */}
                        <div>
                            <label className={labelClasses}>State <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="g1State"
                                required
                                value={formData.g1State}
                                onChange={handleChange}
                                placeholder="state Name"
                                className={inputClasses}
                            />
                        </div>

                        {/* Zip */}
                        <div>
                            <label className={labelClasses}>Zip Code <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="g1ZipCode"
                                required
                                value={formData.g1ZipCode}
                                onChange={handleChange}
                                placeholder="Enter Zip Code"
                                className={inputClasses}
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <label className={labelClasses}>Country <span className="text-red-500">*</span></label>
                            <select
                                name="g1Country"
                                required
                                value={formData.g1Country}
                                onChange={handleChange}
                                className={`${inputClasses} bg-white cursor-pointer h-[42px]`}
                            >
                                <option value="">Select Country</option>
                                <option value="USA">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">United Kingdom</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Occupation */}
                        <div>
                            <label className={labelClasses}>Occupation <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="g1Occupation"
                                required
                                value={formData.g1Occupation}
                                onChange={handleChange}
                                placeholder="Occupation"
                                className={inputClasses}
                            />
                        </div>

                        {/* Home */}
                        <div>
                            <label className={labelClasses}>Home <span className="text-red-500">*</span></label>
                            <input
                                type="tel"
                                name="g1Home"
                                required
                                value={formData.g1Home}
                                onChange={handleChange}
                                placeholder="Phone no."
                                className={inputClasses}
                            />
                        </div>

                        {/* Cell */}
                        <div>
                            <label className={labelClasses}>Cell <span className="text-red-500">*</span></label>
                            <input
                                type="tel"
                                name="g1Cell"
                                required
                                value={formData.g1Cell}
                                onChange={handleChange}
                                placeholder="cell no."
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Work Duration */}
                        <div>
                            <label className={labelClasses}>Work duration <span className="text-red-500">*</span></label>
                            <div className="grid grid-cols-2 gap-2">
                                <input
                                    type="number"
                                    name="g1WorkYears"
                                    required
                                    value={formData.g1WorkYears}
                                    onChange={handleChange}
                                    placeholder="In Years"
                                    className={inputClasses}
                                />
                                <input
                                    type="number"
                                    name="g1WorkMonths"
                                    required
                                    value={formData.g1WorkMonths}
                                    onChange={handleChange}
                                    placeholder="In Month"
                                    className={inputClasses}
                                />
                            </div>
                        </div>

                        {/* Questions/Comments */}
                        <div>
                            <label className={labelClasses}>Questions, Comments</label>
                            <textarea
                                name="g1QuestionsComments"
                                rows="1"
                                value={formData.g1QuestionsComments}
                                onChange={handleChange}
                                className={`${inputClasses} h-[42px] py-2 resize-none`}
                            />
                        </div>

                        {/* Upload ID */}
                        <div>
                            <label className={labelClasses}>Upload Govt. Issued ID with photograph <span className="text-red-500">*</span></label>
                            <input
                                type="file"
                                accept=".png,.jpg,.jpeg"
                                required
                                onChange={(e) => handleFileChange(e, 'g1GovtId')}
                                className="w-full text-xs text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#2a5d88] file:text-white hover:file:bg-[#1f4565] file:cursor-pointer"
                            />
                            <p className="text-[10px] text-red-500 mt-1">
                                (Only .png, .jpg and .jpeg formats allowed. File size should be less than 10 MB.)
                            </p>
                        </div>
                    </div>
                </div>

                {/* === SECTION 3: GUEST 2 INFORMATION === */}
                <div className="bg-[#2a5d88] text-white py-2.5 px-4 font-bold text-[15px] tracking-wider uppercase rounded-t-md">
                    Guest 2 Information
                </div>
                <div className="bg-white border-x border-b border-gray-300 rounded-b-md p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Full Name */}
                        <div>
                            <label className={labelClasses}>Full Name of Guest 2 <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="g2FullName"
                                required
                                value={formData.g2FullName}
                                onChange={handleChange}
                                placeholder="Enter Full Name"
                                className={inputClasses}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className={labelClasses}>Email of Guest 2 <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                name="g2Email"
                                required
                                value={formData.g2Email}
                                onChange={handleChange}
                                placeholder="Enter Email"
                                className={inputClasses}
                            />
                        </div>

                        {/* DOB */}
                        <div>
                            <label className={labelClasses}>Date of Birth <span className="text-red-500">*</span></label>
                            <DatePicker
                                selected={parseDateString(formData.g2DateOfBirth)}
                                onChange={(date) => handleDatePickerChange(date, 'g2DateOfBirth')}
                                placeholderText="MM/DD/YY"
                                dateFormat="MM/dd/yy"
                                className={inputClasses}
                                wrapperClassName="w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Address */}
                        <div className="md:col-span-3">
                            <label className={labelClasses}>Address of Guest <span className="text-red-500">*</span></label>
                            <textarea
                                name="g2Address"
                                required
                                rows="1"
                                value={formData.g2Address}
                                onChange={handleChange}
                                placeholder="Address...."
                                className={`${inputClasses} h-[42px] py-2 resize-none`}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                        {/* City */}
                        <div>
                            <label className={labelClasses}>City <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="g2City"
                                required
                                value={formData.g2City}
                                onChange={handleChange}
                                placeholder="City Name"
                                className={inputClasses}
                            />
                        </div>

                        {/* State */}
                        <div>
                            <label className={labelClasses}>State <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="g2State"
                                required
                                value={formData.g2State}
                                onChange={handleChange}
                                placeholder="state Name"
                                className={inputClasses}
                            />
                        </div>

                        {/* Zip */}
                        <div>
                            <label className={labelClasses}>Zip Code <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="g2ZipCode"
                                required
                                value={formData.g2ZipCode}
                                onChange={handleChange}
                                placeholder="Enter Zip Code"
                                className={inputClasses}
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <label className={labelClasses}>Country <span className="text-red-500">*</span></label>
                            <select
                                name="g2Country"
                                required
                                value={formData.g2Country}
                                onChange={handleChange}
                                className={`${inputClasses} bg-white cursor-pointer h-[42px]`}
                            >
                                <option value="">Select Country</option>
                                <option value="USA">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">United Kingdom</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Occupation */}
                        <div>
                            <label className={labelClasses}>Occupation <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="g2Occupation"
                                required
                                value={formData.g2Occupation}
                                onChange={handleChange}
                                placeholder="Occupation"
                                className={inputClasses}
                            />
                        </div>

                        {/* Home */}
                        <div>
                            <label className={labelClasses}>Home <span className="text-red-500">*</span></label>
                            <input
                                type="tel"
                                name="g2Home"
                                required
                                value={formData.g2Home}
                                onChange={handleChange}
                                placeholder="Phone no."
                                className={inputClasses}
                            />
                        </div>

                        {/* Cell */}
                        <div>
                            <label className={labelClasses}>Cell <span className="text-red-500">*</span></label>
                            <input
                                type="tel"
                                name="g2Cell"
                                required
                                value={formData.g2Cell}
                                onChange={handleChange}
                                placeholder="cell no."
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Work Duration */}
                        <div>
                            <label className={labelClasses}>Work duration <span className="text-red-500">*</span></label>
                            <div className="grid grid-cols-2 gap-2">
                                <input
                                    type="number"
                                    name="g2WorkYears"
                                    required
                                    value={formData.g2WorkYears}
                                    onChange={handleChange}
                                    placeholder="In Years"
                                    className={inputClasses}
                                />
                                <input
                                    type="number"
                                    name="g2WorkMonths"
                                    required
                                    value={formData.g2WorkMonths}
                                    onChange={handleChange}
                                    placeholder="In Month"
                                    className={inputClasses}
                                />
                            </div>
                        </div>

                        {/* Questions/Comments */}
                        <div>
                            <label className={labelClasses}>Questions, Comments</label>
                            <textarea
                                name="g2QuestionsComments"
                                rows="1"
                                value={formData.g2QuestionsComments}
                                onChange={handleChange}
                                className={`${inputClasses} h-[42px] py-2 resize-none`}
                            />
                        </div>

                        {/* Upload ID */}
                        <div>
                            <label className={labelClasses}>Upload Govt. Issued ID with photograph <span className="text-red-500">*</span></label>
                            <input
                                type="file"
                                accept=".png,.jpg,.jpeg"
                                required
                                onChange={(e) => handleFileChange(e, 'g2GovtId')}
                                className="w-full text-xs text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#2a5d88] file:text-white hover:file:bg-[#1f4565] file:cursor-pointer"
                            />
                            <p className="text-[10px] text-red-500 mt-1">
                                (Only .png, .jpg and .jpeg formats allowed. File size should be less than 10 MB.)
                            </p>
                        </div>
                    </div>
                </div>

                {/* === SECTION 4: FOR INTERNATIONAL GUESTS === */}
                <div className="bg-[#2a5d88] text-white py-2.5 px-4 font-bold text-[15px] tracking-wider uppercase rounded-t-md">
                    For International Guests
                </div>
                <div className="bg-white border-x border-b border-gray-300 rounded-b-md p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Passport No Guest 1 */}
                        <div>
                            <label className={labelClasses}>Passport No. for Guest 1. <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="g1PassportNo"
                                required
                                value={formData.g1PassportNo}
                                onChange={handleChange}
                                placeholder="#########"
                                className={inputClasses}
                            />
                        </div>

                        {/* Country of issue Guest 1 */}
                        <div>
                            <label className={labelClasses}>Country of issue for Guest 1. <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="g1CountryOfIssue"
                                required
                                value={formData.g1CountryOfIssue}
                                onChange={handleChange}
                                placeholder="Country of issue"
                                className={inputClasses}
                            />
                        </div>

                        {/* Expiry Date Guest 1 */}
                        <div>
                            <label className={labelClasses}>Expiry Date for Guest 1. <span className="text-red-500">*</span></label>
                            <DatePicker
                                selected={parseDateString(formData.g1PassportExpiry)}
                                onChange={(date) => handleDatePickerChange(date, 'g1PassportExpiry')}
                                placeholderText="MM/DD/YY"
                                dateFormat="MM/dd/yy"
                                className={inputClasses}
                                wrapperClassName="w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Passport No Guest 2 */}
                        <div>
                            <label className={labelClasses}>Passport No. for Guest 2. <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="g2PassportNo"
                                required
                                value={formData.g2PassportNo}
                                onChange={handleChange}
                                placeholder="#########"
                                className={inputClasses}
                            />
                        </div>

                        {/* Country of issue Guest 2 */}
                        <div>
                            <label className={labelClasses}>Country of issue for Guest 2. <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="g2CountryOfIssue"
                                required
                                value={formData.g2CountryOfIssue}
                                onChange={handleChange}
                                placeholder="Country of issue"
                                className={inputClasses}
                            />
                        </div>

                        {/* Expiry Date Guest 2 */}
                        <div>
                            <label className={labelClasses}>Expiry Date for Guest 2. <span className="text-red-500">*</span></label>
                            <DatePicker
                                selected={parseDateString(formData.g2PassportExpiry)}
                                onChange={(date) => handleDatePickerChange(date, 'g2PassportExpiry')}
                                placeholderText="MM/DD/YY"
                                dateFormat="MM/dd/yy"
                                className={inputClasses}
                                wrapperClassName="w-full"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* === SECTION 5: PAYMENT INFORMATION === */}
                <div className="bg-[#2a5d88] text-white py-2.5 px-4 font-bold text-[15px] tracking-wider uppercase rounded-t-md">
                    Payment Information
                </div>
                <div className="bg-white border-x border-b border-gray-300 rounded-b-md p-6 mb-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Payment Mode <span className="text-red-500">*</span></span>
                        <div className="flex flex-wrap gap-4 text-sm">
                            <label className="flex items-center gap-2 cursor-pointer font-medium text-gray-700">
                                <input
                                    type="radio"
                                    name="paymentMode"
                                    required
                                    value="Credit Card"
                                    checked={formData.paymentMode === "Credit Card"}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-[#2a5d88] focus:ring-0"
                                />
                                Credit Card
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer font-medium text-gray-700">
                                <input
                                    type="radio"
                                    name="paymentMode"
                                    required
                                    value="Bank Certified Check"
                                    checked={formData.paymentMode === "Bank Certified Check"}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-[#2a5d88] focus:ring-0"
                                />
                                Bank Certified Check
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer font-medium text-gray-700">
                                <input
                                    type="radio"
                                    name="paymentMode"
                                    required
                                    value="Cash"
                                    checked={formData.paymentMode === "Cash"}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-[#2a5d88] focus:ring-0"
                                />
                                Cash
                            </label>
                        </div>
                    </div>
                </div>

                {/* === SECTION 6: BILLING ADDRESS === */}
                <div className="bg-[#2a5d88] text-white py-2.5 px-4 font-bold text-[15px] tracking-wider uppercase rounded-t-md flex justify-between items-center">
                    <span>Billing Address</span>
                    <label className="flex items-center gap-2 text-xs font-bold tracking-wider cursor-pointer select-none normal-case">
                        <input
                            type="checkbox"
                            name="billingSameAsAbove"
                            checked={formData.billingSameAsAbove}
                            onChange={handleCheckboxSame}
                            className="w-3.5 h-3.5 rounded text-[#2a5d88] focus:ring-0"
                        />
                        Same as Above
                    </label>
                </div>
                <div className="bg-white border-x border-b border-gray-300 rounded-b-md p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Address of Guest */}
                        <div className="md:col-span-2">
                            <label className={labelClasses}>Address of Guest <span className="text-red-500">*</span></label>
                            <textarea
                                name="billingAddress"
                                required
                                rows="1"
                                value={formData.billingAddress}
                                onChange={handleChange}
                                placeholder="Address of Guest...."
                                className={`${inputClasses} h-[42px] py-2 resize-none`}
                                disabled={formData.billingSameAsAbove}
                            />
                        </div>

                        {/* City */}
                        <div>
                            <label className={labelClasses}>City <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="billingCity"
                                required
                                value={formData.billingCity}
                                onChange={handleChange}
                                placeholder="Enter City"
                                className={inputClasses}
                                disabled={formData.billingSameAsAbove}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* State */}
                        <div>
                            <label className={labelClasses}>State <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="billingState"
                                required
                                value={formData.billingState}
                                onChange={handleChange}
                                placeholder="Enter State"
                                className={inputClasses}
                                disabled={formData.billingSameAsAbove}
                            />
                        </div>

                        {/* Zip Code */}
                        <div>
                            <label className={labelClasses}>Zip <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="billingZip"
                                required
                                value={formData.billingZip}
                                onChange={handleChange}
                                placeholder="Enter Zipcode"
                                className={inputClasses}
                                disabled={formData.billingSameAsAbove}
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <label className={labelClasses}>Country <span className="text-red-500">*</span></label>
                            <select
                                name="billingCountry"
                                required
                                value={formData.billingCountry}
                                onChange={handleChange}
                                className={`${inputClasses} bg-white cursor-pointer h-[42px]`}
                                disabled={formData.billingSameAsAbove}
                            >
                                <option value="">Select Country</option>
                                <option value="USA">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">United Kingdom</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* === SECTION 7: PET INFORMATION === */}
                <div className="bg-[#2a5d88] text-white py-2.5 px-4 font-bold text-[15px] tracking-wider uppercase rounded-t-md">
                    Pet Information
                </div>
                <div className="bg-white border-x border-b border-gray-300 rounded-b-md p-6 mb-6">
                    {/* Pet 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                        <div>
                            <label className={labelClasses}>Pet Name 1</label>
                            <input
                                type="text"
                                name="petName1"
                                value={formData.petName1}
                                onChange={handleChange}
                                placeholder="Pet Name 1"
                                className={inputClasses}
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>Breed (non-shedding)</label>
                            <input
                                type="text"
                                name="petBreed1"
                                value={formData.petBreed1}
                                onChange={handleChange}
                                placeholder="Breed (non-shedding)"
                                className={inputClasses}
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>Weight (75lbs max)</label>
                            <input
                                type="text"
                                name="petWeight1"
                                value={formData.petWeight1}
                                onChange={handleChange}
                                placeholder="Weight (75lbs max)"
                                className={inputClasses}
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>Vaccination Date</label>
                            <DatePicker
                                selected={parseDateString(formData.petVacDate1)}
                                onChange={(date) => handleDatePickerChange(date, 'petVacDate1')}
                                placeholderText="MM/DD/YY"
                                dateFormat="MM/dd/yy"
                                className={inputClasses}
                                wrapperClassName="w-full"
                            />
                        </div>
                    </div>

                    {/* Pet 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div>
                            <label className={labelClasses}>Pet Name 2</label>
                            <input
                                type="text"
                                name="petName2"
                                value={formData.petName2}
                                onChange={handleChange}
                                placeholder="Pet Name 2"
                                className={inputClasses}
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>Breed (non-shedding)</label>
                            <input
                                type="text"
                                name="petBreed2"
                                value={formData.petBreed2}
                                onChange={handleChange}
                                placeholder="Breed (non-shedding)"
                                className={inputClasses}
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>Weight (75lbs max)</label>
                            <input
                                type="text"
                                name="petWeight2"
                                value={formData.petWeight2}
                                onChange={handleChange}
                                placeholder="Weight (75lbs max)"
                                className={inputClasses}
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>Vaccination Date</label>
                            <DatePicker
                                selected={parseDateString(formData.petVacDate2)}
                                onChange={(date) => handleDatePickerChange(date, 'petVacDate2')}
                                placeholderText="MM/DD/YY"
                                dateFormat="MM/dd/yy"
                                className={inputClasses}
                                wrapperClassName="w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* === SECTION 8: REFERENCES === */}
                <div className="bg-[#2a5d88] text-white py-2.5 px-4 font-bold text-[15px] tracking-wider uppercase rounded-t-md">
                    References (If this is your first time with us, kindly indicate the following information):
                </div>
                <div className="bg-white border-x border-b border-gray-300 rounded-b-md p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Where stayed before */}
                        <div>
                            <label className={labelClasses}>Where have you stayed before in Provincetown? <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="stayedBefore"
                                required
                                value={formData.stayedBefore}
                                onChange={handleChange}
                                placeholder="...."
                                className={inputClasses}
                            />
                        </div>

                        {/* Name, number, address of owner */}
                        <div>
                            <label className={labelClasses}>Name, number, and address of owner <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="ownerDetails"
                                required
                                value={formData.ownerDetails}
                                onChange={handleChange}
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Invited Back */}
                        <div>
                            <label className={labelClasses}>Have you been invited back? <span className="text-red-500">*</span></label>
                            <select
                                name="invitedBack"
                                required
                                value={formData.invitedBack}
                                onChange={handleChange}
                                className={`${inputClasses} bg-white cursor-pointer h-[42px]`}
                            >
                                <option value="">select option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        {/* How Did You Hear */}
                        <div>
                            <label className={labelClasses}>How Did You Hear About Us? <span className="text-red-500">*</span></label>
                            <select
                                name="howDidHear"
                                required
                                value={formData.howDidHear}
                                onChange={handleChange}
                                className={`${inputClasses} bg-white cursor-pointer h-[42px]`}
                            >
                                <option value="">select option</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Vacationrental.com">Vacationrental.com</option>
                                <option value="Capecodvacationrentals.com">Capecodvacationrentals.com</option>
                                <option value="Instagram">Instagram</option>
                                <option value="Vacationhomerentals.com">Vacationhomerentals.com</option>
                                <option value="Homeaway.com">Homeaway.com</option>
                                <option value="Cyberrentals.com">Cyberrentals.com</option>
                                <option value="Pettravel.com">Pettravel.com</option>
                                <option value="Google Search">Google Search</option>
                                <option value="Yahoo Search">Yahoo Search</option>
                                <option value="Friend Referral">Friend Referral</option>
                                <option value="Word of Mouth">Word of Mouth</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* === DISCLOSURES & AGREE CHECKBOXES === */}
                <div className="bg-white border border-gray-300 p-6 rounded-lg space-y-4 mb-6 text-sm">
                    <label className="flex items-start gap-3 cursor-pointer text-gray-700 select-none">
                        <input
                            type="checkbox"
                            name="mailingListOptIn"
                            checked={formData.mailingListOptIn}
                            onChange={handleChange}
                            className="w-4 h-4 rounded text-[#2a5d88] focus:ring-0 mt-0.5"
                        />
                        <span>Please add me/(I opt-in) to the Westville Cottage friends and family mailing list (for future promotions on events and/or specials).</span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer text-gray-700 select-none">
                        <input
                            type="checkbox"
                            name="attestCorrect"
                            required
                            checked={formData.attestCorrect}
                            onChange={handleChange}
                            className="w-4 h-4 rounded text-[#2a5d88] focus:ring-0 mt-0.5"
                        />
                        <span>By submitting this form, I attest that the information provided is true and correct to the best of my knowledge <span className="text-red-500">*</span></span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer text-gray-700 select-none">
                        <input
                            type="checkbox"
                            name="termsAgree"
                            required
                            checked={formData.termsAgree}
                            onChange={handleChange}
                            className="w-4 h-4 rounded text-[#2a5d88] focus:ring-0 mt-0.5"
                        />
                        <span>I have read and agree with the <Link to="/westville-v1/terms-and-conditions" className="text-[#2a5d88] hover:underline font-bold">Terms and Conditions</Link> and the Westville Cottage’s <a href="#privacy" className="text-[#2a5d88] hover:underline font-bold">Privacy Policy</a>. <span className="text-red-500">*</span></span>
                    </label>
                </div>

                {/* === FOOTER BUTTONS & ENCRYPTION NOTICE === */}
                <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-4">
                        <button
                            type="submit"
                            className="bg-[#2a5d88] hover:bg-[#1f4565] text-white font-bold text-sm px-8 py-3 rounded shadow transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer uppercase"
                        >
                            SUBMIT
                        </button>
                        <button
                            type="button"
                            onClick={handlePrint}
                            className="bg-[#2a5d88] hover:bg-[#1f4565] text-white font-bold text-sm px-8 py-3 rounded shadow transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer uppercase"
                        >
                            PRINT
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}
                            className="bg-[#2a5d88] hover:bg-[#1f4565] text-white font-bold text-sm px-8 py-3 rounded shadow transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer uppercase"
                        >
                            RESET
                        </button>
                    </div>
                    <p className="text-[#f15a24] font-bold text-sm mt-2">
                        This form is end-to-end encrypted.
                    </p>
                </div>

            </form>
        </div>
    );
};

export default Form2Section;
