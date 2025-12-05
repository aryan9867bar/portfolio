import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="About Me" subtitle="Getting to know the person behind the code" />
            <div className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                <p>
                    I am a passionate developer...
                </p>
            </div>
        </div>
    );
};

export default About;
