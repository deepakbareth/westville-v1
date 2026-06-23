import React from 'react';
import WestvilleCottage from '../Component/ReusableComp/WestvilleCottage';

function PetFriendlyRestaurants() {
    return (
        <div>
            <WestvilleCottage />
            <div className="max-w-[1200px] mx-auto px-6 py-12 text-center">
                <h2 className="text-[#2D5D80] font-helvetica text-[28px] md:text-[36px] font-normal mb-6 uppercase">
                    Pet Friendly Restaurants
                </h2>
                <p className="text-gray-600 font-helvetica text-[15px] max-w-[800px] mx-auto leading-relaxed">
                    Enjoy outdoor patio dining with your dog at several local spots in Provincetown that welcome pets at their outdoor tables.
                </p>
            </div>
        </div>
    );
}

export default PetFriendlyRestaurants;
