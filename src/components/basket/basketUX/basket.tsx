import React, {useState} from 'react';
import s from '../basket.module.scss';
import BasketTitle from "./basketTitle";
import {basketWares} from "../../../data/basket";
import BasketEntity from "./basketEntity";
import BasketSumCost from "./basketSumCost";

export const getBasketSumCost = (): number => {
    let cost = 0
    for (let i = 0; i < basketWares.length; i++){
        cost += basketWares[i].num * basketWares[i].clothe.cost
    }
    return cost
}

const Basket = () => {


    const [sumCost, setSumCost] = useState(getBasketSumCost())
    const [basketList, setBasketList] = useState(basketWares)

    return (
        <>
            <div className={s.basket}>
                <BasketTitle/>
                {basketList.map((value, index)=>
                    <BasketEntity key={index} entity={value} setSumCost={setSumCost} setBasketList={setBasketList}/>
                )}
                <BasketSumCost sumCost={sumCost}/>
            </div>
        </>
    );
};

export default Basket;