import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { sendEmail } from '../services/emailService';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await sendEmail(form);
        setLoading(false);
        alert('Message sent!');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Contact Me" subtitle="Let's build something together" />
            <div className="max-w-2xl mx-auto">
                <Card>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 mb-2">Message</label>
                            <textarea
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 h-32"
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                required
                            ></textarea>
                        </div>
                        <Button type="submit" className="w-full">
                            {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Contact;
