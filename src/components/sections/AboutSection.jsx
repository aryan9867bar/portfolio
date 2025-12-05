import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const AboutSection = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="About Me" subtitle="Getting to know the person behind the code" />
            <div className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed space-y-4">
                <p>
                    My journey in tech has been driven by curiosity and a desire to solve complex problems through elegant code.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
