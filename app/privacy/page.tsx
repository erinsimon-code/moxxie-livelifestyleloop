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
          <p className="text-lg" style={{ color: '#9CA3AF' }}>Last Updated: July 1, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>1. Introduction</h2>
          <p className="mb-6" style={{ color: '#9CA3AF' }}>
            My Point Penguin is operated by The Point Penguin LLC. My Point Penguin ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service and website at www.mypointpenguin.com. By using our service, you agree to the collection and use of information in accordance with this policy.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>2. Information We Collect</h2>
          <p className="mb-4" style={{ color: '#9CA3AF' }}>When you sign up for or use our service, we may collect:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#9CA3AF' }}>
            <li>Full name and contact information (email address, phone number)</li>
            <li>Employer and workplace information</li>
            <li>Points balance, recognition activity, and reward redemption history</li>
            <li>SMS opt-in consent preferences (Transactional Account Notification and/or Promotional Marketing)</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>3. SMS Messaging</h2>
          <p className="mb-4" style={{ color: '#9CA3AF' }}>
            If you opt in to receive SMS messages from My Point Penguin, the following terms apply:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#9CA3AF' }}>
            <li>You may receive Transactional Account Notification messages and/or Promotional Marketing messages depending on your opt-in selections.</li>
            <li>Message and data rates may apply. Message frequency varies.</li>
            <li>To opt out, reply STOP to any message. To get help, reply HELP or contact us at support@mypointpenguin.com.</li>
            <li><strong>No mobile information will be shared with third parties or affiliates for marketing/promotional purposes.</strong></li>
            <li>Opting in to SMS is optional and not required to use our service.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>4. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#9CA3AF' }}>
            <li>To provide and improve our employee rewards and recognition platform</li>
            <li>To track and administer points, recognition, and reward redemptions</li>
            <li>To communicate with you about your account or inquiries</li>
            <li>To send SMS messages you have opted into</li>
            <li>To comply with legal obligations</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>5. Contact Us</h2>
          <p className="mb-6" style={{ color: '#9CA3AF' }}>
            If you have questions about this Privacy Policy, please contact us at:<br />
            My Point Penguin, operated by The Point Penguin LLC<br />
            800 N King Street 304-1991, Wilmington, DE 19801<br />
            Email: <a href="mailto:support@mypointpenguin.com" style={{ color: '#6366F1' }}>support@mypointpenguin.com</a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
