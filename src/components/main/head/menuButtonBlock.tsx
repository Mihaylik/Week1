import React from 'react';
import s from '../main.module.scss'

const MenuButtonBlock = () =>  {
    const iconChange = (event: React.MouseEvent) => {
        let target = event.target as HTMLElement
        let navs = document.querySelector("." + s.navigator)!
        let menu_navs =  document.querySelector("." + s.menu_navigator)!
        let lang = document.getElementById("lang")!
        let curr = document.getElementById("curr")!
        let title = document.querySelector("." + s.title)!
        let menu = document.querySelector("." + s.menu)!
        if(!target.classList.contains(s.menu_button))
            target = target.parentElement!
        target.classList.toggle(s.close)
        navs.classList.toggle(s.hidden)
        menu_navs.classList.toggle(s.hidden)
        lang.classList.toggle(s.hidden)
        curr.classList.toggle(s.hidden)
        title.classList.toggle(s.hidden)
        menu.classList.toggle(s.opened)
    }

    return (
        <div className={s.menu_button_block}>
            <div className={s.menu_button} onClick={iconChange}>
                <span/>
            </div>

        </div>
    );
}

export default MenuButtonBlock