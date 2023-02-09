import React, {FC} from 'react';
import '../main.module.scss'
import MenuButtonBlock from "./menuButtonBlock";
import Navigation from "./navigation";
import Title from "./title";
import LanguageSelector from "./languageSelector";
import CurrencySelector from "./currencySelector";
import HeadMenu from "./headMenu";
import Menu from "./menu";
import s from "../main.module.scss"


type Props = {
    dark?: boolean
}

const Head:FC<Props> = ({dark}) =>  {
    return (
        <div className={[s.content, dark ? s.black : null].join(" ")} >
            <MenuButtonBlock/>
            <Navigation/>
            <Title/>
            <LanguageSelector/>
            <CurrencySelector/>
            <HeadMenu/>
            <Menu/>
        </div>
    );
}

export default Head;