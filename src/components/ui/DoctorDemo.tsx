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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 }
            }
          }}
        >
          <motion.div className={styles.kicker} variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>Your Online Presence. Simplified.</motion.div>
          <motion.h2 className={styles.heading} variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
            Tailored for the <br />
            <span className="text-gradient">Doctors</span>
          </motion.h2>
          <motion.p className={styles.description} variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
            A smart, one-link profile with all your clinic details—timings, contact, location, UPI, and more.
          </motion.p>
          <motion.div className={styles.buttonGroup} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <button className={styles.primaryBtn}>Know More</button>
            <button 
              className={styles.secondaryBtn} 
              onClick={() => router.push('/demo/doctor')}
            >
              View Demo
            </button>
          </motion.div>
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
