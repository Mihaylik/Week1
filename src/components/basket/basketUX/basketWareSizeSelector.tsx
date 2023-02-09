import React, {FC} from 'react';
import s from '../basket.module.scss'
import {basketWares} from "../../../data/basket";

type Props = {
    art: number,
    selectedSize: string,
    sizes: string[]
}

const BasketWareSizeSelector: FC<Props> = ({selectedSize, sizes, art}) => {
    const changeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let entity = basketWares.find(x => x.id === art)!
        entity.size = event.currentTarget.value
    }

    return (
        <select className={s.ware_size_selector} onChange={changeSize}>
            {sizes.map((value, index) => {
                if (value === selectedSize)
                    return <option selected key={index}>{value}</option>
                return <option key={index}>{value}</option>
            })}
        </select>
    );
};

export default BasketWareSizeSelector;