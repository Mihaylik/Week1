import React, {FC} from 'react';
import s from '../ware.module.scss'

type Props = {
    imageSource: string
}

const BigPicture: FC<Props> = ({imageSource}) => {
    return (
        <img style={{content: `url("${imageSource}")`}} alt="" className={s.big_picture}/>
    );
};

export default BigPicture;