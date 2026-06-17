'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import styles from './DoctorDemo.module.css';

// Generate 12 slots from 9:00 AM to 12:00 PM (15 min each)
const generateSlots = (startHour: number, ampm: 'AM' | 'PM') => {
  const slots = [];
  let currentHour = startHour;
  let currentMinute = 0;

  for (let i = 0; i < 12; i++) {
    const displayHour = currentHour > 12 ? currentHour - 12 : currentHour;
    const timeString = `${displayHour}:${currentMinute === 0 ? '00' : currentMinute} ${ampm}`;
    slots.push(timeString);
    currentMinute += 15;
    if (currentMinute === 60) {
      currentMinute = 0;
      currentHour += 1;
    }
  }
  return slots;
};

const MORNING_SLOTS = generateSlots(9, 'AM'); // 9 AM to 12 PM
const EVENING_SLOTS = generateSlots(4, 'PM'); // 4 PM to 7 PM

export const MockDoctorSite = () => {
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isBooking, setIsBooking] = useState(false);

  useEffect(() => {
    fetchBookedSlots();
  }, []);

  const fetchBookedSlots = async () => {
    try {
      const res = await fetch('/api/bookings');
      if (res.ok) {
        const data = await res.json();
        setBookedSlots(data.bookedSlots || []);
      }
    } catch (error) {
      console.error('Failed to fetch slots', error);
    }
  };

  const handleBookSlot = async (slot: string) => {
    if (bookedSlots.includes(slot)) return;
    
    setIsBooking(true);
    setSelectedSlot(slot);

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slotTime: slot }),
      });

      if (res.ok) {
        const data = await res.json();
        setBookedSlots(data.bookedSlots);
        alert(`Successfully booked slot at ${slot}`);
        setSelectedSlot(null);
      } else {
        const err = await res.json();
        alert(err.error || 'Failed to book slot');
      }
    } catch (error) {
      alert('Network error while booking slot');
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <div className={styles.mockSite}>
      {/* Navbar Section */}
      <div className={styles.mockNavbar}>
        <div className={styles.mockLogo}>
          <span style={{color: '#3b82f6'}}>Dr.</span> Anand
        </div>
        <div className={styles.mockMenuIcon}>
          <div className={styles.hamburger}></div>
          <div className={styles.hamburger}></div>
          <div className={styles.hamburger}></div>
        </div>
      </div>

      {/* Hero Profile Section */}
      <div className={styles.profileSection}>
        <div className={styles.heroText}>
          <span className={styles.availableBadge}>Available Now</span>
          <h1 className={styles.doctorNameLarge}>Dr. Anand Vihari</h1>
          <p className={styles.qualificationsLarge}>MBBS, MS - General Surgery</p>
          <div className={styles.badgesWrapper}>
            <span className={styles.specialtyBadge}>General Physician</span>
            <span className={styles.experienceText}>8+ years Experience</span>
          </div>
          
          <div className={styles.fullBioDesktop}>
            <p>
              I'm a general surgeon based at Sreshta Multi Speciality Hospital in Sangareddy, with a strong focus on minimally invasive procedures. Over the years, I've developed expertise in treating conditions like laser fistula, inguinal hernia, circumcision, and incision & drainage (I&D) — all with an emphasis on reducing recovery time and improving patient comfort. My goal has always been to provide clear, honest communication and help my patients feel informed and confident about their treatment. I believe that a calm conversation can be just as healing as any procedure.
            </p>
          </div>
          
          <div className={styles.heroActions}>
            <button className={styles.consultBtn}>Consult Now</button>
            <button className={styles.secondaryActionBtn}>View Timings</button>
          </div>
        </div>

        <div className={styles.heroImageWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop" 
            alt="Dr. Anand Vihari" 
            className={styles.heroImage} 
          />
          <div className={styles.imageBackdrop}></div>
        </div>
      </div>

      {/* Details List */}
      <div className={styles.detailsList}>
        <div className={styles.detailItem}>
          <Phone size={16} className={styles.detailIcon} />
          <span>+91 7075448155</span>
        </div>
        <div className={styles.detailItem}>
          <Mail size={16} className={styles.detailIcon} />
          <span>dr.anand@clinic.com</span>
        </div>
        <div className={styles.detailItem}>
          <MapPin size={16} className={styles.detailIcon} />
          <span>Sreshta Multi Speciality Hospital, Ashok Nagar, Sangareddy</span>
        </div>
      </div>

      {/* Stats Section */}
      <div className={styles.statsSection}>
        <div className={styles.statItem}>
          <h4>16+</h4>
          <p>Years Of Experience</p>
        </div>
        <div className={styles.statItem}>
          <h4>10k+</h4>
          <p>Happy Patients</p>
        </div>
      </div>

      {/* Booking Section */}
      <div className={styles.bookingSection}>
        <div style={{ marginBottom: '2rem' }}>
          <h4 className={styles.bookingHeader}>Morning Timings</h4>
          <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>9:00 AM - 12:00 PM</p>
          
          <div className={styles.slotGrid}>
            {MORNING_SLOTS.map((slot) => {
              const isBooked = bookedSlots.includes(slot);
              const isSelected = selectedSlot === slot;
              return (
                <button
                  key={slot}
                  className={`${styles.slotBtn} ${isSelected ? styles.selected : ''}`}
                  disabled={isBooked || (isBooking && isSelected)}
                  onClick={() => handleBookSlot(slot)}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className={styles.bookingHeader}>Evening Timings</h4>
          <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>4:00 PM - 7:00 PM</p>
          
          <div className={styles.slotGrid}>
            {EVENING_SLOTS.map((slot) => {
              const isBooked = bookedSlots.includes(slot);
              const isSelected = selectedSlot === slot;
              return (
                <button
                  key={slot}
                  className={`${styles.slotBtn} ${isSelected ? styles.selected : ''}`}
                  disabled={isBooked || (isBooking && isSelected)}
                  onClick={() => handleBookSlot(slot)}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={styles.testimonialsSection}>
        <h4 className={styles.sectionTitle}>Patient Stories</h4>
        <div className={styles.cardGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.videoThumbnail}>
               <div className={styles.playIcon}>▶</div>
            </div>
            <p className={styles.testimonialTitle}>Complete Recovery after Spinal Fusion Surgery</p>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.videoThumbnail} style={{background: '#e2e8f0'}}>
               <div className={styles.playIcon}>▶</div>
            </div>
            <p className={styles.testimonialTitle}>Slip Disc & Sciatica Relief</p>
          </div>
        </div>
      </div>

      {/* Text Testimonials Section */}
      <div className={styles.testimonialsSection} style={{background: 'white'}}>
        <h4 className={styles.sectionTitle}>Patient Feedback</h4>
        <div className={styles.cardGrid}>
          <div className={styles.textTestimonial}>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
            <p className={styles.reviewText}>"Dr. Anand is incredibly patient and thorough. He explained the entire surgery process to me and made me feel completely at ease. Recovery was exactly as he described!"</p>
            <p className={styles.patientName}>- Rahul Verma</p>
          </div>
          <div className={styles.textTestimonial}>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
            <p className={styles.reviewText}>"I had a laser procedure done for a fistula. The clinic staff was very helpful, and Dr. Anand's expertise is unmatched. Highly recommend him for any general surgery needs."</p>
            <p className={styles.patientName}>- Sneha Reddy</p>
          </div>
        </div>
      </div>

      {/* Associations Section */}
      <div className={styles.associationsSection}>
        <h4 className={styles.sectionTitle}>Associations & Locations</h4>
        <div className={styles.cardGrid}>
          <div className={styles.locationCard} style={{background: '#f97316'}}>
             <h5>Dr. Anand Vihari Clinic</h5>
             <p>Advanced Surgeon Clinic</p>
             <div className={styles.mapBg}></div>
          </div>
          <div className={styles.locationCard} style={{background: '#64748b'}}>
             <h5>Max Super Speciality Hospital</h5>
             <p>Sector 128, Noida</p>
          </div>
        </div>
      </div>

      {/* WhatsApp Widget */}
      <div 
        className={styles.whatsappWidget} 
        onClick={() => alert("WhatsApp widget clicked!")}
      >
        <MessageCircle size={24} />
      </div>
    </div>
  );
};
