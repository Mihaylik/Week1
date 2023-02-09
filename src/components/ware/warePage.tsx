import React, {FC} from 'react';
import Head from "../main/head/head";
import Footer from "../main/footer/footer";
import WareContent from "./wareContent";
import {ClotheType} from "../../data/clothes";

type Props = {
    clothe: ClotheType
}

const WarePage: FC<Props> = ({clothe}) => {
    return (
        <>
            <Head dark/>
            <WareContent clothe={clothe}/>
            <Footer/>
        </>
    );
};

export default WarePage;