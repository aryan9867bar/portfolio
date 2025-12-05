import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { achievements } from '../data/achievements';

const Achievements = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Achievements" subtitle="Milestones and awards" />
            {achievements.length === 0 ? (
                <p className="text-center text-gray-500">No achievements added yet.</p>
            ) : (
                <div className="space-y-6 max-w-4xl mx-auto">
                    {/* Map achievements here */}
                </div>
            )}
        </div>
    );
};

export default Achievements;
