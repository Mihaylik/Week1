import React, {FC} from 'react';
import s from '../ware.module.scss'
import SmallPicture from "./smallPicture";
import BigPicture from "./bigPicture";

type Props = {
    bigPictureSource: string
}

const WarePictures: FC<Props> = ({bigPictureSource}) => {
    return (
        <div className={s.pictures_container}>
            <div className={s.small_pictures}>
                <SmallPicture imageSource="../../media/small_tovar1.png"/>
                <SmallPicture imageSource="../../media/small_tovar2.png"/>
                <SmallPicture imageSource="../../media/small_tovar3.png"/>
                <SmallPicture imageSource="../../media/small_tovar4.png"/>
                <SmallPicture imageSource="../../media/small_tovar5.png"/>
            </div>
            <BigPicture imageSource={bigPictureSource}/>
        </div>
    );
};

export default WarePictures;