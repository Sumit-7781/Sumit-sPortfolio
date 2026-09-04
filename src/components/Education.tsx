import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { education } from '@/data/portfolioData';

export function Education() {
  return (
    <Section id="education">
      <SectionHeading label="06 — Education" title="Academic" highlight="Background" />

      <div className="relative max-w-3xl">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-cyan2-500 via-accent-500/50 to-transparent origin-top"
        />

        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
            className="relative pl-16 pb-8 last:pb-0"
          >
            <div className="absolute left-2.5 top-1 flex items-center justify-center w-7 h-7 rounded-full bg-ink-850 border-2 border-cyan2-500 shadow-lg shadow-cyan2-500/20">
              <GraduationCap size={14} className="text-cyan2-400" />
            </div>

            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-base font-semibold text-white">{edu.degree}</h3>
                  <p className="flex items-center gap-1.5 mt-1 text-sm text-gray-400">
                    <MapPin size={12} className="text-gray-500" />
                    {edu.institution}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-gray-500">{edu.year}</span>
                  <p className="mt-1 text-sm font-medium text-cyan2-400">{edu.score}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
