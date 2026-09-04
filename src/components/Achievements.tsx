import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { achievements } from '@/data/portfolioData';

const iconMap: Record<string, typeof Trophy> = { Trophy, Award };

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading label="05 — Achievements" title="Milestones &" highlight="Recognition" />

      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
        {achievements.map((ach, i) => {
          const Icon = iconMap[ach.icon];
          return (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass rounded-2xl p-6 card-hover group flex items-start gap-4"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-500/10 text-amber-400 group-hover:scale-105 transition-transform">
                {Icon && <Icon size={24} />}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">{ach.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{ach.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
