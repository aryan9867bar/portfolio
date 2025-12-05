import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { certifications } from '../../data/certifications';

const CertificationsSection = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Certifications" subtitle="Credentials and badges" />
            {certifications.length === 0 ? (
                <p className="text-center text-gray-500">No certifications added yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <Card key={index} className="text-center">
                            <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                            <p className="text-blue-400 text-sm">{cert.issuer}</p>
                            <p className="text-gray-500 text-sm">{cert.year}</p>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CertificationsSection;
