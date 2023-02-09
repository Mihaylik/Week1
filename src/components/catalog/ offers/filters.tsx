import React from 'react';
import s from "../catalog.module.scss"

const Filters = () => {
    return (
        <div className={s.filters}>
            <div className={s.filter}>
                <span>Розмір</span>
                <img src="../media/icons/arrow_down.png"/>
            </div>
            <div className={s.filter}>
                <span>Колір</span>
                <img src="../media/icons/arrow_down.png"/>
            </div>
            <div className={s.filter}>
                <span>Ціна</span>
                <img src="../media/icons/arrow_down.png"/>

            </div>
            <div className={s.filter}>
                <span>Сортувати за</span>
                <img src="../media/icons/arrow_down.png"/>

            </div>
        </div>
    );
};

export default Filters;