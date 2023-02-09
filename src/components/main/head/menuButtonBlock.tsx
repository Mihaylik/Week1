import React from 'react';
import s from '../main.module.scss'

const MenuButtonBlock = () =>  {
    const iconChange = (event: React.MouseEvent) => {
        let target = event.target as HTMLElement
        let navs = document.getElementsByClassName(s.navigator)![0]
        let menu_navs =  document.getElementsByClassName( s.menu_navigator)![0]
        let lang = document.getElementById("lang")!
        let curr = document.getElementById("curr")!
        let title = document.getElementsByClassName(s.title)![0]
        let menu = document.getElementsByClassName(s.menu)![0]
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