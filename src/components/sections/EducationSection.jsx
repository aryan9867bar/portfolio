import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { education } from '../../data/education';

const EducationSection = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Education" subtitle="My academic background" />
            {education.length === 0 ? (
                <p className="text-center text-gray-500">No education details added yet.</p>
            ) : (
                <div className="space-y-6 max-w-4xl mx-auto">
                    {education.map((edu, index) => (
                        <Card key={index}>
                            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                            <p className="text-blue-400">{edu.institution}</p>
                            <p className="text-gray-500">{edu.year}</p>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EducationSection;
