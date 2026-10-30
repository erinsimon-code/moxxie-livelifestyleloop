import Link from 'next/link';
import { Clock, ShieldCheck, CalendarCheck } from 'lucide-react';
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
              <Clock className="w-4 h-4" />
              Shifts — Safety — Attendance
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#F9FAFB' }}>
              Made for Shift Crews,<br />Built Around the Clock-In
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#9CA3AF' }}>
              My Point Penguin is a platform where finishing a shift, staying safe on the job, and showing up on time all translate into real points your frontline and hourly workers can cash in. It exists for employers who want their crews to feel genuinely valued every single shift.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#F9FAFB' }}>The Story Behind the Platform</h2>
            <p className="text-lg mb-4" style={{ color: '#9CA3AF' }}>
              Frontline and hourly work shouldn't go unnoticed. My Point Penguin exists so shift workers have an effortless way to be noticed, thanked, and rewarded for the shifts they finish, the safety habits they keep up, and the attendance they show up with every single day.
            </p>
            <p className="text-lg mb-4" style={{ color: '#9CA3AF' }}>
              Finishing a shift, logging an incident-free day, or clocking in on time all add up toward a points total. The more often your crew gets noticed for these everyday wins, the more invested — and the more rewarded — they become.
            </p>
            <p className="text-lg" style={{ color: '#9CA3AF' }}>
              Become part of the growing list of employers relying on My Point Penguin to thank and reward their frontline teams. There's a shift milestone, a safety win, or an attendance streak on your team ready to be marked.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#1F2937', borderColor: '#374151' }}>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                  <Clock className="w-5 h-5" style={{ color: '#F43F5E' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#F9FAFB' }}>Shift Milestones Worth Marking</h3>
                  <p style={{ color: '#9CA3AF' }}>Mark tenure anniversaries, completed shifts, and hours-logged milestones — each one adds to the points total.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                  <ShieldCheck className="w-5 h-5" style={{ color: '#F43F5E' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#F9FAFB' }}>Safety Wins That Pay Off</h3>
                  <p style={{ color: '#9CA3AF' }}>Incident-free streaks and safety-first habits can be traded for an actual reward — the safer the shift, the bigger the payoff.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                  <CalendarCheck className="w-5 h-5" style={{ color: '#F43F5E' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#F9FAFB' }}>Attendance Streaks, Rewarded</h3>
                  <p style={{ color: '#9CA3AF' }}>Send recognition for on-time arrivals in moments and let your crew cash in points on their own schedule — no hoops to jump through.</p>
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
