import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

const SKILLS = [
  {
    category: 'Mobile',
    items: [
      { name: 'Flutter', note: 'Primary framework' },
      { name: 'Dart', note: 'Language' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Laravel', note: 'PHP framework' },
      { name: 'Express.js', note: 'Node.js' },
      { name: 'PHP', note: 'Language' },
      { name: 'JavaScript', note: 'Language' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'PostgreSQL', note: 'Relational' },
      { name: 'MySQL', note: 'Relational' },
      { name: 'Firebase', note: 'BaaS / NoSQL' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git & GitHub', note: 'Version control' },
      { name: 'REST API', note: 'Architecture' },
      { name: 'UI/UX Basics', note: 'Design' },
    ],
  },
];

export const Skills = () => (
  <section id="skills" className="py-24 relative z-10 border-t border-border">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-[240px_1fr] gap-14 lg:gap-20">

        {/* Left — sticky heading */}
        <div className="lg:sticky lg:top-20 lg:self-start">
          <SectionHeading
            label="02 — Skills"
            title="What I work with"
            subtitle="Tools I reach for when building something."
          />
        </div>

        {/* Right — grid table */}
        <div className="space-y-10">
          {SKILLS.map((group, gi) => (
            <motion.div key={group.category}
              initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.3, delay: gi * 0.05 }}
            >
              <p className="mono text-[10px] text-text-muted uppercase tracking-[0.2em] mb-3">
                {group.category}
              </p>
              {/* Pixel-grid style — 1px gaps between cells */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border rounded overflow-hidden">
                {group.items.map((skill) => (
                  <div key={skill.name}
                    className="bg-bg-main px-4 py-3 hover:bg-bg-card transition-colors duration-100 group cursor-default">
                    <p className="text-[13px] font-medium text-text-main group-hover:text-primary transition-colors duration-100">
                      {skill.name}
                    </p>
                    <p className="mono text-[10px] text-text-muted mt-0.5">{skill.note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  </section>
);
