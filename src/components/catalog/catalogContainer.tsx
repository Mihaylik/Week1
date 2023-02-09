import React from 'react';
import CatalogPath from "./catalogPath";
import s from "./catalog.module.scss"
import CatalogCategories from "./categories/catalogCategories";
import Filters from "./ offers/filters";
import Shop from "./ offers/shop";
import VerticalDivider from "../tools/verticalDivider";


const CatalogContainer = () => {
    return (
        <div className={s.catalog}>
            <CatalogPath/>
            <div className={s.catalog_container}>
                <CatalogCategories/>
                <Shop/>
            </div>
            <VerticalDivider height={70}/>
        </div>
    );
};

export default CatalogContainer;