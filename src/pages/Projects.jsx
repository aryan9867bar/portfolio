import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Projects" subtitle="Some of my recent works" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card key={index}>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-2 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">{t}</span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;
