import React from 'react';
import s from '../ware.module.scss';

const LikeButton = () => {
    return (
        <div className={s.like_button}>
            <img src="../../media/icons/like_beige.png" alt=""/>
            ДО ОБРАНОГО
        </div>
    );
};

export default LikeButton;