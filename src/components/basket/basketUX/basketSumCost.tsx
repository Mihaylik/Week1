import React, {FC} from 'react';
import s from '../basket.module.scss';

type Props = {
    sumCost: number
}

const BasketSumCost: FC<Props> = ({sumCost}) => {
    return (
        <div className={s.basket_sum_cost}>
            До сплати: <div className={s.ware_cost}>{sumCost} грн</div>
        </div>
    );
};

export default BasketSumCost;