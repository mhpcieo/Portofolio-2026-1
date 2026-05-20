interface BadgeProps {
  children: React.ReactNode;
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ children, pulse = false }) => (
  <span className="inline-flex items-center gap-2 px-2.5 py-1 border border-primary/25 text-primary text-[11px] mono tracking-wide rounded-sm">
    {pulse && (
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
      </span>
    )}
    {children}
  </span>
);
