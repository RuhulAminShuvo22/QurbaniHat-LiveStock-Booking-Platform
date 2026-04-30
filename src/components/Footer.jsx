import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden">
      
      {/* Top line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-green-500/10 via-transparent to-yellow-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="QurbaniHat"
                width={35}
                height={35}
              />
              <h2 className="text-xl font-bold text-black dark:text-white">
                QurbaniHat
              </h2>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              A trusted livestock marketplace for Qurbani. Find healthy cows and goats with ease and confidence.
            </p>

            {/* Social */}
            <div className="flex gap-4 text-xl text-gray-500">
              <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
              <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-semibold mb-4">Marketplace</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/" className="hover:text-black dark:hover:text-white">Home</Link></li>
              <li><Link href="/animals" className="hover:text-black dark:hover:text-white">All Animals</Link></li>
              <li><Link href="/my-profile" className="hover:text-black dark:hover:text-white">My Profile</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/contact" className="hover:text-black dark:hover:text-white">Contact</Link></li>
              <li><Link href="/terms" className="hover:text-black dark:hover:text-white">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-black dark:hover:text-white">Privacy</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="font-semibold">Start Booking</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Explore and book your perfect Qurbani animal today.
            </p>

            <Link
              href="/animals"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-gradient-to-r from-green-500 via-lime-500 to-yellow-500 
              text-black font-medium 
              hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Browse Animals
            </Link>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-200 dark:border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} QurbaniHat. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-black dark:hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-black dark:hover:text-white">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;