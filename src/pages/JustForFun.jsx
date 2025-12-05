import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { fun } from '../data/fun';

const JustForFun = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Just For Fun" subtitle="Hobby projects and experiments" />
            {fun.length === 0 ? (
                <p className="text-center text-gray-500">Nothing here yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Map fun items here */}
                </div>
            )}
        </div>
    );
};

export default JustForFun;
