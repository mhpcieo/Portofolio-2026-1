import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

const FACTS = [
  { num: '01', title: 'Mobile-first', body: 'Flutter is my main tool. Smooth UIs, clean state management, apps that feel native on both platforms.' },
  { num: '02', title: 'Backend too', body: 'Laravel for structured PHP work, Express.js when I need something lighter. REST APIs, JWT auth, validation — full stack.' },
  { num: '03', title: 'Code quality', body: 'I keep things modular and readable. Future-me will thank present-me — and so will anyone else who touches the code.' },
  { num: '04', title: 'Always building', body: "I learn by doing. If I don't understand something, I build a small thing with it until I do." },
];

export const About = () => (
  <section id="about" className="py-24 relative z-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">

        {/* Left */}
        <div>
          <SectionHeading label="01 — About" title="Who I am" />

          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.38, delay: 0.08 }}
            className="mt-7 space-y-3.5 text-[13.5px] text-text-secondary leading-[1.8]"
          >
            <p>
              I'm a Software Engineering (RPL) student in Indonesia. I got into programming
              because I wanted to understand how things work — and stayed because building
              stuff is genuinely satisfying.
            </p>
            <p>
              My main focus is mobile development with Flutter, but I also spend real time
              on the backend with Laravel and Express.js. I like when both sides of an app
              are clean and intentional.
            </p>
            <p>
              Three projects shipped so far. Each one taught me something I didn't expect.
              Looking for an internship where I can keep learning and actually contribute.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-7 flex flex-wrap gap-1.5"
          >
            {['Flutter', 'Dart', 'Laravel', 'Express.js', 'PostgreSQL', 'MySQL', 'Firebase'].map((t) => (
              <span key={t}
                className="mono text-[11px] px-2 py-0.5 border border-border text-text-secondary hover:border-primary/30 hover:text-primary transition-colors duration-100 cursor-default rounded-sm">
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — numbered list */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.38, delay: 0.1 }}
          className="lg:pt-12 divide-y divide-border"
        >
          {FACTS.map((item, i) => (
            <motion.div key={item.num}
              initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.06 }}
              className="py-4 flex gap-4 group"
            >
              <span className="mono text-[10px] text-primary/30 mt-0.5 shrink-0 w-5 group-hover:text-primary/55 transition-colors">
                {item.num}
              </span>
              <div>
                <p className="text-[13px] font-semibold text-text-main mb-1">{item.title}</p>
                <p className="text-[13px] text-text-secondary leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  </section>
);
