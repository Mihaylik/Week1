import React from 'react';
import VerticalDivider from "../../tools/verticalDivider";
import EmailInput from "./emailInput";
import NewsSubmitButton from "./newsSubmitButton";
import s from '../main.module.scss';

const GatNews = () => {
    return (
        <>
            <form method="GET" className={s.news_form}>
                <div className={s.news_title}>
                    Дізнайтеся першим про новинки
                </div>
                <VerticalDivider height={40}/>
                <EmailInput/>
                <VerticalDivider height={30}/>
                <NewsSubmitButton/>
                <VerticalDivider height={25}/>
                <span className={s.news_placeholder}>
                    Натискаючи на кнопку "Підпитсатися", я погоджуюсь на обробку моїх персональних даних і ознайомлений(на) з умовами конфеденційності.
                </span>
                <VerticalDivider height={100}/>

            </form>
        </>
    );
};

export default GatNews;