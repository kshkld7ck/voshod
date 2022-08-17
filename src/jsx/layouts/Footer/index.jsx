import React from "react";
import './index.scss'
import { Link } from "wouter";
import Phone from '../../../assets/images/phone.svg';
import Mail from '../../../assets/images/mail.svg';
import Logo from '../../../assets/images/logo.svg';

function Footer() {
    return (
        <>
            <footer className="footer" id="contacts">
                <div className="container">
                    <div className="footer__content">
                        <div className="footer__contacts">
                            <h6>Свяжитесь с нами:</h6>
                            <a href="tel: +74954886708"><img src={Phone} alt="" /><span>+7 495 488-67-08</span></a>
                            <a href="mailto: office@voskhod-security.ru"><img src={Mail} alt="" /><span>office@voskhod-security.ru</span></a>
                            <span className="hr hr_white"></span>
                            <div className="footer__copyright">© ООО "Восход-2" <br /> ИНН: 7703458260 <br />
                                ОГРН: 1187746518850</div>
                        </div>
                        <img src={Logo} className="footer__logo" alt="" />

                        <nav className="footer__nav">
                            <a className="footer__link" href="#about">О нас</a>
                            <a className="footer__link" href="#reasons">Почему мы</a>
                            <a className="footer__link" href="#services">Наши услуги</a>
                        </nav>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
