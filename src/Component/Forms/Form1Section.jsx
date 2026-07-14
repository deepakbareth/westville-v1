import React, { useState } from 'react';

const Form1Section = () => {
    const [formData, setFormData] = useState({
        bookingId: '',
        emailAddress: '',
        todayDate: '',
        checkIn: '',
        checkOut: '',
        fullName: '',
        dateOfBirth: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        occupation: '',
        workYears: '',
        workMonths: '',
        govtId: null,
        homePhone: '',
        cellPhone: '',
        contactEmail: '',
        preferredContact: '',
        questionsComments: '',
        passportNo: '',
        countryOfIssue: '',
        passportExpiry: '',
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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            govtId: e.target.files[0]
        }));
    };

    const handleCheckboxSame = (e) => {
        const checked = e.target.checked;
        if (checked) {
            setFormData(prev => ({
                ...prev,
                billingSameAsAbove: true,
                billingAddress: prev.address,
                billingCity: prev.city,
                billingState: prev.state,
                billingZip: prev.zipCode,
                billingCountry: prev.country
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
        alert("Thank you! Your Guest Information Form has been submitted successfully.");
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
                fullName: '',
                dateOfBirth: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
                country: '',
                occupation: '',
                workYears: '',
                workMonths: '',
                govtId: null,
                homePhone: '',
                cellPhone: '',
                contactEmail: '',
                preferredContact: '',
                questionsComments: '',
                passportNo: '',
                countryOfIssue: '',
                passportExpiry: '',
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
                    <strong>Notice to the Guest(s):</strong> Thank you for your interest in booking the Westville Cottage for your vacation getaway to Provincetown. Please take a moment to complete this information for each Guest, including pets if applicable. Please note, prior to occupancy, owners must provide proof of vaccination and confirm application of flea and tick repellent. The information requested will be used strictly for the Rental/lease agreement. All tenants are responsible for their own personal injury, casualty and loss liability insurance. Also, kindly indicate the best form of contact for you. By submitting this form I confirm that the information provided herein is true and correct.
                </p>
                <p className="font-bold text-[#1f4e78]">
                    Hosts: Dominic Carew & Paul Nye
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">

                {/* === SECTION 1: GUEST INFORMATION === */}
                <div className="bg-[#2a5d88] text-white py-2.5 px-4 font-bold text-[15px] tracking-wider uppercase rounded-t-md">
                    Guest Information
                </div>
                <div className="bg-white border-x border-b border-gray-300 rounded-b-md p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Booking ID & Submit */}
                        <div className="md:col-span-1">
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
                                    Submit
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
                            <input
                                type="date"
                                name="todayDate"
                                required
                                value={formData.todayDate}
                                onChange={handleChange}
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Check In */}
                        <div>
                            <label className={labelClasses}>Check In <span className="text-red-500">*</span></label>
                            <input
                                type="date"
                                name="checkIn"
                                required
                                value={formData.checkIn}
                                onChange={handleChange}
                                className={inputClasses}
                            />
                        </div>

                        {/* Check Out */}
                        <div>
                            <label className={labelClasses}>Check Out <span className="text-red-500">*</span></label>
                            <input
                                type="date"
                                name="checkOut"
                                required
                                value={formData.checkOut}
                                onChange={handleChange}
                                className={inputClasses}
                            />
                        </div>

                        {/* Full Name */}
                        <div>
                            <label className={labelClasses}>Full Name of Guest <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter Full Name"
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Date of Birth */}
                        <div>
                            <label className={labelClasses}>Date of Birth <span className="text-red-500">*</span></label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                required
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                className={inputClasses}
                            />
                        </div>

                        {/* Address of Guest */}
                        <div className="md:col-span-2">
                            <label className={labelClasses}>Address of Guest <span className="text-red-500">*</span></label>
                            <textarea
                                name="address"
                                required
                                rows="1"
                                value={formData.address}
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
                                name="city"
                                required
                                value={formData.city}
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
                                name="state"
                                required
                                value={formData.state}
                                onChange={handleChange}
                                placeholder="State Name"
                                className={inputClasses}
                            />
                        </div>

                        {/* Zip Code */}
                        <div>
                            <label className={labelClasses}>Zip Code <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="zipCode"
                                required
                                value={formData.zipCode}
                                onChange={handleChange}
                                placeholder="Enter Zip Code"
                                className={inputClasses}
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <label className={labelClasses}>Country <span className="text-red-500">*</span></label>
                            <select
                                name="country"
                                required
                                value={formData.country}
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Occupation */}
                        <div>
                            <label className={labelClasses}>Occupation <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="occupation"
                                required
                                value={formData.occupation}
                                onChange={handleChange}
                                placeholder="Occupation"
                                className={inputClasses}
                            />
                        </div>

                        {/* Work Duration */}
                        <div>
                            <label className={labelClasses}>Work duration <span className="text-red-500">*</span></label>
                            <div className="grid grid-cols-2 gap-2">
                                <input
                                    type="text"
                                    name="workYears"
                                    required
                                    value={formData.workYears}
                                    onChange={handleChange}
                                    placeholder="In Years"
                                    className={inputClasses}
                                />
                                <input
                                    type="text"
                                    name="workMonths"
                                    required
                                    value={formData.workMonths}
                                    onChange={handleChange}
                                    placeholder="In Month"
                                    className={inputClasses}
                                />
                            </div>
                        </div>

                        {/* Upload ID */}
                        <div>
                            <label className={labelClasses}>Upload Govt. Issued ID with photograph <span className="text-red-500">*</span></label>
                            <input
                                type="file"
                                accept=".png,.jpg,.jpeg"
                                required
                                onChange={handleFileChange}
                                className="w-full text-xs text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#2a5d88] file:text-white hover:file:bg-[#1f4565] file:cursor-pointer"
                            />
                            <p className="text-[10px] text-red-500 mt-1">
                                (Only .png, .jpg and .jpeg formats allowed. File size should be less than 10 MB.)
                            </p>
                        </div>
                    </div>
                </div>

                {/* === SECTION 2: CONTACT DETAILS === */}
                <div className="bg-[#2a5d88] text-white py-2.5 px-4 font-bold text-[15px] tracking-wider uppercase rounded-t-md">
                    Contact Details
                </div>
                <div className="bg-white border-x border-b border-gray-300 rounded-b-md p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Home */}
                        <div>
                            <label className={labelClasses}>Home <span className="text-red-500">*</span></label>
                            <input
                                type="tel"
                                name="homePhone"
                                required
                                value={formData.homePhone}
                                onChange={handleChange}
                                placeholder="Phone Home"
                                className={inputClasses}
                            />
                        </div>

                        {/* Cell */}
                        <div>
                            <label className={labelClasses}>Cell <span className="text-red-500">*</span></label>
                            <input
                                type="tel"
                                name="cellPhone"
                                required
                                value={formData.cellPhone}
                                onChange={handleChange}
                                placeholder="Cell"
                                className={inputClasses}
                            />
                        </div>

                        {/* Email Address */}
                        <div>
                            <label className={labelClasses}>E-mail Address <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                name="contactEmail"
                                required
                                value={formData.contactEmail}
                                onChange={handleChange}
                                placeholder="Email"
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                                <option value="Email">Email</option>
                                <option value="Cell Phone">Cell Phone</option>
                                <option value="Home Phone">Home Phone</option>
                            </select>
                        </div>

                        {/* Questions, Comments */}
                        <div className="md:col-span-2">
                            <label className={labelClasses}>Questions, Comments</label>
                            <textarea
                                name="questionsComments"
                                rows="1"
                                value={formData.questionsComments}
                                onChange={handleChange}
                                placeholder="Any Question, Comments.."
                                className={`${inputClasses} h-[42px] py-2 resize-none`}
                            />
                        </div>
                    </div>
                </div>

                {/* === SECTION 3: FOR INTERNATIONAL GUESTS === */}
                <div className="bg-[#2a5d88] text-white py-2.5 px-4 font-bold text-[15px] tracking-wider uppercase rounded-t-md">
                    For International Guests
                </div>
                <div className="bg-white border-x border-b border-gray-300 rounded-b-md p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Passport No */}
                        <div>
                            <label className={labelClasses}>Passport No <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="passportNo"
                                required
                                value={formData.passportNo}
                                onChange={handleChange}
                                placeholder="Passport No."
                                className={inputClasses}
                            />
                        </div>

                        {/* Country of issue */}
                        <div>
                            <label className={labelClasses}>Country of issue <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="countryOfIssue"
                                required
                                value={formData.countryOfIssue}
                                onChange={handleChange}
                                placeholder="Country of issue."
                                className={inputClasses}
                            />
                        </div>

                        {/* Expiry Date */}
                        <div>
                            <label className={labelClasses}>Expiry Date <span className="text-red-500">*</span></label>
                            <input
                                type="date"
                                name="passportExpiry"
                                required
                                value={formData.passportExpiry}
                                onChange={handleChange}
                                className={inputClasses}
                            />
                        </div>
                    </div>
                </div>

                {/* === SECTION 4: PET INFORMATION === */}
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
                            <input
                                type="date"
                                name="petVacDate1"
                                value={formData.petVacDate1}
                                onChange={handleChange}
                                className={inputClasses}
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
                            <input
                                type="date"
                                name="petVacDate2"
                                value={formData.petVacDate2}
                                onChange={handleChange}
                                className={inputClasses}
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
                                placeholder="EnterAddress"
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
                            <label className={labelClasses}>Zip Code <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="billingZip"
                                required
                                value={formData.billingZip}
                                onChange={handleChange}
                                placeholder="Enter Zip Code"
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

                {/* === SECTION 7: REFERENCES === */}
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
                                placeholder="......"
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
                                placeholder="Name, number, and address of owner"
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
                                <option value="Google Search">Google Search</option>
                                <option value="Friend/Family">Friend/Family</option>
                                <option value="Social Media">Social Media</option>
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
                        <span>I have read and agree with the <a href="#terms" className="text-[#2a5d88] hover:underline font-bold">Terms and Conditions</a> and the Westville Cottage’s <a href="#privacy" className="text-[#2a5d88] hover:underline font-bold">Privacy Policy</a>. <span className="text-red-500">*</span></span>
                    </label>
                </div>

                {/* === FOOTER BUTTONS & ENCRYPTION NOTICE === */}
                <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-4">
                        <button
                            type="submit"
                            className="bg-[#2a5d88] hover:bg-[#1f4565] text-white font-bold text-sm px-8 py-3 rounded shadow transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer uppercase"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={handlePrint}
                            className="bg-[#2a5d88] hover:bg-[#1f4565] text-white font-bold text-sm px-8 py-3 rounded shadow transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer uppercase"
                        >
                            Print
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}
                            className="bg-[#2a5d88] hover:bg-[#1f4565] text-white font-bold text-sm px-8 py-3 rounded shadow transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer uppercase"
                        >
                            Reset
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

export default Form1Section;
