import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './FadeIn.js';  

const TransitionLeft = ({ children }) => {
    const transitionVal = {
        variants: fadeIn('left', 0.2),
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: false, amount: 0.05 }
    };

    return (
        <motion.div {...transitionVal}>
            {children}
        </motion.div>
    );
};

export default TransitionLeft;
