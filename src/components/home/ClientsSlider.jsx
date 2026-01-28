import React from 'react';
import { motion } from 'framer-motion';

const clients = [
    { src: '/images/clients/i1.png', alt: 'Client 1' },
    { src: '/images/clients/i2.png', alt: 'Client 2' },
    { src: '/images/clients/i3.png', alt: 'Client 3' },
    { src: '/images/clients/i4.png', alt: 'Client 4' },
    { src: '/images/clients/i5.png', alt: 'Client 5' },
    // Duplicate for infinite scroll effect
    { src: '/images/clients/i1.png', alt: 'Client 1' },
    { src: '/images/clients/i2.png', alt: 'Client 2' },
    { src: '/images/clients/i3.png', alt: 'Client 3' },
    { src: '/images/clients/i4.png', alt: 'Client 4' },
    { src: '/images/clients/i5.png', alt: 'Client 5' },
];

const ClientsSlider = () => {
    return (
        <section className="py-10 bg-primary/5 border-t border-gray-200 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex w-[200%]">
                    <motion.div
                        className="flex w-full items-center justify-around space-x-10"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear"
                        }}
                    >
                        {clients.map((client, index) => (
                            <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <img src={client.src} alt={client.alt} className="max-h-16 w-auto" />
                            </div>
                        ))}
                        {clients.map((client, index) => (
                            <div key={`dup-${index}`} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <img src={client.src} alt={client.alt} className="max-h-16 w-auto" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSlider;
