import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { education } from '../data/education';

const Education = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Education" subtitle="My academic background" />
            {education.length === 0 ? (
                <p className="text-center text-gray-500">No education details added yet.</p>
            ) : (
                <div className="space-y-6 max-w-4xl mx-auto">
                    {/* Map education here */}
                </div>
            )}
        </div>
    );
};

export default Education;
