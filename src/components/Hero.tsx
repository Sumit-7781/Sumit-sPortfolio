import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download, ChevronDown } from 'lucide-react';
import { personal } from '@/data/portfolioData';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-pad pt-20">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-xs font-medium text-gray-300">Open to opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={item} className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
          Hi, I'm <span className="gradient-text">{personal.firstName}</span>
          <br />
          Kumar Chaudhari.
        </motion.h1>

        {/* Role */}
        <motion.p variants={item} className="mt-6 text-xl sm:text-2xl font-semibold text-gray-200">
          {personal.role}
        </motion.p>

        {/* Tagline */}
        <motion.p variants={item} className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {personal.tagline}
        </motion.p>

        {/* Bio */}
        <motion.p variants={item} className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
          {personal.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('projects')}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium text-sm shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:scale-[1.02] active:scale-95 transition-all"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass text-gray-200 font-medium text-sm hover:bg-white/[0.06] hover:scale-[1.02] active:scale-95 transition-all"
          >
            <Mail size={16} />
            Let's Connect
          </button>
          <a
            href={personal.resumeUrl}
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-gray-500"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
