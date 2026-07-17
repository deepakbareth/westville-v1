import React from 'react';
import PageBanner from '../Component/ReusableComp/PageBanner';
import WestvilleCottage from '../Component/ReusableComp/WestvilleCottage';
import AccessibilitySection from '../Component/Accessibility/AccessibilitySection';

function Accessibility() {
    return (
        <div className="bg-[#fcfcfc] min-h-screen text-gray-800 pb-16 font-helvetica">
            <PageBanner title="Accessibility" />
            <WestvilleCottage />
            <AccessibilitySection />
        </div>
    );
}

export default Accessibility;
