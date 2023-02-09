import React from 'react';
import s from "../ware.module.scss";
import WareCard from "../../catalog/ offers/wareCard";
import {clothes} from "../../../data/clothes";

const Likely = () => {
    return (
        <div className={s.another_variants}>
            <div className={s.title}>
                Вам може сподобатись
            </div>
            <div className={s.proposes}>
                <WareCard clothe={clothes[1]} imageWidth={275} imageHeight={325}/>
                <WareCard clothe={clothes[2]} imageWidth={275} imageHeight={325}/>
                <WareCard clothe={clothes[0]} imageWidth={275} imageHeight={325}/>
                <WareCard clothe={clothes[3]} imageWidth={275} imageHeight={325}/>
            </div>
        </div>
    );
};

export default Likely;