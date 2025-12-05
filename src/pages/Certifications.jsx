import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { certifications } from '../data/certifications';

const Certifications = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Certifications" subtitle="Credentials and badges" />
            {certifications.length === 0 ? (
                <p className="text-center text-gray-500">No certifications added yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Map certifications here */}
                </div>
            )}
        </div>
    );
};

export default Certifications;
