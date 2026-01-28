import React from 'react';
import { features } from '../../data/homeData';

const Features = () => {
    return (
        <section className="py-8 sm:py-12 md:py-16 mt-4 sm:mt-0 md:-mt-20 relative z-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
                            <div className="h-40 sm:h-44 md:h-48 overflow-hidden relative">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 sm:p-4">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white relative z-10">
                                        Our <span className="text-secondary">{feature.title.replace('Our ', '')}</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="p-4 sm:p-5 md:p-6 border-t-4 border-secondary">
                                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
