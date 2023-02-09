import React, {FC} from 'react';
import s from './ware.module.scss'
import WareInfo from "./info/wareInfo";
import WarePath from "./warePath";
import {ClotheType} from "../../data/clothes";
import WholeImage from "./recomendations/wholeImage";
import AnotherVariants from "./recomendations/anotherVariants";
import Likely from "./recomendations/likely";
import ShopStory from "./recomendations/shopStory";
import {story} from "../../data/story";

type Props = {
    clothe: ClotheType
}

const WareContent: FC<Props> = ({clothe}) => {
    return (
        <>
            <div className={s.ware_container}>
                <WarePath clotheName={clothe.name}/>
                <WareInfo clothe={clothe}/>
                <WholeImage/>
                <AnotherVariants/>
                <Likely/>
                {story.length > 0 ? <ShopStory/> : <></>}
            </div>
        </>


    );
};

export default WareContent;