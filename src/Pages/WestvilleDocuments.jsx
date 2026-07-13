import React from 'react';
import PageBanner from '../Component/ReusableComp/PageBanner';
import WestvilleDocumentsComp from '../Component/WestvilleDocuments/WestvilleDocuments';

function WestvilleDocuments() {
    return (
        <div className="bg-[#fcfbfa] min-h-screen flex flex-col">
            {/* Page Banner at the top */}
            <PageBanner title="Westville Documents" />

            {/* Westville Documents main component */}
            <WestvilleDocumentsComp />
        </div>
    );
}

export default WestvilleDocuments;
