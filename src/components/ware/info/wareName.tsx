import React, {FC} from 'react';
import s from '../ware.module.scss';

type Props = {
    name: string
}

const WareName: FC<Props> = ({name}) => {
    return (
        <div className={s.ware_name}>
            {name}
        </div>
    );
};

export default WareName;