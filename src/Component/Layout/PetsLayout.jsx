import React from 'react';
import { Outlet } from 'react-router-dom';
import PageBanner from '../ReusableComp/PageBanner';
import WalkingAround from '../Provincetown/WalkingAround';
import WestvilleCottage from '../ReusableComp/WestvilleCottage';
import SubNavbar from '../PetsPage/SubNavbar';

const PetsLayout = () => {
    return (
        <div>
            <PageBanner title='Pets' />
            <SubNavbar />

            <Outlet />
        </div>
    );
};

export default PetsLayout;
