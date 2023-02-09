import React, {FC} from 'react';
import s from "../basket.module.scss";
import {Link} from "react-router-dom";

type Props = {
    art: number,
    name: string,
    imageSource: string
}

const BasketWareCard: FC<Props> = ({art, name, imageSource}) => {
    return (
        <Link to={'/catalog/' + name} className={s.link}>
            <div className={s.ware_card}>
                <img src={imageSource} alt=""/>
                <div className={s.ware_card_info}>
                    <div className={s.art}>Арт: {art}</div>
                    <div className={s.name}>{name}</div>
                </div>
            </div>
        </Link>

    );
};

export default BasketWareCard;