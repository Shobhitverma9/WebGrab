'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import styles from './CTA.module.css';

export const CTA = () => {
  return (
    <section className={`section ${styles.ctaSection}`}>
      <div className={`container ${styles.ctaContainer}`}>
        <motion.div 
          className={`${styles.ctaBox} glass`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.glowBg} />
          
          <h2 className="heading-lg">
            Ready to <span className="text-gradient">Dominate?</span>
          </h2>
          <p className="text-body" style={{ marginTop: '1.5rem', marginBottom: '3rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Stop blending in. Let's build a digital presence that demands attention and drives exponential growth for your business.
          </p>
          
          <div className={styles.actionGroup}>
            <Button 
              variant="primary"
              onClick={() => window.open('https://wa.me/919870126712?text=Hi%20WebGrab!%20I%27m%20ready%20to%20dominate.', '_blank')}
            >
              Connect now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
