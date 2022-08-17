import React from 'react';
import './index.scss';
import Pic1 from '../../../assets/images/ten.svg'
import Pic2 from '../../../assets/images/user.svg'
import Pic3 from '../../../assets/images/team.svg'
function Reasons() {
    return <section id="reasons" className="reasons">
        <div className="container">
            <div className="reasons__content">
                <h3>Почему безопасность доверяют нам?</h3>
                <span className="hr"></span>
                <h5>Мы не просто занимаемся коммерческим пентестом, мы вырабатываем новые техники тестирования и помогаем в реализации защиты.</h5>

                <div className="reasons__row">
                    <div className="reasons__card">
                        <div className="reasons__card-icon">
                            <img src={Pic1} alt="" />
                        </div>

                        <div className="reasons__card-title">Более 10 лет опыта</div>
                        <p className="reasons__card-description">
                        Более 10 лет опыта в кибербезопасности по всему миру.
Использование собственного программного обеспечения и собственных инструментов.
Только Red Team.
                        </p>
                    </div>
                    <div className="reasons__card">
                        <div className="reasons__card-icon">
                            <img src={Pic2} alt="" />
                        </div>

                        <div className="reasons__card-title">Индивидуальный подход</div>
                        <p className="reasons__card-description">
                        Проверка безопасности проходит максимально осторожно и никогда не нарушает работу инфраструктуры.
                       </p>
                    </div>
                    <div className="reasons__card">
                        <div className="reasons__card-icon">
                            <img src={Pic3} alt="" />
                        </div>
                        <div className="reasons__card-title">Постоянная команда</div>
                        <p className="reasons__card-description">
                        Сильнейшая команда программистов, реверс инженеров, специалистов по кибер безопасности.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
}

export default Reasons