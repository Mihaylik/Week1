import React, {FC, useState} from 'react';
import s from '../basket.module.scss';
import {Link} from "react-router-dom";
import {basketWares} from "../../../data/basket";
import {getBasketSumCost} from "./basket";

type Props = {
    art: number,
    count: number,
    wareCost: number,
    setCost: React.Dispatch<React.SetStateAction<number>>,
    setSumCost: React.Dispatch<React.SetStateAction<number>>
}

const BasketWareColsCounter: FC<Props> = ({art, count, wareCost, setCost, setSumCost}) => {
    const [num, setNum] = useState(count)

    const changeCard = (num: number) => {
        setNum(num)
        setCost(wareCost * num)
        setSumCost(getBasketSumCost())
    }

    const plus = () => {
        const obj = basketWares.find(x => x.id === art)!
        obj.num ++;
        changeCard(obj.num)
    }

    const minus = () => {
        const obj = basketWares.find(x => x.id === art)!
        if(obj.num === 1)
            return;
        obj.num --;
        changeCard(obj.num)
    }

    return (
        <div className={s.ware_cols_counter}>
            <div className={s.image} onClick={minus}>
                <img src="../../media/icons/minus.png" alt=""/>
            </div>
            <div className={s.ware_count}>{num}</div>
            <div className={s.image} onClick={plus}>
                <img src="../../media/icons/plus.png" alt=""/>
            </div>
        </div>
    );
};

export default BasketWareColsCounter;