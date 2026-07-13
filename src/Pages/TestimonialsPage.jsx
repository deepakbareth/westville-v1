import React from 'react';
import PageBanner from '../Component/ReusableComp/PageBanner';
import TestimonialsPageComp from '../Component/TestimonialsPage/TestimonialsPage';

function TestimonialsPage() {
    return (
        <div className="bg-[#fcfbfa] min-h-screen flex flex-col">
            {/* Page Banner at the top */}
            <PageBanner title="Testimonials" />

            {/* Testimonials main component */}
            <TestimonialsPageComp />
        </div>
    );
}

export default TestimonialsPage;
