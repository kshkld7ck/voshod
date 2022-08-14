import React from 'react';
import Header from '../../layouts/Header';
import './index.scss'
import Angle from '../../../assets/images/angle.svg'
import Logo from '../../../assets/images/logo.svg';

function Banner() {
    return <section className="banner" id="banner">
        <Header />
        <div className="container">
            <div className="banner__content">
                <img src={Logo} className="banner__logo" alt=""/>
                <h1 className="heading">
                    Business Consulting
                </h1>
                <p>
                    Business consultations and project management for innovative businesses and startups.
                </p>
            </div>
            <div className="banner__arrow"><a href="#about"><img src={Angle} alt="" /></a></div>
        </div>
    </section>
}

export default Banner