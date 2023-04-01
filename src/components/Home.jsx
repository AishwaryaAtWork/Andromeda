import React from 'react';
import Carousels from './Carousels';
import LowerNavbar from './LowerNavbar';
import opportunityTypeData from "../constants/opportunityTypeData";
import sliderImagesData from "../constants/sliderImagesData";

export default function Home() {
    return (
        <>
            <Carousels sliderImagesData={sliderImagesData} />
            <LowerNavbar opportunityTypeData={opportunityTypeData} />
        </>
    );
}
