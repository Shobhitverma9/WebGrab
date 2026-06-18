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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', age: '' });

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

  const handleBookSlot = (slot: string) => {
    if (bookedSlots.includes(slot)) return;
    setSelectedSlot(slot);
    setIsModalOpen(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) return;

    const message = `Hello Dr. Anand, I would like to book a consultation.\n\n*Details:*\nName: ${formData.name}\nAge: ${formData.age}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nRequested Slot: ${selectedSlot}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "+919870126712";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    // Optimistically mark as booked for demo purposes
    setBookedSlots(prev => [...prev, selectedSlot]);
    setIsModalOpen(false);
    setFormData({ name: '', phone: '', email: '', age: '' });
    setSelectedSlot(null);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedSlot(null);
  };

  return (
    <div className={styles.mockSite}>
      {/* Navbar Section */}
      <div className={styles.mockNavbar}>
        <div className={styles.mockLogo}>
          <span style={{color: '#3b82f6'}}>Dr.</span> Anand
        </div>
        <button className={styles.navBookBtn} onClick={() => {
           document.getElementById('bookingSection')?.scrollIntoView({behavior: 'smooth'});
         }}>
          Book Appointment
        </button>
      </div>

      {/* Hero Profile Section */}
      <div className={styles.profileSection}>
        <div className={styles.heroText}>
          <span className={styles.availableBadge}>Available Now</span>
          <h1 className={styles.doctorNameLarge}>Dr. Anand Vihari</h1>
          <p className={styles.qualificationsLarge}>MBBS, MS - General Surgery</p>
          <div className={styles.badgesWrapper}>
            <div className={styles.specialtyBadge}>Proctology Specialist</div>
            <div className={styles.specialtyBadge}>Laparoscopic Surgeon</div>
          </div>
          <div className={styles.fullBioDesktop}>
            <p>
              I'm a general surgeon based at Sreshta Multi Speciality Hospital in Sangareddy, with a strong focus on minimally invasive procedures. Over the years, I've developed expertise in treating conditions like laser fistula, inguinal hernia, circumcision, and incision & drainage (I&D) — all with an emphasis on reducing recovery time and improving patient comfort. My goal has always been to provide clear, honest communication and help my patients feel informed and confident about their treatment. I believe that a calm conversation can be just as healing as any procedure.
            </p>
          </div>
          <div className={styles.heroActions}>
            <button className={styles.consultBtn} onClick={() => {
             document.getElementById('bookingSection')?.scrollIntoView({behavior: 'smooth'});
           }}>Book Appointment</button>
            <button className={styles.secondaryActionBtn} onClick={() => {
             document.getElementById('bookingSection')?.scrollIntoView({behavior: 'smooth'});
           }}>View Timings</button>
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
        <div className={styles.statItem}>
          <h4>50+</h4>
          <p>Advanced Procedures</p>
        </div>
        <div className={styles.statItem}>
          <h4>4.9/5</h4>
          <p>Patient Rating</p>
        </div>
      </div>

      {/* Affiliated Hospitals (Visual Trust Signals) */}
      <div className={styles.affiliationsSection}>
        <p className={styles.trustText}>TRUSTED BY & AFFILIATED WITH</p>
        <div className={styles.logoGrid}>
          <div className={styles.hospitalLogoCard}>
             <div className={styles.hospitalLogoPlaceholder}>🏥</div>
             <p>Max Super Speciality</p>
          </div>
          <div className={styles.hospitalLogoCard}>
             <div className={styles.hospitalLogoPlaceholder}>🏥</div>
             <p>Apollo Hospitals</p>
          </div>
          <div className={styles.hospitalLogoCard}>
             <div className={styles.hospitalLogoPlaceholder}>🏥</div>
             <p>Sreshta Hospital</p>
          </div>
        </div>
      </div>

      {/* Credentials Section */}
      <div className={styles.credentialsSection}>
        <h4 className={styles.sectionTitle}>Credentials & Memberships</h4>
        <ul className={styles.credentialsList}>
          <li><span className={styles.checkIcon}>✓</span> <strong>Board Certified</strong> in General Surgery</li>
          <li><span className={styles.checkIcon}>✓</span> <strong>Fellowship</strong> in Minimal Access Surgery (FMAS)</li>
          <li><span className={styles.checkIcon}>✓</span> <strong>Member</strong> of Association of Surgeons of India (ASI)</li>
          <li><span className={styles.checkIcon}>✓</span> <strong>Member</strong> of Indian Medical Association (IMA)</li>
        </ul>
      </div>

      {/* Booking Section */}
      <div id="bookingSection" className={styles.bookingSection}>
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

      {/* Clinic Gallery (Authentic Visuals) */}
      <div className={styles.gallerySection}>
        <h4 className={styles.sectionTitle}>Clinic Tour</h4>
        <p className={styles.galleryDescription}>Take a look inside our modern, patient-friendly facility.</p>
        <div className={styles.galleryGrid}>
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400&auto=format&fit=crop" alt="Clinic Reception" className={styles.galleryImage} />
          <img src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=400&auto=format&fit=crop" alt="Consultation Room" className={styles.galleryImage} />
          <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=400&auto=format&fit=crop" alt="Waiting Area" className={styles.galleryImage} />
          <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=400&auto=format&fit=crop" alt="Treatment Room" className={styles.galleryImage} />
        </div>
      </div>

      {/* Patient Resources Section */}
      <div className={styles.resourcesSection}>
        <h4 className={styles.sectionTitle}>Before Your Visit</h4>
        <div className={styles.resourcesGrid}>
          <div className={styles.resourceCard}>
            <div className={styles.resourceIcon}>📋</div>
            <h5>What to Bring</h5>
            <ul className={styles.resourceList}>
              <li>Valid Government ID</li>
              <li>Health Insurance Card</li>
              <li>Previous medical reports or scans</li>
              <li>List of current medications</li>
            </ul>
          </div>
          <div className={styles.resourceCard}>
            <div className={styles.resourceIcon}>⚠️</div>
            <h5>Pre-Visit Instructions</h5>
            <ul className={styles.resourceList}>
              <li>Arrive 15 minutes early for registration</li>
              <li>Wear comfortable, loose clothing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={styles.testimonialsSection}>
        <h4 className={styles.sectionTitle}>Patient Stories</h4>
        <div className={styles.cardGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.videoThumbnail} style={{ padding: 0, overflow: 'hidden' }}>
               <iframe 
                 width="100%" 
                 height="100%" 
                 src="https://www.youtube.com/embed/nbIqDBp00sU?controls=0" 
                 title="Patient Story 1" 
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
                 style={{ border: 'none' }}
               ></iframe>
            </div>
            <p className={styles.testimonialTitle}>Complete Recovery after Spinal Fusion Surgery</p>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.videoThumbnail} style={{ padding: 0, overflow: 'hidden' }}>
               <iframe 
                 width="100%" 
                 height="100%" 
                 src="https://www.youtube.com/embed/xSGISdAyKfE?controls=0" 
                 title="Patient Story 2" 
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
                 style={{ border: 'none' }}
               ></iframe>
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
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Sreshta+Multi+Speciality+Hospital,+Ashok+Nagar,+Sangareddy" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}
          >
            <div className={styles.locationCard} style={{background: '#f97316'}}>
               <h5>Dr. Anand Vihari Clinic</h5>
               <p>Advanced Surgeon Clinic</p>
               <p style={{fontSize: '0.75rem', marginTop: '0.5rem', fontWeight: 600}}>📍 Click for Directions</p>
               <div className={styles.mapBg}></div>
            </div>
          </a>
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Max+Super+Speciality+Hospital,+Sector+128,+Noida" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}
          >
            <div className={styles.locationCard} style={{background: '#64748b'}}>
               <h5>Max Super Speciality Hospital</h5>
               <p>Sector 128, Noida</p>
               <p style={{fontSize: '0.75rem', marginTop: '0.5rem', fontWeight: 600}}>📍 Click for Directions</p>
            </div>
          </a>
        </div>
      </div>

      {/* WhatsApp Widget */}
      <div 
        className={styles.whatsappWidget} 
        onClick={() => alert("WhatsApp widget clicked!")}
      >
        <MessageCircle size={24} />
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>Book Slot: {selectedSlot}</h3>
              <button className={styles.closeModalBtn} onClick={handleModalClose}>&times;</button>
            </div>
            <form onSubmit={handleModalSubmit} className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  placeholder="Enter your name"
                />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Age</label>
                  <input 
                    type="number" 
                    required 
                    value={formData.age} 
                    onChange={(e) => setFormData({...formData, age: e.target.value})} 
                    placeholder="Years"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                    placeholder="10-digit number"
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  placeholder="your@email.com"
                />
              </div>
              <button type="submit" className={styles.submitModalBtn}>
                Confirm & Book via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Sticky Mobile CTA */}
      <div className={styles.stickyCTA}>
         <button className={styles.stickyBookBtn} onClick={() => {
           document.getElementById('bookingSection')?.scrollIntoView({behavior: 'smooth'});
         }}>
           Book Appointment
         </button>
      </div>

    </div>
  );
};
