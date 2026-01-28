import React from 'react';
import { Building, Users, Book, Award } from 'lucide-react';
import { whyChooseUs } from '../../data/homeData';

const iconMap = {
    'Building': Building,
    'Users': Users,
    'Book': Book,
    'Award': Award
};

const WhyChooseUs = () => {
    return (
        <section className="py-20 relative bg-primary">
            <div className="absolute inset-0 bg-[url('/images/bg/bg1.jpg')] bg-cover bg-fixed opacity-20 mix-blend-overlay"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                        Why <span className="text-secondary">Choose Us?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {whyChooseUs.map((item, idx) => {
                        const Icon = iconMap[item.icon];
                        return (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all flex items-start space-x-4">
                                <div className="bg-white p-3 rounded-full flex-shrink-0">
                                    <Icon className="text-secondary w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-200">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
