import React from 'react';
import './index.scss';

function Services() {

    const servicesList = [
        {
            image: "https://thumb.tildacdn.com/tild6230-3330-4864-a663-373862393338/-/cover/560x420/center/center/-/format/webp/25798280315_b302b51e4f_k.jpg",
            title: "Тестирование \nкорпоративных сетей",
            text: "We develop the main conception of a company according to its targets and develop strategies to gain a competitive advantage."
        },
        {
            image: "https://thumb.tildacdn.com/tild3364-6265-4661-b864-343237386631/-/cover/560x420/center/center/-/format/webp/22506109386_e2d8c8a166_k.jpg",
            title: "Тестирование \nбеспроводных сетей",
            text: "Recruiting is a very important part of the management process. We help create professional portraits and develop ways to train staff."
        },
        {
            image: "https://thumb.tildacdn.com/tild6438-3934-4463-a533-613833626532/-/cover/560x420/center/center/-/format/webp/1000_25388863844_036b33e2fc_k.jpg",
            title: "Тестирование \nпрограммного обеспечения",
            text: "We develop new products, set business processes and timelines, estimate costs, tailor motivation techniques and take care of the documentation process."
        },
    ]
    return <section className="services" id="services">
        <div className="container">
            <div className="services__content">
                <h3>Our Services</h3>
                <span className="hr"></span>
                <h6>We offer a wide range of services in creative spheres. Here is what we can offer to your company:</h6>
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