import React from 'react';
import s from "../main.module.scss"
import {Link} from "react-router-dom";


const HeadMenu = () => {
    return (
        <div className={s.menu_navigator}>
            <div className={s.menu_item}>
                <a href="">
                    <img className={s.search} src={'../media/icons/search.png'}/>
                </a>
            </div>
            <div className={s.menu_item}>
                <a href="">
                    <img className={s.user} src={'../media/icons/user.png'}/>
                </a>
            </div>
            <div className={s.menu_item}>
                <a href="">
                    <img className={s.like} src={'../media/icons/like.png'}/>
                </a>
            </div>
            <div className={s.menu_item}>
                <Link to={'/basket'} className={s.link}>
                    <img className={s.store} src={'../media/icons/store.png'}/>
                </Link>
            </div>
        </div>
    );
}

export default HeadMenu;