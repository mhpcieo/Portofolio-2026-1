import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ children, icon, className = '', pulse = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary-soft text-sm font-medium backdrop-blur-sm ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
      )}
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </motion.div>
  );
};
