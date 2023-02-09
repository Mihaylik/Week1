import React from 'react';
import s from './basket.module.scss'
import BasketPath from "./basketPath";
import Basket from "./basketUX/basket";

const BasketContent = () => {
    return (
        <div className={s.basket_content}>
            <BasketPath/>
            <Basket/>
        </div>
    );
};

export default BasketContent;