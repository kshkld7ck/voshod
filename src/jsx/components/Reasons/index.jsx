import React from 'react';
import './index.scss';
import Pic1 from '../../../assets/images/set.svg'
import Pic2 from '../../../assets/images/user.svg'
import Pic3 from '../../../assets/images/magic.svg'
function Reasons() {
    return <section id="reasons" className="reasons">
        <div className="container">
            <div className="reasons__content">
                <h3>Why Choose Us?</h3>
                <span className="hr"></span>
                <h5>We will provide you with the best services based on our significant industry experience.</h5>

                <div className="reasons__row">
                    <div className="reasons__card">
                        <div className="reasons__card-icon">
                            <img src={Pic1} alt="" />
                        </div>

                        <div className="reasons__card-title">10 years of work</div>
                        <p className="reasons__card-description">
                            We have established ourselves as professionals in our field, working with both small and well-known brands.
                        </p>
                    </div>
                    <div className="reasons__card">
                        <div className="reasons__card-icon">
                            <img src={Pic2} alt="" />
                        </div>

                        <div className="reasons__card-title">Individual approach</div>
                        <p className="reasons__card-description">
                            Every company has its conception and motto. We work to develop unique products.
                       </p>
                    </div>
                    <div className="reasons__card">
                        <div className="reasons__card-icon">
                            <img src={Pic3} alt="" />
                        </div>
                        <div className="reasons__card-title">We grow for the future</div>
                        <p className="reasons__card-description">
                            Highly skilled professionals will help your business grow on par with the new technologies.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
}

export default Reasons