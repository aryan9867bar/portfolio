import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { experience } from '../../data/experience';

const ExperienceSection = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Experience" subtitle="My professional journey" />
            <div className="space-y-6 max-w-4xl mx-auto">
                {experience.map((exp, index) => (
                    <Card key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                            <p className="text-blue-400">{exp.company}</p>
                        </div>
                        <span className="text-gray-500 mt-2 md:mt-0">{exp.year}</span>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;
