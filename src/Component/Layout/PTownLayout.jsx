import React from 'react';
import { Outlet } from 'react-router-dom';
import PageBanner from '../ReusableComp/PageBanner';
import SubNavbar from '../Provincetown/SubNavbar';
import WalkingAround from '../Provincetown/WalkingAround';
import WestvilleCottage from '../ReusableComp/WestvilleCottage';

const PTownLayout = () => {
    return (
        <div>
            <PageBanner title='Province Town' />
            <SubNavbar />
            {/* <WestvilleCottage /> */}
            <Outlet />
        </div>
    );
};

export default PTownLayout;
