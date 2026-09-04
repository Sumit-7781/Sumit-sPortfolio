import { motion } from 'framer-motion';
import { Layers, Server, Monitor, Plug, Sparkles, Radio } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { aboutCards, personal } from '@/data/portfolioData';

const iconMap: Record<string, typeof Layers> = {
  Layers,
  Server,
  Monitor,
  Plug,
  Sparkles,
  Radio,
};

export function About() {
  return (
    <Section id="about">
      <SectionHeading label="01 — About" title="Who I" highlight="Am" />

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            I'm a Full Stack Developer who builds end-to-end web applications with{' '}
            <span className="text-white font-medium">React, Java, Spring Boot, Hibernate, MySQL, Node.js, Express.js, and REST APIs</span>.
          </p>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            My work spans implementing secure authentication, building backend modules, developing responsive React components,
            integrating APIs, improving application performance, and working with scalable application architecture.
          </p>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            I care about clean architecture, thoughtful UX, and shipping products that are both fast and maintainable.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {aboutCards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass rounded-2xl p-5 card-hover group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-500/10 text-accent-400 group-hover:bg-accent-500/20 transition-colors">
                    {Icon && <Icon size={20} />}
                  </div>
                  <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
