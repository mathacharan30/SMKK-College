import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { usefulLinks1, usefulLinks2, contactInfo } from '../../data/footerData';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white">
            <div className="bg-[#142343] py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Useful Links 1 */}
                        <div>
                            <h5 className="text-lg font-bold mb-6 border-b border-gray-600 pb-2 inline-block">Useful Links</h5>
                            <ul className="space-y-2">
                                {usefulLinks1.map((link, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={link.href}
                                            target={link.external ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-secondary transition-colors text-sm flex items-center"
                                        >
                                            <span className="mr-2">›</span> {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Useful Links 2 */}
                        <div>
                            <h5 className="text-lg font-bold mb-6 border-b border-gray-600 pb-2 inline-block">Resources</h5>
                            <ul className="space-y-2">
                                {usefulLinks2.map((link, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={link.href}
                                            target={link.external ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-secondary transition-colors text-sm flex items-center"
                                        >
                                            <span className="mr-2">›</span> {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div>
                            <h5 className="text-lg font-bold mb-6 border-b border-gray-600 pb-2 inline-block">Contact Us</h5>
                            <h4 className="font-semibold mb-4 text-white">{contactInfo.title}</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <Phone size={18} className="mr-3 mt-1 text-secondary" />
                                    <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">{contactInfo.phone}</a>
                                </li>
                                <li className="flex items-start">
                                    <Mail size={18} className="mr-3 mt-1 text-secondary" />
                                    <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">{contactInfo.email}</a>
                                </li>
                                <li className="flex items-start">
                                    <MapPin size={18} className="mr-3 mt-1 text-secondary flex-shrink-0" />
                                    <span className="text-gray-300 text-sm leading-relaxed">
                                        {contactInfo.address}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-black py-6 border-t border-gray-800">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p className="mb-4 md:mb-0 text-center md:text-left">
                        © 2023 - 2024. All Rights Reserved.
                    </p>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li>|</li>
                        <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li>|</li>
                        <li><Link to="/contacts" className="hover:text-white transition-colors">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
