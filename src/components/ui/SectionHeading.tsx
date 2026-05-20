import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ label, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.38 }}
  >
    <p className="mono text-[10px] text-primary/55 tracking-[0.22em] uppercase mb-2.5">{label}</p>
    <h2 className="text-[1.85rem] md:text-[2.2rem] font-bold text-text-main tracking-tight leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2.5 text-[13px] text-text-secondary leading-relaxed max-w-sm">{subtitle}</p>
    )}
  </motion.div>
);
