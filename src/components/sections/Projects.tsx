import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

// IMPORT IMAGE
import basketCourtImg from '../../assets/loan_ticket.png';
import ticketAppImg from '../../assets/ticket.png';
import hurbenImg from '../../assets/hurben.png';

const PROJECTS = [
  {
    title: 'Basket Court Booking Mobile App',
    desc: 'A mobile application designed for booking and managing basketball court rentals with a modern and user-friendly interface.',
    tech: ['Flutter'],
    features: ['UI Slicing'],
    github: 'https://github.com/mhpcieo/Slicing_fieldloan.git',
    image: basketCourtImg
  },
  {
    title: 'Buy Ticket App',
    desc: 'A ticket management system featuring an interactive admin dashboard, real-time monitoring, and automated reporting functionality.',
    tech: ['Flutter'],
    features: ['Responsive UI', 'Dashboard Interface'],
    github: 'https://github.com/mhpcieo/slicingtiket.git',
    image: ticketAppImg
  },
  {
    title: 'Hurben',
    desc: 'A web-based platform for purchasing amusement park and attraction tickets with a clean and intuitive user experience.',
    tech: ['Laravel', 'MySQL'],
    features: ['Auth JWT', 'Error Handling', 'Validation Data'],
    github: 'https://github.com/mhpcieo/Hurbenrekreasi.git',
    image: hurbenImg
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Selected projects that reflect my understanding of clean code and software architecture."
        />

        <div className="mt-20 space-y-32">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                
                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2 rounded-3xl overflow-hidden glass-card relative group bg-white/5"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-transparent" />
                </motion.div>

                {/* Project Details */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-1/2 flex flex-col items-start"
                >
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-text-main mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* Features */}
                  <div className="mb-8 w-full">
                    <h4 className="text-sm font-semibold text-text-main mb-3 uppercase tracking-wider">
                      Key Features
                    </h4>

                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-2 text-sm text-text-secondary"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Github Button */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-medium transition-all duration-300 hover:scale-105 hover:opacity-90"
                    >
                      <Code className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};