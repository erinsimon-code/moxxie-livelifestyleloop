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
    <div className="min-h-screen" style={{ backgroundColor: '#0B1512' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#15261F' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#F2FBF7' }}>Get In Touch</h1>
          <p className="text-lg" style={{ color: '#94A9A0' }}>Questions about habits, streaks, points, or the rewards catalog? We'd love to hear from you.</p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#F2FBF7' }}>Drop Us a Line</h2>
            {submitted ? (
              <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#15261F', border: '1px solid #F59E0B' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#0F1F19' }}>
                  <svg className="w-8 h-8" style={{ color: '#F59E0B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#F2FBF7' }}>Message On Its Way!</h3>
                <p style={{ color: '#94A9A0' }}>Thanks for reaching out — expect to hear back from our team within 1–2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#F2FBF7' }}>Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className="block w-full px-4 py-3 rounded-lg text-white" style={{ border: '1px solid #233A30', backgroundColor: '#0F1F19' }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#F2FBF7' }}>Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@example.com" className="block w-full px-4 py-3 rounded-lg text-white" style={{ border: '1px solid #233A30', backgroundColor: '#0F1F19' }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#F2FBF7' }}>Subject *</label>
                  <select name="subject" required value={formData.subject} onChange={handleChange} className="block w-full px-4 py-3 rounded-lg text-white" style={{ border: '1px solid #233A30', backgroundColor: '#0F1F19' }}>
                    <option value="">Select a topic...</option>
                    <option value="general">General Inquiry</option>
                    <option value="habits">Habit Setup Help</option>
                    <option value="streaks">Streaks & Check-Ins</option>
                    <option value="points">Points Question</option>
                    <option value="rewards">Rewards Catalog</option>
                    <option value="sms-optout">SMS Opt-Out Request</option>
                    <option value="sms-help">SMS Help</option>
                    <option value="privacy">Privacy / Data Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#F2FBF7' }}>Message *</label>
                  <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="What's on your mind?" className="block w-full px-4 py-3 rounded-lg text-white" style={{ border: '1px solid #233A30', backgroundColor: '#0F1F19' }} />
                </div>
                <button type="submit" disabled={submitting} className="w-full py-3 px-6 rounded-lg text-white font-semibold transition-opacity" style={{ backgroundColor: submitting ? '#94A9A0' : '#F59E0B', cursor: submitting ? 'not-allowed' : 'pointer' }}>
                  {submitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            )}
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#F2FBF7' }}>How to Reach Us</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#94A9A0' }}>Email</h3>
                  <a href="mailto:support@livelifestyleloop.com" className="text-base font-medium hover:underline" style={{ color: '#2DD4BF' }}>support@livelifestyleloop.com</a>
                  <p className="text-sm mt-1" style={{ color: '#94A9A0' }}>We typically reply within 1–2 business days</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#94A9A0' }}>Phone</h3>
                  <a href="tel:+18335719204" className="text-base font-medium hover:underline" style={{ color: '#2DD4BF' }}>(833) 571-9204</a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#94A9A0' }}>Mailing Address</h3>
                  <p style={{ color: '#94A9A0' }}>Lifestyle Loop<br />3 Germay Dr, Unit 4-3226<br />Wilmington, DE 19804</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#94A9A0' }}>Text Support</h3>
                  <p className="text-sm" style={{ color: '#94A9A0' }}>Text <strong>STOP</strong> anytime to opt out, or <strong>HELP</strong> if you need a hand. Carrier rates may apply.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#F2FBF7' }}>Common Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: '#F2FBF7' }}>How can I stop getting texts?</h3>
                  <p className="text-sm" style={{ color: '#94A9A0' }}>Just text <strong>STOP</strong> back to any message and you'll be taken off the list right away.</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: '#F2FBF7' }}>Do you share my details with anyone?</h3>
                  <p className="text-sm" style={{ color: '#94A9A0' }}>Never for marketing purposes — your phone number stays with us. Full details are in our <a href="/privacy" className="font-medium hover:underline" style={{ color: '#2DD4BF' }}>Privacy Policy</a>.</p>
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
