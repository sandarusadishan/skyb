import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface MagneticLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function MagneticLink({ href, children, onClick }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const isActive = location.pathname === href;

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="relative"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      <Link
        ref={ref}
        to={href}
        onClick={onClick}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        className={`magnetic-link relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
          isActive ? 'text-primary text-glow' : 'text-foreground hover:text-primary'
        }`}
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 rounded-lg bg-primary/10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
    </motion.div>
  );
}
