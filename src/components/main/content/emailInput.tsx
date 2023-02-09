import React from 'react';
import s from '../main.module.scss';

const EmailInput = () => {
    const focus = (event: React.FocusEvent) => {
        event.currentTarget.setAttribute("placeholder", "")
        event.currentTarget.classList.add("selected")
    }

    const blur = (event: React.FocusEvent) => {
        event.currentTarget.setAttribute("placeholder", "Ваш e-mail")
        event.currentTarget.classList.remove("selected")

    }

    return (
        <input type="email" className={s.email_input} placeholder="Ваш e-mail" onFocus={focus} onBlur={blur}/>
    );
};

export default EmailInput;