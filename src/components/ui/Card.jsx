import React from 'react';

const Card = ({ children, className = '' }) => {
    return (
        <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors ${className}`}>
            {children}
        </div>
    );
};

export default Card;
