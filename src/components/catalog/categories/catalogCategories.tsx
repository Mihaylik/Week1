import React from 'react';
import s from "../catalog.module.scss"
import VerticalDivider from "../../tools/verticalDivider";

const CatalogCategories = () => {
    return (
        <div className={s.catalog_categories}>
            <div className={s.category_header}>Каталог</div>
            <VerticalDivider height={30}/>
            <div className={s.category}>NEW</div>
            <div className={s.category}>Bestsellers</div>
            <div className={s.category}>Верхній одяг</div>
            <div className={s.category}>Шуби</div>
            <div className={s.category}>Тренди</div>
            <div className={s.category}>Пальто</div>
            <div className={s.category}>Пуховики і желети</div>
            <div className={s.category}>Костюми</div>
            <div className={s.category}>Жакети</div>
            <div className={s.category}>Плаття</div>
            <div className={s.category}>Сорочки і блузи</div>
            <div className={s.category}>Юбки</div>
            <div className={s.category}>Футболки і топи</div>
            <div className={s.category}>Аксесуари</div>
            <div className={s.category}>Sale</div>
            <div className={s.category}>Summer</div>
            <div className={s.category}>Переглянути все</div>
        </div>
    );
};

export default CatalogCategories;