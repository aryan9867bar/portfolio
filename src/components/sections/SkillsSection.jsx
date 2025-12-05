import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { skills } from '../../data/skills';

const SkillsSection = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Skills" subtitle="My technical arsenal" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all">
                        <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                            <div
                                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                        <p className="text-gray-400 text-sm mt-2">{skill.level}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
