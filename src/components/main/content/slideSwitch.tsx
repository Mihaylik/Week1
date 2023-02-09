import React from 'react';
import s from '../main.module.scss';

const SlideSwitch = () => {
    return (

        <div className={s.slide_switch_container}>
            <div className={s.slide_switch}>
                &#10095;
            </div>
        </div>
    );
};

export default SlideSwitch;