'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './FloatingCards.module.css';

export const FloatingCards = () => {
  return (
    <div className={styles.container}>
       {/* Background glow and subtle phone mockup for depth */}
       <div className={styles.bgGlow}></div>
       <div className={styles.phoneMockup}>
          <div className={styles.phoneScreen}>
             <div className={styles.logoMark}>W</div>
          </div>
       </div>

       {/* Floating Pills */}
       <motion.div 
         className={`${styles.pill} ${styles.pillOrange}`}
         animate={{ y: [0, -10, 0], rotate: [-5, -5, -5] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
       >
         📱 App Development & Website
       </motion.div>

       <motion.div 
         className={`${styles.pill} ${styles.pillPink}`}
         animate={{ y: [0, 15, 0], rotate: [8, 8, 8] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
       >
         ⚡ Business Automation
       </motion.div>

       {/* Cards */}
       <motion.div 
         className={`${styles.card} ${styles.card1}`}
         animate={{ y: [0, -15, 0], rotate: [4, 6, 4] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
       >
         <div className={styles.cardHeader}>
           <div className={styles.avatar1}></div>
           <div className={styles.userInfo}>
             <span className={styles.name}>DesignCo</span>
             <span className={styles.time}>2h</span>
           </div>
         </div>
         <p className={styles.cardText}>
           The App development and Website completely elevated our brand identity. It's stunning!
         </p>
         <div className={styles.cardHighlight}>
           Impact: <span>Massive</span>
         </div>
       </motion.div>

       <motion.div 
         className={`${styles.card} ${styles.card2}`}
         animate={{ y: [0, 10, 0], rotate: [-6, -4, -6] }}
         transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
       >
         <div className={styles.cardHeader}>
           <div className={styles.avatar2}></div>
           <div className={styles.userInfo}>
             <span className={styles.name}>TechInnovate</span>
             <span className={styles.time}>4h</span>
           </div>
         </div>
         <p className={styles.cardText}>
           Seamless business automation and robust architecture. Highly recommended!
         </p>
         <div className={styles.cardHighlight}>
           Result: <span>Exceptional</span>
         </div>
       </motion.div>

       <motion.div 
         className={`${styles.card} ${styles.card3} ${styles.cardDark}`}
         animate={{ y: [0, -12, 0], rotate: [5, 3, 5] }}
         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
       >
         <div className={styles.cardHeader}>
           <div className={styles.avatar3}></div>
           <div className={styles.userInfo}>
             <span className={styles.name}>GlobalReach</span>
             <span className={styles.time}>5h</span>
           </div>
         </div>
         <p className={styles.cardText}>
           Our online presence has never looked this professional and engaging.
         </p>
         <div className={styles.cardHighlightDark}>
           Growth: <span>Continuous</span>
         </div>
       </motion.div>
    </div>
  );
};
