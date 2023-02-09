import React from 'react';
import s from "../ware.module.scss";
import WareCard from "../../catalog/ offers/wareCard";
import {story} from "../../../data/story";

const ShopStory = () => {
    return (
        <div className={s.another_variants}>
            <div className={s.title}>
                Переглянуті
            </div>
            <div className={s.story}>
                {story.map((value, index)=>{
                    if(index > 3)
                        return <></>
                    return <div><WareCard key={index} clothe={value} imageWidth={275} imageHeight={325}/></div>
                })}
            </div>
        </div>
    );
};

export default ShopStory;