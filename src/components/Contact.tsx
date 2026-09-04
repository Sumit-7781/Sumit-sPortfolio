import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { personal } from '@/data/portfolioData';

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading label="07 — Contact" title="Let's Build Something" highlight="Great Together" />

      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10"
        >
          I'm open to opportunities, collaborations, and interesting projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          <a
            href={`mailto:${personal.email}`}
            className="glass rounded-2xl p-5 card-hover group flex items-center gap-4"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/10 text-accent-400 group-hover:scale-105 transition-transform">
              <Mail size={22} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
              <p className="text-sm font-medium text-white break-all">{personal.email}</p>
            </div>
          </a>

          <a
            href={`tel:${personal.phone.replace(/\s/g, '')}`}
            className="glass rounded-2xl p-5 card-hover group flex items-center gap-4"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan2-500/10 text-cyan2-400 group-hover:scale-105 transition-transform">
              <Phone size={22} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
              <p className="text-sm font-medium text-white">{personal.phone}</p>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href={`mailto:${personal.email}`}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium text-sm shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
            Send Message
          </a>
          <a
            href={personal.githubUrl}
            className="flex items-center gap-2 px-5 py-3 rounded-xl glass text-gray-200 font-medium text-sm hover:bg-white/[0.06] transition-all"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={personal.linkedinUrl}
            className="flex items-center gap-2 px-5 py-3 rounded-xl glass text-gray-200 font-medium text-sm hover:bg-white/[0.06] transition-all"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
