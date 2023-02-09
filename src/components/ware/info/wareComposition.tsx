import React from 'react';
import s from '../ware.module.scss';
import WareDivider from "./wareDivider";

const WareComposition = () => {
    return (
        <>
            <div className={s.ware_composition}>
                Состав: 50% Шерсть, 50% Полиэстер<br/>
                Подкладка: 100% Полиэстер<br/>
                Утеплитель: 90% Пух, 10% Перо<br/>
                <br/>
                - Не стирать<br/>
                - Гладить при температуре утюга до 110°C<br/>
                - Не отбеливать<br/>
                - Сухая чистка (химчистка)<br/>
                - Барабанная сушка запрещена<br/>
            </div>
            <WareDivider/>
        </>

    );
};

export default WareComposition;