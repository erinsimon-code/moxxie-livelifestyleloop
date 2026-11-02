import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#0F1F19' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lifestyle Loop</h3>
            <p style={{ color: '#F2FBF7' }}>
              Pick your habits, check in daily, build your streak, and redeem the points you earn in the Lifestyle Loop rewards catalog.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" style={{ color: '#F2FBF7' }} className="hover:text-white">How It Works</Link></li>
              <li><Link href="/habits" style={{ color: '#F2FBF7' }} className="hover:text-white">Habits</Link></li>
              <li><Link href="/rewards" style={{ color: '#F2FBF7' }} className="hover:text-white">Rewards</Link></li>
              <li><Link href="/about" style={{ color: '#F2FBF7' }} className="hover:text-white">About</Link></li>
              <li><Link href="/signup" style={{ color: '#F2FBF7' }} className="hover:text-white">Get Started</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" style={{ color: '#F2FBF7' }} className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" style={{ color: '#F2FBF7' }} className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/contact" style={{ color: '#F2FBF7' }} className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p style={{ color: '#F2FBF7' }}>support@livelifestyleloop.com</p>
            <p className="mt-2" style={{ color: '#F2FBF7' }}>3 Germay Dr, Unit 4-3226, Wilmington, DE 19804</p>
            <a href="tel:+18335719204" className="mt-2 block hover:text-white" style={{ color: '#F2FBF7' }}>(833) 571-9204</a>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #F59E0B', color: '#F2FBF7' }}>
          <p>&copy; 2026 Lifestyle Loop. All rights reserved.</p>
          <p className="mt-2 text-sm">Lifestyle Loop is a service of Lifecycle Loop LLC.</p>
        </div>
      </div>
    </footer>
  );
}
