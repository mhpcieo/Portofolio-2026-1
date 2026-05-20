export const Footer = () => (
  <footer className="border-t border-border py-7">
    <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <span className="mono text-[12px] text-text-main font-semibold">
        habil<span className="text-primary">.</span>
      </span>
      <p className="mono text-[11px] text-text-muted">
        © {new Date().getFullYear()} Muhamad Habil Putrawan
      </p>
    </div>
  </footer>
);
