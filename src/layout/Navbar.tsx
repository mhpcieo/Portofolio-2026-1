import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-main/80 backdrop-blur-md border-b border-border-soft py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Terminal className="w-6 h-6 text-primary group-hover:text-primary-soft transition-colors" />
          <span className="font-bold text-xl tracking-tight text-text-main group-hover:text-gradient transition-all">
            Habil.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors text-sm font-medium"
          >
            Contact Me
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-text-secondary hover:text-text-main"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bg-secondary border-b border-border-soft shadow-lg p-6 flex flex-col gap-4 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-text-secondary hover:text-primary transition-colors py-2 border-b border-border-soft/50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 w-full px-5 py-3 rounded-lg bg-primary/10 text-primary text-center font-medium border border-primary/20"
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
