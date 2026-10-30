'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1200);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#030712' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#1F2937' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#F9FAFB' }}>Contact Us</h1>
          <p className="text-lg" style={{ color: '#9CA3AF' }}>We're here to help. Reach out with any questions, concerns, or feedback.</p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#F9FAFB' }}>Send Us a Message</h2>
            {submitted ? (
              <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#1F2937', border: '1px solid #F43F5E' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#111827' }}>
                  <svg className="w-8 h-8" style={{ color: '#F43F5E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#F9FAFB' }}>Message Sent!</h3>
                <p style={{ color: '#9CA3AF' }}>Thank you for reaching out. We'll get back to you within 1–2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#F9FAFB' }}>Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className="block w-full px-4 py-3 rounded-lg text-white" style={{ border: '1px solid #374151', backgroundColor: '#111827' }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#F9FAFB' }}>Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@example.com" className="block w-full px-4 py-3 rounded-lg text-white" style={{ border: '1px solid #374151', backgroundColor: '#111827' }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#F9FAFB' }}>Subject *</label>
                  <select name="subject" required value={formData.subject} onChange={handleChange} className="block w-full px-4 py-3 rounded-lg text-white" style={{ border: '1px solid #374151', backgroundColor: '#111827' }}>
                    <option value="">Select a topic...</option>
                    <option value="general">General Inquiry</option>
                    <option value="sms-optout">SMS Opt-Out Request</option>
                    <option value="sms-help">SMS Help</option>
                    <option value="privacy">Privacy / Data Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#F9FAFB' }}>Message *</label>
                  <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="How can we help you?" className="block w-full px-4 py-3 rounded-lg text-white" style={{ border: '1px solid #374151', backgroundColor: '#111827' }} />
                </div>
                <button type="submit" disabled={submitting} className="w-full py-3 px-6 rounded-lg text-white font-semibold transition-opacity" style={{ backgroundColor: submitting ? '#9CA3AF' : '#F43F5E', cursor: submitting ? 'not-allowed' : 'pointer' }}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#F9FAFB' }}>Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#9CA3AF' }}>Email</h3>
                  <a href="mailto:support@mypointpenguin.com" className="text-base font-medium hover:underline" style={{ color: '#6366F1' }}>support@mypointpenguin.com</a>
                  <p className="text-sm mt-1" style={{ color: '#9CA3AF' }}>Response within 1–2 business days</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#9CA3AF' }}>Phone</h3>
                  <a href="tel:+18335719204" className="text-base font-medium hover:underline" style={{ color: '#6366F1' }}>(833) 571-9204</a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#9CA3AF' }}>Mailing Address</h3>
                  <p style={{ color: '#9CA3AF' }}>My Point Penguin<br />800 N King Street 304-1991<br />Wilmington, DE 19801</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#9CA3AF' }}>SMS Support</h3>
                  <p className="text-sm" style={{ color: '#9CA3AF' }}>Reply <strong>STOP</strong> to opt out. Reply <strong>HELP</strong> for assistance. Message and data rates may apply.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#F9FAFB' }}>FAQ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: '#F9FAFB' }}>How do I opt out of SMS?</h3>
                  <p className="text-sm" style={{ color: '#9CA3AF' }}>Reply <strong>STOP</strong> to any message. You'll be removed immediately.</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: '#F9FAFB' }}>Will my info be shared?</h3>
                  <p className="text-sm" style={{ color: '#9CA3AF' }}>No. We do not sell or share your mobile number with third parties for marketing. See our <a href="/privacy" className="font-medium hover:underline" style={{ color: '#6366F1' }}>Privacy Policy</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
