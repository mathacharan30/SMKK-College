import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const PageHeader = ({ title, breadcrumbs = [], gradient = "from-primary via-primary/95 to-primary/90" }) => {
    return (
        <div className={`relative bg-gradient-to-br ${gradient} py-20 md:py-24 overflow-hidden`}>
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Animated Dots Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center"
                >
                    {/* Title */}
                    <motion.h1 
                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 drop-shadow-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {title}
                    </motion.h1>

                    {/* Decorative Line */}
                    <motion.div 
                        className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    ></motion.div>

                    {/* Breadcrumbs */}
                    <motion.div 
                        className="flex justify-center items-center gap-2 text-white/90 text-sm md:text-base flex-wrap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Link 
                            to="/" 
                            className="flex items-center gap-1 hover:text-white transition-colors group"
                        >
                            <Home size={16} className="group-hover:scale-110 transition-transform" />
                            <span>Home</span>
                        </Link>
                        
                        {breadcrumbs.map((crumb, index) => (
                            <motion.div 
                                key={index}
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + (index * 0.1) }}
                            >
                                <ChevronRight size={16} className="text-white/60" />
                                {crumb.href ? (
                                    <Link 
                                        to={crumb.href} 
                                        className="hover:text-white transition-colors"
                                    >
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="text-white font-semibold bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                                        {crumb.label}
                                    </span>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg 
                    viewBox="0 0 1440 120" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                >
                    <path 
                        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
                        fill="white"
                        className="drop-shadow-lg"
                    />
                </svg>
            </div>
        </div>
    );
};

export default PageHeader;

