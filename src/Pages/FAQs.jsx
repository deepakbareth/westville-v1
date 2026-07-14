import React from 'react';
import WestvilleCottage from '../Component/ReusableComp/WestvilleCottage';
import FAQsSection from '../Component/FAQs/FAQsSection';
import PageBanner from '../Component/ReusableComp/PageBanner';

function FAQsPage() {
    return (
        <div className="bg-[#fcfcfc] min-h-screen text-gray-800 pb-16">
            <PageBanner title='FAQs' />
            <WestvilleCottage />
            <FAQsSection />
        </div>
    );
}

export default FAQsPage;
