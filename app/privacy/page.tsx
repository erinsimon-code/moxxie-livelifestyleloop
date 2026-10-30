import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#030712' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#1F2937' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#F9FAFB' }}>Privacy Policy</h1>
          <p className="text-lg" style={{ color: '#9CA3AF' }}>Effective Date: July 1, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>1. Overview</h2>
          <p className="mb-6" style={{ color: '#9CA3AF' }}>
            The Point Penguin LLC operates My Point Penguin. We take your privacy seriously, and this policy lays out how your information gets collected, used, disclosed, and protected whenever you visit www.mypointpenguin.com or use our service. Using the service means you're agreeing to how we handle data as described here.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>2. What Information We Gather</h2>
          <p className="mb-4" style={{ color: '#9CA3AF' }}>Signing up for or using the service may involve us gathering:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#9CA3AF' }}>
            <li>Your name along with contact details like email and phone number</li>
            <li>Details about your employer, work site, and shift schedule</li>
            <li>Your points total, along with shift milestone, safety win, and attendance streak history</li>
            <li>Your chosen SMS opt-in preferences (transactional notifications and/or promotional messages)</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>3. Text Messaging</h2>
          <p className="mb-4" style={{ color: '#9CA3AF' }}>
            Should you opt in to text messages from My Point Penguin, these conditions apply:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#9CA3AF' }}>
            <li>Depending on what you opt into, you could get account notification texts, promotional texts, or both.</li>
            <li>Standard message and data charges may apply, and how often you're messaged can vary.</li>
            <li>Want out? Text STOP to any message. Need assistance? Text HELP or reach support@mypointpenguin.com.</li>
            <li><strong>Your mobile details are never passed along to third parties or affiliates for promotional purposes.</strong></li>
            <li>Signing up for texts is entirely optional and isn't required to use the service.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>4. How Your Information Gets Used</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#9CA3AF' }}>
            <li>Running and improving our shift, safety, and attendance recognition platform</li>
            <li>Tracking and managing points, shift milestones, safety wins, attendance streaks, and redemptions</li>
            <li>Responding to your account questions or general inquiries</li>
            <li>Delivering the text messages you've chosen to receive</li>
            <li>Meeting any applicable legal requirements</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>5. Reach Out to Us</h2>
          <p className="mb-6" style={{ color: '#9CA3AF' }}>
            Got questions about this policy? Here's how to reach us:<br />
            My Point Penguin, a service of The Point Penguin LLC<br />
            800 N King Street 304-1991, Wilmington, DE 19801<br />
            Email: <a href="mailto:support@mypointpenguin.com" style={{ color: '#6366F1' }}>support@mypointpenguin.com</a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
