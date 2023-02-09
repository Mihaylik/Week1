import React from 'react';
import s from "../main.module.scss"
import {Link} from "react-router-dom";


const Navigation = () =>  {
    return (
        <nav className={s.navigator}>
            <Link to={'/catalog'}>New</Link>
            <Link to={'/catalog'}>Каталог</Link>
            <a href={'#'}>Про нас</a>
        </nav>
    );
}

export default Navigation;