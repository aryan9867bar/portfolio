import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => {
    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-20 pb-10 px-4 md:px-8"
        >
            {children}
        </motion.main>
    );
};

export default PageWrapper;
