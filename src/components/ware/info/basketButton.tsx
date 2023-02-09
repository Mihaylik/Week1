import React, {FC} from 'react';
import s from '../ware.module.scss';
import {ClotheType} from "../../../data/clothes";
import {basketWares, BasketWareType} from "../../../data/basket";
import {Store} from 'react-notifications-component'


type Props = {
    clothe: ClotheType,
    size: string
}

const BasketButton: FC<Props> = ({clothe, size}) => {
    const addToBasket = () => {
        const basketEntity: BasketWareType = {
            id: basketWares.length,
            num: 1,
            size: size,
            clothe: clothe

        }
        Store.addNotification({
            title: "Додано до корзини!",
            message: clothe.name + ' ' + size,
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 1000,
                onScreen: true
            }
        })
        let sameEntity = basketWares.find(x => x.size === basketEntity.size && x.clothe.id === basketEntity.clothe.id)
        if (sameEntity)
            sameEntity.num ++
        else
            basketWares.push(basketEntity)
    }

    return (
        <div className={s.basket_button} onClick={addToBasket}>
            В КОРЗИНУ
        </div>
    );
};

export default BasketButton;