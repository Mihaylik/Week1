import React from 'react';
import s from '../ware.module.scss';
import WareDivider from "./wareDivider";
import VerticalDivider from "../../tools/verticalDivider";

const WareAbout = () => {
    return (
        <div className={s.ware_about}>
            <div className={s.title}>
                Подробиці
            </div>
            <div className={s.up_down}>
                Заміри та опис
                <img src="../../media/icons/arrow_down.png" alt=""/>
            </div>
            <WareDivider/>
            <VerticalDivider height={20}/>
            <div className={s.up_down}>
                Склад та догляд
                <img src="../../media/icons/arrow_up.png" alt=""/>
            </div>
        </div>
    );
};

export default WareAbout;