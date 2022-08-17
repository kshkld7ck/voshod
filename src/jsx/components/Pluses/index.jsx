import React from 'react';
import './index.scss';
import Check from '../../../assets/images/check.svg';

function Pluses() {
    const items = [
        {
            title: "Clear understanding of a business conception",
            text: "Соответствие требованиям и рекомендациям регуляторов, которые уделяют значительное внимание информационной безопасности, в том числе в свете закона о критической информационной инфраструктуре (КИИ)"
        },
        {
            title: "Save time and money",
            text: "Эффективный выбор средств защиты и точек их применения в инфраструктуре на основе информации о вероятном пути проникновения потенциального нарушителя и используемых им техниках атаки"
        },
        {
            title: "Productivity elevation",
            text: "Снижение затрат на защиту: результаты пентеста позволяют ранжировать недостатки безопасности и направить ресурсы в первую очередь на устранение наиболее опасных угроз (то есть снизить риск компрометации систем и возможные затраты на устранение последствий атак в будущем)"
        },
        {
            title: "Productivity elevation",
            text: "Репутация компании как гаранта безопасности данных клиентов и партнеров может быть дополнительным преимуществом в бизнесе."
        },
    ]
    return <section className="pluses" id="pluses">
        <div className="container">
            <div className="pluses__content">
                <h3>Что дает тестирование безопасности?</h3>
                <span className="hr"></span>

                <div className="pluses__list">
                    {items.map((el, i) => {
                        return <div className="pluses__item">
                            <img src={Check} alt="" className="pluses__icon" />

                            <div className="pluses__item-info">
                                {/* <div className="pluses__item-title">{el.title}</div> */}
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