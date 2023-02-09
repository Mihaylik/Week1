import React from 'react';
import VerticalDivider from "../../tools/verticalDivider";
import CategoriesSlider from "./categoriesSlider";
import s from '../main.module.scss'


const Categories = () =>  {
    return (
        <div className={s.categories}>
            <div className={s.categories_title}>
                Категорії
            </div>
            <VerticalDivider height={50}/>
            <CategoriesSlider/>
        </div>

    );
}

export default Categories;