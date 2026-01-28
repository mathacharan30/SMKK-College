import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { topBarLinks, socialLinks, mainNavigation } from '../../data/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => {
        setIsOpen(false);
        setActiveDropdown(null);
    }

    const handleDropdownEnter = (index) => {
        if (window.innerWidth >= 1024) {
            setActiveDropdown(index);
        }
    };

    const handleDropdownLeave = () => {
        if (window.innerWidth >= 1024) {
            setActiveDropdown(null);
        }
    };

    const toggleDropdownMobile = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    }

    return (
        <header className={`w-full fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ${
            scrolled 
                ? 'bg-white/95 backdrop-blur-xl shadow-2xl' 
                : 'bg-gradient-to-b from-white via-white/98 to-white/95 shadow-lg'
        }`}>
            {/* Top Bar */}
            <motion.div
                initial={{ height: 'auto' }}
                animate={{ height: scrolled ? 0 : 'auto', opacity: scrolled ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-primary via-secondary to-primary/90 border-b border-primary-dark/20 overflow-hidden relative"
            >
                <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%),
                                     radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`
                }}></div>
                <div className="container mx-auto px-4 py-2 md:py-2.5 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 text-xs md:text-sm relative z-10">
                    <ul className="flex flex-wrap gap-x-3 md:gap-x-6 gap-y-1 text-white/90 justify-center md:justify-start">
                        {topBarLinks.map((link, idx) => (
                            <motion.li
                                key={idx}
                                whileHover={{ scale: 1.05, color: '#ffffff' }}
                                className="hover:text-white transition-colors cursor-pointer relative group"
                            >
                                {link.external ? (
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                        {link.label}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/50 group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                ) : (
                                    <Link to={link.href} className="flex items-center gap-1">
                                        {link.label}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/50 group-hover:w-full transition-all duration-300"></span>
                                    </Link>
                                )}
                            </motion.li>
                        ))}
                    </ul>
                    <div className="flex space-x-2 md:space-x-4">
                        {socialLinks.map((link, idx) => {
                            const Icon = link.icon === 'Facebook' ? Facebook : link.icon === 'Twitter' ? Twitter : link.icon === 'Youtube' ? Youtube : Mail;
                            return (
                                <motion.a
                                    key={idx}
                                    href={link.href}
                                    whileHover={{ scale: 1.25, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-white/80 hover:text-white transition-colors bg-white/10 p-1.5 md:p-2 rounded-lg hover:bg-white/20"
                                >
                                    <Icon size={14} className="md:w-[18px] md:h-[18px]" />
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            {/* Main Header */}
            <div className={`container mx-auto px-4 transition-all duration-300 ${scrolled ? 'py-2.5' : 'py-4'}`}>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group flex-shrink-0" onClick={closeMenu}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="relative"
                        >
                            <motion.img
                                src="/images/klogo.png"
                                alt="Logo"
                                className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'} w-auto drop-shadow-lg`}
                            />
                        </motion.div>
                        {/* <div className="hidden 2xl:block">
                            <motion.h1
                                className={`font-bold text-primary font-heading uppercase leading-tight transition-all duration-300 ${scrolled ? 'text-sm' : 'text-lg'}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Sri Kaginele Mahasamsthana <br />
                                <span className="text-secondary">Kanaka Gurupeetha</span> College of Education
                            </motion.h1>
                        </div> */}
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:grid justify-center gap-1 flex-1" style={{ gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' }}>
                        {mainNavigation.map((item, idx) => {
                            const isSimpleLink = !item.type && item.href !== '#';
                            const content = (
                                <motion.div
                                    whileHover={{ y: -3 }}
                                    className={`px-3 py-2.5 text-xs md:text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 relative overflow-hidden group/nav w-full ${
                                        activeDropdown === idx 
                                            ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30' 
                                            : 'text-primary hover:bg-primary/5'
                                    }`}
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    {(item.type === 'dropdown' || item.type === 'mega') && (
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-300 relative z-10 ${activeDropdown === idx ? 'rotate-180' : ''}`}
                                        />
                                    )}
                                    {activeDropdown !== idx && (
                                        <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300"></span>
                                    )}
                                </motion.div>
                            );

                            if (isSimpleLink && item.external) {
                                return (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={closeMenu}
                                        className="relative group"
                                    >
                                        {content}
                                    </a>
                                );
                            } else if (isSimpleLink) {
                                return (
                                    <Link
                                        key={idx}
                                        to={item.href}
                                        onClick={closeMenu}
                                        className="relative group"
                                    >
                                        {content}
                                    </Link>
                                );
                            }

                            return (
                                <div
                                    key={idx}
                                    className="relative group"
                                    onMouseEnter={() => handleDropdownEnter(idx)}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    {content}

                                    {/* Dropdown / Mega Menu */}
                                    <AnimatePresence>
                                        {activeDropdown === idx && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className={`absolute left-0 top-full mt-2 bg-white/95 backdrop-blur-xl rounded-xl border border-white/40 overflow-hidden z-50 shadow-2xl ${
                                                    item.type === 'mega' ? 'min-w-[280px] max-w-[320px]' : 'min-w-[220px]'
                                                }`}
                                            >
                                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary/80"></div>

                                            {item.type === 'dropdown' ? (
                                                <ul className="py-2">
                                                    {item.items.map((subItem, subIdx) => (
                                                        <motion.li
                                                            key={subIdx}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: subIdx * 0.05 }}
                                                            className="group/item"
                                                        >
                                                            {subItem.external ? (
                                                                <a
                                                                    href={subItem.href}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="block px-4 py-3 text-gray-700 font-medium transition-all group-hover/item:text-primary group-hover/item:bg-gradient-to-r group-hover/item:from-primary/5 group-hover/item:to-secondary/5 relative overflow-hidden"
                                                                >
                                                                    <span className="relative z-10">{subItem.label}</span>
                                                                </a>
                                                            ) : (
                                                                <Link
                                                                    to={subItem.href}
                                                                    onClick={closeMenu}
                                                                    className="block px-4 py-3 text-gray-700 font-medium transition-all group-hover/item:text-primary group-hover/item:bg-gradient-to-r group-hover/item:from-primary/5 group-hover/item:to-secondary/5 relative overflow-hidden"
                                                                >
                                                                    <span className="relative z-10">{subItem.label}</span>
                                                                </Link>
                                                            )}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            ) : item.type === 'mega' ? (
                                                <div className="py-2">
                                                    {item.columns.map((col, colIdx) => (
                                                        <motion.div
                                                            key={colIdx}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: colIdx * 0.05 }}
                                                        >
                                                            {col.title && (
                                                                <h4 className="font-bold text-primary px-4 py-2.5 text-sm bg-gradient-to-r from-primary/5 to-secondary/5 border-l-3 border-primary">
                                                                    {col.title}
                                                                </h4>
                                                            )}
                                                            <ul>
                                                                {col.items.map((subItem, subIdx) => (
                                                                    <li key={subIdx} className="group/mega-item">
                                                                        {subItem.external ? (
                                                                            <a
                                                                                href={subItem.href}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary transition-all group-hover/mega-item:bg-gradient-to-r group-hover/mega-item:from-primary/5 group-hover/mega-item:to-secondary/5"
                                                                            >
                                                                                {subItem.label}
                                                                            </a>
                                                                        ) : (
                                                                            <Link
                                                                                to={subItem.href}
                                                                                onClick={closeMenu}
                                                                                className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary transition-all group-hover/mega-item:bg-gradient-to-r group-hover/mega-item:from-primary/5 group-hover/mega-item:to-secondary/5"
                                                                            >
                                                                                {subItem.label}
                                                                            </Link>
                                                                        )}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            ) : null}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                </div>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="lg:hidden text-white bg-gradient-to-r from-primary to-secondary p-2.5 rounded-lg shadow-lg hover:shadow-xl shadow-primary/30 hover:shadow-primary/40 transition-all flex-shrink-0"
                        onClick={toggleMenu}
                        whileTap={{ scale: 0.95 }}
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/20 overflow-y-auto max-h-[80vh]"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            {mainNavigation.map((item, idx) => {
                                const isSimpleLink = !item.type && item.href !== '#';
                                return (
                                <div key={idx}>
                                    <div
                                        className="flex justify-between items-center py-2 px-2 text-primary font-semibold border-b border-gray-100"
                                        onClick={() => {
                                            if (!isSimpleLink) {
                                                toggleDropdownMobile(idx);
                                            }
                                        }}
                                    >
                                        {isSimpleLink ? (
                                            item.external ? (
                                                <a href={item.href} target="_blank" rel="noopener noreferrer" className="w-full" onClick={closeMenu}>{item.label}</a>
                                            ) : (
                                                <Link to={item.href} onClick={closeMenu} className="w-full">{item.label}</Link>
                                            )
                                        ) : item.href === '#' ? (
                                            <span>{item.label}</span>
                                        ) : (
                                            item.external ? (
                                                <a href={item.href} target="_blank" rel="noopener noreferrer" className="w-full" onClick={closeMenu}>{item.label}</a>
                                            ) : (
                                                <Link to={item.href} onClick={closeMenu} className="w-full">{item.label}</Link>
                                            )
                                        )}
                                        {(item.type === 'dropdown' || item.type === 'mega') && <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === idx ? 'rotate-180' : ''}`} />}
                                    </div>

                                    {/* Mobile Submenu */}
                                    <AnimatePresence>
                                        {activeDropdown === idx && (item.type === 'dropdown' || item.type === 'mega') && (
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: 'auto' }}
                                                exit={{ height: 0 }}
                                                className="bg-gray-50 pl-4 overflow-hidden"
                                            >
                                                {item.type === 'dropdown' && (
                                                    <ul className="py-2 space-y-2">
                                                        {item.items.map((subItem, subIdx) => (
                                                            <li key={subIdx}>
                                                                {subItem.subItems ? (
                                                                    <div className="py-1">
                                                                        <span className="font-medium text-gray-700 block mb-1">{subItem.label}</span>
                                                                        <ul className="pl-2 border-l-2 border-gray-200 space-y-1">
                                                                            {subItem.subItems.map((deepItem, deepIdx) => (
                                                                                <li key={deepIdx}>
                                                                                    <Link to={deepItem.href} onClick={closeMenu} className="text-sm text-gray-600 block py-1">
                                                                                        {deepItem.label}
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ) : (
                                                                    subItem.external ? (
                                                                        <a href={subItem.href} target="_blank" rel="noopener noreferrer" className="block text-gray-600 py-1">{subItem.label}</a>
                                                                    ) : (
                                                                        <Link to={subItem.href} onClick={closeMenu} className="block text-gray-600 py-1">{subItem.label}</Link>
                                                                    )
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                                {item.type === 'mega' && (
                                                    <div className="py-2 space-y-4">
                                                        {item.columns.map((col, colIdx) => (
                                                            <div key={colIdx}>
                                                                {col.title && <h5 className="font-bold text-gray-800 text-sm mb-1">{col.title}</h5>}
                                                                <ul className="space-y-1">
                                                                    {col.items.map((subItem, subIdx) => (
                                                                        <li key={subIdx}>
                                                                            {subItem.external ? (
                                                                                <a href={subItem.href} target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600">{subItem.label}</a>
                                                                            ) : (
                                                                                <Link to={subItem.href} onClick={closeMenu} className="block text-sm text-gray-600">{subItem.label}</Link>
                                                                            )}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                            })}

                            {/* Top Bar Links for Mobile */}
                            <div className="pt-4 border-t mt-4">
                                <h4 className="font-bold text-gray-400 text-xs uppercase mb-2">Quick Links</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {topBarLinks.map((link, idx) => (
                                        <div key={idx} className="text-sm">
                                            {link.external ? (
                                                <a href={link.href} className="text-gray-600">{link.label}</a>
                                            ) : (
                                                <Link to={link.href} onClick={closeMenu} className="text-gray-600">{link.label}</Link>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
