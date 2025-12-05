import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-white/10">
            <div className="container mx-auto px-6 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
