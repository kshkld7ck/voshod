import React from 'react';
import Header from '../layouts/Header';
import Banner from '../components/Banner'
import About from '../components/About';
import Reasons from '../components/Reasons';
import Services from '../components/Services';
import Pluses from '../components/Pluses';
import Footer from '../layouts/Footer';

function MainPage(props) {
    return <>
        <section className="to-black">
            <Banner />
            <About />
        </section>
        <Reasons />
        <section className="to-green">
            <Services />
            <Pluses />
            <Footer />
        </section>
    </>
}

export default MainPage