import { Terminal } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border-soft bg-bg-secondary py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="font-bold text-lg text-text-main">Habil.</span>
        </div>
        
        <p className="text-text-secondary text-sm text-center md:text-left">
          © {new Date().getFullYear()} Habil Portofolio.
        </p>

      </div>
    </footer>
  );
};
