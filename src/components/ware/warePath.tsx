import React, {FC} from 'react';
import s from "../catalog/catalog.module.scss"
import {Link} from "react-router-dom";

type Props = {
    clotheName: string
}

const CatalogPath: FC<Props> = ({clotheName}) => {
    return (
        <div className={s.path_container}>
            <div className={s.path}>
                <Link to={'/'} className={s.link}>Головна</Link>
                <img src="../media/icons/arrow_right.png" alt=""/>
                <Link to={'/catalog'} className={s.link}>Каталог</Link>
                <img src="../media/icons/arrow_right.png" alt=""/>
                <Link to={'/catalog/' + clotheName} className={s.link}>{clotheName}</Link>
            </div>
        </div>

    );
};

export default CatalogPath;