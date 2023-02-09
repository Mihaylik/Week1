import React from 'react';
import s from "../main.module.scss"

const Media = () => {
    return (
        <div className={s.media_container}>
            <a href="#" className={[s.media_link, s.insta].join(" ")}/>
            <a href="#" className={[s.media_link, s.tg].join(" ")}/>
        </div>
    );
};

export default Media;