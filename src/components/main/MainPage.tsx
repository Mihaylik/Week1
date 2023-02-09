import React, {useEffect} from 'react';
import Header from "./head/header";
import Content from "./content/content";
import Footer from "./footer/footer";
import s from "./main.module.scss"

const MainPage = () => {
    const headerScrollChange = () => {
        console.log("scroll")
        let header = document.documentElement.querySelector("." + s.content)!
        if(window.scrollY !== 0)
            header.classList.add(s.scrolled)
        else
            header.classList.remove(s.scrolled)

    }

    useEffect(()=>{
        window.addEventListener("scroll", headerScrollChange)
    }, [])

    return (
        <>
            <Header/>
            <Content/>
            <Footer/>
        </>
    );
};

export default MainPage;