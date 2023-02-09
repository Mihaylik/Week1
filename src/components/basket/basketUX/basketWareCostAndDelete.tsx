import React, {FC} from 'react';
import s from '../basket.module.scss';
import {basketWares, BasketWareType, setBasketWares} from "../../../data/basket";
import {getBasketSumCost} from "./basket";
import {Store} from "react-notifications-component";
import BasketEntity from "./basketEntity";

type Props = {
    entity: BasketWareType
    setBasketList: React.Dispatch<React.SetStateAction<BasketWareType[]>>,
    setSumCost: React.Dispatch<React.SetStateAction<number>>
}

const BasketWareCostAndDelete: FC<Props> = ({entity, setBasketList, setSumCost}) => {
    const deleteWare = () => {
        setBasketWares(basketWares.filter(x => x.id !== entity.id))
        setBasketList(basketWares)
        setSumCost(getBasketSumCost())
        Store.addNotification({
            title: "Товар видалено!",
            message: entity.clothe.name + ' ' + entity.size,
            type: "warning",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 1000,
                onScreen: true
            }
        })
    }

    return (
        <div className={s.ware_cost_delete}>
            <div className={s.ware_cost}>
                {entity.num * entity.clothe.cost} грн
            </div>
            <img src="../../media/icons/trash.png" alt="" onClick={deleteWare}/>
        </div>
    );
};

export default BasketWareCostAndDelete;