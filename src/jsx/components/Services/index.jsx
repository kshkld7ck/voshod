import React from 'react';
import './index.scss';
import Service1 from '../../../assets/images/service1.jpg'
import Service2 from '../../../assets/images/service2.jpg'
import Service3 from '../../../assets/images/service3.jpg'
import Service4 from '../../../assets/images/service4.jpg'
import Service5 from '../../../assets/images/service5.jpg'
import Service6 from '../../../assets/images/service6.jpg'
function Services() {

    const servicesList = [
        {
            image: Service1,
            title: "Тестирование \nкорпоративных сетей",
            text: "Анализ защищенности внутреннего периметра корпоративной сети.\nПроекрка работы АВ решений и попытка обхода систем, обеспечивающих безопасность.\nТестирвание может проводится, как из внешней среды, так и изнутри."
        },
        {
            image: Service2,
            title: "Тестирование \nбеспроводных сетей",
            text: "Анализ защищенности беспроводных сетей (wifi роутеры, точки доступа, гостевые сети, инфраструктура до провайдера)."
        },
        {
            image: Service3,
            title: "Тестирование \nWeb приложений и корпоративных порталов",
            text: "Анализ защищенности Web приложений, почтовых и web серверов, корпоративных облачных хранилищ."
        },
        {
            image: Service4,
            title: "Тестирование \nмобильных приложений",
            text: "Анализ защищенности Mobile App, под iOS, Android, Windows."
        },
        {
            image: Service5,
            title: "Анализ безопасности ПО",
            text: "Анализ безопасности ПО, путем проведения активного фаззинга и анализа исходного кода."
        },
        {
            image: Service6,
            title: "Разработка ПО",
            text: "Наша команда может выполнить разработку программного обеспечения любой сложности, которое будет обеспечивать комплексную защиту информационных систем."
        },
    ]
    return <section className="services" id="services">
        <div className="container">
            <div className="services__content">
                <h3>Наши услуги</h3>
                <span className="hr"></span>
                {/* <h6>We offer a wide range of services in creative spheres. Here is what we can offer to your company:</h6> */}
                <div className="services__list">
                    {servicesList.map((el) => {
                        return <div className="services__item">
                            <img src={el.image} alt="" className="services__item-image"/>
                            <div className="services__item-content">
                                <div className="services__item-title">{el.title}</div>
                                <span className="hr hr_white"></span>
                                <div className="services__item-text">{el.text}</div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </section>
}

export default Services;