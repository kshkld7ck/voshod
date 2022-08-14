import React from 'react';
import './index.scss';
import Check from '../../../assets/images/check.svg';

function Pluses() {
    const items = [
        {
            title: "Clear understanding of a business conception",
            text: "As part of PR management, our goal is to help you develop in accordance with progressive technologies and ideas, as well as expand your interaction with clients and partners."
        },
        {
            title: "Save time and money",
            text: "You will work with financial consultants and project professionals who will assist you with managing business taxes. It saves a lot of money and helps to avoid costly errors with documents."
        },
        {
            title: "Productivity elevation",
            text: "We will help to maximize the productivity of your business. Our professional consultants will understand how to interview potential clients and draw up a complete marketing plan."
        },
    ]
    return <section className="pluses" id="pluses">
        <div className="container">
            <div className="pluses__content">
                <h3>What Will You Get?</h3>
                <span className="hr"></span>

                <div className="pluses__list">
                    {items.map((el, i) => {
                        return <div className="pluses__item">
                            <img src={Check} alt="" className="pluses__icon" />

                            <div className="pluses__item-info">
                                <div className="pluses__item-title">{el.title}</div>
                                <div className="pluses__item-text">{el.text}</div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </section>
}

export default Pluses