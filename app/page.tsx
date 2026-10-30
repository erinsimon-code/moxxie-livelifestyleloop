import Link from 'next/link';
import { Clock, ShieldCheck, CalendarCheck, Megaphone } from 'lucide-react';
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
              <Clock className="w-4 h-4" />
              Point Penguin Plus
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#F9FAFB' }}>
              Recognition That Clocks In
              <span className="block" style={{ color: '#6366F1' }}>With Your Team.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#9CA3AF' }}>
              Point Penguin Plus is built for shift-based and hourly workforces. Managers hand out points for shift milestones, safety recognition, attendance streaks, and quick shout-outs — employees redeem them for rewards that feel worth the hustle.
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
            <h2 className="text-4xl font-bold" style={{ color: '#F9FAFB' }}>Four Ways to Recognize Your Crew</h2>
            <p className="mt-4 text-xl" style={{ color: '#9CA3AF' }}>Purpose-built for the realities of shift work, not a repurposed office tool.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#1F2937', borderColor: '#374151' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                  <Clock className="w-7 h-7" style={{ color: '#F43F5E' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#F9FAFB' }}>Shift Milestones</h3>
              <p className="text-center" style={{ color: '#9CA3AF' }}>Automatically award points for hours logged, shifts completed, and tenure anniversaries as they happen.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#1F2937', borderColor: '#374151' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                  <ShieldCheck className="w-7 h-7" style={{ color: '#F43F5E' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#F9FAFB' }}>Safety Recognition</h3>
              <p className="text-center" style={{ color: '#9CA3AF' }}>Give points for incident-free stretches, completed safety checks, and employees who flag hazards before they become problems.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#1F2937', borderColor: '#374151' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                  <CalendarCheck className="w-7 h-7" style={{ color: '#F43F5E' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#F9FAFB' }}>Attendance Streaks</h3>
              <p className="text-center" style={{ color: '#9CA3AF' }}>Track consecutive on-time clock-ins and reward the reliability that keeps schedules covered.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#1F2937', borderColor: '#374151' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                  <Megaphone className="w-7 h-7" style={{ color: '#F43F5E' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#F9FAFB' }}>Manager Shout-Outs</h3>
              <p className="text-center" style={{ color: '#9CA3AF' }}>Let supervisors send instant, point-backed recognition for the wins that don't fit a checklist.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#1F2937' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#F9FAFB' }}>Give Your Shift Teams a Reason to Stay</h2>
          <p className="text-xl mb-10" style={{ color: '#9CA3AF' }}>See how Point Penguin Plus turns everyday shift work into recognition your frontline teams actually feel.</p>
          <Link href="/signup" className="px-10 py-5 text-white text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#F43F5E' }}>
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
