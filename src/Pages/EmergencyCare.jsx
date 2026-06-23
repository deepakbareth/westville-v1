import React from 'react';
import WestvilleCottage from '../Component/ReusableComp/WestvilleCottage';
import EmergencyCareComp from '../Component/PetsPage/EmergencyCare/EmergencyCare';

function EmergencyCare() {
    return (
        <div>
            <WestvilleCottage />
            <EmergencyCareComp />
        </div>
    );
}

export default EmergencyCare;
