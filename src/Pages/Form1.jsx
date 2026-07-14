import React from 'react';
import WestvilleCottage from '../Component/ReusableComp/WestvilleCottage';
import Form1Section from '../Component/Forms/Form1Section';
import PageBanner from '../Component/ReusableComp/PageBanner';

function Form1() {
    return (
        <div className="bg-[#fcfcfc] min-h-screen text-gray-800 pb-16">
            <PageBanner title="Form 1" />


            <WestvilleCottage />
            <Form1Section />
        </div>
    );
}

export default Form1;
