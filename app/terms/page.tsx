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
          <p className="text-lg" style={{ color: '#9CA3AF' }}>Effective Date: July 1, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>1. Agreeing to These Terms</h2>
          <p className="mb-6" style={{ color: '#9CA3AF' }}>
            The Point Penguin LLC runs My Point Penguin. Accessing or using our service (the "Service") means you're agreeing to follow these Terms of Service (the "Terms"). If these Terms don't work for you, please don't use the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>2. What the Service Does</h2>
          <p className="mb-6" style={{ color: '#9CA3AF' }}>
            Through www.mypointpenguin.com, My Point Penguin gives organizations a way to recognize their people and lets employees build up and cash in points for rewards.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>3. Text Message Program</h2>
          <p className="mb-4" style={{ color: '#9CA3AF' }}>
            Opting in to receive texts means you're agreeing to get account notifications and/or promotional messages from My Point Penguin. Here's what to know:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#9CA3AF' }}>
            <li>Standard message and data rates may apply, and how often you hear from us can vary.</li>
            <li>Opt out whenever you like by texting STOP. Need help? Text HELP or email support@mypointpenguin.com.</li>
            <li>We're not responsible if a carrier delays or fails to deliver a message.</li>
            <li>You don't need to agree to texts in order to make a purchase.</li>
            <li>Want the full picture on how we handle your data? Check out our <Link href="/privacy" style={{ color: '#6366F1' }} className="underline">Privacy Policy</Link>.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>4. Liability Limits</h2>
          <p className="mb-6" style={{ color: '#9CA3AF' }}>
            My Point Penguin isn't responsible for indirect, incidental, special, consequential, or punitive damages that come from using, or being unable to use, the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F9FAFB' }}>5. Get in Touch</h2>
          <p className="mb-6" style={{ color: '#9CA3AF' }}>
            Questions about these Terms? Reach us at support@mypointpenguin.com or write to 800 N King Street 304-1991, Wilmington, DE 19801.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
