'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { MockDoctorSite } from './MockDoctorSite';
import styles from './DoctorDemo.module.css';

export const DoctorDemo = () => {
  const router = useRouter();

  return (
    <section className={styles.doctorSection}>
      <div className={styles.container}>
        {/* Left Side Content */}
        <motion.div 
          className={styles.leftContent}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.kicker}>Your Online Presence. Simplified.</div>
          <h2 className={styles.heading}>
            Tailored for the <br />
            <span className="text-gradient">Doctors</span>
          </h2>
          <p className={styles.description}>
            A smart, one-link profile with all your clinic details—timings, contact, location, UPI, and more.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn}>Know More</button>
            <button 
              className={styles.secondaryBtn} 
              onClick={() => router.push('/demo/doctor')}
            >
              View Demo
            </button>
          </div>
        </motion.div>

        {/* Right Side Demo Container */}
        <motion.div 
          className={styles.demoWrapper}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.demoContainer}>
            <MockDoctorSite />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
