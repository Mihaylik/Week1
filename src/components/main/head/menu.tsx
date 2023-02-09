import React from 'react';
import s from "../main.module.scss"

const Menu = () => {
    return (
        <div className={s.menu}>
            <div className={s.menu_container}>
                <a href="#">Оплата і доставка</a>
                <a href="#">Умови повернення</a>
                <a href="#">Контакти</a>
            </div>
        </div>
    );
};

export default Menu;