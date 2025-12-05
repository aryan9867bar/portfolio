import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { achievements } from '../../data/achievements';

const AchievementsSection = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Achievements" subtitle="Milestones and awards" />
            {achievements.length === 0 ? (
                <p className="text-center text-gray-500">No achievements added yet.</p>
            ) : (
                <div className="space-y-6 max-w-4xl mx-auto">
                    {achievements.map((achievement, index) => (
                        <Card key={index}>
                            <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                            <p className="text-gray-400">{achievement.description}</p>
                            <p className="text-gray-500 text-sm mt-2">{achievement.year}</p>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AchievementsSection;
