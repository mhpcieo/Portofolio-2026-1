import { motion } from 'framer-motion';
import { ArrowRight, Mail, Terminal, Code2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-primary-soft/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge pulse icon={<Terminal className="w-4 h-4" />}>
                Available for Internship
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-4">
                Hi, I'm <span className="text-gradient">Habil</span>
                <br />
                <span className="text-4xl md:text-5xl text-text-secondary mt-2 block">
                  Mobile App Developer
                </span>
              </h1>
              <p className="text-xl text-primary font-medium flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Flutter Developer • Backend Developer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-secondary text-lg leading-relaxed max-w-xl"
            >
              <strong className="text-text-main font-medium block mb-2">
                "Building clean, scalable, and meaningful digital experiences."
              </strong>
              Saya adalah siswa RPL yang fokus pada pengembangan aplikasi modern menggunakan Flutter, Laravel, Express.js, dan PostgreSQL. Saya suka membangun tampilan yang clean, performa yang optimal, dan backend yang terstruktur.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <Button onClick={() => window.location.href = '#projects'} icon={<ArrowRight />}>
                View Projects
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '#contact'} icon={<Mail />}>
                Contact Me
              </Button>
            </motion.div>
          </div>

          {/* Right Visual (Asymmetrical Modern Showcase) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[4/5] glass-card rounded-2xl p-6 overflow-hidden border border-border-soft/50 shadow-2xl group">
              {/* Abstract decorative elements inside the card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full blur-2xl transition-all group-hover:bg-primary/30" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary-soft/20 rounded-tr-full blur-2xl transition-all group-hover:bg-primary-soft/30" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-text-secondary font-mono">portfolio.tsx</span>
                </div>
                
                <div className="space-y-4 font-mono text-sm">
                  <p className="text-primary-soft">const <span className="text-primary">developer</span> = {'{'}</p>
                  <p className="pl-6 text-text-secondary">name: <span className="text-green-400">'Habil'</span>,</p>
                  <p className="pl-6 text-text-secondary">role: <span className="text-green-400">'Mobile App Developer'</span>,</p>
                  <p className="pl-6 text-text-secondary">passion: <span className="text-green-400">'Clean Code'</span>,</p>
                  <p className="pl-6 text-text-secondary">status: <span className="text-green-400">'Ready to work'</span></p>
                  <p className="text-primary-soft">{'}'};</p>
                  <br/>
                  <p className="text-text-secondary"><span className="text-primary-soft">developer</span>.build(awesomeApp);</p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-border-soft/50 flex justify-between items-center">
                  <span className="text-xs text-text-secondary">System Status: Online</span>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -left-6 lg:left-10 glass-card px-4 py-3 rounded-xl flex items-center gap-3 shadow-xl"
            >
              <div className="w-8 h-8 rounded-full bg-[#02569B]/20 flex items-center justify-center">
                <span className="text-[#02569B] font-bold text-xs">FL</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-text-main">Flutter</span>
                <span className="text-xs text-text-secondary">Mobile Dev</span>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-4 glass-card px-4 py-3 rounded-xl flex items-center gap-3 shadow-xl"
            >
              <div className="w-8 h-8 rounded-full bg-[#FF2D20]/20 flex items-center justify-center">
                <span className="text-[#FF2D20] font-bold text-xs">LV</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-text-main">Laravel</span>
                <span className="text-xs text-text-secondary">Backend Dev</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
