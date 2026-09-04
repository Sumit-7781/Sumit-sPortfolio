import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative py-20 lg:py-28 section-pad ${className}`}>
      {children}
    </section>
  );
}

interface SectionHeadingProps {
  label: string;
  title: string;
  highlight?: string;
}

export function SectionHeading({ label, title, highlight }: SectionHeadingProps) {
  return (
    <div className="mb-12 lg:mb-16">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="font-mono text-sm text-accent-400 tracking-widest uppercase"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: 0.1 }}
        className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
      >
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-4 h-px w-20 bg-gradient-to-r from-accent-500 to-transparent origin-left"
      />
    </div>
  );
}
