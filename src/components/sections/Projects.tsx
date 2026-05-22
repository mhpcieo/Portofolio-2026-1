import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

import basketCourtImg from '../../assets/loan_ticket.png';
import ticketAppImg from '../../assets/ticket.png';
import hurbenImg from '../../assets/hurben.png';

const PROJECTS = [
  {
    index: '01',
    title: 'Basket Court Booking',
    type: 'Mobile App',
    year: '2024',
    desc: 'Flutter app for booking basketball court rentals. Clean UI slicing, smooth booking flow, navigation that feels natural.',
    tech: ['Flutter', 'Dart'],
    github: 'https://github.com/mhpcieo/Slicing_fieldloan.git',
    image: basketCourtImg,
  },
  {
    index: '02',
    title: 'Buy Ticket App',
    type: 'Mobile App',
    year: '2024',
    desc: 'Ticket management app with an admin dashboard. Responsive layout, clear data display — built to make sense at a glance.',
    tech: ['Flutter', 'Dart'],
    github: 'https://github.com/mhpcieo/slicingtiket.git',
    image: ticketAppImg,
  },
  {
    index: '03',
    title: 'Hurben Rekreasi',
    type: 'Web Platform',
    year: '2024',
    desc: 'Web platform for purchasing amusement park tickets. Laravel + MySQL backend with JWT auth, input validation, error handling.',
    tech: ['Laravel', 'MySQL', 'PHP'],
    github: 'https://github.com/mhpcieo/Hurbenrekreasi.git',
    image: hurbenImg,
  },
];

export const Projects = () => (
  <section id="projects" className="py-24 relative z-10 border-t border-border">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeading
        label="03 — Projects"
        title="Things I've built"
        subtitle="Three projects, each one a different problem to solve."
      />

      <div className="mt-14 space-y-14">
        {PROJECTS.map((p, idx) => (
          <motion.div key={p.index}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.4, delay: idx * 0.04 }}
            className="grid lg:grid-cols-[1fr_400px] gap-7 lg:gap-10 items-start group"
          >
            {/* Text */}
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center gap-2.5">
                <span className="mono text-[10px] text-text-muted">{p.index}</span>
                <span className="h-px w-3 bg-border" />
                <span className="mono text-[10px] text-text-muted uppercase tracking-wider">{p.type}</span>
                <span className="mono text-[10px] text-text-muted ml-auto">{p.year}</span>
              </div>

              <h3 className="text-[1.1rem] font-semibold text-text-main group-hover:text-primary transition-colors duration-150">
                {p.title}
              </h3>

              <p className="text-[13px] text-text-secondary leading-relaxed">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="mono text-[10px] px-2 py-0.5 border border-border text-text-secondary rounded-sm">
                    {t}
                  </span>
                ))}
              </div>

              <a href={p.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mono text-[12px] px-4 py-2 bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-stone-900 transition-all duration-150 rounded-sm w-fit mt-1 font-medium">
                View source <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Image */}
            <div className="border border-border rounded-sm overflow-hidden bg-bg-secondary">
              <img src={p.image} alt={p.title}
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
