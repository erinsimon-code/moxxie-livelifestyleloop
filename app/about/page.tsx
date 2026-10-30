import Link from 'next/link';
import { Award, Trophy, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#030712' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#1F2937' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#111827', color: '#6366F1' }}>
              <Award className="w-4 h-4" />
              Recognize — Reward — Retain
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#F9FAFB' }}>
              Built for Teams,<br />Powered by Recognition
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#9CA3AF' }}>
              My Point Penguin is an employee rewards and recognition platform where every milestone, achievement, and job well done earns your team real points and rewards. We built this for companies who want their people to feel valued — every day.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#F9FAFB' }}>Why We Built This</h2>
            <p className="text-lg mb-4" style={{ color: '#9CA3AF' }}>
              Great work deserves to be recognized. We built My Point Penguin because employees deserve a simple way to be seen, celebrated, and rewarded for the work they do every day.
            </p>
            <p className="text-lg mb-4" style={{ color: '#9CA3AF' }}>
              Every milestone reached, every goal hit, and every contribution made adds to your points balance. The more your team is recognized, the more engaged — and the more rewarded — they become.
            </p>
            <p className="text-lg" style={{ color: '#9CA3AF' }}>
              Join the companies already using My Point Penguin to recognize and reward their employees. Your team's next win is waiting to be celebrated.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#1F2937', borderColor: '#374151' }}>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                  <Award className="w-5 h-5" style={{ color: '#F43F5E' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#F9FAFB' }}>Recognition & Milestones</h3>
                  <p style={{ color: '#9CA3AF' }}>Celebrate work anniversaries, goals hit, and everyday wins — every milestone earns points.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                  <Trophy className="w-5 h-5" style={{ color: '#F43F5E' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#F9FAFB' }}>Earn Real Rewards</h3>
                  <p style={{ color: '#9CA3AF' }}>Points unlock real, redeemable rewards. The more recognition your team earns, the more they get back.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                  <Zap className="w-5 h-5" style={{ color: '#F43F5E' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#F9FAFB' }}>Easy for Every Team</h3>
                  <p style={{ color: '#9CA3AF' }}>Give recognition in seconds and let employees redeem points whenever they're ready — no complicated process required.</p>
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
