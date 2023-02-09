import React from 'react';
import s from '../ware.module.scss'

const WareColors = () => {
    return (
        <div className={s.ware_colors}>
            <div className={s.ware_color} style={{backgroundColor: 'white'}}/>
            <div className={s.ware_color} style={{background: '#6F83A4'}}/>
            <div className={[s.ware_color, s.selected].join(' ')} style={{background: '#F1DDAA'}}/>
        </div>
    );
};

export default WareColors;