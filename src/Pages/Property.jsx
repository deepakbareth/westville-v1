import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react';
import PageBanner from "../Component/ReusableComp/PageBanner";
import SubNavbar from "../Component/PropertyPage/SubNavbar";
import Overview from "../Component/PropertyPage/Overview";
import Rates from "../Component/PropertyPage/Rates";
import Amenities from "../Component/PropertyPage/Amenities";
import Availability from "../Component/PropertyPage/Availability";
import BookingForm from "../Component/PropertyPage/BookingForm";
import AvailabilityCalendar from '../Component/PropertyPage/AvailabilityCalendar';
import LocalExperiences from '../Component/Home/LocalExperiences';
import LocationMap from '../Component/PropertyPage/LocationMap';

function Property() {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            // hash में से '#' हटाकर id ढूंढते हैं (जैसे 'rates')
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <div className="bg-white min-h-screen text-gray-800">
            {/* Banner & Sub-Navbar */}
            <PageBanner title="The Property" />
            <SubNavbar />

            {/* Main content grid */}
            <div className="max-w-[1450px] mx-auto px-4 md:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                    {/* Left Column (Main Details) */}
                    <div className="lg:col-span-2 space-y-16">
                        <div id="overview" className="scroll-mt-45">
                            <Overview />
                        </div>
                        <hr className="border-gray-100" />
                        <div id="rates" className="scroll-mt-45">
                            <Rates />
                        </div>
                        <hr className="border-gray-100" />
                        <div id="amenities" className="scroll-mt-45">
                            <Amenities />
                        </div>
                        <hr className="border-gray-100" />
                        <div id="availability" className="scroll-mt-45">
                            <AvailabilityCalendar />
                            <LocationMap />
                        </div>
                        <hr className="border-gray-100" />
                        <div >
                        </div>
                    </div>

                    {/* Right Column (Sticky Sidebar Inquiry Form) */}
                    <div className="lg:col-span-1 lg:sticky lg:top-45 z-30">
                        <BookingForm />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Property;