import React from 'react';
import WestvilleCottage from '../Component/ReusableComp/WestvilleCottage';

function DogParkServices() {
    return (
        <div>
            <WestvilleCottage />
            <div className="max-w-[1200px] mx-auto px-6 py-12 text-center">
                <h2 className="text-[#2D5D80] font-helvetica text-[28px] md:text-[36px] font-normal mb-6 uppercase">
                    Dog Park and Pet Services
                </h2>
                <p className="text-gray-600 font-helvetica text-[15px] max-w-[800px] mx-auto leading-relaxed">
                    Provincetown offers excellent pet resources, including the Pilgrim Dog Park (a beautiful double-gated park for large and small dogs) as well as local grooming and pet sitting services.
                </p>
            </div>
        </div>
    );
}

export default DogParkServices;
