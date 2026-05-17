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
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-out outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-slate-900 hover:bg-primary-soft shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(103,232,249,0.5)] hover:-translate-y-1",
    outline: "border border-border-soft bg-white/5 hover:bg-white/10 text-text-main backdrop-blur-sm hover:-translate-y-1",
    ghost: "bg-transparent hover:bg-white/5 text-text-secondary hover:text-text-main",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...(props as any)}
    >
      {children}
      {icon && <span className="w-5 h-5">{icon}</span>}
    </motion.button>
  );
};
