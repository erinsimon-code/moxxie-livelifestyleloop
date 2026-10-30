import Link from 'next/link';
import { Star, Shield, Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#E8F4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#FFFFFF', color: '#6D5EF5' }}>
              <Star className="w-4 h-4" />
              My Point Penguin
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#172033' }}>
              Recognize Great Work.
              <span className="block" style={{ color: '#6D5EF5' }}>Reward It Instantly.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#6B7280' }}>
              My Point Penguin is the employee rewards platform that lets your team earn points for great work and redeem them for real rewards — all in one simple, easy-to-love experience.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/signup" className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#6D5EF5' }}>
                Get Started
              </Link>
              <Link href="/about" className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2" style={{ color: '#6D5EF5', borderColor: '#6D5EF5', backgroundColor: '#FFFFFF' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#172033' }}>Why Teams Choose My Point Penguin</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>A simple way to recognize employees and make rewards feel real.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#14B8A633' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E8F4FF' }}>
                  <Star className="w-7 h-7" style={{ color: '#14B8A6' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#172033' }}>Meaningful Recognition</h3>
              <p className="text-center" style={{ color: '#6B7280' }}>Give employees a simple, trusted way to be recognized for their contributions — anytime, anywhere.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#14B8A633' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E8F4FF' }}>
                  <Shield className="w-7 h-7" style={{ color: '#14B8A6' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#172033' }}>Safe & Secure</h3>
              <p className="text-center" style={{ color: '#6B7280' }}>Employee data stays protected. We keep your information safe and never share it without your consent.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#14B8A633' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E8F4FF' }}>
                  <Zap className="w-7 h-7" style={{ color: '#14B8A6' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#172033' }}>Fast & Easy</h3>
              <p className="text-center" style={{ color: '#6B7280' }}>Get your team up and running in minutes — no complicated setup, no long waits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#E8F4FF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#172033' }}>Ready to Get Started?</h2>
          <p className="text-xl mb-10" style={{ color: '#6B7280' }}>Join the companies using My Point Penguin to recognize and reward their teams.</p>
          <Link href="/signup" className="px-10 py-5 text-white text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#6D5EF5' }}>
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
