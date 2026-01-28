import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../data/homeData';
import PageHeader from '../components/ui/PageHeader';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <PageHeader
                title="About Institution"
                breadcrumbs={[{ label: 'About' }]}
            />

            <motion.div
                className="container mx-auto px-4 py-16 -mt-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img
                            src={aboutContent.image}
                            alt="About College"
                            className="w-full rounded-xl shadow-xl"
                        />
                    </motion.div>
                    <motion.div
                        className="lg:w-1/2 space-y-6"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="text-3xl font-heading font-bold text-primary">
                            Welcome to SKMK College of Education
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg text-justify">
                            {aboutContent.text1}
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg text-justify">
                            {aboutContent.text2}
                        </p>

                        <motion.div
                            className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border-l-4 border-secondary mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h3 className="font-bold text-xl mb-2 text-gray-800">Our Vision</h3>
                            <p className="text-gray-600">To prepare skilled and resourceful teachers by inculcating the values of citizenship, integrity, and national solidarity.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
