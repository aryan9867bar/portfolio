import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
    const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30",
        secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10",
        outline: "border-2 border-blue-600 text-blue-400 hover:bg-blue-600/10"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
