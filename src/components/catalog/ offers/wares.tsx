import React from 'react';
import s from "../catalog.module.scss"
import WareCard from "./wareCard";
import {clothes} from "../../../data/clothes";

const Wares = () => {
    return (
        <div className={s.wares}>
            {[...Array(2)].map((x, index) =>
                <>
                    {[...Array(2)].map((x, index1) =>
                        <div className={s.wares_block}>
                            {[...Array(3)].map((x, index2) =>
                                <WareCard clothe={clothes[index2 + index1 * 3]} imageWidth={310} imageHeight={360}/>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Wares;