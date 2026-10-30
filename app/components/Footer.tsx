import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#111827' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">My Point Penguin</h3>
            <p style={{ color: '#F9FAFB' }}>
              A platform built to help organizations thank their people and turn great effort into real rewards.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/about" style={{ color: '#F9FAFB' }} className="hover:text-white">About</Link></li>
              <li><Link href="/signup" style={{ color: '#F9FAFB' }} className="hover:text-white">Get Started</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" style={{ color: '#F9FAFB' }} className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" style={{ color: '#F9FAFB' }} className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/contact" style={{ color: '#F9FAFB' }} className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p style={{ color: '#F9FAFB' }}>support@mypointpenguin.com</p>
            <p className="mt-2" style={{ color: '#F9FAFB' }}>800 N King Street 304-1991, Wilmington, DE 19801</p>
            <a href="tel:+18335719204" className="mt-2 block hover:text-white" style={{ color: '#F9FAFB' }}>(833) 571-9204</a>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #F43F5E', color: '#F9FAFB' }}>
          <p>&copy; 2026 My Point Penguin. All rights reserved.</p>
          <p className="mt-2 text-sm">My Point Penguin is a service of The Point Penguin LLC.</p>
        </div>
      </div>
    </footer>
  );
}
