import React from 'react';
import s from '../ware.module.scss';
import WareCard from "../../catalog/ offers/wareCard";
import {clothes} from "../../../data/clothes";

const WholeImage = () => {
    return (
        <div className={s.whole_image_container}>
            <div className={s.whole_image}>
                <div className={s.title}>Весь образ</div>
                <div className={s.proposes}>
                    <WareCard clothe={clothes[0]} imageWidth={370} imageHeight={400}/>
                    <WareCard clothe={clothes[1]} imageWidth={370} imageHeight={400}/>
                </div>
            </div>
        </div>
    );
};

export default WholeImage;