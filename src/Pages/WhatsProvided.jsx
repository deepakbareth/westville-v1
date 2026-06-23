import React from 'react';
import WhatsProvidedComp from '../Component/PetsPage/WhatsProvided/WhatsProvided';
import WestvilleCottage from '../Component/ReusableComp/WestvilleCottage';

function WhatsProvided() {
    return (
        <div>
            <WestvilleCottage />
            <WhatsProvidedComp />
        </div>
    );
}

export default WhatsProvided;
