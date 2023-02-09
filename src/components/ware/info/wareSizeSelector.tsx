import React, {FC} from 'react';
import s from '../ware.module.scss';

type Props = {
    sizes: string[],
    setSize: React.Dispatch<React.SetStateAction<string>>
}

const WareSizeSelector: FC<Props> = ({sizes, setSize}) => {

    return (
        <div className={s.box}>
            <select className={s.ware_size_selector} onChange={(event => setSize(event.currentTarget.value))}>
                <option value="" disabled selected>Оберіть розмір</option>
                {sizes.map( (value,index) =>
                    <option key={index}>{value}</option>
                )}
            </select>
        </div>

    );
};

export default WareSizeSelector;