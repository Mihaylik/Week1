import React from 'react';
import CategoriesSlide from "./categoriesSlide";
import SlideSwitch from "./slideSwitch";
import s from '../main.module.scss';

const CategoriesSlider = () => {
    return (
        <div className={s.categories_slider}>
            <CategoriesSlide imageSrc={"../../media/tovar1.png"} caption={"Куртки"}/>
            <CategoriesSlide imageSrc={"../../media/tovar2.png"} caption={"Пальто"}/>
            <CategoriesSlide imageSrc={"../../media/tovar3.png"} caption={"Шуби"}/>
            <CategoriesSlide imageSrc={"../../media/tovar4.png"} caption={"Парки"}/>
            <SlideSwitch/>
        </div>
    );
};

export default CategoriesSlider;