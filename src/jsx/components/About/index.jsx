import React from 'react';
import './index.scss';

function About() {
    return <section className="about" id="about">
        <div className="container">
            <div className="about__content">
                <h3>
                    О нас
                </h3>
                <span className="hr"></span>
                <p>
                Мы предоставляем услуги по тестированию информационной безопасности компаний государственного, коммерческого секторов. Безопасность банков, компаний, транспортных узлов, технологических сервисов.
                </p>
            </div>
        </div>
    </section>
}

export default About