import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | WebGrab',
  description: 'Privacy Policy for WebGrab - Modern Design & Digital Growth Agency',
};

export default function PrivacyPolicy() {
  return (
    <div className="section" style={{ minHeight: '100vh', paddingTop: '150px' }}>
      <div className="container">
        <h1 className="heading-lg text-gradient" style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
        
        <div className="glass" style={{ padding: '3rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h2 className="heading-md" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)' }}>1. Introduction</h2>
            <p className="text-body">
              At WebGrab, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us when accessing our website and utilizing our web design, development, and digital marketing services.
            </p>
          </div>

          <div>
            <h2 className="heading-md" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)' }}>2. Information We Collect</h2>
            <p className="text-body" style={{ marginBottom: '1rem' }}>
              We may collect the following types of information:
            </p>
            <ul className="text-body" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and company details when you submit inquiries or project requests.</li>
              <li><strong>Project Data:</strong> Information related to your web development, design, and digital growth requirements.</li>
              <li><strong>Usage Data:</strong> IP addresses, browser types, and interactions with our website to improve user experience.</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-md" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)' }}>3. How We Use Your Information</h2>
            <p className="text-body" style={{ marginBottom: '1rem' }}>
              We use the collected information for the following purposes:
            </p>
            <ul className="text-body" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>To provide, maintain, and improve our web development and digital marketing services.</li>
              <li>To communicate with you regarding your projects, updates, and support requests.</li>
              <li>To personalize your experience and deliver tailored digital solutions.</li>
              <li>To comply with legal obligations and protect against fraudulent activities.</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-md" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)' }}>4. Data Security</h2>
            <p className="text-body">
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="heading-md" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)' }}>5. Third-Party Services</h2>
            <p className="text-body">
              We may employ third-party companies and individuals to facilitate our services (e.g., hosting providers, analytics tools). These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </div>

          <div>
            <h2 className="heading-md" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)' }}>6. Changes to This Privacy Policy</h2>
            <p className="text-body">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          <div>
            <h2 className="heading-md" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)' }}>7. Contact Us</h2>
            <p className="text-body">
              If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@webgrab.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
