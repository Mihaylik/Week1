import React, {FC} from 'react';
import s from '../ware.module.scss'

type Props = {
    cost: number
}

const WareCost: FC<Props> = ({cost}) => {
    return (
        <div className={s.ware_cost}>
            {cost} грн
        </div>
    );
};

export default WareCost;