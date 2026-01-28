import React from 'react';
import { Link } from 'react-router-dom';
import { aboutContent } from '../../data/homeData';
import Button from '../ui/Button';

const AboutSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6 text-gray-800">
                            Welcome To <span className="text-secondary">SKMK College of Education</span>
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>{aboutContent.text1}</p>
                            <p>{aboutContent.text2}</p>
                        </div>
                        <div className="mt-8">
                            <Link to="/about">
                                <Button>Read More...</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="relative rounded-lg overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={aboutContent.image}
                                alt="About SKMK"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
