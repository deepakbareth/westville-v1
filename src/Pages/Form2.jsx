import React from 'react';
import WestvilleCottage from '../Component/ReusableComp/WestvilleCottage';
import Form2Section from '../Component/Forms/Form2Section';
import PageBanner from '../Component/ReusableComp/PageBanner';

function Form2() {
    return (
        <div className="bg-[#fcfcfc] min-h-screen text-gray-800 pb-16">
            <PageBanner title="Form 2" />
            <WestvilleCottage />
            <Form2Section />
        </div>
    );
}

export default Form2;
