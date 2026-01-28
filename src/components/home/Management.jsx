import React from 'react';
import { management } from '../../data/homeData';

const Management = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-4">
                        Our <span className="text-secondary">Management</span>
                    </h2>
                    <p className="text-gray-500">We have the Best Management under the guidance of</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {management.map((person, idx) => (
                        <div key={idx} className="group text-center">
                            <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg mx-auto max-w-sm">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <span className="text-white font-semibold">View Profile</span>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">{person.name}</h4>
                            <p className="text-secondary font-medium">{person.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Management;
