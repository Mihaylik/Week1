import React from 'react';
import Head from "../main/head/head";
import Footer from "../main/footer/footer";
import VerticalDivider from "../tools/verticalDivider";
import CatalogContainer from "./catalogContainer";

const CatalogPage = () => {
    return (
        <>
            <Head dark/>
            <CatalogContainer/>
            <Footer/>
        </>
    );
};

export default CatalogPage;