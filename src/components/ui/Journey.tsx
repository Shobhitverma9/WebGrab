'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Lightbulb, Code2, Rocket, Trophy } from 'lucide-react';
import styles from './Journey.module.css';

const steps = [
  {
    title: 'Discovery',
    description: 'We dive deep into your business, understanding your goals, audience, and market position.',
    icon: <Target size={24} />
  },
  {
    title: 'Strategy',
    description: 'Crafting a tailored digital roadmap, selecting the right technologies to maximize ROI.',
    icon: <Lightbulb size={24} />
  },
  {
    title: 'Development',
    description: 'Our expert team builds your immersive website, AI systems, and CRM infrastructure.',
    icon: <Code2 size={24} />
  },
  {
    title: 'Growth',
    description: 'Executing data-driven SEO and Ad campaigns to drive high-intent traffic to your new platform.',
    icon: <Rocket size={24} />
  },
  {
    title: 'Dominance',
    description: 'Continuous optimization and scaling to ensure your brand remains at the top of your industry.',
    icon: <Trophy size={24} />
  }
];

export const Journey = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="journey" className={`section ${styles.journeySection}`}>
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            className="heading-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Your Path to <span className="text-gradient">Dominance</span>
          </motion.h2>
        </div>

        <div className={styles.timelineContainer} ref={containerRef}>
          {/* Animated vertical line */}
          <div className={styles.timelineTrack}>
            <motion.div 
              className={styles.timelineFill} 
              style={{ height: lineHeight }} 
            />
          </div>

          <div className={styles.stepsWrapper}>
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  className={`${styles.step} ${isEven ? styles.stepLeft : styles.stepRight}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className={styles.stepContent}>
                    <div className={styles.stepIcon}>{step.icon}</div>
                    <div className={styles.stepText}>
                      <span className={styles.stepNumber}>0{index + 1}</span>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                  
                  {/* The dot on the timeline */}
                  <div className={styles.timelineDot} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
