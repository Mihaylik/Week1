import React from 'react';
import s from "../main.module.scss"
import {Link} from "react-router-dom";


const HeaderContent = () =>  {
    return (
        <div className={s.header_content}>
            <img src="../../media/header1.png" alt=""/>
            <img src="../../media/header2.png" alt=""/>
            <img src="../../media/header3.png" alt=""/>
            <div className={s.new_collection}>
                <div className={s.new_collection_caption}>
                    Нова колекція
                </div>
                <div className={s.divider}/>
                <div className={s.check_new}>
                    <Link to={'/catalog'}  className={s.link}>
                        Дивитися новинки &#10095;
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeaderContent;