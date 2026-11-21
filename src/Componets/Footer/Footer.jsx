import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#244B3A] text-white pt-16 pb-10 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Centered Brand & Social Section */}
        <div className="flex flex-col items-center text-center">
          {/* Brand Name */}
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-4">
            <span className="font-bold">Keen</span>
            <span className="font-normal">Keeper</span>
          </h2>

          {/* Tagline */}
          <p className="text-sm sm:text-base text-gray-200/90 max-w-2xl mb-8">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>

          {/* Social Links */}
          <p className="text-sm font-medium text-white mb-4">Social Links</p>
          <div className="flex items-center gap-3 mb-12">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white text-[#244B3A] flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white text-[#244B3A] flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="#"
              aria-label="X"
              className="w-9 h-9 rounded-full bg-white text-[#244B3A] flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-300/75">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}