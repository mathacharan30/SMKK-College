import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import AboutSection from '../components/home/AboutSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Management from '../components/home/Management';
import ClientsSlider from '../components/home/ClientsSlider';

const Home = () => {
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col w-full -mt-[140px] sm:-mt-[130px] md:-mt-[120px] lg:-mt-[110px]">
            <Hero />
            <Features />
            <AboutSection />
            <WhyChooseUs />
            <Management />
            <ClientsSlider />
        </div>
    );
};

export default Home;
