import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative mt-24">
      
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-green-500/5 via-transparent to-yellow-500/5 
        dark:from-green-500/10 dark:to-yellow-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="QurbaniHat logo"
                width={32}
                height={32}
                className="dark:brightness-200"
              />
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                QurbaniHat
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              A modern livestock marketplace for Qurbani. Explore healthy cows and goats easily and book with confidence.
            </p>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Marketplace
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-black dark:hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/animals" className="hover:text-black dark:hover:text-white transition">
                  All Animals
                </Link>
              </li>

              <li>
                <Link href="/my-profile" className="hover:text-black dark:hover:text-white transition">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/about" className="hover:text-black dark:hover:text-white transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-black dark:hover:text-white transition">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-black dark:hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Start Booking
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Find your perfect Qurbani animal today and book easily.
            </p>

            <Link
              href="/animals"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-gradient-to-r from-green-500 via-lime-500 to-yellow-500 
              text-black text-sm font-medium 
              transition-all duration-200 
              hover:scale-[1.05] hover:shadow-lg"
            >
              Browse Animals
            </Link>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} QurbaniHat. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-black dark:hover:text-white transition">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-black dark:hover:text-white transition">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;