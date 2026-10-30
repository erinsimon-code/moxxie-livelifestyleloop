import Link from 'next/link';
import { Clock, ShieldCheck, CalendarCheck, Megaphone } from 'lucide-react';
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
              About Point Penguin Plus
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#F9FAFB' }}>
              Recognition Designed Around the Shift Schedule
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#9CA3AF' }}>
              Most recognition tools are built for people who sit at a desk all day. Point Penguin Plus was built for the people who don't — warehouse crews, retail associates, drivers, techs, and every hourly worker whose wins usually go unmeasured.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#F9FAFB' }}>Why We Started Point Penguin Plus</h2>
          <p className="text-lg mb-4" style={{ color: '#9CA3AF' }}>
            Hourly and frontline employees keep operations running, yet most recognition software is built around annual reviews and desk-based KPIs. We set out to build something that matches the rhythm of a shift schedule instead — recognition that happens in real time, on the floor, at the clock-in, and on the radio between a manager and their crew.
          </p>
          <p className="text-lg" style={{ color: '#9CA3AF' }}>
            Point Penguin Plus turns the four things that matter most on a shift — milestones, safety, attendance, and manager feedback — into points your team can actually redeem.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#1F2937', borderColor: '#374151' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                <Clock className="w-5 h-5" style={{ color: '#F43F5E' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#F9FAFB' }}>Shift Milestones</h3>
                <p style={{ color: '#9CA3AF' }}>Hours logged, shifts completed, and tenure anniversaries are tracked automatically and translated into points without any extra paperwork.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#1F2937', borderColor: '#374151' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                <ShieldCheck className="w-5 h-5" style={{ color: '#F43F5E' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#F9FAFB' }}>Safety Recognition</h3>
                <p style={{ color: '#9CA3AF' }}>Incident-free stretches, completed safety checks, and proactive hazard reporting earn points that reinforce the behavior you want to see.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#1F2937', borderColor: '#374151' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                <CalendarCheck className="w-5 h-5" style={{ color: '#F43F5E' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#F9FAFB' }}>Attendance Streaks</h3>
                <p style={{ color: '#9CA3AF' }}>Consecutive on-time clock-ins build into visible streaks, so dependable employees get noticed for the reliability that keeps shifts covered.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#1F2937', borderColor: '#374151' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                <Megaphone className="w-5 h-5" style={{ color: '#F43F5E' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#F9FAFB' }}>Manager Shout-Outs</h3>
                <p style={{ color: '#9CA3AF' }}>Supervisors can send a point-backed shout-out in seconds for the moments that don't fit into an automated rule — covering a last-minute shift, helping a teammate, or going above and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
