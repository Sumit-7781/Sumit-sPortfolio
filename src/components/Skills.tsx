import { motion } from 'framer-motion';
import {
  Code2, Layout, Server, Database, Coffee, Wrench,
} from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { skillCategories } from '@/data/portfolioData';

const iconMap: Record<string, typeof Code2> = {
  Code2, Layout, Server, Database, Coffee, Wrench,
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading label="02 — Skills" title="Tech I" highlight="Work With" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, i) => {
          const Icon = iconMap[cat.icon];
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-2xl p-6 card-hover group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-accent-500/15 to-cyan2-500/10 text-accent-400 group-hover:scale-105 transition-transform">
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className="text-base font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + j * 0.03 }}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-medium text-gray-300 hover:border-accent-500/30 hover:text-white transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
