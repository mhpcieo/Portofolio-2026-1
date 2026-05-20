import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  icon,
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-40 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-primary text-slate-900 hover:bg-primary-soft active:scale-[0.98]',
    outline:
      'border border-white/10 text-text-main hover:border-white/20 hover:bg-white/5 active:scale-[0.98]',
    ghost:
      'text-text-secondary hover:text-text-main hover:bg-white/5',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...(props as any)}
    >
      {children}
      {icon && <span>{icon}</span>}
    </motion.button>
  );
};
