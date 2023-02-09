import React, {FC} from 'react';
import s from '../ware.module.scss'

type Props = {
    color: string
}

const WareColorName: FC<Props> = ({color}) => {
    return (
        <div className={s.ware_color_name}>
            Колір: {color}
        </div>
    );
};

export default WareColorName;