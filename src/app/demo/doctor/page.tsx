'use client';

import React, { useEffect } from 'react';
import { MockDoctorSite } from '@/components/ui/MockDoctorSite';
import styles from '@/components/ui/DoctorDemo.module.css';

export default function DoctorDemoPage() {
  // Inject CSS to hide the global agency Navbar and Footer, and reset body background
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      header, nav[class*="Navbar"], footer { display: none !important; }
      body { background-color: #f8fafc !important; overflow-y: auto !important; }
      .standalone-demo .${styles.mockSite} { height: auto !important; overflow-y: visible !important; min-height: 100vh; }
      .standalone-demo .${styles.mockNavbar} { max-width: 1200px; margin: 0 auto; background: transparent; border-bottom: none; }
      .standalone-demo .${styles.profileSection},
      .standalone-demo .${styles.detailsList},
      .standalone-demo .${styles.statsSection},
      .standalone-demo .${styles.bookingSection},
      .standalone-demo .${styles.testimonialsSection},
      .standalone-demo .${styles.associationsSection} { max-width: 1200px; margin: 0 auto; border-radius: 16px; margin-bottom: 2rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
      
      .standalone-demo .${styles.profileSection} { margin-top: 2rem; }
      .standalone-demo .${styles.statsSection} { display: flex; justify-content: space-around; }
      .standalone-demo .${styles.slotGrid} { grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); }
      .standalone-demo .${styles.whatsappWidget} { position: fixed; }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="standalone-demo" style={{ backgroundColor: '#f8fafc', minHeight: '100vh', width: '100vw' }}>
      <MockDoctorSite />
    </div>
  );
}
