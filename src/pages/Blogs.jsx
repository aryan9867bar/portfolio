import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { blogs } from '../data/blogs';

const Blogs = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Blogs" subtitle="Thoughts and insights" />
            {blogs.length === 0 ? (
                <p className="text-center text-gray-500">No blogs yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Map blogs here */}
                </div>
            )}
        </div>
    );
};

export default Blogs;
