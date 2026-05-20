import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certs', href: '#certificates' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(globalThis.scrollY > 32);
    globalThis.addEventListener('scroll', fn);
    return () => globalThis.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${scrolled ? 'bg-bg-main/95 backdrop-blur-md border-b border-border' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="mono text-[13px] font-semibold text-text-main">
          habil<span className="text-primary">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <a key={l.name} href={l.href} className="text-[13px] text-text-secondary hover:text-text-main transition-colors duration-100">
              {l.name}
            </a>
          ))}
          <a href="#contact" className="mono text-[12px] px-3 py-1.5 border border-primary/35 text-primary hover:bg-primary/8 transition-colors duration-100 rounded-sm">
            Contact
          </a>
        </nav>

        <button className="md:hidden text-text-secondary" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.12 }}
            className="md:hidden bg-bg-secondary border-b border-border px-6 py-4 flex flex-col"
          >
            {LINKS.map((l) => (
              <a key={l.name} href={l.href} onClick={() => setOpen(false)}
                className="py-3 text-[13px] text-text-secondary hover:text-text-main border-b border-border/50 last:border-0 transition-colors">
                {l.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}
              className="mt-3 py-2.5 text-[13px] text-primary text-center border border-primary/25 rounded-sm hover:bg-primary/8 transition-colors">
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
