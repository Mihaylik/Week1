import React from 'react';
import s from "../catalog/catalog.module.scss"
import {Link} from "react-router-dom";

const BasketPath = () => {
    return (
        <div className={s.path_container}>
            <div className={s.path}>
                <Link to={'/'} className={s.link}>Головна</Link>
                <img src="../media/icons/arrow_right.png" alt=""/>
                <Link to={'/basket'} className={s.link}>Корзина</Link>
            </div>
        </div>
    );
};

export default BasketPath;