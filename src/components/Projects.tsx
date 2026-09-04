import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, ArrowRight, X, Calendar, Check } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { projects } from '@/data/portfolioData';
import type { projects as projectsType } from '@/data/portfolioData';

type Project = (typeof projectsType)[number];

function ProjectVisual({ project, large }: { project: Project; large?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-t-2xl bg-gradient-to-br ${project.gradient} ${large ? 'h-56' : 'h-40'}`}>
      {/* Abstract mockup */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 0%, transparent 50%)' }} />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Mock code editor lines */}
        <div className="space-y-1.5 opacity-40">
          <div className="h-1.5 w-3/4 bg-white/40 rounded" />
          <div className="h-1.5 w-1/2 bg-white/30 rounded" />
          <div className="h-1.5 w-2/3 bg-white/25 rounded" />
        </div>
      </div>
      {project.featured && (
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-xs font-medium text-white border border-white/20">
          Featured
        </span>
      )}
    </div>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const isFeatured = project.featured;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className={`group glass rounded-2xl overflow-hidden card-hover hover:-translate-y-1 transition-transform duration-300 ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="group-hover:scale-[1.02] transition-transform duration-500">
        <ProjectVisual project={project} large={isFeatured} />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <Calendar size={12} />
          {project.date}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, isFeatured ? 6 : 4).map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-medium text-gray-300">
              {tech}
            </span>
          ))}
          {project.technologies.length > (isFeatured ? 6 : 4) && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium text-gray-500">
              +{project.technologies.length - (isFeatured ? 6 : 4)} more
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpen}
            className="group/btn flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-sm font-medium text-gray-200 hover:bg-accent-500/10 hover:border-accent-500/30 hover:text-white transition-all"
          >
            View Details
            <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
          <a
            href={project.githubUrl}
            className="flex items-center justify-center w-9 h-9 rounded-lg glass text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub repository"
          >
            <Github size={16} />
          </a>
          <a
            href={project.liveUrl}
            className="flex items-center justify-center w-9 h-9 rounded-lg glass text-gray-400 hover:text-white transition-colors"
            aria-label="Live demo"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      >
        <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-md" onClick={onClose} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative glass-strong rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-ink-900/80 backdrop-blur-md border-b border-white/[0.06]">
            <h3 className="text-lg font-bold text-white">{project.name}</h3>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-9 h-9 rounded-lg glass text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6">
            <ProjectVisual project={project} large />

            <div className="flex items-center gap-2 text-xs text-gray-500 mt-4 mb-3">
              <Calendar size={12} />
              {project.date}
            </div>

            <p className="text-sm text-gray-300 leading-relaxed mb-6">{project.description}</p>

            <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
            <div className="grid sm:grid-cols-2 gap-2 mb-6">
              {project.features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-gray-400">
                  <Check size={14} className="mt-0.5 flex-shrink-0 text-accent-400" />
                  {f}
                </div>
              ))}
            </div>

            <h4 className="text-sm font-semibold text-white mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-medium text-gray-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass text-sm font-medium text-gray-200 hover:text-white transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={project.liveUrl}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-accent-500 to-accent-600 text-white text-sm font-medium shadow-lg shadow-accent-500/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <SectionHeading label="04 — Projects" title="Things I've" highlight="Built" />

      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={() => setSelected(project)} />
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </Section>
  );
}
