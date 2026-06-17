'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Share2, Mail, MessageCircle, Hash } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerTop}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/webgrablogo.jpeg"
                alt="WebGrab Logo"
                width={150}
                height={100}
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.brandDesc}>
              The premier design and digital growth agency. We build immersive web experiences and AI automations.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="Share"><Share2 size={20} /></a>
              <a href="#" className={styles.socialLink} aria-label="Contact"><Mail size={20} /></a>
              <a href="#" className={styles.socialLink} aria-label="Social"><Hash size={20} /></a>
              <a href="#" className={styles.socialLink} aria-label="Community"><MessageCircle size={20} /></a>
            </div>
          </div>
          
          <div className={styles.linksCol}>
            <h4>Services</h4>
            <ul>
              <li><Link href="#">Web Development</Link></li>
              <li><Link href="#">AI Automation</Link></li>
              <li><Link href="#">CRM Solutions</Link></li>
              <li><Link href="#">SEO & Ads</Link></li>
            </ul>
          </div>
          
          <div className={styles.linksCol}>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
          </div>
          
          <div className={styles.linksCol}>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} WebGrab Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
