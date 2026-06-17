'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Bot, Database, TrendingUp, Megaphone } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    id: 'web',
    title: 'Website Development',
    description: 'Immersive, high-performance web experiences that captivate and convert.',
    icon: <Globe size={32} />,
    color: '#3b82f6' // blue
  },
  {
    id: 'ai',
    title: 'AI Business Automation',
    description: 'Intelligent systems that streamline operations and multiply your efficiency.',
    icon: <Bot size={32} />,
    color: '#8b5cf6' // purple
  },
  {
    id: 'crm',
    title: 'CRMs & ERPs',
    description: 'Custom scalable infrastructure to manage your business growth seamlessly.',
    icon: <Database size={32} />,
    color: '#10b981' // emerald
  },
  {
    id: 'seo',
    title: 'SEO Ranking',
    description: 'Dominate search results and drive organic, high-intent traffic to your brand.',
    icon: <TrendingUp size={32} />,
    color: '#f59e0b' // amber
  },
  {
    id: 'ads',
    title: 'Digital Advertisement',
    description: 'Data-driven campaigns that maximize ROI and scale your customer acquisition.',
    icon: <Megaphone size={32} />,
    color: '#f43f5e' // rose
  }
];

export const Services = () => {
  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className="container">
        <div className={styles.header}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">
              Complete <span className="text-gradient">Digital Growth</span>
            </h2>
            <p className="text-body" style={{ marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
              We don't just build websites; we engineer your entire digital ecosystem. Our comprehensive services are designed to scale your business exponentially.
            </p>
          </motion.div>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`${styles.card} glass`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div 
                className={styles.iconWrapper}
                style={{ '--glow-color': service.color } as React.CSSProperties}
              >
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              
              <div className={styles.cardGlow} style={{ background: service.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
