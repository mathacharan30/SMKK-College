import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200";

    const variants = {
        primary: "border-transparent shadow-sm text-white bg-secondary hover:bg-secondary/90 focus:ring-secondary",
        secondary: "border-transparent text-secondary bg-secondary/10 hover:bg-secondary/20 focus:ring-secondary",
        outline: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary",
        ghost: "border-transparent text-gray-700 hover:bg-gray-100 focus:ring-primary",
        link: "border-transparent text-secondary hover:underline p-0 h-auto",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
