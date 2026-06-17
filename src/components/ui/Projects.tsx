'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'ISKCON Ghaziabad',
    category: 'Spiritual / Community',
    color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    url: 'https://iskconghaziabad.com/',
    image: '/ISKCONGzb.png'
  },
  {
    id: 2,
    title: 'Vedic Travel',
    category: 'Travel & Tourism',
    color: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    url: 'https://vedictravel.com/',
    image: '/Vedictravel.png'
  },
  {
    id: 3,
    title: 'Shop Ghumakkad',
    category: 'E-Commerce',
    color: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
    url: 'https://www.shopghumakkad.com/',
    image: '/shopghumakkad.png'
  },
  {
    id: 4,
    title: 'Vanilla Farms',
    category: 'Agriculture & Nature',
    color: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    url: 'https://vanillafarms.org/',
    image: '/vanillafarms.png'
  },
  {
    id: 5,
    title: 'Travergetic',
    category: 'Travel & Tourism',
    color: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    url: 'https://travergetic.com/',
    image: '/Travergetic.png'
  },
  {
    id: 6,
    title: 'Air MBM',
    category: 'Aviation / Travel',
    color: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
    url: 'https://airmbm.com/',
    image: '/airmbm.png'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className={`section ${styles.projectsSection}`}>
      <div className="container">
        <div className={styles.header}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.h2 className="heading-lg" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}>
              Featured <span className="text-gradient">Work</span>
            </motion.h2>
            <motion.p className="text-body" style={{ marginTop: '1rem', maxWidth: '600px' }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}>
              A glimpse into the digital empires we've helped build. Premium quality, unparalleled performance.
            </motion.p>
          </motion.div>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <motion.a 
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
              style={{ textDecoration: 'none' }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -15 }}
            >
              <div 
                className={styles.projectImage}
                style={{ background: project.color }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                />
                <div className={styles.imageOverlay} />
                <motion.div 
                  className={styles.viewProject}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUpRight size={24} />
                </motion.div>
              </div>
              <div className={styles.projectInfo}>
                <p className={styles.projectCategory}>{project.category}</p>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
