import React from 'react';

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Experience', id: 'experience' },
        { name: 'Education', id: 'education' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <button
                    onClick={() => scrollToSection('home')}
                    className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                >
                    Portfolio
                </button>
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
