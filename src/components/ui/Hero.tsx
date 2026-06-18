'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { FloatingCards } from './FloatingCards';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <FloatingCards />
      
      <div className={`container ${styles.contentContainer}`}>
        <motion.div 
          className={styles.textContent}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 }
            }
          }}
        >
          <motion.div 
            className={styles.badge}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 12 } }
            }}
          >
            Digital Growth Agency
          </motion.div>
          
          <motion.h1 
            className="heading-xl"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            Grab Your <br />
            <span className="text-gradient">Digital Future</span>
          </motion.h1>
          
          <motion.p 
            className="text-body" style={{ maxWidth: '600px', marginTop: '1.5rem', marginBottom: '2.5rem' }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            We transform visionary ideas into immersive digital realities. From AI automation to stunning web experiences, we engineer growth for modern businesses.
          </motion.p>
          
          <motion.div 
            className={styles.ctaGroup}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
          >
            <Button variant="primary" onClick={() => {
              const phoneNumber = "+919870126712";
              const message = "Hello! I'm interested in your services.";
              const encodedMessage = encodeURIComponent(message);
              const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodedMessage}`;
              window.open(whatsappUrl, "_blank");
            }}>Start Your Journey</Button>
            <Button variant="secondary" onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>View Our Work</Button>
          </motion.div>
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
