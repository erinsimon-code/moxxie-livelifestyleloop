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
              Appreciate — Reward — Keep
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#F9FAFB' }}>
              Made for Teams,<br />Fueled by Appreciation
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#9CA3AF' }}>
              My Point Penguin is a platform where achievements, milestones, and great effort translate into real points your people can cash in. It exists for organizations that want employees to feel genuinely valued every single day.
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
              Hard work shouldn't go unnoticed. My Point Penguin exists so employees have an effortless way to be noticed, thanked, and rewarded for what they bring to the table every single day.
            </p>
            <p className="text-lg mb-4" style={{ color: '#9CA3AF' }}>
              Hitting a goal, reaching a milestone, or simply pitching in all add up toward your points total. The more often your people get noticed, the more invested — and the more rewarded — they become.
            </p>
            <p className="text-lg" style={{ color: '#9CA3AF' }}>
              Become part of the growing list of organizations relying on My Point Penguin to thank and reward their staff. There's a win on your team ready to be marked.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#1F2937', borderColor: '#374151' }}>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                  <Award className="w-5 h-5" style={{ color: '#F43F5E' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#F9FAFB' }}>Milestones Worth Marking</h3>
                  <p style={{ color: '#9CA3AF' }}>Mark anniversaries, finished goals, and small daily wins — each one adds to the points total.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                  <Trophy className="w-5 h-5" style={{ color: '#F43F5E' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#F9FAFB' }}>Tangible Payoffs</h3>
                  <p style={{ color: '#9CA3AF' }}>Every point can be traded for an actual reward — the more appreciation earned, the bigger the payoff.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111827' }}>
                  <Zap className="w-5 h-5" style={{ color: '#F43F5E' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#F9FAFB' }}>Simple for Any Team</h3>
                  <p style={{ color: '#9CA3AF' }}>Send a shoutout in moments and let staff cash in points on their own schedule — no hoops to jump through.</p>
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
