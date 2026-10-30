import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#030712' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#1F2937' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#F9FAFB' }}>Terms of Service</h1>
          <p className="text-lg" style={{ color: '#9CA3AF' }}>Last Updated: July 1, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>1. Acceptance of Terms</h2>
          <p className="mb-6" style={{ color: '#9CA3AF' }}>
            My Point Penguin is operated by The Point Penguin LLC. By accessing or using My Point Penguin's service ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>2. Description of Service</h2>
          <p className="mb-6" style={{ color: '#9CA3AF' }}>
            My Point Penguin provides an employee rewards and recognition platform accessible through www.mypointpenguin.com, allowing organizations to recognize employees and allowing employees to earn and redeem points for rewards.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>3. SMS Communications</h2>
          <p className="mb-4" style={{ color: '#9CA3AF' }}>
            By opting in to SMS communications, you agree to receive Transactional Account Notification and Promotional Marketing text messages from My Point Penguin. The following terms apply:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#9CA3AF' }}>
            <li>Message and data rates may apply. Message frequency varies.</li>
            <li>You may opt out at any time by replying STOP. For help, reply HELP or contact support@mypointpenguin.com.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
            <li>Consent is not a condition of purchase.</li>
            <li>For more information about how we collect, use, and protect your information, see our <Link href="/privacy" style={{ color: '#6366F1' }} className="underline">Privacy Policy</Link>.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>4. Limitation of Liability</h2>
          <p className="mb-6" style={{ color: '#9CA3AF' }}>
            My Point Penguin shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>5. Contact</h2>
          <p className="mb-6" style={{ color: '#9CA3AF' }}>
            For questions about these Terms, contact us at support@mypointpenguin.com or 800 N King Street 304-1991, Wilmington, DE 19801.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
