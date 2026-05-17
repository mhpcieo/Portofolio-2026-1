import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  align = 'center' 
}) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">{title}</span>
        </h2>
        {subtitle && (
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};
