import React, {FC} from 'react';
import s from "../ware.module.scss";
import WarePictures from "../pictures/warePictures";
import {ClotheType} from "../../../data/clothes";
import WareDescription from "./wareDescription";

type Props = {
    clothe: ClotheType
}

const WareInfo: FC<Props> = ({clothe}) => {
    return (
        <div className={s.ware_info}>
            <WarePictures bigPictureSource={clothe.imageSource}/>
            <WareDescription clothe={clothe}/>
        </div>
    );
};

export default WareInfo;