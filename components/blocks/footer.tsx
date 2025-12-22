import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border font-sans">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-8 md:gap-12">

          {/* Brand */}
          <div className="space-y-4 break-words">
            <Link href="/" aria-label="home" className="flex items-center">
              <div className="rounded-lg p-2 bg-black/95 backdrop-blur-md shadow-xl border border-white/10 max-w-full">
                <div className="relative h-12 w-40 sm:h-14 sm:w-48 lg:h-16 lg:w-56">
                  <Image
                    src="/Aarya-logo-Golden.svg"
                    alt="Aarya Hotels"
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </Link>

            <p className="text-sm text-foreground/80 max-w-xs">
              Blending tradition with modern luxury, AARYA Hotels creates meaningful stays designed for comfort, connection, and lasting impressions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '#about' },
                { label: 'Our Hotels', href: '/hotels/ramnagar' },
                { label: 'Contact Us', href: '#contact' },
                { label: 'Partner With Us', href: '#partner-with-us' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/80">
                  Basai ramnagar, Kashipur, Road, Ramnagar, Uttarakhand 244715
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="tel:+919319020033"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  +91 9319020033
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="mailto:contactus@aaryahotels.in"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  contactus@aaryahotels.in
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: 'https://instagram.com/aaryahotels', label: 'Instagram' },
                { icon: Facebook, href: 'https://facebook.com/aaryahotels', label: 'Facebook' },
                { icon: Twitter, href: 'https://twitter.com/aaryahotels', label: 'Twitter' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/80 text-center md:text-left">
              © {currentYear} AARYA Hotels. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-foreground/80">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
