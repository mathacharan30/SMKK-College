import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Award, Users } from 'lucide-react';
import { heroSlides } from '../../data/homeData';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroSlides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % heroSlides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

    return (
        <div className="relative h-[950px] sm:h-[600px] md:h-[650px] lg:h-[750px] xl:h-[900px] overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-gray-900">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                     radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                     radial-gradient(circle at 40% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`
                }}></div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    {/* Background Image with Parallax Effect */}
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 8, ease: "easeOut" }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${heroSlides[current].image})` }}
                    >
                        {/* Lighter Gradient Overlay - so images are visible */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/30 to-secondary/40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                    </motion.div>

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8">
                        <div className="container mx-auto text-center text-white relative z-10" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' }}>
                            {/* Decorative Element */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                                className="inline-block mb-2 sm:mb-3 md:mb-4"
                            >
                                <div className="bg-secondary/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-full border border-white/30 flex items-center gap-1 sm:gap-2">
                                    <Sparkles size={16} className="text-secondary sm:w-5 sm:h-5" />
                                    <span className="text-xs sm:text-sm font-semibold">Excellence in Education</span>
                                </div>
                            </motion.div>

                            {/* Title with Stagger Animation - Explicitly White */}
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-white"
                            >
                                <span className="inline-block">
                                    {heroSlides[current].title.split(' ').map((word, idx) => (
                                        <motion.span
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + idx * 0.1 }}
                                            className="inline-block mr-2 sm:mr-3"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </span>
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 text-white/90 font-light leading-relaxed px-2"
                            >
                                {heroSlides[current].subtitle}
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center mb-6 sm:mb-8 md:mb-12"
                            >
                                <Link to="/about">
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(228, 25, 55, 0.4)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-xl transition-all flex items-center gap-1 sm:gap-2"
                                    >
                                        Explore Our College
                                        <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                                    </motion.button>
                                </Link>
                                <Link to="/contacts">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg border-2 border-white/30 transition-all"
                                    >
                                        Contact Us
                                    </motion.button>
                                </Link>
                            </motion.div>

                            {/* Stats Section */}
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                                className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto"
                            >
                                {[
                                    { icon: Award, label: "NAAC Accredited", value: "B Grade" },
                                    { icon: Users, label: "Students", value: "500+" },
                                    { icon: Sparkles, label: "Years of Excellence", value: "29+" }
                                ].map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 1.3 + idx * 0.1 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all"
                                    >
                                        <stat.icon className="mx-auto mb-2 sm:mb-3 text-secondary" size={24} />
                                        <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                                        <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 md:p-4 rounded-full backdrop-blur-md transition-all z-20 border border-white/30"
            >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </motion.button>
            <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 md:p-4 rounded-full backdrop-blur-md transition-all z-20 border border-white/30"
            >
                <ChevronRight size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </motion.button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
                {heroSlides.map((_, idx) => (
                    <motion.button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-300 ${
                            idx === current
                                ? 'bg-secondary w-8 sm:w-10 md:w-12 shadow-lg shadow-secondary/50'
                                : 'bg-white/50 hover:bg-white/80 w-2 sm:w-2.5 md:w-3'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
