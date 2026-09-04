import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { framerTransitions, buttonHoverVariants } from '@/lib/motion';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'TESTIMONIALS', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none">
      {/* Top Banner (Framer Desktop Banner) */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={framerTransitions.quickInteractive}
            className="w-full bg-[#ec4d09] text-white text-[13px] font-medium py-2 px-4 pointer-events-auto overflow-hidden hidden md:block"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between font-satoshi">
              <div className="flex items-center gap-4">
                <a href="mailto:CONTACT@HYPERFIT.COM" className="hover:underline transition-all">
                  CONTACT@HYPERFIT.COM
                </a>
                <span className="opacity-50">/</span>
                <a href="tel:(123) 456 - 7890" className="hover:underline transition-all">
                  (123) 456 - 7890
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="opacity-75">OPEN HOURS:</span>
                <span>MONDAY - FRIDAY [ 7 AM - 10 PM ]</span>
                <span className="opacity-50">/</span>
                <span>SATURDAY - SUNDAY [ 7 AM - 9 AM ]</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar Pill */}
      <div className="w-full max-w-7xl px-4 py-3 md:py-4 pointer-events-auto">
        <motion.div
          animate={{
            backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.92)' : 'rgba(255, 255, 255, 0.08)',
            boxShadow: scrolled
              ? '0px 1px 19px 0px rgba(255, 255, 255, 0.13)'
              : '0px 10px 30px -10px rgba(0,0,0,0.5)',
          }}
          transition={framerTransitions.stickyHeaderScroll}
          className="flex items-center justify-between backdrop-blur-xl border border-white/10 rounded-full px-6 py-2.5"
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src="/images/img_1_6CIr9F5Zo7XUchFDBRgc.png"
              alt="HYPERFIT Logo"
              className="h-7 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  color: '#000000',
                }}
                whileTap={{ scale: 0.96 }}
                transition={framerTransitions.navPill}
                className="text-[13px] font-semibold tracking-wider text-zinc-300 px-4 py-2 rounded-full transition-colors font-satoshi"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Contact CTA Button */}
          <div className="hidden lg:flex items-center">
            <motion.a
              href="#contact"
              variants={buttonHoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center gap-2 bg-[#ccff00] text-black font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(204,255,0,0.2)]"
            >
              <span>CONTACT US</span>
              <motion.div
                whileHover={{ rotate: 45 }}
                transition={framerTransitions.quickInteractive}
                className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center"
              >
                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
              </motion.div>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </motion.div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={framerTransitions.navPill}
              className="lg:hidden mt-3 bg-black/95 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-2xl"
            >
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-semibold tracking-wider text-zinc-200 hover:text-[#ccff00] transition-colors py-2 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                ))}
                <motion.a
                  href="#contact"
                  variants={buttonHoverVariants}
                  whileTap="tap"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-[#ccff00] text-black font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full"
                >
                  <span>CONTACT US</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
