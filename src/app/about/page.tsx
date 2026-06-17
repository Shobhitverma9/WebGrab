import React from 'react';
import styles from './page.module.css';

export const metadata = {
  title: 'About Us | WebGrab',
  description: 'Learn more about WebGrab, the premier design and digital growth agency building immersive web experiences.',
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>About WebGrab</h1>
          <p className={styles.subtitle}>
            We are a team of passionate creators, developers, and strategists dedicated to 
            transforming your digital presence into an immersive experience.
          </p>
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.gridItem}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <h2>Our Mission</h2>
              <p>
                To empower businesses with state-of-the-art web technology, compelling design, 
                and automated solutions that drive measurable growth and unparalleled user engagement.
              </p>
            </div>
            <div className={styles.gridItem}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h2>Our Values</h2>
              <p>
                Innovation, integrity, and excellence. We believe in pushing boundaries, delivering on 
                our promises, and crafting experiences that leave a lasting impact on your audience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.storySection}>
        <div className={styles.container}>
          <h2>Our Story</h2>
          <div className={styles.storyContent}>
            <p>
              Founded with a vision to bridge the gap between aesthetics and functionality, WebGrab has 
              evolved into a premier digital growth agency. Our journey began with a simple belief: 
              every brand deserves a digital home that is as unique and dynamic as its physical counterpart.
            </p>
            <p>
              Over the years, we've partnered with forward-thinking companies to build everything from 
              lightning-fast web applications to sophisticated AI automations. Our multidisciplinary team 
              brings together the best in design, development, and strategy to ensure that your digital 
              investment yields extraordinary returns.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
