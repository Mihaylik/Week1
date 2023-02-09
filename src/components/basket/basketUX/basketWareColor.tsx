import React, {FC} from 'react';
import s from '../basket.module.scss';

type Props = {
    color: string
}

const BasketWareColor: FC<Props> = ({color}) => {
    return (
        <div className={s.ware_color} style={{background: color}}/>
    );
};

export default BasketWareColor;