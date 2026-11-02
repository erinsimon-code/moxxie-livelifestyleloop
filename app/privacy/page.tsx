import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B1512' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#15261F' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#F2FBF7' }}>Privacy Policy</h1>
          <p className="text-lg" style={{ color: '#94A9A0' }}>Effective Date: November 2, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F2FBF7' }}>1. Overview</h2>
          <p className="mb-6" style={{ color: '#94A9A0' }}>
            Lifecycle Loop LLC operates Lifestyle Loop. We take your privacy seriously, and this policy lays out how your information gets collected, used, disclosed, and protected whenever you visit www.livelifestyleloop.com or use our service. Using the service means you're agreeing to how we handle data as described here.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F2FBF7' }}>2. What Information We Gather</h2>
          <p className="mb-4" style={{ color: '#94A9A0' }}>Signing up for or using the service may involve us gathering:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#94A9A0' }}>
            <li>Your name along with contact details like email and phone number</li>
            <li>The habits you choose to track, such as hydration, steps, sleep, mindfulness, or reading</li>
            <li>Your daily check-in history, streak activity, points balance, and reward redemptions</li>
            <li>Your chosen SMS opt-in preferences (account notification texts and/or promotional texts)</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F2FBF7' }}>3. Text Messaging</h2>
          <p className="mb-4" style={{ color: '#94A9A0' }}>
            Should you opt in to text messages from Lifestyle Loop, these conditions apply:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#94A9A0' }}>
            <li>Depending on what you opt into, you could get account notification texts (check-in reminders, streak updates, and points confirmations), promotional texts (new habit challenges and new rewards), or both.</li>
            <li>Standard message and data charges may apply, and how often you're messaged can vary.</li>
            <li>Want out? Text STOP to any message. Need assistance? Text HELP or reach support@livelifestyleloop.com.</li>
            <li><strong>Your mobile details are never passed along to third parties or affiliates for promotional purposes.</strong></li>
            <li>Signing up for texts is entirely optional, isn't required to use the service, and does not earn you any points.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F2FBF7' }}>4. How Your Information Gets Used</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#94A9A0' }}>
            <li>Running and improving our habit-tracking and rewards platform</li>
            <li>Tracking and managing your habits, check-ins, streaks, points, and rewards catalog redemptions</li>
            <li>Responding to your account questions or general inquiries</li>
            <li>Delivering the text messages you've chosen to receive</li>
            <li>Meeting any applicable legal requirements</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#F2FBF7' }}>5. Reach Out to Us</h2>
          <p className="mb-6" style={{ color: '#94A9A0' }}>
            Got questions about this policy? Here's how to reach us:<br />
            Lifestyle Loop, a service of Lifecycle Loop LLC<br />
            3 Germay Dr, Unit 4-3226, Wilmington, DE 19804<br />
            Email: <a href="mailto:support@livelifestyleloop.com" style={{ color: '#2DD4BF' }}>support@livelifestyleloop.com</a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
