import React, { useState } from 'react';
import './index.scss';
import { Link } from 'wouter';
import Logo from '../../../assets/images/logo.svg';
function Header(props) {
    const [show, setShow] = useState(false)
    return <>
        <div className={`header-toggler ${show ? "active" : ""} `} onClick={() => setShow(!show)}><span></span><span></span><span></span></div>
        <header className={`header ${show ? "active" : ""} `}>
            <div className="container">
                <div className="header__content">
                    <img src={Logo} className="header__logo" alt="" />
                    <div className="header__nav">
                        <a className="header__link" onClick={() => setShow(false)} href="#about">О нас</a>
                        <a className="header__link" onClick={() => setShow(false)} href="#reasons">Почему мы</a>
                        <a className="header__link" onClick={() => setShow(false)} href="#services">Наши услуги</a>

                        <a href="#contacts" className="btn btn_primary" onClick={() => setShow(false)}>Контакты</a>
                    </div>

                </div>
            </div>
        </header>
    </>
}

export default Header
