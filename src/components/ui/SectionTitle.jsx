import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
            {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>
    );
};

export default SectionTitle;
