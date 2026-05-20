import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/Badge';

const STACK = ['Flutter', 'Laravel', 'Express.js', 'PostgreSQL'];

const CODE_LINES: { tokens: { t: string; v: string }[]; cursor?: boolean }[] = [
  { tokens: [{ t: 'kw', v: 'const ' }, { t: 'var', v: 'dev' }, { t: 'op', v: ' = {' }] },
  { tokens: [{ t: 'sp', v: '  ' }, { t: 'key', v: 'name' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Habil Putrawan"' }, { t: 'op', v: ',' }] },
  { tokens: [{ t: 'sp', v: '  ' }, { t: 'key', v: 'role' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Mobile Developer"' }, { t: 'op', v: ',' }] },
  { tokens: [{ t: 'sp', v: '  ' }, { t: 'key', v: 'stack' }, { t: 'op', v: ': [' }, { t: 'str', v: '"Flutter"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"Laravel"' }, { t: 'op', v: '],' }] },
  { tokens: [{ t: 'sp', v: '  ' }, { t: 'key', v: 'available' }, { t: 'op', v: ': ' }, { t: 'bool', v: 'true' }] },
  { tokens: [{ t: 'op', v: '};' }] },
  { tokens: [] },
  { tokens: [{ t: 'fn', v: 'dev' }, { t: 'op', v: '.' }, { t: 'method', v: 'build' }, { t: 'op', v: '(' }, { t: 'str', v: '"your next app"' }, { t: 'op', v: ')' }], cursor: true },
];

const TC: Record<string, string> = {
  kw: 'text-amber-400', var: 'text-text-main', op: 'text-stone-600',
  sp: '', key: 'text-sky-300', str: 'text-emerald-400',
  bool: 'text-orange-400', fn: 'text-text-main', method: 'text-amber-300',
};

export const Hero = () => (
  <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-14">
    {/* Ambient */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at top, rgba(232,160,32,0.055) 0%, transparent 65%)' }} />

    <div className="max-w-6xl mx-auto px-6 w-full relative z-10 py-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left */}
        <div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="mb-6">
            <Badge pulse>Open to internship</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.07 }}
            className="text-[clamp(2.4rem,6.5vw,4.5rem)] font-bold leading-none tracking-tight"
          >
            <span className="text-text-main">Muhamad Habil</span>
            <br />
            <span className="text-gradient">Putrawan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="mt-5 text-[13.5px] text-text-secondary leading-[1.8] max-w-[380px]"
          >
            Software Engineering student. I build mobile apps with Flutter and
            backends with Laravel — focused on clean code and things that actually
            work in production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-stone-900 text-[13px] font-semibold hover:bg-primary-soft transition-colors duration-100 rounded-sm">
              See my work <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-1.5 text-[13px] text-text-secondary hover:text-text-main transition-colors duration-100">
              Get in touch <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.38 }}
            className="mt-12 flex items-center gap-3 flex-wrap"
          >
            <span className="mono text-[10px] text-text-muted uppercase tracking-[0.2em]">Stack</span>
            <span className="w-5 h-px bg-border" />
            {STACK.map((s, i) => (
              <span key={s} className="mono text-[11px] text-text-secondary">
                {s}{i < STACK.length - 1 && <span className="text-text-muted ml-2.5">·</span>}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — code editor box */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="hidden lg:block"
        >
          <div className="rounded-lg overflow-hidden border border-border" style={{ background: '#0f0d0a' }}>
            {/* Titlebar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border" style={{ background: '#141109' }}>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-stone-700/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-stone-700/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-stone-700/80" />
              </div>
              <span className="mono text-[11px] text-stone-600">developer.ts</span>
              <span className="mono text-[10px] text-stone-700">TS</span>
            </div>

            {/* Code */}
            <div className="px-4 py-4 mono text-[12.5px] leading-[1.85] select-none">
              {CODE_LINES.map((line, li) => (
                <div key={li} className="flex gap-4">
                  <span className="text-stone-700 text-[10px] w-3.5 shrink-0 text-right mt-[2px]">{li + 1}</span>
                  <span>
                    {line.tokens.map((tok, ti) => (
                      <span key={ti} className={TC[tok.t] ?? 'text-text-secondary'}>{tok.v}</span>
                    ))}
                    {line.cursor && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                        className="inline-block w-[2px] h-[13px] bg-primary align-middle ml-px"
                      />
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Statusbar */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-border" style={{ background: '#141109' }}>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="mono text-[10px] text-stone-600">ready</span>
              </div>
              <span className="mono text-[10px] text-stone-700">UTF-8</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>

    <div className="absolute bottom-0 inset-x-0 divider-warm" />
  </section>
);
