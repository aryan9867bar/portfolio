import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { skills } from '../data/skills';

const Skills = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Skills" subtitle="My technical arsenal" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-white/5 p-4 rounded-lg">
                        <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
