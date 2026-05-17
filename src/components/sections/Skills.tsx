import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

const SKILLS = [
  { name: 'Flutter', category: 'Mobile', color: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/20' },
  { name: 'Dart', category: 'Language', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
  { name: 'Laravel', category: 'Backend', color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20' },
  { name: 'PHP', category: 'Language', color: 'text-indigo-400', bg: 'bg-indigo-400/10', border: 'border-indigo-400/20' },
  { name: 'JavaScript', category: 'Language', color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
  { name: 'Express.js', category: 'Backend', color: 'text-gray-300', bg: 'bg-gray-300/10', border: 'border-gray-300/20' },
  { name: 'PostgreSQL', category: 'Database', color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { name: 'MySQL', category: 'Database', color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/20' },
  { name: 'REST API', category: 'Architecture', color: 'text-teal-400', bg: 'bg-teal-400/10', border: 'border-teal-400/20' },
  { name: 'Git & GitHub', category: 'Tools', color: 'text-white', bg: 'bg-white/10', border: 'border-white/20' },
  { name: 'Firebase', category: 'BaaS', color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
  { name: 'UI/UX Fundamentals', category: 'Design', color: 'text-pink-400', bg: 'bg-pink-400/10', border: 'border-pink-400/20' },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Technical " 
          subtitle="Kumpulan teknologi yang saya gunakan untuk mentransformasi ide menjadi produk digital fungsional."
        />

        <div className="mt-16 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ 
                y: -5, 
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(56, 189, 248, 0.3)" 
              }}
              className={`glass-card px-6 py-4 rounded-2xl flex flex-col items-center gap-1 cursor-default ${skill.border}`}
            >
              <div className={`text-xs font-medium tracking-wider uppercase mb-1 opacity-60 ${skill.color}`}>
                {skill.category}
              </div>
              <div className={`font-bold text-lg text-text-main group-hover:${skill.color} transition-colors`}>
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Abstract Floating Decoration */}
        <div className="mt-20 relative h-32 flex justify-center items-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-64 h-64 border border-dashed border-primary/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-48 h-48 border border-primary/10 rounded-full"
          />
          <div className="glass-card px-8 py-3 rounded-full border-primary/30 z-10">
            <span className="text-primary font-medium tracking-wide text-sm">Continuous Learning</span>
          </div>
        </div>

      </div>
    </section>
  );
};
