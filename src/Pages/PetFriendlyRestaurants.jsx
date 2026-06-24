import React from 'react';
import WestvilleCottage from '../Component/ReusableComp/WestvilleCottage';
import PetFriendlyRestaurantsComp from '../Component/PetsPage/PetFriendlyRestaurants/PetFriendlyRestaurants';

function PetFriendlyRestaurants() {
    return (
        <div>
            <WestvilleCottage />
            <PetFriendlyRestaurantsComp />
        </div>
    );
}

export default PetFriendlyRestaurants;
