import React from 'react';
import s from "../main.module.scss"

const CurrencySelector = () =>  {
    const selectorClick = (event: React.MouseEvent) => {
        let target = event.target as HTMLElement
        if (!target.classList.contains(s.selector_item))
            target = target.parentElement!
        target.children[0].classList.toggle(s.down)
        for (let i = 1; i < target.parentElement!.children.length; i++) {
            target.parentElement!.children[i].classList.toggle(s.hidden)
        }
    }

    return (
        <div className={s.selector} id="curr">
            <div className={s.selector_block}>
                <div className={[s.selector_item, s.active].join(" ")} onClick={selectorClick}>UAH <span className={s.icon}></span></div>
                <div className={[s.selector_item, s.hidden].join(" ")}>USD</div>
                <div className={[s.selector_item, s.hidden].join(" ")}>EUR</div>
            </div>
        </div>
    );
}

export default CurrencySelector;