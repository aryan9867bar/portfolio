import React from 'react';
import SceneCanvas from '../three/SceneCanvas';

const HomeSection = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            <SceneCanvas />
            <div className="z-10 text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Welcome to My Universe
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                    Exploring the intersection of code, design, and innovation.
                </p>
            </div>
        </div>
    );
};

export default HomeSection;
