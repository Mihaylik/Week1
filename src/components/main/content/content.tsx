import React from 'react';
import Categories from "./categories";
import VerticalDivider from "../../tools/verticalDivider";
import GatNews from "./gatNews";
import s from '../main.module.scss'

const Content = () =>  {
    return (
        <div className={s.page_content}>
            <Categories/>
            <VerticalDivider height={80}/>
            <GatNews/>
        </div>
    );
}

export default Content;