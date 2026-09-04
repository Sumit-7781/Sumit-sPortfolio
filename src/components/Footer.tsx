import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personal } from '@/data/portfolioData';

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] section-pad py-10">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500 to-cyan2-500 text-white font-bold text-xs font-mono">
            SK
          </span>
          <span className="text-sm text-gray-400">
            © 2026 {personal.name}. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a href={personal.githubUrl} className="flex items-center justify-center w-9 h-9 rounded-lg glass text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href={personal.linkedinUrl} className="flex items-center justify-center w-9 h-9 rounded-lg glass text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${personal.email}`} className="flex items-center justify-center w-9 h-9 rounded-lg glass text-gray-400 hover:text-white transition-colors" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>

        <p className="flex items-center gap-1.5 text-xs text-gray-500">
          Built with <Heart size={12} className="text-red-400/70" /> React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
