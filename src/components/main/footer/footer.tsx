import React from 'react';
import Media from "./media";
import s from "../main.module.scss"

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer_container}>
                <div className={s.footer_column}>
                    <div className={s.footer_title}>
                        Компанія
                    </div>
                    <a href="#" className={s.footer_link}>
                        Про нас
                    </a>
                    <a href="#" className={s.footer_link}>
                        Контакти
                    </a>
                </div>
                <div className={s.footer_column}>
                    <div className={s.footer_title}>
                        Корисне
                    </div>
                    <a href="#" className={s.footer_link}>
                        Оплата і доставка
                    </a>
                    <a href="#" className={s.footer_link}>
                        Умови повернення
                    </a>
                    <a href="#" className={s.footer_link}>
                        Бонусна система
                    </a>

                </div>
                <div className={s.footer_column}>
                    <div className={s.footer_title}>
                        Покупцю
                    </div>
                    <a href="#" className={s.footer_link}>
                        Обране
                    </a>
                    <a href="#" className={s.footer_link}>
                        Публічна інформація
                    </a>
                    <a href="#" className={s.footer_link}>
                        Політика конфіденційності
                    </a>
                </div>
                <div className={s.footer_column}>
                    <div className={s.footer_title}>
                        Контакти
                    </div>
                    <Media/>
                    <span className={s.footer_link}>
                    +38(073) 096 36 44
                </span>
                    <span className={s.footer_link}>
                    info@yanki.com
                </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;