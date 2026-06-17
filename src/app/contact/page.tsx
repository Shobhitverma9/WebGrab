'use client';

import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import styles from './page.module.css';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Let's Build Something Extraordinary</h1>
          <p className={styles.subtitle}>
            Ready to transform your digital presence? Get in touch with our team of experts 
            to start your journey towards digital excellence.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Mail size={24} />
              </div>
              <div>
                <h3>Email Us</h3>
                <p>hello@webgrab.agency</p>
                <p>support@webgrab.agency</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Phone size={24} />
              </div>
              <div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>Mon-Fri from 9am to 6pm</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} />
              </div>
              <div>
                <h3>Visit Us</h3>
                <p>123 Innovation Drive</p>
                <p>Tech Hub, CA 94043</p>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <h2>Send us a Message</h2>
              
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formState.name}
                  onChange={handleChange}
                  required 
                  placeholder="John Doe"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email}
                  onChange={handleChange}
                  required 
                  placeholder="john@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formState.subject}
                  onChange={handleChange}
                  required 
                  placeholder="How can we help you?"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required 
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
              
              {submitted && (
                <div className={styles.successMessage}>
                  Thank you! Your message has been sent successfully. We'll be in touch soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
