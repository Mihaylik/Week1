import React, {FC} from 'react';
import s from "../catalog.module.scss"
import {ClotheType} from "../../../data/clothes";
import {Link} from "react-router-dom";
import {story} from "../../../data/story";


type Props = {
    clothe: ClotheType,
    imageWidth: number,
    imageHeight: number
}

const WareCard: FC<Props> = ({clothe, imageWidth, imageHeight}) => {
    const addToStory = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        story.unshift(clothe)
    }

    return (
        <Link to={"/catalog/" + clothe.name} className={s.link} onClick={addToStory}>
            <div className={s.ware_card}>
                <div className={s.like_container}>
                    <img src="../../media/icons/like.png" alt="" className={s.like_img}/>
                </div>
                <div className={s.card_image} style={{content: `url('${clothe.imageSource}')`, width: `${imageWidth}px`, height: `${imageHeight}px`}}>
                </div>
                <div className={s.ware_name}>
                    {clothe.name}
                </div>
                <div className={s.ware_cost}>
                    {`${clothe.cost} грн`}
                </div>
                <div className={s.ware_sizes}>
                    {clothe.sizes.join(' ')}
                </div>

                <div className={s.ware_colors}>
                    {clothe.colors.map((value, index)=>
                        <div className={s.color} style={{backgroundColor: value}}/>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default WareCard;