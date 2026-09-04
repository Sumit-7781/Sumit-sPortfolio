import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { experience } from '@/data/portfolioData';

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading label="03 — Experience" title="Where I've" highlight="Worked" />

      <div className="relative max-w-3xl">
        {/* Animated timeline line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent-500 via-cyan2-500/50 to-transparent origin-top"
        />

        {experience.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
            className="relative pl-16 pb-8"
          >
            {/* Node */}
            <div className="absolute left-2.5 top-1 flex items-center justify-center w-7 h-7 rounded-full bg-ink-850 border-2 border-accent-500 shadow-lg shadow-accent-500/20">
              <Briefcase size={14} className="text-accent-400" />
            </div>

            <div className="glass rounded-2xl p-6 card-hover">
              <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
              <p className="text-sm text-accent-400 font-medium mb-4">{exp.company}</p>
              <ul className="space-y-3">
                {exp.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan2-400/60" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
