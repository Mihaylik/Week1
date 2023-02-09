import React, {FC, useState} from 'react';
import s from '../ware.module.scss'
import {ClotheType} from "../../../data/clothes";
import WareName from "./wareName";
import WareCost from "./wareCost";
import WareColors from "./wareColors";
import WareColorName from "./wareColorName";
import WareSizeSelector from "./wareSizeSelector";
import WareButtons from "./wareButtons";
import WareAbout from "./wareAbout";
import WareComposition from "./wareComposition";
import VerticalDivider from "../../tools/verticalDivider";

type Props = {
    clothe: ClotheType
}

const WareDescription: FC<Props> = ({clothe}) => {
    const [size, setSize] = useState('')

    return (
        <div className={s.description}>
            <WareName name={clothe.name}/>
            <WareCost cost={clothe.cost}/>
            <WareColors/>
            <WareColorName color={clothe.color}/>
            <WareSizeSelector sizes={clothe.sizes} setSize={setSize}/>
            <WareButtons clothe={clothe} size={size}/>
            <WareAbout/>
            <WareComposition/>
            <VerticalDivider height={100}/>
        </div>
    );
};

export default WareDescription;