import React, {FC} from 'react';
import s from '../ware.module.scss'
import BasketButton from "./basketButton";
import LikeButton from "./likeButton";
import {ClotheType} from "../../../data/clothes";

type Props = {
    clothe: ClotheType,
    size: string
}

const WareButtons: FC<Props> = ({clothe, size}) => {
    return (
        <div className={s.ware_buttons}>
            <BasketButton clothe={clothe} size={size}/>
            <LikeButton/>
        </div>
    );
};

export default WareButtons;