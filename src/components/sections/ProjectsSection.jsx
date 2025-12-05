import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { projects } from '../../data/projects';

const ProjectsSection = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Projects" subtitle="Some of my recent works" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} className="hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;
