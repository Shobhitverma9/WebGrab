'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Scene } from '../canvas/Scene';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.canvasContainer}>
        <Scene />
      </div>
      
      <div className={`container ${styles.contentContainer}`}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Digital Growth Agency
          </motion.div>
          
          <h1 className="heading-xl">
            Grab Your <br />
            <span className="text-gradient">Digital Future</span>
          </h1>
          
          <p className="text-body" style={{ maxWidth: '600px', marginTop: '1.5rem', marginBottom: '2.5rem' }}>
            We transform visionary ideas into immersive digital realities. From AI automation to stunning web experiences, we engineer growth for modern businesses.
          </p>
          
          <div className={styles.ctaGroup}>
            <Button variant="primary">Start Your Journey</Button>
            <Button variant="secondary">View Our Work</Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className={styles.mouse}>
          <motion.div 
            className={styles.wheel}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <span className={styles.scrollText}>Scroll to explore</span>
      </motion.div>
    </section>
  );
};
