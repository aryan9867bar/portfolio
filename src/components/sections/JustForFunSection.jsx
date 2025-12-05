import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { fun } from '../../data/fun';

const JustForFunSection = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Just For Fun" subtitle="Hobby projects and experiments" />
            {fun.length === 0 ? (
                <p className="text-center text-gray-500">Nothing here yet. Stay tuned!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {fun.map((item, index) => (
                        <Card key={index}>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default JustForFunSection;
