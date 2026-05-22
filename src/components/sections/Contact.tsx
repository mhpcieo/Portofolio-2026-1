import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowUpRight, Send, CheckCircle, AlertCircle } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// SETUP: Untuk mengaktifkan pengiriman email:
// 1. Buka https://web3forms.com
// 2. Masukkan email kamu → klik "Create Access Key"
// 3. Cek email → copy access key yang dikirim
// 4. Ganti nilai ACCESS_KEY di bawah ini dengan key kamu
// ─────────────────────────────────────────────────────────────
const ACCESS_KEY = '19da9eaf-ad65-42f3-adf0-84a8fea3cb48';

const LINKS = [
  { label: 'Email',     value: 'muhamadhabilputrawan@gmail.com', href: 'mailto:muhamadhabilputrawan@gmail.com' },
  { label: 'WhatsApp',  value: '+62 852-8225-1956',              href: 'https://wa.me/6285282251956' },
  { label: 'GitHub',    value: 'github.com/mhpcieo',             href: 'https://github.com/mhpcieo' },
  { label: 'Instagram', value: '@habilpiyo',                     href: 'https://www.instagram.com/habilpiyo' },
  { label: 'LinkedIn',  value: 'Muhamad Habil Putrawan',         href: 'https://www.linkedin.com/in/muhamad-habil-putrawan-786987322' },
];

type Status = 'idle' | 'sending' | 'ok' | 'err';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio contact from ${form.name}`,
          from_name: form.name,
          ...form,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('ok');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('err');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('err');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24">

          {/* Left */}
          <div>
            <SectionHeading
              label="05 — Contact"
              title="Let's talk"
              subtitle="Open to internship opportunities, collaborations, or just a conversation."
            />

            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.12 }}
              className="mt-9 divide-y divide-border"
            >
              {LINKS.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between py-3.5 group">
                  <div>
                    <p className="mono text-[10px] text-text-muted mb-0.5 uppercase tracking-wider">{l.label}</p>
                    <p className="text-[13px] text-text-main group-hover:text-primary transition-colors duration-100">{l.value}</p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-primary transition-colors duration-100 shrink-0" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.38, delay: 0.08 }}
            className="lg:pt-12"
          >
            {/* Success banner */}
            {status === 'ok' && (
              <motion.div
                initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                className="mb-5 flex items-center gap-2.5 px-3.5 py-3 border border-emerald-500/25 bg-emerald-500/8 rounded-sm text-emerald-400 text-[13px]"
              >
                <CheckCircle className="w-4 h-4 shrink-0" />
                Message sent — I'll get back to you soon.
              </motion.div>
            )}

            {/* Error banner */}
            {status === 'err' && (
              <motion.div
                initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                className="mb-5 flex items-center gap-2.5 px-3.5 py-3 border border-red-500/25 bg-red-500/8 rounded-sm text-red-400 text-[13px]"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                Something went wrong. Try again or email me directly.
              </motion.div>
            )}

            <form onSubmit={onSubmit} className="space-y-4">
              {/* Name + Email row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="f-name" className="block mono text-[10px] text-text-secondary mb-1.5 uppercase tracking-wider">
                    Name
                  </label>
                  <input id="f-name" name="name" type="text" required
                    value={form.name} onChange={onChange}
                    placeholder="Your name" className="field" />
                </div>
                <div>
                  <label htmlFor="f-email" className="block mono text-[10px] text-text-secondary mb-1.5 uppercase tracking-wider">
                    Email
                  </label>
                  <input id="f-email" name="email" type="email" required
                    value={form.email} onChange={onChange}
                    placeholder="your@email.com" className="field" />
                </div>
              </div>

              <div>
                <label htmlFor="f-msg" className="block mono text-[10px] text-text-secondary mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea id="f-msg" name="message" required rows={5}
                  value={form.message} onChange={onChange}
                  placeholder="What's on your mind?"
                  className="field resize-none" />
              </div>

              <button type="submit" disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-stone-900 text-[13px] font-semibold hover:bg-primary-soft transition-colors duration-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm">
                {status === 'sending' ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-stone-900/30 border-t-stone-900 rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
