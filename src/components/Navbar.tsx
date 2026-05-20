import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Disc } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'VPS Hosting', href: '/vps-hosting' },
    { name: 'Minecraft Hosting', href: '/minecraft-hosting' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-4 glass-panel border-b border-brand-pink/10 shadow-lg shadow-black/40'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden border border-brand-pink/20 glow-primary-hover">
              <img src="/logo.png" alt="Nyxore Logo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-vibrant to-brand-pink opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-brand-cream">
              Nyxore<span className="text-brand-pink font-light">.Cloud</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-sans font-medium text-xs lg:text-sm text-brand-cream/80 hover:text-brand-pink transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-brand-vibrant/20 border border-brand-vibrant/40 hover:bg-brand-vibrant/40 hover:border-brand-vibrant/80 hover:scale-[1.02] text-brand-cream text-xs lg:text-sm font-medium transition-all duration-200 glow-primary-hover"
            >
              <Disc className="w-4 h-4 text-brand-pink" />
              <span>Join Discord</span>
            </a>
            <Link
              to="/pricing"
              className="px-4 py-2.5 rounded-xl bg-brand-cream text-brand-deep text-xs lg:text-sm font-semibold hover:bg-brand-pink hover:shadow-lg hover:shadow-brand-pink/20 transition-all duration-200"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-brand-cream/80 hover:text-brand-cream hover:bg-brand-pink/5 border border-brand-pink/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[76px] z-40 md:hidden glass-panel border-b border-brand-pink/10 py-6 px-6 shadow-2xl shadow-black/80 flex flex-col space-y-4"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans font-medium text-base text-brand-cream/80 hover:text-brand-pink py-2 transition-colors duration-200 border-b border-brand-pink/5"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-brand-vibrant/20 border border-brand-vibrant/40 text-brand-cream text-sm font-medium transition-all"
              >
                <Disc className="w-4 h-4 text-brand-pink" />
                <span>Join Discord</span>
              </a>
              <Link
                to="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center px-5 py-3 rounded-xl bg-brand-cream text-brand-deep text-sm font-semibold hover:bg-brand-pink transition-all"
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
