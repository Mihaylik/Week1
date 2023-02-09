import React from 'react';
import Head from "../main/head/head";
import Footer from "../main/footer/footer";
import VerticalDivider from "../tools/verticalDivider";
import BasketContent from "./basketContent";

const BasketPage = () => {
    return (
        <>
            <Head dark/>
            <BasketContent/>
            <VerticalDivider height={100}/>
            <Footer/>
        </>
    );
};

export default BasketPage;