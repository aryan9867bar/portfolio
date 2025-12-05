import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { blogs } from '../../data/blogs';

const BlogsSection = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Blogs" subtitle="Thoughts and insights" />
            {blogs.length === 0 ? (
                <p className="text-center text-gray-500">No blogs yet. Check back soon!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogs.map((blog, index) => (
                        <Card key={index}>
                            <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
                            <p className="text-gray-400">{blog.excerpt}</p>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogsSection;
