import Link from 'next/link';
import { Star, Shield, Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#030712' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#1F2937' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#111827', color: '#6366F1' }}>
              <Star className="w-4 h-4" />
              My Point Penguin
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#F9FAFB' }}>
              Celebrate Great Work.
              <span className="block" style={{ color: '#6366F1' }}>Turn It Into Rewards.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#9CA3AF' }}>
              My Point Penguin gives your workforce a fun, intuitive way to rack up points for a job well done and trade them in for rewards they'll actually want.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/signup" className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#F43F5E' }}>
                Get Started
              </Link>
              <Link href="/about" className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2" style={{ color: '#6366F1', borderColor: '#6366F1', backgroundColor: '#111827' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: '#030712' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#F9FAFB' }}>What Makes My Point Penguin Different</h2>
            <p className="mt-4 text-xl" style={{ color: '#9CA3AF' }}>An easy way to show appreciation and make every reward feel genuine.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#1F2937', borderColor: '#374151' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                  <Star className="w-7 h-7" style={{ color: '#F43F5E' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#F9FAFB' }}>Genuine Appreciation</h3>
              <p className="text-center" style={{ color: '#9CA3AF' }}>Offer staff an easy, dependable way to have their efforts acknowledged, wherever they're working.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#1F2937', borderColor: '#374151' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                  <Shield className="w-7 h-7" style={{ color: '#F43F5E' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#F9FAFB' }}>Built-In Privacy</h3>
              <p className="text-center" style={{ color: '#9CA3AF' }}>Your team's data is handled with care — we guard it closely and never hand it off without permission.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#1F2937', borderColor: '#374151' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                  <Zap className="w-7 h-7" style={{ color: '#F43F5E' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#F9FAFB' }}>Quick to Launch</h3>
              <p className="text-center" style={{ color: '#9CA3AF' }}>Onboard your whole organization in minutes flat — no clunky setup, no waiting around.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#1F2937' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#F9FAFB' }}>Let's Get Your Team Rolling</h2>
          <p className="text-xl mb-10" style={{ color: '#9CA3AF' }}>Become one of the many organizations using My Point Penguin to celebrate and reward their people.</p>
          <Link href="/signup" className="px-10 py-5 text-white text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#F43F5E' }}>
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
