import React from 'react';
import Filters from "./filters";
import s from "../catalog.module.scss"
import VerticalDivider from "../../tools/verticalDivider";
import WareCard from "./wareCard";
import Wares from "./wares";

const Shop = () => {
    return (
        <div className={s.shop}>
            <Filters/>
            <VerticalDivider height={30}/>
            <Wares/>
        </div>
    );
};

export default Shop;