import React from 'react';
import s from "./catalog.module.scss"
import {Link} from "react-router-dom";

const CatalogPath = () => {
    return (
        <div className={s.path_container}>
            <div className={s.path}>
                <Link to={'/'} className={s.link}>Головна</Link>
                <img src="../media/icons/arrow_right.png" alt=""/>
                <Link to={'/catalog'} className={s.link}>Каталог</Link>
            </div>
        </div>

    );
};

export default CatalogPath;