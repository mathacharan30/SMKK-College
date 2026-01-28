import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '../data/footerData';
import PageHeader from '../components/ui/PageHeader';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header */}
            <PageHeader
                title="Contact Us"
                breadcrumbs={[{ label: 'Contact' }]}
            />

            <div className="container mx-auto px-4 -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Info Cards */}
                    <motion.div
                        className="bg-white p-8 rounded-xl shadow-xl text-center hover:-translate-y-2 transition-transform duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Our Location</h3>
                        <p className="text-gray-600">{contactInfo.address}</p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 rounded-xl shadow-xl text-center hover:-translate-y-2 transition-transform duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <Phone size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Phone Number</h3>
                        <p className="text-gray-600">
                            <a href={`tel:${contactInfo.phone}`} className="hover:text-primary">{contactInfo.phone}</a>
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 rounded-xl shadow-xl text-center hover:-translate-y-2 transition-transform duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Email Address</h3>
                        <p className="text-gray-600">
                            <a href={`mailto:${contactInfo.email}`} className="hover:text-primary">{contactInfo.email}</a>
                        </p>
                    </motion.div>
                </div>

                {/* Map and Form Section */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Map */}
                    <div className="bg-white p-4 rounded-lg shadow-lg h-[400px] lg:h-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.5065951881!2d76.62754417379826!3d12.281633129632176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7aad35e6fbbf%3A0xbca048b375caefa9!2sSRI%20KAGINELE%20COLLEGE%20OF%20EDUCATION!5e0!3m2!1sen!2sin!4v1701156563224!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="College Location"
                            className="rounded"
                        ></iframe>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="Your Email" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="Subject" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-md hover:bg-primary-dark transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
