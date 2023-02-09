import React, {FC, useEffect, useState} from 'react';
import {BasketWareType} from "../../../data/basket";
import s from  '../basket.module.scss';
import BasketWareCard from "./basketWareCard";
import BasketWareColor from "./basketWareColor";
import BasketWareSizeSelector from "./basketWareSizeSelector";
import BasketWareColsCounter from "./basketWareColsCounter";
import BasketWareCostAndDelete from "./basketWareCostAndDelete";
import BasketDivider from "./basketDivider";
import BasketSumCost from "./basketSumCost";

type Props = {
    entity: BasketWareType,
    setSumCost: React.Dispatch<React.SetStateAction<number>>,
    setBasketList: React.Dispatch<React.SetStateAction<BasketWareType[]>>
}

const BasketEntity: FC<Props> = ({entity, setSumCost, setBasketList}) => {
    const [cost, setCost] = useState(entity.num * entity.clothe.cost)

    return (
        <>

            <div className={s.basket_entity}>
                <BasketWareCard art={entity.id} name={entity.clothe.name} imageSource={entity.clothe.imageSource}/>
                <BasketWareColor color={entity.clothe.colorHex}/>
                <BasketWareSizeSelector art={entity.id} selectedSize={entity.size} sizes={entity.clothe.sizes}/>
                <BasketWareColsCounter art={entity.id} count={entity.num} wareCost={entity.clothe.cost} setCost={setCost} setSumCost={setSumCost}/>
                <BasketWareCostAndDelete entity={entity} setBasketList={setBasketList} setSumCost={setSumCost}/>
            </div>

            <BasketDivider/>
        </>
    );
};

export default BasketEntity;