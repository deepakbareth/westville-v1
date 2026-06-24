import React from 'react';
import WestvilleCottage from '../Component/ReusableComp/WestvilleCottage';
import DogParkServicesComp from '../Component/PetsPage/DogParkServices/DogParkServices';
import EmergencyCareComp from '../Component/PetsPage/EmergencyCare/EmergencyCare';
import TravelTipsComp from '../Component/PetsPage/TravelTips/TravelTips';

function DogParkServices() {
    return (
        <div>
            <WestvilleCottage />
            <DogParkServicesComp />


            <EmergencyCareComp />
            <div className='py-5'></div>
            <TravelTipsComp />
        </div>
    );
}

export default DogParkServices;
